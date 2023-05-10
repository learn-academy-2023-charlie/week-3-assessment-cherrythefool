// ASSESSMENT 3: Coding Practical Questions with Jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibonacci", () => {
  it("provides an array with length of input number, where array values are the fibonacci sequence", () => {
    expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])    
    expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
//     ReferenceError: fibonacci is not defined
// nice :)

// b) Create the function that makes the test pass.

//Pseudocode:
//in - a number
//out - an array where array.length = input number, and values of the array form the fibonacci sequence
// process: create a function called fibonacci. in that function, create a new array. for array.length = input number, push the next number of the fibonacci sequence into the new array. output that array once complete

//create a new function named fibonacci with a number parameter
const fibonacci = (number) => {
  // create a new array to hold the fibonacci sequence. this will also be the output at the end of the function, assign value of "1" to index positions 0 and 1
  let fibArray = [1, 1]
  // start at index 2, iterate through an index til input number = number of values
  for (let i = 2; i < number; i++){
    // create values corresponding to the fibonacci sequence for each indexed position
    // each indexed value shoud equal the sum of the values in the two prior index numbers
    fibArray.push(fibArray[i-1]+fibArray[i-2])
  }
  return fibArray
}



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("objectToArray", () => {
  it("accesses values from an object and puts them in an array, sorts them smallest to largest", () => {
    expect(objectToArray(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(objectToArray(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

//     ReferenceError: objectToArray is not defined
// noice :)

// b) Create the function that makes the test pass.

//pseudo:
//in - object
//out - array of values from object, sorted smallest to largest
//process - make a function

//make a function which takes in an object
const objectToArray = (object) => {
  //use Object.values to return an array of values from the object, then .sort to sort smallest to largest
  return Object.values(object).sort((a, b) => a - b)
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

describe("arrayToSumArray", () => {
  it("adds values from an array iteratively into a new array",  () => {
    expect(arrayToSumArray(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(arrayToSumArray(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(arrayToSumArray(accountTransactions3)).toEqual([])
  })
})

//     ReferenceError: arrayToSumArray is not defined

// b) Create the function that makes the test pass.

//pseudo:
//in - array
//out - array, value is the previous value added to current value
//process: since we're outputting an array 

// make a function named arrayToSumArray which takes in an array
const arrayToSumArray = (array) => {
  // make a new array to push summed numbers into
  let sumItUp = []
  //push the starting value (value at index 0) from argument array into the empty array
  sumItUp.push(array[0])
  //for each currently indexed value in the array after the starting value, add the currently indexed value to the most recent value in the sum array (last indexed value since using .push)
  for (let i = 1; i < array.length; i++){
    sumItUp.push(sumItUp[sumItUp.length - 1] + array[i])
  }
  return sumItUp
}
