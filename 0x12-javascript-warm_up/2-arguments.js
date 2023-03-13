#!/usr/bin/node

const len = process.argv.length;

if (len <= 2) {
  console.log('No argument');
} else {
  console.log('Argment' + (len > 3 ? 's' : '') + ' found');
}
