// const {addIncome} = require('../controllers/income');

// const router = require('express').Router();    

// // router.get('/',(req,res) =>{
// //     res.send('Hello World')
// // })

// router.post('/add-income', addIncome);

// module.exports = router;


const express = require('express');
const { addIncome, deleteIncomes, getIncomes } = require('../controllers/income');
const { addExpense, getExpenses, deleteExpenses } = require('../controllers/expense');
const router = express.Router();

router.post('/add-income', addIncome)
  .get('/get-incomes', getIncomes)   //endPoint for getting
   .delete('/delete-income/:id', deleteIncomes) //getting in params
   .post('/add-expense', addExpense)
   .get('/get-expenses', getExpenses)   //endPoint for getting
   .delete('/delete-expense/:id', deleteExpenses) ;//getting in params
  module.exports = router;
