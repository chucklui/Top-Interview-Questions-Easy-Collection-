/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Input: x = 123
Output: 321

Input: x = -123
Output: -321

Input: x = 120
Output: 21
*/

function reverseInteger(num){
  let result = '';
  let sign;
  if(num < 0){
    sign = '-';
    num = -(num);
  }
  while(num > 0){
    let remainder = num % 10;
    result += remainder.toString();
    num = Math.trunc(num / 10);
  }
  if(sign){
    result = Number(sign + result);
  }else{
    result = Number(result);
  }

  return result >= ((-2)**31) && result <= ((2**31)-1) ? result : 0;
}

const input = 123;
console.log(reverseInteger(input))