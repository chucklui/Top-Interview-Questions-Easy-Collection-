/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
*/

const plusOne = function(digits) {
  if(digits.length === 1){
    if(digits[0] === 9){
      digits[0] = 0;
      digits.unshift(1);
    }else{
      digits[0]++;
    }
    return digits;
  }
    
  let carry = 0;
  for(let i=digits.length-1; i>=0; i--){
    if(i === 0 && carry === 1 && digits[i] === 9){
        digits[i] = 0;
        digits.unshift(1);
        return digits;
    }
    if(digits[i] === 9){
      carry = 1;
      digits[i] = 0;
    }else{
      digits[i]++;
      break;
    }
      
  }
    return digits;
};
