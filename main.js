// Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.
// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
console.log("Hello World!");
alert("Hello World!");
// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
var numberOn = 10;
var numberTwo = 10;
var soma = numberOn + numberTwo
console.log(`A soma de ${numberOn} + ${numberTwo} = `, numberOn + numberTwo);
alert(`A soma de ${numberOn} + ${numberTwo} = ${soma}`);
// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

// 💡 Para saber o tipo de dado você pode usar o operador `typeof`
// 
var number = 10

// if (typeof number == 'number') {
// 	console.log('é um número')
//   alert('É um número')
// } else {
// 	console.log('não é um número')
//   alert('Não é um número')
// }

typeof number == 'number' ? alert('É um número') : alert('Não é um número')

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const string = "isso é uma string"

typeof string == 'string' ? alert('É uma string') : alert('Não é uma string')

// if (typeof number == 'string') {
// 	console.log('é um string')
//   alert('É um string')
// } else {
// 	console.log('não é um string')
//   alert('Não é um string')
// }

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const numberSubOn = 20;
const numberSubTwo = 10;

const sub = numberSubOn - numberSubTwo;

alert(`Subtração: ${sub}`);

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const booleano = true;

typeof booleano == 'boolean' ? alert('É um booleano') : alert('Não é um booleano');

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const numberMultiplicateOn = 2;
const numberMultiplicateTwo = 10;

const multiplicate = numberMultiplicateOn * numberMultiplicateTwo;

alert(`Multiplicação: ${multiplicate}`);

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const numberDivisionOn = 10;
const numberDivisionTwo = 2;

const division = numberDivisionOn / numberDivisionTwo;

alert(`Divisão: ${division}`);

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par",
// caso contrário, exiba a mensagem "Não é um número par".

const numberEven = 4

numberEven % 2 == 0 ? alert('É um número par') : alert('Não é um número par');

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", 
// caso contrário, exiba a mensagem "Não é um número ímpar".

const numberOdd = 5

numberOdd % 2 != 0 ? alert('É um número impar') : alert('Não é um número impar');
