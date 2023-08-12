const sinalOlt = -5.69

console.log(`Sinal que vem da OLT é: ${sinalOlt}`)

/*const perdaPKM = 0.25

const quantosKM = 4

const calculoPKM = perdaPKM * quantosKM*/

const perdaPFusao = 0.05

const quantasFusoes = 1

const calculoDF = perdaPFusao * quantasFusoes

const qualSpliter = 'balanceado'

const qualBalanceado = '1x16'

const qualDesbalanciado = '30/70'

// spliters balanceados: 1x4, 1x8, 1x16

if (qualSpliter === 'balanceado') {
    if (qualBalanceado === '1x4') {
        const calculo1x4 = sinalOlt - calculoDF - 7.30
        console.log(`o sinal do 1x4 ficou: ${calculo1x4}`)
    } else if (qualBalanceado === '1x8') {
        const calculo1x8 = sinalOlt - calculoDF - 10.50
        console.log(`o sinal do 1x8 ficou: ${calculo1x8}`)
    } else if (qualBalanceado === '1x16') {
        const calculo1x16 = sinalOlt - calculoDF - 13.70
        console.log(`o sinal do 1x8 ficou: ${calculo1x16}`)
    }

}

// spliters desbalanciados: 5/95, 10/90, 15/85, 20/80, 25/75, 30/70, 40/60, 50/50

if (qualSpliter === 'desbalanciado') {
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
    }
}