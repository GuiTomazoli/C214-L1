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
        console.log(`O filme ${this.titulo}, ${assistidos}  foi assitido. `);
    }

    adicionarAvaliacao(avaliacoes){
        this.avaliacao.push(avaliacoes);
        console.log(`Avaliacao ${avaliacoes} adicionada para o filme ${this.titulo}. `);
    }
}

    const filme1 = new Filme ('1917', 2019, 'Guerra', '1h59m');
    const filme2 = new Filme ('Vingadores Ultimato', 2019, 'Acao', '3h2m');
    const filme3 = new Filme ('Flash', 2023, 'Acao', '2h24m');

    filme1.filmeAssistido('nao');
    filme2.filmeAssistido('sim');
    filme3.filmeAssistido('sim');
    
    filme1.adicionarAvaliacao(0);
    filme2.adicionarAvaliacao(10);
    filme3.adicionarAvaliacao(6);

    console.log(filme1.exibirDetalhes());
    console.log(filme2.exibirDetalhes());
    console.log(filme3.exibirDetalhes());