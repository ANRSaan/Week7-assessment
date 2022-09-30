

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

/*the time complexity of this program is O(n), since we have to do a loop.
It almost looks like it should be O(n^2), since we're also looping over each string
in the array, but I don't believe it is, since all that does is effectively the same
thing as looping an array of each individual letter in every string in the first array,
which is still O(n)*/

/*the space complexity of this program is also O(n), 
because the space is dependent on looping over the array, as noted above*/