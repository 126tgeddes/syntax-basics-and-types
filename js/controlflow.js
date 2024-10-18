// variables and block scope
const ag = 30;

if(true){
    const age = 40;
    const name = 'shaun';
    console.log('inside 1st code block: ', age, name);
    
    if(true){
        const age = 50;
        console.log('inside 1st code block: ', age);
    }
}

console.log('outside code block: ', age, name, test);
