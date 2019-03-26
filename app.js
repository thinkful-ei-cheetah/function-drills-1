'use strict';

function createGreeting(name, age){
  try {
    return `Hi, my name is ${name} and I'm ${age} years old.  ` + 
         `I was born in the year ${yearOfBirth(age)}.`;
  } catch(e) {
    return e.message
  }
}

function yearOfBirth(age){
  if (age < 0) {
    throw new Error("age cannot be a negative number")
  }
  return 2019 - age
}

let result = createGreeting("Michael", -2);
console.log(result);