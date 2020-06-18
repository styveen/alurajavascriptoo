import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {

    constructor(cliente) {
        super(1001, 9000001, cliente, 0);
    }

    sacar(valor) {
        let taxa = 1.01;
        const valorVerificado = super.sacar(taxa * valor);

        if (valorVerificado > 0) {
            return valor;
        }

        return 0;
    }

}
