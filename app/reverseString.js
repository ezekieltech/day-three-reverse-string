'use strict'

function reverseString(string){
  var array = string.split('');
  var newstring = [];
  for (var i = string.length-1; i>=0; --i){
    newstring += array[i];
  }
  return newstring===string ? true: newstring;
  
}

module.exports = reverseString