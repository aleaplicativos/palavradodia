async function getPalavraAleatoria() {
  const response = await fetch('https://api.dicionario-aberto.net/random');
  const data = await response.json();

  return {
    nome: data.word
  };
}

function mostrarPalavra(palavra) {
  const container = document.getElementById('palavra-container');

  container.innerHTML = `
    <h2>${palavra.nome}</h2>
  `;
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const palavra = await getPalavraAleatoria();
    mostrarPalavra(palavra);
  } catch (error) {
    alert('Erro ao buscar palavra aleatória.');
    console.error(error);
  }
});
