const printHello = () => {
  console.log('Hello!');
};


const executeAfterDelay = (time, callFunction) => {
  console.log(setTimeout(callFunction, (time * 1000)));
}

executeAfterDelay(5, printHello);

