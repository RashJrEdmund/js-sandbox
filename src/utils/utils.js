async function wait(time = 1000) {
  // to wait.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('success');
    }, time);
  });
};

export {
  wait,
};
