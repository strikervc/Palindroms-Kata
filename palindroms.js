function isPalindrom(word){
    let stringChain = word.split("")
    let reversedChain = stringChain.reverse();
    return word==reversedChain.join("") ? word + " es un palíndromo" : word + " no es un palíndromo"
}

module.exports = isPalindrom