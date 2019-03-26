'use strict';

function jediName(firstName, lastName) {
  return `${lastName.slice(0,3)}${firstName.slice(0,2)}`
}

jediName("Beyonce", "Knowles")

function beyond(num) {
  if (num === Infinity || num === -Infinity) {
    console.log('And beyond')
  } else if (num > 0 && num < Infinity) {
    console.log('To infinity');
  } else if (num < 0 && num > -Infinity) {
    console.log('To negative infinity');
  } else if (num === 0) {
    console.log('staying home');
  }
}

beyond(100)



