const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const mobileText = document.querySelectorAll('.mobileNavItem');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  mobileNav.classList.toggle('open');
  mobileText.forEach((link) => {
    link.classList.toggle('open');
  });
});
const quickContact = document.querySelector('#quickContactt');
const hero = document.querySelector('.Hero');
const header = document.querySelector('header');
const navbar = document.querySelector('.navbar');
const quickContactOptions = {
  rootMargin: '-400px',
};

const quickContactObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      quickContact.classList.add('scrolled');
      header.classList.add('scrolled');
      navbar.classList.add('scrolled');
      mobileNav.classList.add('scrolled');
    } else {
      quickContact.classList.remove('scrolled');
      header.classList.remove('scrolled');
      navbar.classList.remove('scrolled');
      mobileNav.classList.remove('scrolled');
    }
  });
}, quickContactOptions);

quickContactObserver.observe(hero);
