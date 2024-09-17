

// exports.addIncome = async (req,res) =>{
//     //console.log(req.body);
//     const {title, amount, category, description, date} = req.body;

//     const income = IncomeSchema({
//         title,
//         amount,
//         category,
//         description,
//         date 
//     });

//     try{
//         if(!title || !category || !description || !date){
//             return res.status(400).json({message:'All fields are required!'});
//         }
//         if(amount <= 0 || !amount === 'number' ){
//             return res.status(400).json({message:'Amount must be positive'});
//         }
//         await income.save()
//         res.status(200).json({message: 'Income Added'})
//     } catch (error){

//     }
//     console.log(income)
// };


//Hey
//const Income = require('../models/IncomeModel');


// exports.addIncome = async (req, res) => {
//     console.log(req.body); // Log request body to debug
//     const { title, amount, category, description, date } = req.body;

//     if (!title || !category || !description || !date) {
//         return res.status(400).json({ message: 'All fields are required!' });
//     }
//     if (typeof amount !== 'number' || amount <= 0) {
//         return res.status(400).json({ message: 'Amount must be a positive number' });
//     }

//     const income = new IncomeSchema({
//         title,
//         amount,
//         category,
//         description,
//         date
//     });

//     try {
//         await income.save();
//         res.status(200).json({ message: 'Income Added' });
//     } catch (error) {
//         console.error('Error adding income:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };


const Income = require('../models/IncomeModel');
exports.addIncome = async (req, res) => {
    console.log(req.body); // Log request body to debug
    const { title, amount, category, description, date } = req.body;

    if (!title || !category || !description || !date) {
        return res.status(400).json({ message: 'All fields are required!' });
    }
    if (typeof amount !== 'number' || amount <= 0) {
        return res.status(400).json({ message: 'Amount must be a positive number' });
    }

    const income = new Income({
        title,
        amount,
        category,
        description,
        date
    });

    try {
        await income.save();
        res.status(200).json({ message: 'Income Added' });
    } catch (error) {
        console.error('Error adding income:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    //console.log(income);
};

exports.getIncomes = async(req,res) =>{
  try {
     const incomes = await Income.find().sort({createdAt : -1});
     res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({message: 'Server Error'})
  }
}

exports.deleteIncomes = async(req,res) =>{
    const {id} = req.params;
    console.log(req.parmas);
    Income.findByIdAndDelete(id)
    .then((income) =>{
       res.status(200).json({message : 'Income Deleted'})
    })
     .catch((err) =>{
       res.status(200).json({message: 'Server Error'})
     })
  }
  
