const menu = document.querySelector('.menu');
const label = menu.querySelector('label');
const menuItems = menu.querySelectorAll('.hide-on-main');

label.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuItems.forEach(item => {
    item.classList.toggle('hide-on-main');
  });
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
    menuItems.forEach(item => {
      item.classList.add('hide-on-main');
    });
  });
});


