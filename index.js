  const menu = document.getElementById('menu');
  const toggle = document.getElementById('menu-toggle');
  const icon = document.getElementById('menu-icon');

  // Alternar menú y el icono
  toggle.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevenir que el click en el botón se propague
    menu.classList.toggle('hidden');

    // Cambiar ícono
    if (menu.classList.contains('hidden')) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    } else {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    }
  });

  // Cerrar el menú si haces clic fuera
  document.addEventListener('click', function (event) {
    const isClickInside = menu.contains(event.target) || toggle.contains(event.target);

    if (!isClickInside && !menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });