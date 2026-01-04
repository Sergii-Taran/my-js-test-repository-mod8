// Деструктуризуй об'єкт таким чином щоб отримати значення name, surname, username

const user = {
  id: 1,
  username: 'serhii_taran',
  profile: {
    name: 'Serhii',
    surname: 'Taran',
    age: 55,
  },
};

const {
  username,
  profile: { name, surname },
} = user;

console.log(`Username: ${name}`);
console.log(`User's last name: ${surname}`);
console.log(`Username (by nickname): ${username}`);

// ====================================== //

// Допиши функцію таким чином щоб кожна властивість об'єкта product була незалежним параметром

const product = {
  name: 'Smart TV',
  price: 25000,
  categorie: 'Electronics',
  details: {
    brand: 'Samsung',
    color: 'black',
    weigth: '15.5',
  },
};

function getInfo({
  name,
  price,
  categorie,
  details: { brand, color, weigth },
}) {
  console.log(`Product name: ${name}`);
  console.log(`Product price: $${price}`);
  console.log(`Product categorie: ${categorie}`);
  console.log('Details:');
  console.log(`- brand: ${brand}`);
  console.log(`- color: ${color}`);
  console.log(`- weigth: ${weigth}`);
}

getInfo(product);

// ====================================== //

// Необхідно зрoбити рефакторинг функції calculateHousePerimeter так, щоб вона приймала об'єкт з параметрами будинку, включаючи довжини сторін будинку. Функція повинна розрахувати та повернути периметр будинку.

function calculateHousePerimeter({ sideA, sideB, sideC, sideD }) {
  const perimeter = sideA + sideB + sideC + sideD;
  return perimeter;
}

const house = {
  sideA: 10,
  sideB: 15,
  sideC: 20,
  sideD: 25,
};

const perimeter = calculateHousePerimeter(house);

console.log(`Perimeter of the house: ${perimeter} meters`);
