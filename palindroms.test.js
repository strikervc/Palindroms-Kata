const { test } = require('@jest/globals')
const palindrom = require('./palindroms')

test('identifies correctly a palindrom', () =>{
    var text = "oso"
    expect(palindrom(text)).toEqual("oso es un palíndromo")
 
})