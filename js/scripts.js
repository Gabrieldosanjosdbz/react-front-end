// 1 - adicionando eventos
const btn = document.querySelector("#my-button")

btn.addEventListener("click", () => {
    console.log("Clicou aqui!")
})


// 2 - removendo evento
const secondBtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("Teste")
}

//tem que chamar sem parentese, pq sem parente ele dispara no click, com ele dispara na leitura de código do servidor
secondBtn.addEventListener("click", imprimirMensagem);  

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})


// 3 - argumento do evento
const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.offsetX); // Fornece a posição horizontal do ponteiro do mouse em relação ao elemento clicado.
    console.log(e.pointerType); // Indica o tipo de dispositivo de entrada que gerou o evento (mouse, toque na tela, etc.).
    console.log(e.target); // Contém uma referência ao elemento HTML que disparou o evento.
})


// 4 - propagação
const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("evento 1")
})

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("evento 2")
})


// 5 - Romovendo evento padrão
const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Não alterou a página")
})


// 6 - eventos de tecla
document.addEventListener("keydown", (e) => { //dispara assim que clica a tecla
    console.log(`clicou na tecla ${e.key}`)
})

document.addEventListener("keyup", (e) => {  //dispara assim que solta a tecla
    console.log(`clicou na tecla ${e.key}`)
})


// 7 - eventos de mouse
const mouseEvents = document.querySelector("#mouse")

mouseEvents.addEventListener("mousedow", () => { //dispara assim que clica no mouse
    console.log("pressionou o botão")
})

mouseEvents.addEventListener("mouseup", () => { //dispara assim que solta o clique do mouse
    console.log("soltou o botão")
})

mouseEvents.addEventListener("dblclick", () => { //dispara assim quando da dois clicks
    console.log("clique duplo")
})


// 8 - movimento do mouse
document.addEventListener("mousemove", (e) => {
    console.log(`No eixo X: ${e.x}`); //estou pegando as propriedades de eixos do objeto event para indentificar o posicionamento do mouse
    console.log(`No eixo Y: ${e.y}`);
    console.log(`Aqui estou passando o mouse em cima do elemento: ${e.target.tagName.toLowerCase()}`) //aqui atraves do target to falando qual o nome do elemento que estou passando o ponteiro do mouse
})


// 9 - evento de scroll
window.addEventListener("scroll", (e) => { //O windows é a janela de referencia nesse  caso

    //o pageYOffset é a posição do scroll no window
    if(window.pageYOffset > 200) {
        console.log("Passou de 200px")
    }

    //o innerHeight eu verifico o tamanho atual da page da window
    const tamanhoAtual = window.innerHeight;
    console.log(`O tamanho atual é: ${tamanhoAtual}`)
})


// 10 - evento de focus/blur
const input = document.querySelector("#my-input")

// quando eu clicar no input ("focar") ele ira disparar a função
input.addEventListener("focus", (e) => {
    console.log("entrou no input")
})

// quando eu clicar no fora do input ("desfocar") ele ira disparar a função
input.addEventListener("blur", (e) => {
    console.log("saiu do input")
})


// 11 - evento de carregamento da pagina
//o window load é pra quando a pagina for 100% carregada, incluindo imagens, scripts e etc
window.addEventListener("load", () => {
    console.log("A pagina carregou completa!!")
})

//o document DOMContentLoaded é pra quando a pagina carregar apenas o html
document.addEventListener("DOMContentLoaded", () => {
    console.log("A pagina carregou apenas o HTML!!")
})


// 12 - debounce
//f é a função que eu vou executar e o delay é o tempo que vou esperar
const debounce = (f, delay) => {
    
    let timeout

    // Aqui, você está retornando uma nova função que será chamada quando você invocar a função debounce.
    return (...arguments) => {

        // Se já houver um temporizador em andamento, limpe-o.
        if (timeout) {
            clearTimeout(timeout);
        }

        // Configura um novo temporizador para executar a função após o atraso especificado.
        timeout = setTimeout(() => {
            // Aqui, você está chamando a função fornecida (f), aplicando seus argumentos, é como se eu estivesse programando uma execussão de uma função.
            f.apply(arguments);
        }, delay);  // o tempo que sera executado
    }
}

//é como se fosse um setInterval só que de evento
window.addEventListener("mousemove", debounce(() => {
    console.log("Executando a cada 400ms")
}, 400) 
)
