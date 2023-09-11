const { expect } = require('chai');
const { calcularIMC, calcularClassificacaoIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {

  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado.imc).to.equal(IMEsperado);
  });

  it('altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
  });

  it('IMC dentro da classificação de Abaixo do peso', () => {
    const peso = 70; // 70 kg
    const altura = 200; // 200 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado.classificacao).to.equal('Abaixo do peso');
  });

  it('IMC dentro da classificação de Obesidade Grau 3', () => {
    const peso = 150; // 150 kg
    const altura = 190; // 190 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado.classificacao).to.equal('Obesidade grau 3(mórbida)');
  });

});
