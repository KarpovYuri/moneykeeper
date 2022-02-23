const startBtn = document.querySelector('#start');
const budget = document.querySelector('#budget');
const dayBudget = document.querySelector('#daybudget');
const level = document.querySelector('#level');
const expenses = document.querySelector('#expenses');
const additionalExpenses = document.querySelector('#additionalexpenses');
const income = document.querySelector('#income');
const monthSavings = document.querySelector('#monthsavings');
const yearSavings = document.querySelector('#yearsavings');

const expensesItems = document.querySelectorAll('.expenses-item');
const additionalExpensesItems = document.querySelectorAll('.additional-item');
const expensesBtn = document.querySelectorAll('.data__btn')[0];
const additionalExpensesBtn = document.querySelectorAll('.data__btn')[1];
const countBtn = document.querySelectorAll('.data__btn')[2];
const incomeItem = document.querySelector('#choose-income');
const checkSavings = document.querySelector('#savings');
const sumValue = document.querySelector('#sum');
const percentValue = document.querySelector('#percent');
const year = document.querySelector('#year');
const month = document.querySelector('#month');
const day = document.querySelector('#day');

let money, time;

expensesBtn.disabled = true;
additionalExpensesBtn.disabled = true;
countBtn.disabled = true;

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", "");
      let b = prompt("Во сколько обойдется?", "");
      if (typeof (a) === 'string' && typeof (a) != null && a != "" && typeof (b) != null && b != "" && a.length < 50) {
        appData.expenses[a] = b;
      } else {
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
      console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay >= 2000) {
      console.log("Это высокий уровень достатка!");
    } else {
      console.log("Ошибочка...!");
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?");
      let percent = +prompt("Под какой процент?");
      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i <= 3; i++) {
      let questionOptExpenses = prompt("Статья необязательных расходов?");
      appData.optionalExpenses[i] = questionOptExpenses;
      console.log(appData.optionalExpenses);
    }
  },
  chooseIncome: function () {
    let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
    if (typeof (items) != "string" || items == "" || typeof (items) == null) {
      console.log("Вы ввели некорректные данные или не ввели их вовсе");
    } else {
      appData.income = items.split(", ");
      appData.income.push(prompt("Может что-то еще?"));
      appData.income.sort();
    }
    appData.income.forEach(function (itemmassive, i) {
      alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
    });
  }
};

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}

//start();
