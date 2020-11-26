const palindrom = require('./palindroms')

test('identifies correctly a palindrom', () =>{
    var text = "oso"
    var anothertext = "animal"
    expect(palindrom(text)).toEqual("oso es un palíndromo")
    expect(palindrom(anothertext)).toEqual("animal no es un palíndromo")
 
})