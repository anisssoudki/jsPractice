const palindrome = str => {
  // turn the string to lowercase
  str = str.toLowerCase()
  // reverse input string and return the result of the
  // comparisong
  return str === str.split('').reverse().join('')
}

const fizzBuzz = num => {
    for(let i = 1; i <= num; i++) {
      // check if the number is a multiple of 3 and 5
      if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
      } // check if the number is a multiple of 3
        else if(i % 3 === 0) {
        console.log('fizz')
      } // check if the number is a multiple of 5
        else if(i % 5 === 0) {
        console.log('buzz')
      } else {
        console.log(i)
      }
    }
  }

  // helper function that builds the
// object to store the data
const buildCharObject = str => {
    const charObj = {}
    for(let char of str.replace(/[^\w]/g).toLowerCase()) {
      // if the object has already a key value pair
      // equal to the value being looped over,
      // increase the value by 1, otherwise add
      // the letter being looped over as key and 1 as its value
      charObj[char] = charObj[char] + 1 || 1
    }
    return charObj
  }
  
  // main function
  const anagram = (strA, strB) => {
    // build the object that holds strA data
    const aCharObject = buildCharObject(strA)
    // build the object that holds strB data
    const bCharObject = buildCharObject(strB)
  
    // compare number of keys in the two objects
    // (anagrams must have the same number of letters)
    if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
      return false
    }
    // if both objects have the same number of keys
    // we can be sure that at least both strings
    // have the same number of characters
    // Now we can compare the two objects to see if both
    // have the same letters in the same amount
    for(let char in aCharObject) {
      if(aCharObject[char] !== bCharObject[char]) {
        return false
      }
    }
    // if both the above checks succeed,
    // you have an anagram: return true
    return true
  }

//   anagram 2
function anagrams(stringA, stringB) {
    /*First, we remove any non-alphabet character using regex and convert       
    convert the strings to lowercase. */
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

    return sortString(stringA) === sortString(stringB)
}

/*This function sorts the strings*/ 
function sortString(string) {
    return string.split('').sort().join('');
}
  //////////////////////////////////////////////

  const findVowels = str => {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let char of str.toLowerCase()) {
      if(vowels.includes(char)) {
        count++
      }
    }
    return count
  }

  const fibonacci = num => {
    // store the Fibonacci sequence you're going
    // to generate inside an array and
    // initialize the array with the first two
    // numbers of the sequence
    const result = [0, 1]
  
    for(let i = 2; i <= num; i++) {
      // push the sum of the two numbers
      // preceding the position of i in the result array
      // at the end of the result array
      const prevNum1 = result[i - 1]
      const prevNum2 = result[i - 2]
      result.push(prevNum1 + prevNum2)
    }
    // return the last value in the result array
    return result[num]
  }
  The reason why the result ar
