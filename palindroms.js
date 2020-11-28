function isPalindrom(word){
    let chain = word.split("")
    let reverse = chain.reverse();
    return word==reverse.join("") ? word + " es un palíndromo" : word + " no es un palíndromo"
}

module.exports = isPalindrom