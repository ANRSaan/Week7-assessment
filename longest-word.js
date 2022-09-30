

const find_longest_word = arr => {
    longest = 0
    for (i = 0 ; i < arr.length; i++){
        length = arr[i].length

        if (length > longest){
            longest = length
        }
    }
    return longest
}

console.log(find_longest_word(["hi", "hello"]))
console.log(find_longest_word(["it", "was", "the", "best", "of", "fgnorgs"]))
console.log(find_longest_word(["the", "sky", "was", "the", "color", "of", "television", "tuned", "to", "a", "dead", "channel"]))

//the space complexity of this program is O(n), since we have to do a loop.