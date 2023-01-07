const scrollToTop = document.querySelector('.scroll_to_top');
const html = document.querySelector('html');
const responsiveNavbar = document.querySelector('.responsive_navbar');
const responsiveToggle = document.querySelector('.toggle');
const navLinks = document.querySelectorAll('.nav_link');

scrollToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0 });
});

window.addEventListener('scroll', () => {
  window.pageYOffset > 100
    ? (scrollToTop.style.display = 'block')
    : (scrollToTop.style.display = 'none');
});

responsiveNavbar.addEventListener('click', (e) => e.stopPropagation());
html.addEventListener('click', () => responsiveNavbar.classList.remove('show'));

navLinks.forEach((link) =>
  link.addEventListener('click', () =>
    responsiveNavbar.classList.remove('show')
  )
);

responsiveToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  responsiveNavbar.classList.toggle('show');
});
