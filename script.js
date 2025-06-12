document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();  // Impede o envio normal do formulário
    alert('Obrigado pela mensagem! Entrarei em contato em breve.');
    form.reset();  // Reseta os campos do formulário
  });
});

// Função para menu

let botao = document.querySelector('.botao-menu')
let menu = document.querySelector('.menu')

botao.addEventListener('click', () => {
  // Adiciona ou remove a classe 'active' do menu e do botão
 
  menu.classList.toggle('active')

})


