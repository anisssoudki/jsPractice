const palindrome = str => {
  // turn the string to lowercase
  str = str.toLowerCase()
  // reverse input string and return the result of the
  // comparisong
  return str === str.split('').reverse().join('')
}
// fizzbuzz

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
  
  // typeof '87' => string type of 87 => number
// strings are indexed chicken 0123456 
console.log('chicken'[0]) // will retrun c 
// chicken.length will count the number of letters in the word

// camelcase function code kata
function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}
// filter a list to get only the numbers

function filter_list(l) {
    // Return a new array with the strings filtered out
    let newList = [] 
   
  let result = l.filter(l => typeof l === 'number');
    return result
  }

  function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}


function createPhoneNumber(numbers){
  
    numbers.unshift('(')
      numbers.splice(4,0,')')
      numbers.splice(5,0,' ')
      numbers.splice(9,0,'-')
      return numbers.join('')
    }
   
    function createPhoneNumber(numbers){
        return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
     }

     var isSquare = function(n){
  
        return n >= 0 && Math.sqrt(n) % 1 === 0; 
       }

       function iqTest(numbers){
        numbers = numbers.split(" ").map(function(el){return parseInt(el)});
        
        var odd = numbers.filter(function(el){ return el % 2 === 1});
        var even = numbers.filter(function(el){ return el % 2 === 0});
        
        return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
      }
      function persistence(num) {
        //code me
         console.log(num.toString().split(''))
       let i = 0 
     //   while the length is more than 1 keep on looping until we get one number
     //   count the number of iterations
       while(num.toString().length !== 1 ) {
     num = num.toString().split("").reduce((a,b)=>{
       console.log(a,b, a*b)
     return  a*b
     
     });
         
         i++;
       }
       console.log(num.toString())
       return i
      
     
     }

  function towerBuilder(nFloor){
        var array=[];
        for(var i=0; i<nFloor; i++){
          array.push(" ".repeat(nFloor-i-1)+
                     "*".repeat(2*i+1)+
                     " ".repeat(nFloor-i-1));
        }
        return array;
      }

      const towerBuilder = n =>
  [...Array(n)].map((_, i) => ' '.repeat(n-i-1) + '*'.repeat(i*2+1) + ' '.repeat(n-i-1)) 
     
  function list(arr){
    let len = arr.length;
    if(len==0) return '';
    return arr.slice(0, len-1).map(p=>p.name).join(", ") + (len>1 ? ' & ' : '') + arr[len-1].name;
  }

  function digital_root(number) {
    let sum = number
    let arr = []
    let reducer = (a,b) => parseInt(a) + parseInt(b)
 
    while (sum > 9) {
       arr = sum.toString().split("")
       sum = arr.reduce(reducer)
    }
 
   return sum
 }

 function findOdd(A) {
    var count = 0;
  for(var i = 0; i<A.length; i++){
    for(var j = 0; j<A.length; j++){
      if(A[i] == A[j]){
        console.log('this is ',i,j,count)
        count++;
      }
    }
    if(count % 2 !== 0 ){
      return A[i];
    }
  }
};
// Cool one liner using ES6
const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 === 1).reduce(a => a);
     
     
