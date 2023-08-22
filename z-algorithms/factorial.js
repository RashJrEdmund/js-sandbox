// const factorial = (num) => {
//   if(num <= 1) {
//     return 1;
//   }

//   return num*factorial(num - 1)
// }

const factorial = (num) => {
  if(num <= 0) return 1;

  let result = num;
  for(let i = 1; i < num; i++) {
    result *= i
  }

  return result;
}

console.log(factorial(5))
