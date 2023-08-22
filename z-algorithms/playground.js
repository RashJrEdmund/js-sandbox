// let end = 10;
// let text = '#'

// for (let i = 0; i < end; i++) {
//   console.log(text);
//   text += '#'
// }

// or

// for (let i = 0; i < end; i++) {
//   for (let j = 0; j < i; j++) {
//     process.stdout.write('#')
//   }
//   console.log('');
// }

// for (let i = 0; i < 100; i++) {
//   if(i % 5 == 0 && i%3 !== 0) {
//     console.log('Buzz')
//     continue
//   }

//   if(i % 3 === 0) {
//     console.log('Fizz');
//     continue
//   }
//   console.log(i)
// }

/* for (let i = 0; i < 100; i++) {
  if(i % 5 == 0 && i % 3 == 0) {
    console.log('FizzBuzz')
    continue
  }

  if(i % 3 === 0) {
    console.log('Fizz');
    continue
  }

  if(i % 5 === 0) {
    console.log('Buzz');
    continue
  }
  console.log(i)
} */

// or using tenaries

/* for (let i = 0; i < 100; i++) {
  if(i === 0) {
    console.log(i)
    continue
  }

  console.log(i % 5 == 0 && i % 3 == 0 ? 'FizzBuzz' : i % 3 == 0 ? 'Fizz': i % 5 === 0 ? 'Buzz' : i)
} */

/* 
  Write a program to
*/

// for (let i = 0; i < 8; i++) {
//   for (let j = 0; j < 8; j++) {
//     if(i % 2 == 0 && j % 2 !==0) {
//       process.stdout.write('#')
//     }

//     if(i % 2 !== 0 && j % 2 ==0) {
//       process.stdout.write('#')
//     }

//     process.stdout.write(' ');
//   }
//   console.log('');
// }

// or

let result = ""
for (let i = 0; i < 8; i++) {
  for (let j =0; j < 8; j++) {
    result = (i + j) % 2 ? '#' : ' ';
  }
  console.log(result)
}
