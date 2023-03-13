#!/usr/bin/node

const len = process.argv.length;
if (len <= 3) {
  console.log(0);
} else {
  const value = process.argv
    .map(Number)
    .slice(2, len)
    .sort((a, b) => a - b);
  console.log(value[value.length - 2]);
}
