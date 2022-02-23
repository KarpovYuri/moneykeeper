let money, time;
let appData = {
  budget: money,
  expenses: {},
  additionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};


// Выбор кнопок

const startBtn = document.querySelector('#start');
const expensesBtn = document.querySelectorAll('.data__btn')[0];
const additionalExpensesBtn = document.querySelectorAll('.data__btn')[1];
const countBtn = document.querySelectorAll('.data__btn')[2];


// Выбор полей результатов

const budget = document.querySelector('#budget');
const dayBudget = document.querySelector('#daybudget');
const level = document.querySelector('#level');
const expenses = document.querySelector('#expenses');
const additionalExpenses = document.querySelector('#additionalexpenses');
const income = document.querySelector('#income');
const monthSavings = document.querySelector('#monthsavings');
const yearSavings = document.querySelector('#yearsavings');


// Выбор полей записи даты
const year = document.querySelector('#year');
const month = document.querySelector('#month');
const day = document.querySelector('#day');


// Выбор полей исходных данных
const expensesItems = document.querySelectorAll('.expenses-item');
const additionalExpensesItems = document.querySelectorAll('.additional-item');
const incomeItem = document.querySelector('#choose-income');
const checkSavings = document.querySelector('#savings');
const sumValue = document.querySelector('#sum');
const percentValue = document.querySelector('#percent');


// Переключение кнопок в состояние disabled

expensesBtn.disabled = true;
additionalExpensesBtn.disabled = true;
countBtn.disabled = true;


// Обработчик событий кнопки 'Начать расчет'

startBtn.addEventListener('click', () => {
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  money = +prompt("Ваш бюджет на месяц?", '');

  while (isNaN(money) || money == '' || money == null) {
    money = prompt("Ваш бюджет?", "");
  }
  appData.budget = money;
  appData.timeData = time;
  budget.textContent = money.toFixed();
  year.value = new Date(Date.parse(time)).getFullYear();
  month.value = new Date(Date.parse(time)).getMonth() + 1;
  day.value = new Date(Date.parse(time)).getDate();

  expensesBtn.disabled = false;
  additionalExpensesBtn.disabled = false;
  countBtn.disabled = false;
});


// Обработчик событий кнопки 'Утвердить' обязательные расходы

expensesBtn.addEventListener('click', () => {
  let sum = 0;
  for (let i = 0; i < expensesItems.length; i++) {
    let a = expensesItems[i].value,
      b = expensesItems[++i].value;

    if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
      appData.expenses[a] = b;
      sum += +b;
    } else {
      i = i - 1;
    }
    expenses.textContent = sum;
  }
});


// Обработчик событий кнопки 'Утвердить' необязательные расходы

additionalExpensesBtn.addEventListener('click', () => {
  for (let i = 0; i < additionalExpensesItems.length; i++) {
    let opt = additionalExpensesItems[i].value;
    appData.additionalExpenses[i] = opt;
    additionalExpenses.textContent += appData.additionalExpenses[i] + ' ';
  }
});


// Обработчик событий кнопки 'Рассчитать' дневной бюджет

countBtn.addEventListener('click', () => {
  if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - +expenses.textContent) / 30).toFixed();
    dayBudget.textContent = appData.moneyPerDay;
    if (appData.moneyPerDay < 100) {
      level.textContent = 'Минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      level.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      level.textContent = 'Высокий уровень достатка';
    } else {
      level.textContent = 'Произошла ошибка';
    }
  } else {
    dayBudget.textContent = 'Произошла ошибка';
  }
});


// Обработчик событий поля возможного дохода

incomeItem.addEventListener('input', () => {
  let items = incomeItem.value;
  if (isNaN(items) || items != '') {
    appData.income = items.split(',');
    income.textContent = appData.income;
  }
});


// Обработчик событий чекбокса

checkSavings.addEventListener("click", () => {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});


// Обработчик событий поля 'Сумма' накоплений

sumValue.addEventListener('input', () => {
  if (appData.savings == true) {
    let sum = +sumValue.value;
    let percent = +percentValue.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;
    monthSavings.textContent = appData.monthIncome.toFixed(1);
    yearSavings.textContent = appData.yearIncome.toFixed(1);
  }
});


// Обработчик событий поля 'Процент' накоплений

percentValue.addEventListener('input', () => {
  if (appData.savings == true) {
    let sum = +sumValue.value;
    let percent = +percentValue.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;
    monthSavings.textContent = appData.monthIncome.toFixed(1);
    yearSavings.textContent = appData.yearIncome.toFixed(1);
  }
});
