// 1 - var, let e const
var x = 10;
var y = 15;

if(y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10;
let b = 15;

if (b > 10) {
    
    //Tudo que tem chaves, cria um escopo de bloco, permintindo criar variaveis com o mesmo nome sem afetar as outras
    let a = 5;  // este a já esta sendo outra variavel
    console.log(a);
}

console.log(a)

function logName() {
    const name = "Pedro";
    console.log(name)
}

const name = "Matheus";

logName();

console.log(name);


// 2 - arrow function
const sum = function(a, b) {    //sem arrow function
    return a + b
}

const arrowSum = (a, b) => a + b;   //Com arrow function

console.log(sum(5, 5));

console.log(arrowSum(5, 5));

const greeting = (name) => {
    if(name) {
        return `helo, my name is ${name}`;
    } else {
        return "hello";
    }
}

console.log(greeting("Gabriel"));
console.log(greeting());

const user = {
    name: "theo",
    sayUserName() {
        setTimeout(function () {

            console.log("Sem arrow funtion")
            //Neste caso o this esta referenciando toda a window (janela da pagina e suas propriedades)
            console.log(this);
            console.log(`username: ${this.name}`)
        }, 1000)
    },

    sayUserNameArrow() {
        setTimeout(() => {

            console.log("Com arrow function")
            //No caso da arrow function ele esta referenciando todas as propriedades do objeto user
            console.log(this);
            console.log(`Username: ${this.name}`);
        })
    }
}

user.sayUserName();
user.sayUserNameArrow();


// 3 - Filter
const arr = [1, 2, 3, 4, 5, 6]

const highNumbers = arr.filter((n) => {  //estes métodos de arrays tem argumentos que percorrem todo o array

    //com esta logica, irei retorna apenas o numeros maiores que 3 em um array novo
    if(n >= 3) {
        return n;
    }   
}) 

console.log(highNumbers)

const users = [
    {name: "Gabriel", available: true},
    {name: "João", available: false},
    {name: "Anderson", available: true},
    {name: "Erick", available: false},
    {name: "Brennon", available: true}
];

const availableUsers = users.filter((disponiveis) => {

    //aqui estou criando uma logica de um array de objetos que ele vai percorrer cada elemento do array e ira
    //me retornar uma nova lista apenas com os usuarios que estão disponiveis
    if(disponiveis.available === true) {
        
        return disponiveis.name;
    }
})

console.log(availableUsers);


// 4 - map
const products = [
    {name: "Camisa", price: 10.99, category: "Roupas"},
    {name: "Chaleira Elétrica", price: 150, category: "Eletro"},
    {name: "Fogão", price: 499, category: "Eletro"},
    {name: "Calça Jeans", price: 87.99, category: "Roupas"},
]

//Aqui estou percorrendo todos os elementos do array products, 
//porém, estou alterando apenas as roupas conforme coloquei na logica 
products.map((product) => {
    if(product.category === "Roupas") {
        product.Onsale = true;
    }
})

console.log(products)

// 5 - template literals
const userName = "Gabriel";
const age = 18;

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos`)


// 6 - Destructuring
const fruits = ["Maça", "Mamão", "Laranja"];

//Deste modo, to falando que respectivamente, 
//cada elemento do array pertence a essas variaveis que eu criei
const [f1, f2, f3] = fruits

console.log(f1, f2, f3);

const productDetails = {
    names: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza"
}

const {names, price, category, color} = productDetails;

console.log(`O nome do produto é ${names}, ele custa ${price}, é da categoria ${category} e cor ${color}`)

//Se eu quiser também posso renomear dessa forma

const {names: nome, price: preco, category: categoria, color: cor} = productDetails;

console.log(`o nome é ${nome}`)


// 7 - spread operator (...)
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

//desta maneira estou mesclando os dois arrays em um outro array a3
const a3 = [...a1, ...a2];

console.log(a3);

//Coloquei os elementos do a3 entre 0 e 7
const a4 = [0, ...a3, 7]

//Agora mesclando propriedades do objetos:
const carName = {name: "Gol"}
const carBrand = {brand: "VW"}
const otherInfos = {km: 1000000, price: 49999};

const car = {...carName, ...carBrand, ...otherInfos}

console.log(car)


// 8 - classes
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        const desconto = this.price * ((100 - discount) / 100);

        return `e o desconto da camiseta é ${desconto.toFixed(2)}`
    }
}

const shirt = new Product('camiseta', 3.95)

console.log(shirt)
console.log(shirt.productWithDiscount(50))


// 9 - herança
class productWithAttributes extends Product {
    constructor(name, price, colors){
        super(name, price);
        this.colors = colors;
    }

    showColors() {
        console.log("As cores são: ");
        this.colors.forEach((color) => {
            console.log(color);
        })
    }
}

const hat = new productWithAttributes("Chapéu", 29.99, ['preto', 'Amarelo', 'Verde'])

console.log(hat)

console.log(hat.name)

console.log(hat.showColors());