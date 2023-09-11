function calcularIMC(peso, altura) {
    if (altura === 0) {
      return 'NaN'; // Retorna "NaN" se a altura for igual a zero
    }
  
    const alturaMetros = altura / 100; // Converte altura de centímetros para metros
    const imc = peso / (alturaMetros * alturaMetros);
    return { imc: imc.toFixed(2), classificacao: calcularClassificacaoIMC(imc) }; // Calcula o IMC com duas casas decimais
}

function calcularClassificacaoIMC(imc) {
  if (imc > 0 && imc <= 18.5) {
    return 'Abaixo do peso';
  } else if (imc >= 18.6 && imc <= 24.9) {
    return 'Peso ideal(parabéns)';
  } else if (imc >= 25 && imc <= 29.9) {
    return 'Levemente acima do peso';
  } else if (imc >= 30 && imc <= 34.9) {
    return 'Obesidade grau 1';
  } else if (imc >= 35 && imc <= 39.9) {
    return 'Obesidade grau 2(severa)';
  } else if (imc >= 40) {
    return 'Obesidade grau 3(mórbida)';
  } 
}

module.exports = { calcularIMC, calcularClassificacaoIMC }; // Exporta a função calcularIMC

