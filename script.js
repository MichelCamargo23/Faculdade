const button = document.getElementById('mensagemBtn');
const mensagemSaudacao = document.getElementById('mensagemSaudacao');

button.addEventListener('click', function() {
    mensagemSaudacao.textContent = 'Boas-vindas ao meu portfólio! Espero que goste da visita.';
});