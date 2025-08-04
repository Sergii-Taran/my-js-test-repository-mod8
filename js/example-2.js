const product = {
  name: 'Smart TV',
  price: 25000,
  category: 'Electronics',
  details: {
    brand: 'Samsung',
    color: 'Black',
    weight: '15.5',
  },
};

function getInfo({ name, price, category, details: { brand, color, weight } }) {
  console.log(`Product name: ${name}`);
  console.log(`Price: ${price} грн`);
  console.log(`Category: ${category}`);
  console.log('Details:');
  console.log(`- Brand: ${brand}`);
  console.log(`- Color: ${color}`);
  console.log(`- Weight: ${weight} кг`);
}

getInfo(product);
