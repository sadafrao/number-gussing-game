#!/user/bin/env node
import inquirer from "inquirer";
// 1 computer generate a rendom number
// 2 user input for gussing numbert 
// 3 compare user input with computer generate num and show result

const randomNumber = Math.floor(Math.random() * 6+1);
const answers = await inquirer.prompt([
    {
      name: "userGuessNumber",
      type : "number",
      message : "Guess your number",
},
]);
if(answers.userGuessNumber ===  randomNumber){
    console.log("congractulation You Guessed right number")
}else{
    console.log("Try again you Guessed Wrong number")
}

