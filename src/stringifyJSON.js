
function stringifyJSON(val) {
  if (val === undefined || typeof val ==="function") {
    return undefined;
  }

  if (Array.isArray(val)) {
    return arrayToString(val);
  } else {
    if (val === null) {
      return simpleValueToString(val);
    } else if (typeof val === 'object') {
      return objToString(val);
    } else {
      return simpleValueToString(val);
    }
  }
}

function simpleValueToString(val) {
  let left = '';
  let right = '';

  if (typeof val === 'string') {
    left = '"';
    right = '"';
  }

  let result = `${left}${val}${right}`;
  return result;
}

function arrayToString(arr) {
  let left = '[';
  let right = ']';
  let result = "";

  arr.forEach(x =>{
    var stringified = stringifyJSON(x);
    result += stringified + ",";
  });

  result = result.slice(0, result.length - 1);

  let finalResult = `${left}${result}${right}`;
  return finalResult;

}

function objToString(obj) {
  let resultBegin = "{";
  let resultEnd = "}";
  let resultMiddle = "";

  for (let key in obj) {
    let val = obj[key];
    let stringified = stringifyJSON(val);

    if (val === undefined || typeof val === "function") {
      continue;
    }

    resultMiddle += `"${key}":${stringified},`;
  }

  // Trim the trailing comma.
  resultMiddle = resultMiddle.slice(0, resultMiddle.length -1);
  return resultBegin + resultMiddle + resultEnd;
}