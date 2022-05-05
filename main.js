function onScroll() {
 window.addEventListener('scroll', () => scrollY > 0 ? navigation.classList.add('scroll') : navigation.classList.remove('scroll'));
}
function openMenu() {
  document.body.classList.add('menu-expanded');
}
function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

// Scroll Reveal
ScrollReveal({
  origin: 'bottom',
  distance: '30px',
  duration: 700  
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`
);

function init() {
  onScroll();
}

window.onload = init;