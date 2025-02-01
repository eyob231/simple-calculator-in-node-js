process.stdin.on('data',(chunk) => {
    const input=chunk.toString().trim();
    if(input==='exit'){
        console.log("Exiting the calculator");
        process.exit();
    }
    try{
        const value=eval(input);
        console.log('Result: ',value);
    }catch(exception){
        console.log('Invalid expression: ',exception.message);
    }
     process.stdout.write('Enter the formula: ');

    //process.stdin.pause();
});
process.stdout.write('Enter the formula: ');

