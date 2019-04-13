'use strict';

let money,
    time;

money = +prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', new Date().toISOString().slice(0, 10));

let appData = {
    money: money,
    time: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let expensesAnswer1,
    expensesAnswer2;

expensesAnswer1 = prompt('Введите обязательную статью расходов в этом месяце', '');
appData.expenses[expensesAnswer1] = prompt('Во сколько обойдется?', '');

expensesAnswer2 = prompt('Введите обязательную статью расходов в этом месяце еще раз', '');
appData.expenses[expensesAnswer2] = prompt('Во сколько обойдется?', '');

alert(`Бюджет ${appData.expenses[expensesAnswer1]/30} на 1 день для ${expensesAnswer1}\n
 и ${appData.expenses[expensesAnswer2]/30} на 1 день для ${expensesAnswer2}` );
