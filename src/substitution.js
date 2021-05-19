// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  //alphaArray will be the main data set being used in this function. -AN
  let alphaArray = ['a','b','c','d','e',
                    'f','g','h','i','j',
                    'k','l','m','n','o',
                    'p','q','r','s','t',
                    'u','v','w','x','y','z'];

  //dupliCheck uses the set method to remove duplicates and check if there
  //still exists 26 characters in the alphabet parameter. -AN
  function dupliCheck(alphabet)
  {
    let setMethod = new Set(alphabet);
    return(setMethod.size === 26);
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    //cipher is an empty object which will hold key value pairs with alphaArray values set
    //as the key, and incoming alphabet values as the values. -AN
    let cipher = new Object();
    let codeString = "";

    //Returns false if dupliCheck helper function returns false. -AN
    if(!dupliCheck(alphabet))
      {
        return false;
      }

    //This for loop creates keys and values depending on boolean value of encode. 
    //If it is true, alphaArray will be the key and alphabet will be its values
    //and vice versa if encode is false. -AN
    for(let i = 0; i < alphabet.length; i++)
      {
        if(encode)
          {
            cipher[alphaArray[i]] = alphabet[i];
          }
        else
          {
            cipher[alphabet[i]] = alphaArray[i];
          }
      }

    //Creates an array with only keys in cipher. -AN
    const cipherKeys = Object.keys(cipher);

    //This for loop accumulates the appropriate values into codeString. -AN
    for(let i = 0; i < input.length; i++)
      {
        //If input at index i is a space it will be added as it is. -AN
        if(input[i] == " ")
          {
            codeString += input[i];
          }
        //If input at index i is not a space, the key will be found in cipherKeys
        //and will then be used to find the value located within cipher. Values
        //are then accumulated into codeString and returned. -AN
        else
          {
            findKey = cipherKeys.find((keyVar) => keyVar === input[i]);
            codeString += cipher[findKey];
          }
      }
    return codeString;
  }

  return {
    substitution, dupliCheck,
  };
})();


module.exports = { substitution: substitutionModule.substitution };
