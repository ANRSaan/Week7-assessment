

const isPangram = string => {

    //remove spaces and put all to lower case so as to ignore uppercase
    let newString = string.split(' ').join('').toLowerCase()

    //make an object of letters for simple lookup, using a string of the alphabet
    let stringMap = {}
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (i = 0; i < alphabet.length; i++){
        stringMap[alphabet[i]] = 0
    }

    //delete matching letters from the object per letter in string
    for (i = 0; i < newString.length; i++){
        if (newString[i] in stringMap){
            let letter = newString[i]
            delete stringMap[letter]
        }
    }

    //if the object is now empty (ie: all letters in the alphabet were used), return true
    if (Object.keys(stringMap).length === 0){
        return true
    } else {
        return false
    }

}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))