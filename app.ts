// const person: {
//   name: string
//   age: number
// } = {
const person = {
  name: 'Eemeli',
  age: 29,
  hobbies: ['sports', 'cooking'],
}

// console.log(person.name);

let favouriteActivities: string[];
favouriteActivities = ['sports'];

for (const hobby of favouriteActivities) {
  console.log(hobby.toUpperCase());
}

