import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(agencia, numConta, cliente) {
        super(agencia, numConta, cliente, 0);
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        let taxa = 1.1;
        const valorVerificado = super.sacar(taxa * valor);

        if (valorVerificado > 0) {
            return valor;
        }

        return 0;
    }

}
