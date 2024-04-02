const bubbleSort = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;

      if (arr[i] < arr[j]) { // doing < works buh I honestly do not get why < instead of >.
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
};

const arrToSort = [3, 4, 1, 2, 5];

console.log(bubbleSort([...arrToSort]));
