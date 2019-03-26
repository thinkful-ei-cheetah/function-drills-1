'use strict';

function createGreeting(name, age){
  return `Hi, my name is ${name} and I'm ${age} years old.  ` + 
         `I was born in the year ${getYearOfBirth(age)}.`;
}

function getYearOfBirth(age){
  return 2019 - age
}

let result = createGreeting("Michael", 29);
console.log(result);