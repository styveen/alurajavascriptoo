import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

    constructor(agencia, numConta, cliente, saldoInicial) {
        super(agencia, numConta, cliente, saldoInicial);
    }

    sacar(valor) {
        let taxa = 1.02;
        const valorVerificado = super.sacar(taxa * valor);

        if (valorVerificado > 0) {
            return valor;
        }

        return 0;
    }

}
