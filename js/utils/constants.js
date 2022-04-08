// Объект классов необходимый для запуса валидации
export const formClasses = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__input-error_active',
};


// Объект экземпляров класса FormValidator
export const formValidators = {};


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


// Экспорт переменных
export {
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
};
