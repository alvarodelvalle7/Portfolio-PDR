const boton = document.querySelector('.group');
const correo = document.getElementById('correo');

boton.addEventListener('mouseenter', () => {
  correo.style.opacity = '1';
});

boton.addEventListener('mouseleave', () => {
  correo.style.opacity = '0';
});

correo.addEventListener('click', () => {
  window.location.href = 'mailto:pabloringab@gmail.com';
});

const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
  menu.classList.toggle('flex-col'); 
  });