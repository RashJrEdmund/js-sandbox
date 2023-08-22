const fibb = (num) => {
  if(num < 2) {
    return num;
  }
  
  return fibb(num - 1) + fibb(num - 2);
}

const printFibb = (num) => {
  for (let i = 0; i < num; i++) {
    console.log(fibb(i));
  }
}

printFibb(10);
