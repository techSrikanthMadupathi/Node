# Node

Node Js
	1) node.js.org
	2) download node js
	3) vs code editor

Node package manager is used to have js lib from npm

-------------------------------------------

create app.js with console.log("hello world");=> node app.js
-----------------------------------------------
Global and Process Object

global it is like window object
__ dirname it gives directory name
__filename it gives file name path

process it givess compelte information of node and env

1) process.argv
2)process.stdout.write("Srikanth")

from cmd write and read in  js file 

process.stdin.on('data', data => { 
    process.stdout.write(`you wrote ${data}`);
    process.exit();
});
-----------------------------------------------

const num = Math.floor(Math.random() * 10) + 1;
process.stdout.write("Guess the number from 1 to 10");
process.stdin.on('data', data=> { 
    let guess = data;
    process.stdout.write(`your guess is ${guess}`);
    if (guess == num) {
        process.stdout.write(`correct guess`);
        process.exit();
    } else { 
        process.stdout.write(`wrong guess ${guess} try again`);
    }
});

-----------------------------------------------