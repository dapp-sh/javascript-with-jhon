// SELECCIONES DE ELEMENTOS
const h1s = document.getElementsByTagName('h1')
const p = document.getElementById('about-me');
const pQuery = document.querySelector('#about-me');
const span = document.createElement('span');
const otherSpan = document.createElement('span');
// const pQueryClass = document.querySelector('.about-me');
// const pQueryTag = document.querySelector('p');

const h1 = h1s.item(0)


// MANIPULACIÓN DE ELEMENTOS
h1.innerHTML = 'Hola'
h1.innerText = 'Hola desde inner text'
h1.textContent = 'Hola desde text content'

// console.log(p);
// p.textContent = 'Hola desde javascript'

// console.log(pQuery);
// console.log(pQueryClass);

// p.className = 'classname-about-me'
p.classList.add('hola', 'que')
p.classList.remove('que')
p.classList.toggle('hola')
p.classList.replace('hola', 'hola-jhon')

//p.append(span)
// p.appendChild(otherSpan)
span.textContent = 'Hola'
// p.removeChild(span)
// console.log(p.className);

document.documentElement.classList.add('dark')
document.body.classList.add('light')


// Manejos de atributos

const imageElement = document.querySelector('#image')

console.log(

imageElement.getAttribute('src') // oBTENER ATRIBUTOS
);

imageElement.setAttribute('src', '/')
imageElement.setAttribute('alt', 'Este es un ALT creado desde javascript')

console.log(p.firstChild)
console.log(p.lastChild)
console.log(p.parentNode);
console.log(p.childNodes);

// EVENTOS
// addEventListener
// removeEventlisener

window.addEventListener('')
const buttonElement = document.querySelector('#button')

buttonElement.addEventListener('') // RECIBE DOS ARGMENTOS

// DOMContentLoaded se ejecuta cuando carge el DOM
// blur dejas de hacer focus en un elementos
// change detecta el cambio de un elementos, input, select, textarea, details
// click // cuando el usuario presiona click
// dbclick cuando es clickeado dos veces un elementos