const generator = require('generate-password');

const password = generator.generate({
    length: 5
    
})

console.log(password);