const palindrom = require('./palindroms')

test('identifies correctly a palindrom', () =>{
    var text = "oso";  
    expect(palindrom(text)).toEqual("oso es un palíndromo")

})

test('identifies correctly a non-palindrom word', ()=>{
    var anothertext = "animal";
    expect(palindrom(anothertext)).toEqual("animal no es un palíndromo")
})