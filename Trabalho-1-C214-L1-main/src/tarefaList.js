const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Tarefas {
  constructor(titulo, descricao) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.status = "A fazer";
  }

  mostraInfo() {
    console.log(`Titulo: ${this.titulo}`);
    console.log(`Descricao: ${this.descricao}`);
    console.log(`Status: ${this.status}`);
  }
}

class ListaDeTarefa {
  constructor() {
    this.listaDeTarefa = [];
  }

  findTarefa(tarefaTitulo) {
    let index = -1;
    for (let i = 0; i < this.listaDeTarefa.length; i++) {
      if (tarefaTitulo === this.listaDeTarefa[i].titulo) {
        index = i;
        break;
      }
    }
    return index;
  }

  addTarefa(tarefa) {
    if (this.findTarefa(tarefa.titulo) === -1) {
      this.listaDeTarefa.push(tarefa);
    } else {
      console.log("Tarefa Duplicada");
    }
  }

  removerTarefa(titulo) {
    let index = this.findTarefa(titulo);
    if (index !== -1) {
      this.listaDeTarefa.splice(index, 1);
    } else {
      console.log("Tarefa nao encontrada");
    }
  }

  attStatus(titulo) {
    let index = this.findTarefa(titulo);
    if (index !== -1) {
      this.listaDeTarefa[index].status = this.trocaStatus(index);
    } else {
      console.log("Tarefa nao encontrada");
    }
  }

  mostrarTarefas() {
    if (this.listaDeTarefa.length === 0) {
      console.log("Lista Vazia");
      return -1;
    } else {
      this.listaDeTarefa.forEach((tarefa) => {
        console.log("=======================");
        tarefa.mostraInfo();
      });
    }
  }

  trocaStatus(index) {
    if (this.listaDeTarefa[index].status === "A fazer") return "Em Andamento";
    else if (this.listaDeTarefa[index].status === "Em Andamento")
      return "Concluida";
    else { 
        console.log("Tarefa ja concluida");
        return "Concluida";
    }
  }
}

var listaDeTarefas = new ListaDeTarefa();

function exibirMenu() {
  console.log("==== Menu ====");
  console.log("1. Adicionar uma tarefa");
  console.log("2. Alterar status de uma tarefa");
  console.log("3. Remover uma tarefa");
  console.log("4. Exibir lista de tarefas");
  console.log("5. Sair do programa");

  rl.question("Escolha uma opção: ", function (answer) {
    const opcao = parseInt(answer.trim());

    switch (opcao) {
      case 1:
        rl.question("Entre com o título da tarefa: ", function (titulo) {
          rl.question(
            "Entre com a descricao da tarefa: ",
            function (descricao) {
              listaDeTarefas.addTarefa(new Tarefas(titulo, descricao));
              exibirMenu();
            }
          );
        });
        break;
      case 2:
        if (listaDeTarefas.mostrarTarefas() === -1) {
          exibirMenu();
          break;
        }
        rl.question("Entre com o título da tarefa: ", function (titulo) {
          listaDeTarefas.attStatus(titulo);
          exibirMenu();
        });
        break;
      case 3:
        if (listaDeTarefas.mostrarTarefas() === -1) {
          exibirMenu();
          break;
        }
        rl.question("Entre com o título da tarefa: ", function (titulo) {
          listaDeTarefas.removerTarefa(titulo);
          exibirMenu();
        });
        break;
      case 4:
        listaDeTarefas.mostrarTarefas();
        exibirMenu();
        break;
      case 5:
        console.log("Saindo do programa!");
        rl.close();
        break;
      default:
        console.log("Opção inválida!");
        exibirMenu();
    }
  });
}
exibirMenu();

module.exports = { ListaDeTarefa, Tarefas };
