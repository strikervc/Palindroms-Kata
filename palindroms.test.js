const palindrom = require('./palindroms')

test("identifies correctly a palindrom word", ()=>{
    var text = "nada"
    expect(palindrom(text)).toEqual("nada es un palíndromo")
})