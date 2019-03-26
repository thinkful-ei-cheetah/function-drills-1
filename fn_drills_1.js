'use strict';

function createGreeting(name, age){
  if (name === undefined || age === undefined) {
    throw new Error('Arguments not valid');
  }

  if (typeof name !== 'string' || !age.toFixed) {
    throw new TypeError();
  }

  try {
    return `Hi, my name is ${name} and I'm ${age} years old.  ` + 
         `I was born in the year ${yearOfBirth(age)}.`;
  } catch(e) {
    return e.message;
  }
}

function yearOfBirth(age){
  if (age < 0) {
    throw new Error('age cannot be a negative number');
  }
  return 2019 - age;
}

let result = createGreeting('Michael', 29);
console.log(result);