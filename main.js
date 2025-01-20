function Carro(modelo, fabricante, anoModelo, anoFabricante) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricante = anoFabricante;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

const carroDoJoao = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaGiovana = new Carro("Ka", "Ford", 2018, 2017);

console.log(carroDaGiovana);

const nome = "gian";
const idade = 30;
const ehMaiorDeIdade = true;
const conhecimentos = ["html", "css", "javascript"];

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof pessoa);
