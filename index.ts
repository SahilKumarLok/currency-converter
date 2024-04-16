#! /usr/bin/env node
import inquirer from "inquirer"

// the exchange rates are static
console.log("Welcome to the Currency Converter! This program will convert an amount from one currency to another using the exchange rates provided in the code. Please note that the exchange rates are static and may not be up-to-date. To get started, please select the currency you want to convert from and to, and enter the amount.");

// define the list of currencies and their exchange rates
let exchange_rate: any  = {
    "USD" : 1,
    "EUR" :0.9,
    "GBP" : 0.8,
    "JPY" : 113,
    "AUD" : 1.65,
    "CAD" : 1.3,
    "PKR" : 280,
    "CNY" : 0.75,
    //Add more currencies and their exchange rates here
};

// Promt the user to select currencies to convert and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from",
        choices: ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CNY", "PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert to",
        choices: ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CNY", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert",
    }
]);

// Perform currency conversion by using formula

let from_currency = exchange_rate[user_answer.from_currency];
let to_currency = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//formula of conversion

let base_amount = amount / from_currency;
let converted_amount = base_amount * to_currency; 

//display the converted amount
console.log(`Converted Amount = ${converted_amount}`);