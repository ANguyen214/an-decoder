// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let alphaArray = ['a','b','c','d','e',
                    'f','g','h','i','j',
                    'k','l','m','n','o',
                    'p','q','r','s','t',
                    'u','v','w','x','y','z'];
  function dupliCheck(alphabet)
  {
    let setMethod = new Set(alphabet);
    return(setMethod.size === 26);
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let cipher = new Object();
    let codeString = "";

    if(!dupliCheck(alphabet))
      {
        return false;
      }

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

    const cipherKeys = Object.keys(cipher);

    for(let i = 0; i < input.length; i++)
      {
        if(input[i] == " ")
          {
            codeString += input[i];
          }
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
