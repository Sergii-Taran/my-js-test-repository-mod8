const products = [
  {
    id: 1,
    img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
    name: 'Monitor',
    price: 3000,
    description: '23-inch monitor with Full HD resolution.',
  },
  {
    id: 2,
    img: 'ttps://cdn.pixabay.com/photo/2015/01/08/18/24/programming-593312_1280.jpg',
    name: 'Laptop',
    price: 20000,
    description:
      'Lightweight and powerful laptop with a 15-inch display and SSD.',
  },
  {
    id: 3,
    img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
    name: 'Smartphone',
    price: 8000,
    description: 'Equipped with a triple camera and a multi-core processor.',
  },
  {
    id: 4,
    img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
    name: 'Tablet',
    price: 12000,
    description: '10-inch tablet with high performance and a Retina display.',
  },
];

// const container = document.querySelector('.products');
// container.insertAdjacentHTML('beforeend', createMarkup(products));

// container.addEventListener('click', handleClick);

// function createMarkup(arr) {
//   return arr
//     .map(
//       (product) => `<li class="item product-item" data-id="${product.id}">
//   <img src="${product.img}" alt="${product.name}" width="300">
//   <h2>${product.name}</h2>
//   <p>Price: ${product.price}$</p>
//   </li>`
//     )
//     .join('');
// }

// function handleClick(event) {
//   if (event.target === event.currentTarget) {
//     return;
//   }

//   const currentProduct = event.target.closest('.product-item');
//   const id = currentProduct.dataset.id;

//   const product = products.find((item) => item.id === +id);

//   const instance = basicLightbox.create(
//     `<div class="modal">
//     <img src="${product.img}" alt="${product.name}">
//     <h2>${product.name}</h2>
//     <h3>${product.price}$</h3>
//     <p>${product.description}</p>
//     </div>`
//   );

//   instance.show();
// }

// ====================================== //

const container = document.querySelector('.products');

container.insertAdjacentHTML('beforeend', createMarkup(products));
container.addEventListener('click', handleClick);

function createMarkup(products) {
  return products
    .map(
      (product) => `
      <li class="item product-item" data-id="${product.id}">
        <img src="${product.img}" alt="${product.name}" width="300">
        <h2>${product.name}</h2>
        <p>Price: ${product.price}$</p>
      </li>
    `
    )
    .join('');
}

function handleClick(event) {
  const card = event.target.closest('.product-item');
  if (!card) return;

  const id = Number(card.dataset.id);
  const product = products.find((item) => item.id === id);

  const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${product.img}" alt="${product.name}">
      <h2>${product.name}</h2>
      <h3>${product.price}$</h3>
      <p>${product.description}</p>
    </div>
  `);

  instance.show();

  const onEscKeyPress = (event) => {
    if (event.key === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', onEscKeyPress);
    }
  };

  document.addEventListener('keydown', onEscKeyPress);
}
