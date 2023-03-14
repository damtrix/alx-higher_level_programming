#!/usr/bin/node

exports.esrever = function (list) {
  let len = list.length;
  const rev = [];
  for (let i = 0; i < list.length; i++) {
    rev[i] = list[len - 1];
    len--;
  }
  return rev;
};
