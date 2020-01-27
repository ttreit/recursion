var stringifyJSON = function(obj) {
  let leftside = '{';
  let rightside = '}';
  let middle = '';

  //sorting types to be turned to strings

  function sortTypes() {

  }

  //functions for parsing
  function stringArray() {
      let arrayResult;
        //test
        arrayResult = 'array';
      return middle = middle + arrayResult;
  }

  function stringObject() {
      let objectResult;
       //test
       objectResult = 'object';
      return middle = middle + objectResult;

  }

  function stringOther() {
      let otherResult;
      //test
      otherResult = 'other';
      return middle = middle + otherResult;

  }



  stringArray();
  stringObject();
  stringOther();
  return `${leftside}${middle}${rightside}`;
};




// Test Data
let simpleTestData = {
  'a' : 123,
  'b' : 'Tammy',
  'c' : [1, 2, 3],
  'd' : {'z' : 123, 'y': 'abc'}
};

//{"a":123,"b":"Tammy","c":[1,2,3],"d":{"z":123,"y":"abc"}}

//three main things to solve:
// 1. arrays
// 2. objects
// 3. everything else


// Simple Test
let theirs = JSON.stringify(simpleTestData);
console.log('theirs:', theirs);
console.log ('-----------------------')
let mine = stringifyJSON(simpleTestData);
console.log ('mine: ', mine);

if (theirs === mine) {
  console.log('PASSED!');
} else {
  console.log('FAILED');
}


