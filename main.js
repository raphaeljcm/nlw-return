const handleScroll = {
  onScroll: function() {
    this.showNavAndBackToTopOnScroll();
    this.activateMenuAtCurrentSection(home);
    this.activateMenuAtCurrentSection(services);
    this.activateMenuAtCurrentSection(about);
    this.activateMenuAtCurrentSection(testimonials);
    this.activateMenuAtCurrentSection(contact);
  },
  showNavAndBackToTopOnScroll: () => {
    window.addEventListener('scroll', () => {
      const mainHeight = main.scrollHeight;
      const contactHeight = contact.scrollHeight;
      const footerHeight = footer.scrollHeight;
      const scrollArrivedInFooter = mainHeight - (footerHeight + contactHeight);

      scrollY > 0 ? navigation.classList.add('scroll') : navigation.classList.remove('scroll');
      scrollY > 1200 ? backToTop.classList.add('show') : backToTop.classList.remove('show');
      window.scrollY >= scrollArrivedInFooter ? backToTop.classList.add('contact') : backToTop.classList.remove('contact');
    }); 
  },
  activateMenuAtCurrentSection: section => {
    window.addEventListener('scroll', () => { 
      // innerHeight === viewportHeight
      const targetLine = scrollY + (innerHeight / 2);

      // Checking if the targetLine has already passed the top of the section
      const sectionTop = section.offsetTop; // get the beginning of the section
      const sectionHeight = section.offsetHeight; // get the total height of the section with padding as well
      const targetLineReachedOrPassedSectionTop = targetLine >= sectionTop;

      // Getting the total site height finishing at the current section
      const sectionEndsAt = sectionTop + sectionHeight; // total height of the site finishing at the current sectionheight
      const targetLinePassedSectionEnds = targetLine > sectionEndsAt; 

      // Section's limit, if it's true, targetLine is inside the current section
      const sectionBoundaries = targetLineReachedOrPassedSectionTop && !targetLinePassedSectionEnds; 

      const sectionId = section.getAttribute('id');
      // getting the current element to set the class active
      const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

      menuElement.classList.remove('active');
      sectionBoundaries && menuElement.classList.add('active');
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