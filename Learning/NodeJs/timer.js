const timer = 5000;
const outputInterval = 1000;
let val = 0;
process.stdout.write(`${timer / outputInterval} sec delay \n`);

const ready = () => { process.stdout.write(`ready`);clearInterval(mysetIntrvalt) }

const counter = () => { val++; process.stdout.write(`${(timer / outputInterval)-val}`); }

const mysetIntrvalt=setInterval(counter,outputInterval);
const mysetTimeout=setTimeout(ready,timer);