#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let score = 100;
let play = true;

async function guessingNum() {
  

  while (play) {
    score = score - 1;

    let randomNumber = Math.floor(Math.random() * 100);

    let input = await inquirer.prompt([
      {
        name: "usernumber",
        type: "number",
        message: "Enter any Number 1 to 100",
      },
    ]);

    

    if (input.usernumber === randomNumber) {
      console.log(
        chalk.blackBright("congratulation, You guesse the correct number. ")
      );
      console.log(
        chalk.greenBright(
          `You guess the actual number in ${100 - score} chances.`
        )
      );
      play = false;
    } else if (input.usernumber > randomNumber && input.usernumber < 100) {
      console.log(chalk.red("Your number is greater than actual number"));
    } else if (input.usernumber < randomNumber && input.usernumber > 0) {
      console.log(
        chalk.redBright("Your number is smaller then actual number.")
      );
    }
  }
}

guessingNum();
