// Definir as variáveis de entrada
let potenciaDeEntrada = prompt("Digite a potência de entrada em dBm: ");
let perdaDeInsercao = prompt("Digite a perda de inserção em dB: ");
let desvioDeAmplitude = prompt("Digite o desvio de amplitude em dB: ");

// Converter as variáveis de entrada para números
potenciaDeEntrada = parseFloat(potenciaDeEntrada);
perdaDeInsercao = parseFloat(perdaDeInsercao);
desvioDeAmplitude = parseFloat(desvioDeAmplitude);

// Calcular a potência de saída de cada saída desbalanceada
let potenciaDeSaida1 = potenciaDeEntrada - perdaDeInsercao - desvioDeAmplitude;
let potenciaDeSaida2 = potenciaDeEntrada - perdaDeInsercao + desvioDeAmplitude;

// Exibir o resultado do cálculo para cada saída desbalanceada
console.log("Potência de saída da saída 1: " + potenciaDeSaida1 + " dBm");
console.log("Potência de saída da saída 2: " + potenciaDeSaida2 + " dBm");

