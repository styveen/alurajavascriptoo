import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    numConta;
    _cliente;
    _saldo = 0; // convenção -- #saldo (definir que a propriedade é privada)

    constructor(agencia, numConta, cliente) {
        this.agencia = agencia;
        this.numConta = numConta;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
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
