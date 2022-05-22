function incrementString (string) {
  
  for(let i = 0; i < string.length; i++) {
    //when char is not a number
    if(!isNaN(parseInt(string.charAt(i)))) {
      //get word half of string
      const wordStr = string.substring(0, i);
      //get num half of string
      const  numStr = string.substring(i);
      //increment num
      const num = parseInt(numStr) + 1;
      //fill the front with zeroes
      let zeros = '';
      for(let j = 0; j < numStr.length - num.toString().length; j++) {
        zeros += '0';
      }
      //concat results
      const result = wordStr + zeros + num.toString();
      return result;
    }
  }
  //if no numbers add 1 
  return string + '1';
}
