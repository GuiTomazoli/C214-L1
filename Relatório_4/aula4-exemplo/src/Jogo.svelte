<script>
	import Jogador from "./Jogador.svelte";
	import Swal from 'sweetalert2';
	
	function marcaGol(){
		console.log("Marcou 1 GOL");
		Swal.fire({
			title: 'GOL!',
			text: 'Você marcou um gol!',
			icon: 'success',
			showConfirmButton: false,
			timer: 1500 // Tempo em milissegundos para a notificação desaparecer
		});
	}
</script>

<main>
	<h1> Exibe a informação quando marca GOL </h1>
	<Jogador acao = {marcaGol} />	
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
  
  </style>

 