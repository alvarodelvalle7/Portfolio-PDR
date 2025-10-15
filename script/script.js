const menu = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const project = document.getElementById('projects');
const subprojects = document.getElementById('subprojects');

// Toggle menú hamburguesa
menu.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    nav.classList.toggle('active');

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        menu.classList.add('open');
        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
});

// Toggle submenú de proyectos
project.addEventListener('click', (e) => {
  e.preventDefault();
  subprojects.classList.toggle('active');
  project.classList.toggle('open');
});

// Cierra menú al hacer clic fuera (solo en mobile)
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !menu.contains(e.target)) {
    nav.classList.remove('active');
    menu.classList.remove('open');
    menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});






