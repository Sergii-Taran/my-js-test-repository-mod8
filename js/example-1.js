const user = {
  id: 1,
  username: 'harry_potter',
  profile: {
    name: 'Harry',
    surname: 'Potter',
    age: 25,
  },
};

const {
  username,
  profile: { name, surname },
} = user;

console.log(`Username: ${name}`);
console.log(`User's last name: ${surname}`);
console.log(`Username (by nickname): ${username}`);
