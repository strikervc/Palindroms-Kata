const palindrom = require('./palindroms')

test("identifies correctly a palindrom word", ()=>{
    var text = "ada"
    expect(palindrom(text)).toEqual("ada es un palíndromo")
})


test("identifies correctly a non-palindrom word", ()=>{
    var text = "nada"
    expect(palindrom(text)).toEqual("nada no es un palíndromo")
})