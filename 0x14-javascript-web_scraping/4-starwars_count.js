#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const characterId = 18;

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const info = JSON.parse(body).results;
    console.log(
      info.reduce((count, movie) => {
        return movie.characters.find((character) =>
          character.includes(characterId)
        )
          ? count + 1
          : count;
      }, 0)
    );
  }
});
