const palindrom = require('./palindroms')

test("identifies a palindrom word correctly", ()=>{
    var text = "arra"
    expect(palindrom(text)).toEqual("arra es un palíndromo")
})

test("identifies a non-palindrom word correctly", ()=>{
    var atext = "rra"
    expect(palindrom(atext)).toEqual("rra no un palíndromo")
})