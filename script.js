//EXEMPLO: 
function gerarTabuadaPar() {
    // Pega o valor do input
    const numero = parseInt(document.getElementById("inputNumero").value);

    // Seleciona o parágrafo onde o resultado será exibido
    const resultadoElemento = document.getElementById("resultadoTabuada");

    // Verifica se o número é válido
    if (isNaN(numero)) {
        resultadoElemento.innerText = "Por favor, insira um número válido.";
        return;
    }

    // Gera a tabuada apenas para os multiplicadores pares
    let tabuada = `Tabuada do ${numero} (somente multiplicadores pares):\n`;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) { // Apenas números pares
            tabuada += `${numero} x ${i} = ${numero * i}\n`;
        }
    }

    // Exibe o resultado no parágrafo
    resultadoElemento.innerText = tabuada;
}

function verificarParImpar() {

    const numero = parseInt(document.getElementById("numParImpar").value);

    const resultadoElemento = document.getElementById("resultadoParImpar");

    if (isNaN(numero)) {
        resultadoElemento.innerText = "Por favor, insira um número válido.";
        return;
    }

    let par = `O número ${numero} é Par`;
    let impar = `O número ${numero} é Impár`;

    if (numero % 2 === 0) {
        resultadoElemento.innerText = par;
    }
    else
    {
        resultadoElemento.innerText = impar;
    }
}

function calcularMedia() {
    const nota1 = parseInt(document.getElementById("nota1").value);
    const nota2 = parseInt(document.getElementById("nota2").value);
    const nota3 = parseInt(document.getElementById("nota3").value);

    const resultadoElemento = document.getElementById("resultadoMedia");

    if (isNaN(nota1 || nota2 || nota3)) {
        resultadoElemento.innerText = "Por favor, insira um número válido.";
        return;
    }

    let media = ((nota1 + nota2 + nota3) / 3);
    let reprovado = `A media das provas foi ${media}, Reprovado`
    let aprovado = `A media das provas foi ${media}, Aprovado`

    if (media >= 7) {
        resultadoElemento.innerText = aprovado;
    }
    else
    {
        resultadoElemento.innerText = reprovado;
    }
}

function somarPares() {
    const numSomaPares = parseInt(document.getElementById("numSomaPares").value);

    const resultadoSomaPares = document.getElementById("resultadoSomaPares");

    if (isNaN(numSomaPares)) {
        resultadoElemento.innerText = "Por favor, insira um número válido.";
        return;
    }

    let soma = 0;

    for (i = 1; i <= numSomaPares; i++) {

        if (i % 2 === 0) {
            soma = i + soma; 
            console.log(i);
        }
    }
    
    let somaDosPares = `A soma dos números pares é: ${soma}`;
    resultadoSomaPares.innerText = somaDosPares;
}

// Esse evento é acionado quando o documento HTML foi completamente carregado e analisado, ou seja, o DOM (Document Object Model) está pronto para ser manipulado.
// A função passada como argumento será executada assim que o evento DOMContentLoaded for disparado. Isso é útil para garantir que o código seja executado apenas depois que os elementos da página estejam disponíveis.
document.addEventListener("DOMContentLoaded", () => {
    const botaoTabuada = document.getElementById("btnTabuada");
    botaoTabuada.addEventListener("mouseover", gerarTabuadaPar);
});

function validarLogin() {
    const username = (document.getElementById("username").value);
    const password = parseInt(document.getElementById("password").value);
    const resultadoLogin = document.getElementById("resultadoLogin");
    console.log(username);
    console.log(password);

    if (username === "admin" &&  password === 1234)   { 
        resultadoLogin.innerText = "Correto";
    }
    else
    {
        resultadoLogin.innerText = "Incorreto";
    }
}

function calcularFatorial() {
    const numFatorial = parseInt(document.getElementById("numFatorial").value);
    const resultadoFatorial = (document.getElementById("resultadoFatorial"));
    console.log(numFatorial);

    let soma = 1;

    for(i = 1; i <= numFatorial; i++){
        soma *= i;
        console.log(soma);
    }

    resultadoFatorial.innerText = `O valor fatorial de ${numFatorial} é ${soma}`;
}


// função utilitaria
function bloquearCopia() {
    // Bloqueia o clique direito
    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        alert("Cópia desabilitada no site.");
    });

    // Bloqueia a seleção de texto
    document.addEventListener("selectstart", (e) => {
        e.preventDefault();
        alert("Seleção de texto desabilitada.");
    });

    // Bloqueia atalhos de teclado (Ctrl+C, Ctrl+X, Ctrl+U)
    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && (e.key === "c" || e.key === "x" || e.key === "u")) {
            e.preventDefault();
            alert("Este atalho está desabilitado no site.");
        }
    });
}




