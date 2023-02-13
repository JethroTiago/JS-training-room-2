export class Cliente {
    nome;
    _cpf;

    get cpf() {
        return this._cpf;
    };

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}

//Colocar o export na frente
//No arquivo package.json, colocar uma linha "type": "module",
//Na tag script do HTML, colocar o type: "module", antes do src