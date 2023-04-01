// exercise-1 part-1

const people = ["Greg", "Mary", "Devon", "James"];

people.shift()

people.splice(2, 1, 'Jason')

people.push('Kelly')

console.log(`take a look at the ${people.indexOf('Mary')} method on Google`)

let newPeople = people.slice();

let foo = newPeople.indexOf("Foo");

let last = newPeople[newPeople.length - 1];

// part-2

for (person in people) {
    console.log(people[person])
}

for (person in people) {
    console.log(people[person])
    if (people[person] == 'Jason') {
        break;
    }
}

// exersise-2

let favColors = ['yellow', 'pink', 'green', 'purple', 'orange'];




