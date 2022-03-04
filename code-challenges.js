/////////// Longest Word ////////////
/////////// Time Complexity O(n) /////
function LongestWord(array) {
    let longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
  let word = LongestWord(["austin", "short", "whaaaa", "thisistheLongestWordYesSir", "iwishIwasLoved"]);
  console.log(word); 


/////////// Unique Characters ////////
////////// Time Complexity O(n2) /////

const uniqueCharacters = (str) => {
    let newstr = str.toLowerCase()

    for (let i = 0; i < newstr.length; i++) 
    for (let j = i + 1; j < newstr.length; j++) 
    if (newstr[i] === newstr[j])
    return false;

    
    return true;
}
console.log(uniqueCharacters('Monday'))

/////////// Sum Zero ////////////
////////// Time Complexity O(n2) /////


const sumZero = (arr) => {
    for (let i = 0; i < arr.length; i++) 
    for (let j = i + 1; j < arr.length; j++)
    if (arr[i] + arr[j] === 0)
    return true;

    return false;
}

// console.log(sumZero([1, 2, 3, -2]))
console.log(sumZero([1, 2, 3, 6, 14, -6]))


////////////// Pangram Sentence //////////
/////////// Time Complexity O(n) ////////


const isPangram = (str = '') => {
    str = str.toLowerCase();
    const { length } = str;
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArr = alphabets.split('');
    for(let i = 0; i < length; i++){
        const el = str[i];
        const index = alphaArr.indexOf(el);
        if(index !== -1){
            alphaArr.splice(index, 1);
        };
    };
    return !alphaArr.length;
};


const str = 'The quick brown fox jumps over the lazy dog';
console.log(isPangram(str));




// function isPangram(string){
//     let strArr = string.toLowerCase();
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
//     for (let i = 0; i < alphabet.length; i++) {
//       if(strArr.indexOf(alphabet[i]) < 0){
//         return false;
//       }
//     }
//     return true;
//   }


// console.log(isPangram('the quick brown fox jumps over the lazy dog'))








