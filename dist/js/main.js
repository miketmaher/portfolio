document.addEventListener('DOMContentLoaded', function() {

  //GA Tag
  window.dataLayer = window.dataLayer || [];
  function gtag(){
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'UA-125781517-1');
  //END GA Tag

  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  const menuNav = document.querySelector('.menu-nav');
  const menuBranding = document.querySelector('.menu-branding');
  const menuItems = document.querySelectorAll('.nav-item');

  let showMenu = false;

  menuBtn.addEventListener('click', function () {
    if (!showMenu) {
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menuNav.classList.add('show');
      menuBranding.classList.add('show');
      menuItems.forEach(function(elem) {
        elem.classList.add('show');
      });
      showMenu = true;
    } else {
      menuBtn.classList.remove('close');
      menu.classList.remove('show');
      menuNav.classList.remove('show');
      menuBranding.classList.remove('show');
      menuItems.forEach(function(elem) {
        elem.classList.remove('show');
      });
      showMenu = false;
    }
  });
});