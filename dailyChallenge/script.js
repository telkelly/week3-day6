// for loop

let star = "";

// for (let i = 0; i < 6; i++){
//     console.log(star +='* ')
// }

// nested

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
    console.log((star += "* "));
  }
}
