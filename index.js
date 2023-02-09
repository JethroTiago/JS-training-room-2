class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        let valorSacado = 200;
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }

    depositar(valor) {
        if(valor > 0) {                 //evita que depositem valor negativo
            this.saldo += valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.saldo = 0;

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.depositar(50);

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(0);

console.log(contaCorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);