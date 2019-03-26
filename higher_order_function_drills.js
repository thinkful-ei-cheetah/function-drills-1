'use strict';

function repeat(fn, n) {
  for (let i=1; i<=n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello World');
}

function goodbye() {
  console.log('Goodbye World');
}

repeat(hello, 5);
repeat(goodbye, 5);