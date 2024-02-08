// palindrome

// const isPalindrome = (word) => {
//   let check = ''

//   if(typeof word !== String) {
//     const num = word.toString()
//     for (let i = num.length - 1; i >= 0; i--) {
//       check += num[i];
//     }
//     return word === +check
//   }

//   for (let i = word.length - 1; i >= 0; i--) {
//     check += word[i];
//   }
//   console.log(check, word);
//   return word === check
// }

// const reverseNumber = (num) => {
//   if(num !== undefined) {
//     reverseNumber(num)
//     console.log(Math.floor(num % 10))
//     return Math.floor((num % 10) / 10)
//   };

//   // console.log('number', reverseNumber(Math.floor(num / 10) % 10))
// }




const isPalindrome = (word) => {
  let check = ''

  if(typeof word !== String) {
    reverseNumber(word)
    return
  }

  for (let i = word.length - 1; i >= 0; i--) {
    check += word[i];
  }
  console.log(check, word);
  return word === check
}
// or

// const isPalindrome = (word) => {
//   if(typeof word === 'number') {
//     console.log('word', word.toString().split('').reverse().join(' '));
//     return word === +word.toString().split('').reverse().join()
//   }

//   if(typeof word !== String) return word === word.toString().split('').reverse().join().toNumber()

//   return word === word.split('').reverse().join()
// }

console.log(isPalindrome(454))
