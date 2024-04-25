// 1 - movendo-se pelo DOM
console.log(document.body)

console.log(document.body.childNodes);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent)


// 2 - selecionando por tag
const listItens = document.getElementsByTagName("li");  //tudo parte do document

console.log(listItens)


// 3 - selecionando elemento por id
const title = document.getElementById("title");

console.log(title)

// 4 - Selecionando elementos por classe
const products = document.getElementsByClassName("product")

console.log(products);


// 5 - Selecionando os elementos por CSS
const productsQuery = document.querySelectorAll(".product")

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);


// 6 - insertBefore
const p = document.createElement("p")   //estou criando uma tag p

const header = title.parentElement     //estou selecionando o elemento pai do title (no caso o header)

//O insertBefore é um método de elementos pais, que recebe dois parâmetros: o primeiro é a tag que vc quer inserir antes do segundo parâmetro 
header.insertBefore(p, title);


// 7 - appendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

//neste caso estou colocando meu novo elemento criado "li" dentro do meu elemento ul
//em outras palavras, to dizendo que meu "li" é filho do meu elemento ul
navLinks.appendChild(li);


// 8 - replaceChild
const h2 = document.createElement("h2")

h2.textContent = "Meu novo título"; //estou criando o conteudo do meu p

//esta função recebe dois parâmetros. O primeiro é o novo conteudo/tag que será substituido no lugar do segundo
header.replaceChild(h2, title);


// 9 - createTextNode
const myText = document.createTextNode("Agora vamos colocar mais um título"); //um nó pode ser qualquer coisa dentro do page html 

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);


// 10 - trabalhando com atributos
const firtsLink = navLinks.querySelector("a");

console.log(firtsLink);

firtsLink.setAttribute("href", "https://www.google.com"); //mudando o valor do href

console.log(firtsLink.getAttribute("href")) //pegando o valor do href

firtsLink.setAttribute("target", "_blank") //mudando o valor do target


// 11 - Altura e largura 
const footer = document.querySelector("footer");

console.log(footer.offsetWidth);    //visualizando a largura da tag
console.log(footer.offsetHeight);   ////visualizando a altura da tag

console.log(footer.clientWidth);    //visualizando a largura da tag sem a borda
console.log(footer.clientHeight);   //visualizando a altura da tag sem a borda


// 12 - posição do elemento
const product1 = products[0];   //pegando a primeira tag que tenha classe products

console.log(product1.getBoundingClientRect());


// 13 - CSS com JS 
// se altera a estilização de uma tag pelo DOM assim, o método style e o método da estilização em camelCase
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";

//ou você pode aplicar a estilização toda de uma vez utilizando esse método
mainContainer.style.cssText = "color: red; background-color: #333; padding-bottom: 15px;";


// 14 - Alterando estilos de varios elementos
for (const li of listItens ) {
    li.style.backgroundColor = "red";   
}