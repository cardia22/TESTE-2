const num = parseInt(prompt("Digite um número inteiro: "));

let fib_ant = 0;  // valor anterior da sequência de Fibonacci
let fib_atual = 1;  // valor atual da sequência de Fibonacci
let pertence = false;  // flag para indicar se o número pertence à sequência

while (fib_atual <= num) {
  if (fib_atual === num) {
    pertence = true;
    break;
  }

  // atualiza os valores da sequência de Fibonacci
  const temp = fib_atual;
  fib_atual = fib_ant + fib_atual;
  fib_ant = temp;
}

if (pertence) {
  alert(num + " pertence à sequência de Fibonacci.");
} else {
  alert(num + " não pertence à sequência de Fibonacci.");
}
