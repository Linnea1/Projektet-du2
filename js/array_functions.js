

function array_find (array, test_function) {
  // Returns the first element in array that satisfies
  // the test_function
  // No checks
  for (let i = 0; i < array.length; i++) {
    if (test_function(array[i])) {
      return array[i];
    } 
  }
}

function array_filter (array, test_function) {
  // Returns a new array with all the elements in array that satisfy
  // the test_function
  // No checks
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (test_function(array[i])) {
      result.push(array[i]);
    } 
  }
  return result;
}

function array_each (array, callback) {
  // Calls the function callback once for each element
  // in array, with the element as argument
  // No checks
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}




// The functions below ONLY USEFUL FOR VG

function array_average (array) {
  // Returns the average of all the values in array
  // It returns only the four first characters of the average
  // No checks
  let sum = 0;
  array.forEach(x => sum += x);
  return ("" + (sum/array.length)).substring(0, 4);
}

function array_random_element (array) {
  // Returns one random element from array
  // No checks
  const random_index = get_random_number(array.length);
  return array[random_index];
}