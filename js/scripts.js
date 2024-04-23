// 1 - seTimeout
console.log("Ainda não executou")

setTimeout(function() {
    console.log("Requisição assíncrona")
}, 2000); //to falando que daqui 2 segundos ele executará essa função

console.log("Ainda não executou 2")

// 2 - setInterval
// console.log("Ainda não executou")

// // setInterval(() => {
// //     console.log("Intervalo assíncrono") //a diferença desse para o setTimeout é 
// //     //que ele nunca para de ser executado, então de 3 em 3 segundos ele executa o código novamente
// // }, 3000)

// console.log("Ainda não executou 2")


// 3 - Promise
const promessa = Promise.resolve(5 + 5) //o promise.resolve resolve o codigo que será passada como argumento na função

console.log("Algum código")

//já o .then() é uma função que fará alguma coisa com o resultado do Promise.resolve acima e o parametro dele é justamente o resultado
promessa.then((value) => {      

    console.log(`A soma é ${value}`)
    return value;
})
.then((value) => value -1)
.then((value) => console.log(`Agora é ${value}`))

console.log("outro código") 

// 4 - Falha na promise (catch)
Promise.resolve(4 * "asd")
.then((n) => {
    if(Number.isNaN(n)) {
        throw new Error("Valores inválidos")
    }
})
.catch((err) => {
    console.log(`Um erro ocorreu: ${err}`);
})

// 5 - rejeição
function checkNumber(n) {
    return new Promise((resolve, reject) => {   //criando uma nova promise 
        if(n > 10) {
            resolve(`O número é maior que 10`); //quando eu for chamar essa função e ela der certo, o resultado do .then será essa mensagem
        } else {
            reject(new Error("Número muito baixo")); //quando eu for chamar essa função e ela for rejeitada, o resultado do .catch será essa mensagem
        }
    });
}


const a = checkNumber(20); //chamando a função

const b = checkNumber(10); //chamando a função

console.log(a, b); //chamando no console a função promisse sem os métodos .then e .catch, me voltará apenas o status da promisse 

//Extraindo o valor(v) do "a" e do "b". o v do "a" é o resolve, e o v do "b" é o catch
a.then((v) => console.log (`O resultado é ${v}`)). catch((err) => 
    console.log(`Um erro ocorreu: ${err}`)
);  

b.then((v) => console.log (`O resultado é ${v}`)). catch((err) => 
    console.log(`Um erro ocorreu: ${err}`)
);

// 6 - Resolvendo varias promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(function (){
        resolve(10)
    }, 1000)
})

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if(30 > 10){
        resolve(30);
    }
    else {
        reject("Erro!")
    }
});

//neste caso o .then do Promise.all pega todos os valores de uma vez 
Promise.all([p1, p2, p3]).then((values) => console.log(values)) ;


// 7 - async functions
async function somarComDelay(a, b) {
    return a + b;
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é: ${value}`);
});

console.log('Teste async');


// 8 - async await
function resolveComDelay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resolveu a Promise")
        }, 2000);
    })
}

async function chamadaAsync() {
    console.log("Chamando a promise, e esperando o resultado")
    const result = await resolveComDelay();
    console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();

// 9 - Generators
function* generator(){
    yield 1
    yield 2
}

const gen = generator()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);