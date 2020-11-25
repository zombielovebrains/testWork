"use strict";

window.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.page-header__toggle');
  const header = document.querySelector('.page-header');
  const menuBox = document.querySelector('.main-nav');

  function switchMenuHandler() {
    if (!menuBox.classList.contains('main-nav--active')) {
      menuBox.classList.add('main-nav--active');
      header.classList.add('page-header--active');
      this.classList.add('page-header__toggle--close');
      if (document.body.clientWidth < 768) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      menuBox.classList.remove('main-nav--active');
      header.classList.remove('page-header--active');
      this.classList.remove('page-header__toggle--close');
      if (document.body.clientWidth < 768) {
        document.body.style.overflow = 'auto';
      }
    }
  }

  menuBtn.addEventListener('click', switchMenuHandler);
});
