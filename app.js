let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemNoConsole() {
    console.log('este butão foi clicado');   
}

function exibirAlerta() {
    alert('Eu amo js');

}
function exibirPrompt() { 
    let cidade = prompt('Digite uma cidade');
    alert(`estive em ${cidade} e lembrei de vc`);
}
function somandoDoisNumeros() {
    let a = parseFloat(prompt('Digite o primeiro número'));
    let b = parseFloat(prompt('Digite o segundo número'));
    let soma = a + b;
    
    alert(`A soma de ${a} + ${b} é ${soma}`);
}

