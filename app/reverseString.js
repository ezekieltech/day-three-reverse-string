'use strict'

function reverseString(string){
  if (string.length === 0) { 
    return null
    
  }else{
  var array = string.split('');
  var newstring = [];
  for (var i = string.length-1; i>=0; --i){
    newstring += array[i];
  }
  return newstring===string ? true: newstring;
  }
  
}

module.exports = reverseString