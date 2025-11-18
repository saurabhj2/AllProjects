const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+"];

function GeneratePassword(no_digit=10,addNumber=false,addChar=false) {
  let password = [];
  let finalPassword = "";
  for (let i = 0; i <= no_digit; i++) {
    password.push(letters[Math.floor(Math.random() * (letters.length - 1))]);
    if(addNumber){
      password.push(numbers[Math.floor(Math.random() * (numbers.length - 1))]);
    }
    if(addChar){
      password.push(symbols[Math.floor(Math.random() * (symbols.length - 1))]);
    }

  }
  for(let i=1;i<=no_digit;i++){
    finalPassword+=password[i];
  }
  return finalPassword;
}

export default GeneratePassword;
