// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let alphaArray = ['a','b','c','d','e',
                    'f','g','h','i','j',
                    'k','l','m','n','o',
                    'p','q','r','s','t',
                    'u','v','w','x','y','z'];
  function caesar(input, shift, encode = true) {
    // your solution code here
    let codeString = "";
    if(!shift){
      shift = 0;
    }else if(shift < -25 || shift > 25){
      return false;
    }

    for(let i = 0; i < input.length; i++)
      {
        let asciiNum = input.toLowerCase().charCodeAt(i);
        if(asciiNum >= 97 && asciiNum <= 122)
          {
            let indexShift = alphaArray.indexOf(input[i].toLowerCase()) + shift;
            
            if(indexShift > 25)
              {
                indexShift = indexShift - 26; 
              }
            codeString = codeString + alphaArray[indexShift];
          }else {
            codeString += input[i];
          }
      }
      return codeString;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
