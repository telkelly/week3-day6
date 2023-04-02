// exercise-1 part-1

const people = ["Greg", "Mary", "Devon", "James"];

people.shift();

people.splice(2, 1, "Jason");

people.push("Kelly");

console.log(`take a look at the ${people.indexOf("Mary")} method on Google`);

let newPeople = people.slice();

let foo = newPeople.indexOf("Foo");

let last = newPeople[newPeople.length - 1];

// part-2

for (person in people) {
  console.log(people[person]);
}

for (person in people) {
  console.log(people[person]);
  if (people[person] == "Jason") {
    break;
  }
}

// exersise-2

let colors = ["yellow", "pink", "green", "purple", "orange"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// exercise-3

// let answer = null;

// do {
//     let question = prompt("I need a number.");
//     answer = Number(question);
// } while (answer < 10);

// exercise-4

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

console.log(building.numberOfFloors);

console.log(
  "apartmens on the first floor:" + building.numberOfAptByFloor.firstFloor
);
console.log(
  "apartmens on the third floor:" + building.numberOfAptByFloor.thirdFloor
);

console.log(building.nameOfTenants[1])

let two = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
let dan = building.numberOfRoomsAndRent.dan[1];

if (dan < two) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log(building)
}

// exercise-5

let family = {
    mom: 'Alla',
    sister: 'Veronika'
}

for (const key in family) {
    console.log(key)
}

for (const value in family) {
    console.log(family[value])
}

// exercise-6

const details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

console.log(details)

for (let i = 0; i < details; index++) {
    const element = array[index];
    
}