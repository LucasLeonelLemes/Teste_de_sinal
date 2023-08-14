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


