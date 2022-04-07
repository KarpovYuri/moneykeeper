import PopupWithForm from "../js/components/PopupWithForm.js";


// Объявление переменных
export let money, time;


// Объявление объекта с данными
const appData = {
  budget: money,
  expenses: {},
  additionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};


// Импорт переменных
import {
  startBtn,
  expensesBtn,
  additionalExpensesBtn,
  countBtn,
  budget,
  dayBudget,
  level,
  expenses,
  additionalExpenses,
  income,
  monthSavings,
  yearSavings,
  year,
  month,
  day,
  expensesItems,
  additionalExpensesItems,
  incomeItem,
  checkSavings,
  sumValue,
  percentValue
} from '../js/utils/constants.js';


// Переключение кнопок в состояние disabled
expensesBtn.disabled = true;
additionalExpensesBtn.disabled = true;
countBtn.disabled = true;


// Создание эксземпляра класса popup'а
const popup = new PopupWithForm({
  popupSelector: '#popup-data',
  submitCallback: (data) => {
    time = data.date;
    money = +data.budget;
    appData.budget = money;
    appData.timeData = time;
    budget.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
    expensesBtn.disabled = false;
    additionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
    popup.closePopup();
  }
}
);


// Установка обработчика событий крестику, оверлею и кнопке submit popap'а
popup.setEventListeners();


// Обработчик событий кнопки 'Начать расчет'
startBtn.addEventListener('click', () => {
  popup.openPopup();
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
