#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const completed = {};
    const todos = JSON.parse(body);

    for (const i in todos) {
      if (todos[i].completed) {
        if (completed[todos[i].userId] === undefined) {
          completed[todos[i].userId] = 1;
        } else {
          completed[todos[i].userId] += 1;
        }
      }
    }
    console.log(completed);
  }
});
