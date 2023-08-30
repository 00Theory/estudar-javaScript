class Carro{
    marca;
    cor;
    gastoMedio;
    precoCombustivel;
    distancia;

    constructor(marca, cor, gastoMedio, precoCombustivel, distancia){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
        this.precoCombustivel = precoCombustivel;
        this.distancia = distancia;
    }

    CalcularViagem(){
        console.log(`A viagem custará: ` + this.distancia * this.precoCombustivel, 'reais');
    }
}

new Carro('Fiat', 'Vermelho', 0.25, 5, 70).CalcularViagem();
