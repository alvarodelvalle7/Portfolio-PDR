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