"use strict";
const form = document.querySelector('form');
const cardContainer = document.querySelector('.cards_conatiner');
const author = document.querySelector('#author');
const customer = document.querySelector('#name');
const course = document.querySelector('#course');
const spinner = document.querySelector('.spinner');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    spinner.classList.toggle('hidden');
    setTimeout(() => {
    spinner.classList.toggle('hidden');
    },1000)
    let card = document.createElement('div');
    card.classList.add('card');
    let img = document.createElement('img');
    img.src = 'https://via.placeholder.com/300x250';
    card.appendChild(img);
    let cardContent = document.createElement('div');
    cardContent.classList.add('content');
    cardContent.innerHTML +=  `<p><span class="name">Name : </span>&nbsp;&nbsp;${customer.value}</p>`
    cardContent.innerHTML +=  `<p><span class="course">Course : </span>&nbsp;&nbsp;${course.value}</p>`
    cardContent.innerHTML += `<p><span class="author">Author : </span>&nbsp;&nbsp;${author.value}</p>`
    card.appendChild(cardContent)
    cardContainer.appendChild(card)
    form.reset()
})