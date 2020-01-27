var stringifyJSON = function(obj) {
  let leftside = '{';
  let rightside = '}';
  let middle = '';

  //functions for parsing
  function stringArray() {

  }

  function stringObject() {

  }

  function stringOther() {

  }





  return `${leftside}${middle}${rightside}`;
};




// Test Data
let simpleTestData = {
  'a' : 123,
  'b' : 'Tammy',
  'c' : [1, 2, 3],
  'd' : {'z' : 123, 'y': 'abc'}
};

{"a":123,"b":"Tammy","c":[1,2,3],"d":{"z":123,"y":"abc"}}

//three main things to solve:
// 1. arrays
// 2. objects
// 3. everything else


// Simple Test
let theirs = JSON.stringify(simpleTestData);
console.log(theirs);
console.log ('-----------------------')
let mine = stringifyJSON(simpleTestData);
console.log (mine);

if (theirs === mine) {
  console.log('PASSED!');
} else {
  console.log('FAILED');
}


