

const sumZero = nums => {

    // define variables
    let numsMap = {}
    let zeroCount = 0
    for (i = 0; i < nums.length; i++){

        /*create an object to search through so as not to nest "for" loops later,
        since searching an object is O(1) complexity.
        I'm setting the value to null, because it doesn't matter what the value is;
        we're only using the key*/
        numsMap[nums[i]] = null

        //while looping the initial loop, check if 2 numbers are 0 in order to return true faster
        if (nums[i] === 0){
            zeroCount++
            if (zeroCount === 2){
                return true
            }
        }
    }

    //loop over the array again and check if their counterpart is in the object we created earlier
    for (i = 0; i < nums.length; i++){
        //this checks if the absolute value of a negative number exists in the object, and returns true if it does
        if (Math.sign(nums[i]) === -1){
            if (Math.abs(nums[i]) in numsMap){
                return true
            }
        } 
        //this checks if a number is positive, and then checks if a numer equal to (0 - num) is in the object
        /*technically only one of these if statements is neccessary, 
        but checking both positive and negative numbers allows the program to find 
        a true state faster, if one exists */
        else if (Math.sign(nums[i]) === 1){
            if ((0 - (nums[i])) in numsMap){
                return true
            }
        }
    }
    //this returns false if all other cases fail
    return false
}

console.log(sumZero([1,2,0,3,4,-2,5,6,7])) // 2 and -2
console.log(sumZero([1,2,0,3,4,2,5,6,7])) // none
console.log(sumZero([1,2,0,3,4,0,5,6,7])) // 0 and 0
