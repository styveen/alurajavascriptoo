// Classe abstrata
import { Cliente } from "../Cliente.js";

export class Conta {

    constructor(agencia, numConta, cliente, saldoInicial) {

        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta, pois é uma classe abstrata!");
        }

        this._agencia = agencia;
        this._numConta = numConta;
        this.cliente = cliente;
        this._saldo = saldoInicial; // _ convenção de atributo privado - # ainda em implementação, deixará de fato o atributo privado

    }

    set cliente(novoValor) {

        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }

    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }


    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        }
    }

    // Metódo Abstrato
    /*
    sacar(valor) {
        throw new Error("O método sacar da classe Conta é abastrato");
    }
    */

    sacar(valor) {
        // early return (retorno cedo): evitar um emaranhando de ifs que dificultam na compreensão da análise de código
        if (this._saldo < valor || valor < 0) return 0;

        this._saldo -= valor;
        return valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

        return valorSacado;
    }

}
