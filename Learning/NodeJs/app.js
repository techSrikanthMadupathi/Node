let val="hello world for node js"
global.console.log(val);
console.log("it gives window/global object  "+ global);
console.log("it gives dir name "+__dirname);
console.log("it gives file name " + __filename);
console.log("--------------------------------");
console.log(process.argv);
const first = process.argv[2];
const last = process.argv[3];
let message = ` Hi ,${first}  _ ${last}`;
console.log(message);
console.log("--------------------------------");

const animalArr = ["tiger", "cat", "lion"];

const getAnimalName = (val = 0) => {
    process.stdout.write(`passed animal name is ${animalArr[val]} \n`)
};

getAnimalName(Math.floor(Math.random()*2));
console.log("--------------------------------");
process.stdout.write(`now u write some thing`);
process.stdin.on('data', data => { 
    process.stdout.write(`you wrote ${data}`);
    process.exit();
});

process.on('exit', data => {
    console.log('you exited ');
});

console.log("--------------------------------");