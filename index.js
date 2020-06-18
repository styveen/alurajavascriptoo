import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor("Styveen", 10000, 12345678900);
diretor.cadastrarSenha(2345678);

const gerente = new Gerente("David", 5000, 12345678901);
gerente.cadastrarSenha(159753);

const cliente = new Cliente("Styveen", 1234567803);

const estaLogadoDiretor = SistemaAutenticacao.login(diretor, 2345678);
const estaLogadoGerente = SistemaAutenticacao.login(gerente, 2345678);
const estaLogadoCliente = SistemaAutenticacao.login(cliente, 777);

console.log(estaLogadoDiretor, estaLogadoGerente, estaLogadoCliente);

/*
// curso 3
// definicao cliente 1
const cliente = new Cliente("Styveen", 11122233309);
const contaCliente = new ContaCorrente(1001, 1, cliente);
const contaSalario = new ContaSalario(cliente);

// definicao cliente 2
const cliente2 = new Cliente("Raul", 54321194510);
const contaCliente2 = new ContaPoupanca(1001, 2, cliente2, 0);


const valorDeposito = 100;
contaCliente.depositar(valorDeposito);
contaSalario.depositar(valorDeposito * 10);
contaCliente2.depositar(valorDeposito);


const valorSacar = 100;

const valorSacado = contaCliente.sacar(valorSacar);
const valorSacado2 = contaCliente2.sacar(valorSacar);

console.log(valorSacado, contaCliente);
console.log(valorSacado2, contaCliente2);
console.log(contaSalario);
*/

/* // curso 2
// definicao cliente 1
const cliente = new Cliente("Styveen", 11122233309);
const contaCliente = new ContaCorrente(1001, 1, cliente);

// definicao cliente 2
const cliente2 = new Cliente("Raul", 54321194510);
const contaCliente2 = new ContaCorrente(1001, 2, cliente2);

console.log("\n\n*** Início ***");
console.log(`Saldo inicial: ${contaCliente._saldo}`);

// deposito conta cliente 1
const valorDeposito = 1000;
contaCliente.depositar(valorDeposito);


console.log("\n\n*** Depósito ***");
console.log(`Valor depositado: ${valorDeposito}\nSaldo atual: ${contaCliente._saldo}`);

// sacando o valor da conta
const valorSacar = 100;
const valorSacado = contaCliente.sacar(valorSacar);

console.log("\n\n*** Saque ***");
console.log(`Valor solicitado: ${valorSacar} \nValor sacado: ${valorSacado} \nSaldo disponível: ${contaCliente._saldo}`);

// transferindo pra outra conta
const valorTransferir = 150;
const valorTransferido = contaCliente.transferir(valorTransferir, contaCliente2);
console.log("\n\n*** Transferência ***");
console.log(cliente, `\nValor solicitado: ${valorTransferir} \nValor transferido: ${valorTransferido} \nSaldo disponível: ${contaCliente.saldo} \n`);
console.log(cliente2, `\nValor provisionado: ${valorTransferir} \nValor recebido: ${valorTransferido} \nSaldo disponível: ${contaCliente2.saldo}`);

console.log(ContaCorrente.numeroDeContas);

// conta poupança
const contaPoupanca = new ContaPoupanca(1001, 50001, cliente, 0);
console.log(contaCliente, contaPoupanca);
*/


/*
terminal: npm init
*/
