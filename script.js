

// Função para menu

let botao = document.querySelector('.botao-menu')
let menu = document.querySelector('.menu')

botao.addEventListener('click', () => {
    // Adiciona ou remove a classe 'active' do menu e do botão

    menu.classList.toggle('active')

})


async function atualizarContador() {
  try {
    const response = await fetch("https://api.counterapi.dev/v1/heloy-portfolio-2026/visitas/up");
    const data = await response.json();

    console.log(data); // 👈 veja no console

    document.getElementById("contador").innerText = data.count;

  } catch (erro) {
    console.error("Erro:", erro);
  }
}

atualizarContador();