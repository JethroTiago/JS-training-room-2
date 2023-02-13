import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = "11122233309";

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "88822233309";

const cliente3 = new Cliente();
cliente3.nome = "Jethro";
cliente3.cpf = "02202202202";

const conta1 = new ContaCorrente();
conta1.agencia = 1001;
conta1.cliente = cliente1;
conta1.depositar(500);

const conta2 = new ContaCorrente();
conta2.agencia = 1001;
conta2.cliente = cliente2;

const conta3 = new ContaCorrente();
conta3.agencia = 200;
conta3.cliente = cliente3;

conta1.transferir(200, conta2);

console.log(conta2.saldo);