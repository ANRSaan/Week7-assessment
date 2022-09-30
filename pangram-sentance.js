

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

/*the time complexity of this program is O(n), since we have to do a loop,
but we avoid O(n^2) complexity by using an object to search if we've used a letter*/

/*the space complexity of this program is also O(n), 
because the space is dependent on looping over the string */