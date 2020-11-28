var fs = require('fs')
var readline = require('readline')

function isPalindrom(word){
    let chain = word.split("")
    let reverse = chain.reverse();
    return word==reverse.join("") ? word + " es un palíndromo" : word + " no es un palíndromo"
}

var reader = readline.createInterface({
    input: fs.createReadStream('wordlist.txt')
})

reader.on('line', function(line){
    console.log(isPalindrom(line))
})

module.exports = isPalindrom