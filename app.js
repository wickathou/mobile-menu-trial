document.querySelector('.menu-bars').addEventListener('click', () => {
  document.querySelector('#mobile-menu').classList.toggle('not-active');
});

document.querySelector('#close').addEventListener('click', () => {
  document.querySelector('#mobile-menu').classList.toggle('not-active');
});

document.querySelectorAll('.mobile-link').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('#mobile-menu').classList.toggle('not-active');
  });
});
