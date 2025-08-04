const users = [{ name: 'Vassya' }, { name: 'Petya' }, { name: 'Stepan' }];

// без деструктуризації

// const names = [];

// for (const user of users) {
//   names.push(user.name);
// }

// console.log(names);

// з деструктуризацією

const names = [];

for (const user of users) {
  const { name } = user;
  names.push(name);
}

console.log(names);

// for (const { name } of users) {
//   names.push(name);
// }

// console.log(names);
