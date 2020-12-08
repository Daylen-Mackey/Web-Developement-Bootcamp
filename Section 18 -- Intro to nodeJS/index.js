//jshint esversion:6

const superheroes = require('superheroes');
const supervillains = require('supervillains');

for (let i = 0; i < 10; i++){

  console.log(superheroes.random() + " vs. " + supervillains.random())
}
