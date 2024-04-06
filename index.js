const CategoryExpense = require("./models/categories_expense");
const CategoryIncome = require("./models/categories_income");

const mysql = require("./db/config_mysql");

new_record_expense = new CategoryExpense(1, "Продукты",new Date());
new_record_income = new CategoryIncome(1, "ЗП_РАУ",new Date());

new_record_expense.print_info_category();
new_record_income.print_info_category();


