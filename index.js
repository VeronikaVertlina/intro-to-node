//jshint esversion:6

// const fs = require('fs');
//
// // file2.txt will be created or overwritten by default.
// fs.copyFileSync('file1.txt', 'file2.txt');
// console.log('file1.txt was copied to file2.txt')


const superheroes = require('superheroes');
var supervillains = require('supervillains');

var mySuperheroName = superheroes.random();
var mySupervillainsName = supervillains.random();

console.log(mySuperheroName);
console.log(mySupervillainsName);
