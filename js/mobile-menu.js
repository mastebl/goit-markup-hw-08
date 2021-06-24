(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const menuBtnRefClose = document.querySelector('[data-menu-button-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  const functionButton = () => {
    mobileMenuRef.classList.toggle('is-open');
  };

  menuBtnRef.addEventListener('click', functionButton);
  menuBtnRefClose.addEventListener('click', functionButton);
})();
