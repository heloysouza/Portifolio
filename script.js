

// Função para menu

let botao = document.querySelector('.botao-menu')
let menu = document.querySelector('.menu')

botao.addEventListener('click', () => {
    // Adiciona ou remove a classe 'active' do menu e do botão

    menu.classList.toggle('active')

})

  async function atualizarContador() {
    const response = await fetch("https://api.countapi.xyz/hit/heloy-portfolio/visitas");
    const data = await response.json();

    animarNumero(data.value);
  }

  function animarNumero(valorFinal) {
    let atual = 0;
    const incremento = Math.ceil(valorFinal / 50);

    const intervalo = setInterval(() => {
      atual += incremento;

      if (atual >= valorFinal) {
        atual = valorFinal;
        clearInterval(intervalo);
      }

      document.getElementById("contador").innerText = atual;
    }, 30);
  }

  atualizarContador();


