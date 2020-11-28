const palindrom = require('./palindroms')

test("identifies a palindrom word correctly", ()=>{
    var text = "arra"
    expect(palindrom(text)).toEqual("arra es un palíndromo")
})