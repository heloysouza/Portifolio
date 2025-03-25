document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();  // Impede o envio normal do formulário
    alert('Obrigado pela mensagem! Entrarei em contato em breve.');
    form.reset();  // Reseta os campos do formulário
  });
});

