#!/usr/bin/node

const { response } = require('express');
const { constrainedMemory } = require('process');
const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;
let characters = [];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  }
  characters = JSON.parse(body).characters;
  getMyCharacter(0);
  // for (let i = 0; i < characters.length; i++) {
  //   request(characters[i], (error, response, body) => {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       const name = JSON.parse(body).name;
  //       console.log(name);
  //     }
  //   });
  // }
});
const getMyCharacter = (index) => {
  if (index === characters.length) return;

  request(characters[index], (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      const name = JSON.parse(body).name;
      console.log(name);
      getMyCharacter(index + 1);
    }
  });
};
