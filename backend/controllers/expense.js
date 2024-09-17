
const Expense = require('../models/ExpenseModel');
exports.addExpense = async (req, res) => {
    console.log(req.body); // Log request body to debug
    const { title, amount, category, description, date } = req.body;

    if (!title || !category || !description || !date) {
        return res.status(400).json({ message: 'All fields are required!' });
    }
    if (typeof amount !== 'number' || amount <= 0) {
        return res.status(400).json({ message: 'Amount must be a positive number' });
    }

    const expense = new Expense({
        title,
        amount,
        category,
        description,
        date
    });

    try {
        await expense.save();
        res.status(200).json({ message: 'Expense Added' });
    } catch (error) {
        console.error('Error adding expense:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    //console.log(income);
};

exports.getExpenses = async(req,res) =>{
  try {
     const expenses = await Expense.find().sort({createdAt : -1});
     res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({message: 'Server Error'})
  }
}

exports.deleteExpenses = async(req,res) =>{
    const {id} = req.params;
    console.log(req.params);
    Expense.findByIdAndDelete(id)
    .then((expense) =>{
       res.status(200).json({message : 'Expense Deleted'})
    })
     .catch((err) =>{
       res.status(200).json({message: 'Server Error'})
     })
  }
  
