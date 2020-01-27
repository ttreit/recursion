var stringifyJSON = function(obj) {
  let leftside = '{';
  let rightside = '}';
  let middle = '';



  //Is Dictionary function
  //From StackOverflow
  //https://stackoverflow.com/questions/38304401/javascript-check-if-dictionary
  function isDict(v) {
      return typeof v==='object' && v!==null && !(v instanceof Array) && !(v instanceof Date);
  }

  //sorting types to be turned to strings

  function iterateObject() {     //TODO rename function
      // iterate over object
      //get k/v pair
      //key is already a string
      //append key to 'middle'
        //key should be in quotes
      //append :
      //append value as string
        //send to be sorted
        //receive text string from sortValueTypes
  }


  function sortValueTypes() {
      //test value for type
      //send value to correct parsing function
      //return text string

  }

  //functions for parsing values
  function stringArray() {
      let arrayResult;

      return middle = middle + arrayResult;
  }

  function stringObject() {
      let objectResult;

      return middle = middle + objectResult;

  }

  function stringOther() {
      let otherResult;

      return middle = middle + otherResult;

  }


  //********Main**********
  //test obj if not a dictionary return obj as is.
  if (!isDict(obj)) {
      return obj;
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

let otherTestData = {'a' : 1};

//{"a":123,"b":"Tammy","c":[1,2,3],"d":{"z":123,"y":"abc"}}

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

let otherTest = JSON.stringify(otherTestData);
console.log('their otherTest:', otherTest);
let myOtherTest = stringifyJSON(otherTestData);
console.log(myOtherTest);


