const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky",this.window.scrollY > 120);
})
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}


const slides = document.querySelectorAll('.small-slider img');
let current = 0;

function showSlide(index) {
  slides.forEach((img, i) => {
    img.style.opacity = i === index ? '1' : '0';
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 2500);


const whatsappBtn = document.getElementById('whatsappBtn');
const showBtn = document.getElementById('showWhatsapp');
const hideBtn = document.getElementById('hideWhatsapp');

// Hide WhatsApp button
hideBtn.addEventListener('click', () => {
  whatsappBtn.style.display = 'none';
  showBtn.style.display = 'flex';
});

// Show WhatsApp button
showBtn.addEventListener('click', () => {
  whatsappBtn.style.display = 'flex';
  showBtn.style.display = 'none';
});










