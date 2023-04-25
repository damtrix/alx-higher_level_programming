#!/usr/bin/node

const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const characters = JSON.parse(body).characters;
    characters.forEach((character) => {
      request(character, (error, response, body) => {
        if (error) {
          console.log(error);
        } else {
          const name = JSON.parse(body).name;
          console.log(name);
        }
      });
    });
  }
});
