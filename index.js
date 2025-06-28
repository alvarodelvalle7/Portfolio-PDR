const boton = document.querySelector('.group2');
const correo = document.getElementById('correo');

boton.addEventListener('mouseenter', () => {
  correo.classList.remove('opacity-0');
  correo.classList.add('opacity-100');
});

boton.addEventListener('mouseleave', () => {
  correo.classList.remove('opacity-100');
  correo.classList.add('opacity-0');
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