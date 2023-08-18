function mostrarOpcaoEspecifica() {
    const qualSpliter = document.getElementById("qualSpliter").value;
    const opcaoEspecificaDiv = document.getElementById("opcaoEspecifica");

    if (qualSpliter === 'balanceado' || qualSpliter === 'desbalanciado') {
        opcaoEspecificaDiv.innerHTML = `
            <label for="opcaoEspecifica">Tipo específico de splitter: </label>
            <select id="opcaoEspecificaSelect">
                <option value="selecione">Selecione</option>
                ${qualSpliter === 'balanceado' ? `
                <option value="1x4">1x4</option>
                <option value="1x8">1x8</option>
                <option value="1x16">1x16</option>` : `
                <option value="5/95">5/95</option>
                <option value="10/90">10/90</option>
                <option value="15/85">15/85</option>
                <option value="20/80">20/80</option>
                <option value="25/75">25/75</option>
                <option value="30/70">30/70</option>
                <option value="40/60">40/60</option>
                <option value="50/50">50/50</option>`}
            </select><br><br>
        `;
        opcaoEspecificaDiv.style.display = 'block';
    } else {
        opcaoEspecificaDiv.innerHTML = '';
        opcaoEspecificaDiv.style.display = 'none';
    }
}

function calcular() {
    const sinalOlt = parseFloat(document.getElementById("sinalOlt").value);
    const quantasFusoes = parseInt(document.getElementById("quantasFusoes").value);
    const qualSpliter = document.getElementById("qualSpliter").value;
    const opcaoEspecifica = document.getElementById("opcaoEspecificaSelect").value;

    let perdaDF = 0.05 * quantasFusoes;

    let resultadosDiv = document.getElementById("resultadosSplitters");
    resultadosDiv.innerHTML = ""; // Limpa os resultados anteriores

    if (qualSpliter === 'balanceado') {
        if (opcaoEspecifica === '1x4') {
            const calculo1x4 = sinalOlt - perdaDF - 7.30;
            resultadosDiv.innerHTML += `O sinal do 1x4 ficou: ${calculo1x4}<br>`;
        } else if (opcaoEspecifica === '1x8') {
            const calculo1x8 = sinalOlt - perdaDF - 10.50;
            resultadosDiv.innerHTML += `O sinal do 1x8 ficou: ${calculo1x8}<br>`;
        } else if (opcaoEspecifica === '1x16') {
            const calculo1x16 = sinalOlt - perdaDF - 13.70;
            resultadosDiv.innerHTML += `O sinal do 1x16 ficou: ${calculo1x16}<br>`;
        } else {
            resultadosDiv.innerHTML += "Erro!<br>";
        }
    } else if (qualSpliter === 'desbalanciado') {
        if (opcaoEspecifica === '5/95') {
            const calculo5 = sinalOlt - perdaDF - 14.60;
            const calculo95 = sinalOlt - perdaDF - 0.50;
            resultadosDiv.innerHTML += `O sinal de saída do 5% é: ${calculo5}.<br>`;
            resultadosDiv.innerHTML += `O sinal de saída do 95% é: ${calculo95}.<br>`;
        } else if (opcaoEspecifica === '10/90') {
            const calculo10 = sinalOlt - perdaDF - 11.00;
            const calculo90 = sinalOlt - perdaDF - 0.70;
            resultadosDiv.innerHTML += `O sinal de saída do 10% é: ${calculo10}.<br>`;
            resultadosDiv.innerHTML += `O sinal de saída do 90% é: ${calculo90}.<br>`;
        } else if (opcaoEspecifica === '15/85') {
            const calculo15 = sinalOlt - perdaDF - 9.60;
            const calculo85 = sinalOlt - perdaDF - 1.00;
            resultadosDiv.innerHTML += `O sinal de saída do 15% é: ${calculo15}.<br>`;
            resultadosDiv.innerHTML += `O sinal de saída do 85% é: ${calculo85}.<br>`;
        } else if (opcaoEspecifica === '20/80') {
            const calculo20 = sinalOlt - perdaDF - 7.90;
            const calculo80 = sinalOlt - perdaDF - 1.40;
            resultadosDiv.innerHTML += `O sinal de saída do 20% é: ${calculo20}.<br>`;
            resultadosDiv.innerHTML += `O sinal de saída do 80% é: ${calculo80}.<br>`;
        } else if (opcaoEspecifica === '25/75') {
            const calculo25 = sinalOlt - perdaDF - 6.95;
            const calculo75 = sinalOlt - perdaDF - 1.70;
            resultadosDiv.innerHTML += `O sinal de saída do 25% é: ${calculo25}.<br>`;
            resultadosDiv.innerHTML += `O sinal de saída do 75% é: ${calculo75}.<br>`;
        } else if (opcaoEspecifica === '30/70') {
            const calculo30 = sinalOlt - perdaDF - 6.00;
            const calculo70 = sinalOlt - perdaDF - 1.90;
            resultadosDiv.innerHTML += `O sinal de saída do 30% é: ${calculo30}.<br>`;
            resultadosDiv.innerHTML += `O sinal de saída do 70% é: ${calculo70}.<br>`;
        } else if (opcaoEspecifica === '40/60') {
            const calculo40 = sinalOlt - perdaDF - 4.70;
            const calculo60 = sinalOlt - perdaDF - 2.70;
            resultadosDiv.innerHTML += `O sinal de saída do 40% é: ${calculo40}.<br>`;
            resultadosDiv.innerHTML += `O sinal de saída do 60% é: ${calculo60}.<br>`;
        } else if (opcaoEspecifica === '50/50') {
            const calculo50 = sinalOlt - perdaDF - 3.54;
            resultadosDiv.innerHTML += `O sinal de saída das pernas do 50% é: ${calculo50}.<br>`;
        } else {
            resultadosDiv.innerHTML += "Erro!<br>";
        }
    }
    resultadosDiv.style.display = 'block'; // Mostra a caixa de resultados
}



function mostrarSugestoesSplitters() {
    const resultadosDiv = document.getElementById("resultadosSplitters");
    const sinalPrincipal = parseFloat(resultadosDiv.textContent.split(":")[1]);
    const perdaInicial = 0.05 * parseInt(document.getElementById("quantasFusoes").value);


    const sugestaoBox = document.getElementById("sugestaoBox");
    const resultadosSugeridosDiv = document.getElementById("resultadosSugeridos");

    sugestaoBox.innerHTML = ""; // Limpa as sugestões anteriores
    resultadosSugeridosDiv.innerHTML = ""; // Limpa os resultados anteriores

    const splitters = [
        { nome: "1x4", perda: 7.30 },
        { nome: "1x8", perda: 10.50 },
        { nome: "1x16", perda: 13.70 },
        { nome: "5/95", perda: { perna1: 14.60, perna2: 0.50 } },
        { nome: "10/90", perda: { perna1: 11.00, perna2: 0.70 } },
        { nome: "15/85", perda: { perna1: 9.60, perna2: 1.00 } },
        { nome: "20/80", perda: { perna1: 7.90, perna2: 1.40 } },
        { nome: "25/75", perda: { perna1: 6.95, perna2: 1.70 } },
        { nome: "30/70", perda: { perna1: 6.00, perna2: 1.90 } },
        { nome: "40/60", perda: { perna1: 4.70, perna2: 2.70 } },
        { nome: "50/50", perda: { perna1: 3.54, perna2: 3.54 } }
    ];

    for (const splitter of splitters) {
        const perdaSplitter = typeof splitter.perda === "object"
            ? Math.max(splitter.perda.perna1, splitter.perda.perna2)
            : splitter.perda;

        const sinalFinal = sinalPrincipal - perdaSplitter;

        if (sinalFinal >= -19.99 && sinalFinal <= 5) {
            const sugestao = document.createElement("p");
            //sugestao.textContent = `Você pode adicionar um ${splitter.nome} após este splitter.`;
            sugestaoBox.appendChild(sugestao);

            if (typeof splitter.perda === "object") {
                const perdaPerna1 = sinalPrincipal - splitter.perda.perna1;
                const perdaPerna2 = sinalPrincipal - splitter.perda.perna2;
                const resultadoSugeridoPerna1 = document.createElement("p");
                resultadoSugeridoPerna1.textContent = `Sinal de saída na perna 1 do ${splitter.nome}: ${perdaPerna1.toFixed(2)} dBm.`;
                resultadosSugeridosDiv.appendChild(resultadoSugeridoPerna1);

                const resultadoSugeridoPerna2 = document.createElement("p");
                resultadoSugeridoPerna2.textContent = `Sinal de saída na perna 2 do ${splitter.nome}: ${perdaPerna2.toFixed(2)} dBm.`;
                resultadosSugeridosDiv.appendChild(resultadoSugeridoPerna2);
            } else {
                const resultadoSugerido = document.createElement("p");
                resultadoSugerido.textContent = `O sinal após adicionar um ${splitter.nome} é: ${sinalFinal.toFixed(2)} dBm`;
                resultadosSugeridosDiv.appendChild(resultadoSugerido);
            }
        }
    }

    /*if (sugestaoBox.childElementCount > 0) {
        sugestaoBox.style.display = "block"; // Mostra a caixa de sugestões apenas se houver sugestões
    } else {
        sugestaoBox.style.display = "none"; // Oculta a caixa de sugestões se não houver sugestões
    }*/
    resultadosSugeridosDiv.style.display = "block"; // Mostra a caixa de resultados sugeridos
}





