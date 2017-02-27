//palindrome

console.log ('palindrome');

function palindrome (str){
  var forward = str;
  var splitString = str.split("");
  var reverse = splitString.reverse();
  var backward = reverse.join("");

  if(forward === backward) {
    return true;
  } else {
    return false;
  }


}

console.log(palindrome('racecar'));
console.log(palindrome('race'));

//dashInsert

console.log ('dashInsert');

function dashInsert (num){
  var split = num.toString().split('');
  // console.log(split)

  for (var i=0; i < split.length; i++) {
    // console.log (split[i]);
    if (split[i]%2 != 0 && split[i+1]%2 != 0 && i<split.length-1){
      split[i] = split[i] + '-';
    }else {
      split[i] = split[i];
    }

    // if (split[i]%2 == 0){
    //   split[i] = split[i];
    // }else {
    //   split[i] = split[i] + '-';
    // }
  } return split.join('');
}

console.log(dashInsert(454793));

// Bonus Ceasar Cipher Shiftj

console.log('Bonus Ceasar Cipher Shift');

function caesarCipher (str,n){

}

console.log(caesarCipher('Caesar Cipher',2))
