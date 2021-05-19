// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
  //This is the alphabet array I will be using in my caesar shift. -AN
  let alphaArray = ['a','b','c','d','e',
                    'f','g','h','i','j',
                    'k','l','m','n','o',
                    'p','q','r','s','t',
                    'u','v','w','x','y','z'];

  function caesar(input, shift, encode = true) {
    // your solution code here
    //Created an empty string which will accumulate my characters. -AN
    let codeString = "";

    //This checks for conditions and if any one of them are met
    //false will be returned. -AN
    if(!shift || shift === 0 || shift < -25 || shift > 25){
      return false;
    }
    
    //This for loop will allow me to iterate through each character 
    //of the input, shift appropriately, and accumulate characters 
    //into my empty string codeString. -AN
    for(let i = 0; i < input.length; i++)
      {
        //asciiNum stores the ascii value for each character. -AN
        let asciiNum = input.toLowerCase().charCodeAt(i);

        //indexShift initially finds and stores the index of a character
        //in the alphaArray. Each input is made lowercase before it can be
        //located in the alphaArray. -AN
        let indexShift = alphaArray.indexOf(input[i].toLowerCase())

        //By using ascii values I am able to ignore spaces and special characters. -AN
        if(asciiNum >= 97 && asciiNum <= 122)
          {
            //Ff encode is true, shift will be added and stored in indexShift. -AN
            if(encode)
              {
                indexShift += shift;
              }
            //If encode is false, shift will be subtracted and stored in indexShift. -AN
            else
              {
                indexShift -= shift;
              }

            //This allows for looping through alphaArray. -AN
            if(indexShift > 25)
              {
                indexShift = indexShift - 26; 
              }
            if(indexShift < 0)
              {
                indexShift = 26 + indexShift;
              }
            codeString += alphaArray[indexShift];
          }else {
            //If input at position i is a blank space or special character,
            //it will be added to the codeString as is. -AN
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
