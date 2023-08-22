const nVowels = (phrase) => {
  let charArr = phrase.toLowerCase().split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = charArr.reduce((acc, currentValue) => {
    if(vowels.includes(currentValue)) acc++;
    return acc;
  }, 0)
  return vowelCount;
}

console.log(nVowels('i am a man'))

const isPrime = (num) => {
  if(num <= 1) return false;
  for(let i= 2; i< Math.floor(Math.sqrt(num)); i++) {
    if(num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(4));
