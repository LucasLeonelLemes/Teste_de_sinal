const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a potência de entrada em dBm: ", function (sinalOlt) {
    rl.question("\nQuantas fusões foram feitas? ", function (quantasFusoes) {
        const perdaPFusao = 0.05;
        const calculoDF = perdaPFusao * quantasFusoes;

        rl.question("\nBalanceado, digite 1. \nDesbalanceado, Digite 2. \nQual vai ser o tipo de splitter? ", function (qualSpliter) {
            console.log(`Sinal que vem da OLT é: ${sinalOlt}`);

            if (qualSpliter === '1') {
                rl.question("\nQual é o spltter balanceado? ", function (qualBalanceado) {
                    if (qualBalanceado === '1x4') {
                        const calculo1x4 = sinalOlt - calculoDF - 7.30;
                        console.log(`O sinal do 1x4 ficou: ${calculo1x4}`);
                    } else if (qualBalanceado === '1x8') {
                        const calculo1x8 = sinalOlt - calculoDF - 10.50;
                        console.log(`O sinal do 1x8 ficou: ${calculo1x8}`);
                    } else if (qualBalanceado === '1x16') {
                        const calculo1x16 = sinalOlt - calculoDF - 13.70;
                        console.log(`O sinal do 1x16 ficou: ${calculo1x16}`);
                    } else {
                        console.log("Erro!");
                    }

                    rl.close(); // Fechar aqui dentro, após o final do if
                });
            } else if (qualSpliter === '2') {
                rl.question("\nQual é o spltter desbalanceado? ", function (qualDesbalanciado) {
                    // Resto do código para spliters desbalanceados...
                    if (qualDesbalanciado === '5/95') {
                        const calculo5 = sinalOlt - calculoDF - 14.60
                        const calculo95 = sinalOlt - calculoDF - 0.50
                        console.log(`O sinal de saida do 5% é: ${calculo5}.`)
                        console.log(`O sinal de saida do 95% é: ${calculo95}.`)
                    } else if (qualDesbalanciado === '10/90') {
                        const calculo10 = sinalOlt - calculoDF - 11.00
                        const calculo90 = sinalOlt - calculoDF - 0.70
                        console.log(`O sinal de saida do 10% é: ${calculo10}.`)
                        console.log(`O sinal de saida do 90% é: ${calculo90}.`)
                    } else if (qualDesbalanciado === '15/85') {
                        const calculo15 = sinalOlt - calculoDF - 9.60
                        const calculo85 = sinalOlt - calculoDF - 1.00
                        console.log(`O sinal de saida do 15% é: ${calculo15}.`)
                        console.log(`O sinal de saida do 85% é: ${calculo85}.`)
                    } else if (qualDesbalanciado === '20/80') {
                        const calculo20 = sinalOlt - calculoDF - 7.90
                        const calculo80 = sinalOlt - calculoDF - 1.40
                        console.log(`O sinal de saida do 20% é: ${calculo20}.`)
                        console.log(`O sinal de saida do 80% é: ${calculo80}.`)
                    } else if (qualDesbalanciado === '25/75') {
                        const calculo25 = sinalOlt - calculoDF - 6.95
                        const calculo75 = sinalOlt - calculoDF - 1.70
                        console.log(`O sinal de saida do 25% é: ${calculo25}.`)
                        console.log(`O sinal de saida do 75% é: ${calculo75}.`)
                    } else if (qualDesbalanciado === '30/70') {
                        const calculo30 = sinalOlt - calculoDF - 6.00
                        const calculo70 = sinalOlt - calculoDF - 1.90
                        console.log(`O sinal de saida do 30% é: ${calculo30}.`)
                        console.log(`O sinal de saida do 70% é: ${calculo70}.`)
                    } else if (qualDesbalanciado === '40/60') {
                        const calculo40 = sinalOlt - calculoDF - 4.70
                        const calculo60 = sinalOlt - calculoDF - 2.70
                        console.log(`O sinal de saida do 30% é: ${calculo40}.`)
                        console.log(`O sinal de saida do 70% é: ${calculo60}.`)
                    } else if (qualDesbalanciado === '50/50') {
                        const calculo50 = sinalOlt - calculoDF - 3.54
                        console.log(`O sinal de saida das pernas do 50% é: ${calculo50}.`)
                    } else {
                        console.log("Erro!")
                    }
                    rl.close(); // Fechar aqui dentro, após o final do if/else
                });
            } else {
                console.log("Opção inválida!");
                rl.close(); // Fechar aqui dentro, após o final do if/else
            }
        });
    });
});


