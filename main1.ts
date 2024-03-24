#! /usr/bin/env node 

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter  Your First Number : ", type: "number", name: "FirstName" },
  { message: "Enter Your Second Number : ", type: "number", name: "SecondName" },
  {
    message: "Operator : ",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if(answer.operator === "Addition"){
    console.log("Answer = ",answer.FirstName+answer.SecondName)
}
else if(answer.operator === "Subtraction"){
    console.log("Answer = ",answer.FirstName-answer.SecondName)
}
else if(answer.operator === "Multiplication"){
    console.log("Answer = ",answer.FirstName*answer.SecondName)
}
else if(answer.operator === "Division"){
    console.log("Answer = ",answer.FirstName/answer.SecondName)
}
else{
console.log("Invalid Entry")
}


