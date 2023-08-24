class Filme {
    constructor(titulo,ano,genero,duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = [];
        this.avaliacao = [];
    }

    exibirDetalhes(){   
        return `
            Título: ${this.titulo}
            Ano: ${this.ano}
            Gênero: ${this.genero}
            Duração: ${this.duracao} 
            Assistido: ${this.assistido}
            Avaliacao: ${this.avaliacao}
        `;
    }

    filmeAssistido(assistidos){
        this.assistido.push(assistidos);
    }

    adicionarAvaliacao(avaliacoes){
        this.avaliacao.push(avaliacoes);
    }
}

//Criação do Menu
const readline = require('readline');
const filmes = []; // Array para armazenar os filmes

function exibirMenu() {
    console.log("==== Menu ====");
    console.log("1: Adicionar um novo filme.");
    console.log("2: Marcar um filme como assistido.");
    console.log("3: Avaliar um filme.");
    console.log("4: Exibir a lista dos filmes.");
    console.log("5: Sair do programa.");
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    exibirMenu();
    rl.question("Digite a opção desejada: ", (opcao) => {
        opcao = parseInt(opcao);
        switch (opcao) {
            case 1:
                rl.question("Digite o título do filme: ", (titulo) => {
                    rl.question("Digite o ano do filme: ", (ano) => {
                        rl.question("Digite o gênero do filme: ", (genero) => {
                            rl.question("Digite a duração do filme: ", (duracao) => {
                                const novoFilme = new Filme(titulo, parseInt(ano), genero, duracao);
                                filmes.push(novoFilme);
                                console.log("Filme adicionado com sucesso!");
                                main();
                            });
                        });
                    });
                });
                break;

            case 2:
                rl.question("Digite o título do filme que foi assistido: ", (filmeAssistido) => {
                    rl.question("O filme foi assistido? (sim ou nao): ", (assistido) => {
                        const filmeEncontrado = filmes.find(filme => filme.titulo === filmeAssistido);
                        if (filmeEncontrado) {
                            filmeEncontrado.filmeAssistido(assistido);
                            console.log(`O filme ${filmeAssistido} foi marcado como ${assistido === 'sim' ? 'assistido' : 'não assistido'}.`);
                        } else {
                            console.log("Filme não encontrado.");
                        }
                        main();
                    });
                });
                break;

            case 3:
                rl.question("Digite o título do filme que deseja avaliar: ", (filmeAvaliar) => {
                    rl.question("Digite a avaliação (de 0 a 10): ", (avaliacao) => {
                        const filmeEncontradoAvaliar = filmes.find(filme => filme.titulo === filmeAvaliar);
                        if (filmeEncontradoAvaliar) {
                            filmeEncontradoAvaliar.adicionarAvaliacao(parseFloat(avaliacao));
                            console.log(`Avaliação ${avaliacao} adicionada para o filme ${filmeAvaliar}.`);
                        } else {
                            console.log("Filme não encontrado.");
                        }
                        main();
                    });
                });
                break;

            case 4:
                console.log("=== Lista de Filmes ===");
                filmes.forEach(filme => {
                    console.log(filme.exibirDetalhes());
                    console.log("=======================");
                });
                main();
                break;

            case 5:
                console.log("Saindo do programa.");
                rl.close();
                break;

            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
                main();
                break;
        }
    });
}

main();