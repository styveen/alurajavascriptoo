import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// definicao cliente 1
const cliente = new Cliente("Styveen", 11122233309);
const contaCliente = new ContaCorrente(1001, 1, cliente);

// definicao cliente 2
const cliente2 = new Cliente("Raul", 54321194510);
const contaCliente2 = new ContaCorrente(1001, 2, cliente2);

console.log("\n\n*** Início ***");
console.log(`Saldo inicial: ${contaCliente._saldo}`);

// deposito conta cliente 1 
const valorDeposito = 200;
contaCliente.depositar(valorDeposito);

console.log("\n\n*** Depósito ***");
console.log(`Valor depositado: ${valorDeposito}\nSaldo atual: ${contaCliente._saldo}`);

// sacando o valor da conta
const valorSacar = 250;
const valorSacado = contaCliente.sacar(valorSacar);

console.log("\n\n*** Saque ***");
console.log(`Valor solicitado: ${valorSacar} \nValor sacado: ${valorSacado} \nSaldo disponível: ${contaCliente._saldo}`);

// transferindo pra outra conta
const valorTransferir = 250;
const valorTransferido = contaCliente.transferir(valorTransferir, contaCliente2);
console.log("\n\n*** Transferência ***");
console.log(cliente, `\nValor solicitado: ${valorTransferir} \nValor transferido: ${valorTransferido} \nSaldo disponível: ${contaCliente._saldo} \n`);
console.log(cliente2, `\nValor provisionado: ${valorTransferir} \nValor recebido: ${valorTransferido} \nSaldo disponível: ${contaCliente2._saldo}`);

console.log(ContaCorrente.numeroDeContas);
/*
terminal: npm init
*/
