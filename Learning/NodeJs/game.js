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