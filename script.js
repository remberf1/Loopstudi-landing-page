
  const hamburger = document.querySelector('.nav__hamburger');
  const sidebar = document.querySelector('.sidebar');
  const closeBtn = document.querySelector('.sidebar__close');

  hamburger.addEventListener('click', () => {
    sidebar.classList.add('sidebar--open');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar--open');
  });

