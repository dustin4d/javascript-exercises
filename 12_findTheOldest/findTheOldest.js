const findTheOldest = function(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(array[i].yearOfDeath - yearOfBirth);
  }
  }

  /*people array goes here so I don't have to import it from test file. */

    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

    findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
