

const uniqueChars = word => {
    let wordMap = {}

    /*Loops over the word and checks to see if it exists in the object defined above.
    If it doesn't, it adds it to the object.  Like sum-zero.js, I'm using an object so that
    it is O(1) time complexity to search it, rather than using an array, 
    which would create an overall O(n^2) time complexity */
    for (i = 0; i < word.length; i++){
        if (word[i] in wordMap){
            return true
        }
        wordMap[word[i]] = null
    }

    return false
}

console.log(uniqueChars("Brian"))
console.log(uniqueChars("Mississippi"))