const h1s = document.getElementsByTagName('h1')
const p = document.getElementById('about-me');
const pQuery = document.querySelector('#about-me');
const span = document.createElement('span');
const otherSpan = document.createElement('span');
// const pQueryClass = document.querySelector('.about-me');
// const pQueryTag = document.querySelector('p');

const h1 = h1s.item(0)

h1.innerHTML = 'Hola'
h1.innerText = 'Hola desde inner text'
h1.textContent = 'Hola desde text content'

console.log(p);
p.textContent = 'Hola desde javascript'

// console.log(pQuery);
// console.log(pQueryClass);

// p.className = 'classname-about-me'
p.classList.add('hola', 'que')
p.classList.remove('que')
p.classList.toggle('hola')
p.classList.replace('hola', 'hola-jhon')

p.append(span)
p.appendChild(otherSpan)
span.textContent = 'Hola'
console.log(p.className);

document.documentElement.classList.add('dark')
document.body.classList.add('light')