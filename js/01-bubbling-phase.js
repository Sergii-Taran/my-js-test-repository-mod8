const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const descendant = document.querySelector('#descendant');

parent.addEventListener('click', () => {
  console.log('Parent click handler');
});

child.addEventListener('click', () => {
  // console.log('Child click handler');
});

descendant.addEventListener('click', () => {
  // console.log('Descendant click handler');
});
