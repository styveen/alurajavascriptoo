export class ContaCorrente {
    cliente;
    agencia;
    numConta;

    // #saldo (definir que a propriedade é privada)
    _saldo = 0; // convenção 

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
