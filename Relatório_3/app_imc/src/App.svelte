<script>
	// Variáveis de estado
	let peso = 0;      // Peso do usuário
	let altura = 0;    // Altura do usuário
	let imc = 0;       // Índice de Massa Corporal
  
	// Função para calcular o IMC
	function calcularIMC() {
	  if (peso > 0 && altura > 0) {
		imc = (peso / Math.pow(altura, 2)).toFixed(2);
	  } else {
		imc = 0;
	  }
	}
  </script>
  
  <main>
	<h1>Calculadora de IMC</h1>
	<p>Coloque seus dados na calculadora e calcule seu IMC:</p>
	<label>
	  <strong>Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
	</label>
	<label>
	  <strong>Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
	</label>
	{#if imc > 0 && imc <= 18.5}
	  <p class="green">Seu IMC é <strong>{imc}</strong> e sua classificação é abaixo do peso.</p>
	  <p class="green"><strong>Observação:</strong> é importante consultar um nutricionista.</p>
	{/if}
	{#if imc >= 18.6 && imc <= 24.9}
	  <p class="green">Seu IMC é <strong>{imc}</strong> e sua classificação é peso ideal(parabéns).</p>
	  <p class="green"><strong>Observação:</strong> continue assim!.</p>
	{/if}
	{#if imc >= 25 && imc <= 29.9}
	  <p class="green">Seu IMC é <strong>{imc}</strong> e sua classificação é levemente acima do peso.</p>
	  <p class="green"><strong>Observação:</strong> é importante consultar um nutricionista.</p>
	{/if}
	{#if imc >= 30 && imc <= 34.9}
	  <p class="green">Seu IMC é <strong>{imc}</strong> e sua classificação é obesedidade grau 1.</p>
	  <p class="green"><strong>Observação:</strong> é importante consultar um nutricionista.</p>
	{/if}
	{#if imc >= 35 && imc <= 39.9}
	  <p class="green">Seu IMC é <strong>{imc}</strong> e sua classificação é obesedidade grau 2(severa).</p>
	  <p class="green"><strong>Observação:</strong> é importante consultar um nutricionista.</p>
	{/if}
	{#if imc >= 40}
	  <p class="green">Seu IMC é <strong>{imc}</strong> e sua classificação é obesedidade grau 3(mórbida).</p>
	  <p class="green"><strong>Observação:</strong> é importante consultar um nutricionista.</p>
	{/if}
  </main>
  
  <style>
	main {
	  font-family: sans-serif;
	  text-align: center;
	  padding: 2rem;
	}
  
	h1 {
	  font-size: 1.5rem;
	  margin-bottom: 1rem;
	}
  
	label {
	  display: block;
	  margin-bottom: 0.5rem;
	}
  
	input {
	  padding: 0.25rem;
	}

	p.green {
      color: green;
    }

  </style>