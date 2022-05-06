const handleScroll = {
  onScroll: function() {
    this.showNavAndBackToTopOnScroll();
  },
  showNavAndBackToTopOnScroll: () => {
    window.addEventListener('scroll', () => {
      scrollY > 0 ? navigation.classList.add('scroll') : navigation.classList.remove('scroll');
      scrollY > 2700 ? backToTop.classList.add('show') : backToTop.classList.remove('show');
      scrollY > 5250 ? backToTop.classList.add('contact') : backToTop.classList.remove('contact');
    }); 
  }
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
  handleScroll.onScroll();
}

window.onload = init;