let burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  let ul = document.querySelector('#items');
  ul.classList.toggle('hidden');
});