var fs = require('fs')
var readline = require('readline')

function isPalindrom(word){
    let stringChain = word.split("")
    let reversedChain = stringChain.reverse();
    return word==reversedChain.join("") ? word + " es un palíndromo" : word + " no es un palíndromo"
}

var reader = readline.createInterface({
    input: fs.createReadStream('wordlist.txt')
})

reader.on('line', function(line){
    console.log(isPalindrom(line))
})

module.exports = isPalindrom