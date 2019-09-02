//
// Object destructuring
//

// const person = {
//   name: "Petr",
//   age: 41,
//   location: {
//     city: "Praha",
//     temp: 92
//   }
// };

// // const name = person.name;
// // const age = person.age;

// const { name: firstName = "Anonymous", age } = person;
// const { temp: temperature, city } = person.location;

// console.log(`${firstName} is ${age}`);

// console.log(`It's ${temperature} in ${city}.`);

// const book ={
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: "Penguin"
//     }
// };

// const {name: publisherName = "Self-Published"} = book.publisher;

// console.log(publisherName);

// const address = ["1299 S Juniper Street", "Philadelphia", "Pennsylvania", "19147"];

// const [ , city, state = "Praha"] = address;

// // console.log(`You are in ${address[1]} ${address[2]}.`);

// console.log(`Your are in ${city} ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [ product, , meduimPrice] = item;

console.log(`A medium ${product} costs ${meduimPrice}`);