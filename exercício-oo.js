function Produtora(nomeProdutora, diretor) {
    this.nomeProdutora = nomeProdutora;
    this.diretor = diretor;
    this.exibirDetalhes = function() {
        console.log(`A produtora ${this.nomeProdutora}, sob direção de ${this.diretor}`);
    }
}

function longaMetragem(nomeProdutora, diretor, titulo) {
    Produtora.call(this, nomeProdutora, diretor);
    this.titulo = titulo;

    this.exibirDetalhes = function() {
        console.log(` o filme de ${this.diretor}, ${this.titulo} da produtora ${nomeProdutora}`);
    }
}

function curtaMetragem(nomeProdutora, diretor, titulo, duracao) {
    Produtora.call(this, nomeProdutora, diretor);

    this.titulo = titulo;
    this.exibirDetalhes = function() {
        console.log(` o curta de ${this.diretor}, ${this.titulo} da produtora ${nomeProdutora}.  com apenas ${duracao} minutos de duração.`);
    }
}

const produtora1 = new Produtora("Paris Filmes", "Stanely Kubrik");
const longaMetragem1 = new longaMetragem("Universal", "Wes Anderson", "O Grande Hotel Budapest");
const curtaMetragem1 = new curtaMetragem("Independente", "Chris Maker", "La Jeteé", 28);

produtora1.exibirDetalhes();
longaMetragem1.exibirDetalhes();
curtaMetragem1.exibirDetalhes();