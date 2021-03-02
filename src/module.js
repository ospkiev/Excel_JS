function sleep(time = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {resolve()}, time);
  });
};
async function start() {
  console.log('1');
  await sleep(3000);
  console.log('2');
};

start();