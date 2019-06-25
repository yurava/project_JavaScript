'use strict';





//var time;

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let rashod = prompt("Введите обязательную статью расходов в этом месяце");
let oboyd = prompt("Во сколько обойдется?");

let appData = {
    money: money,
    timeData: time,
    expenses: {
rashod : oboyd
    },
    optionalExpenses,
    income,
    savings: false
   };
alert(money/30);
console.log(appData["money"]);
console.log(appData["timeData"]);
