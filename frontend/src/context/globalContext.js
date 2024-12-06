import React, { createContext, useContext, useState } from "react";
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = createContext();

export const GlobalProvider = ({children})=>{
    const[incomes, setIncomes] = useState([]);
    const[expenses, setExpenses] = useState([]);
    const[error, setError] = useState(null);

    const addIncome = async (income) => {
        try {
            const response = await axios.post(`${BASE_URL}add-income`, income); // Fixed string interpolation
            // Handle the response as needed, for example:
            setIncomes((prevIncomes) => [...prevIncomes, response.data]);
            //console.log('helo');
           // console.log('response hei',response.data);
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred");
        }
        getIncome();
    };

    const getIncome = async() =>{
        const response = await axios.get(`${BASE_URL}get-incomes`);
        setIncomes(response.data);
         console.log(response.data);
    }


    const deleteIncome = async (id) => {
        try {
            const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
            getIncome();
            //setIncomes((prevIncomes) => prevIncomes.filter(income => income._id !== id));
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred");
        }
    }
    
    const totalIncome = () =>{
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome =  totalIncome + income.amount
        })

        return totalIncome;
    }

     console.log('total',totalIncome());

     const addExpense = async (expense) => {
        try {
            const response = await axios.post(`${BASE_URL}add-expense`, expense); // Fixed string interpolation
            // Handle the response as needed, for example:
            setExpenses((prevExpenses) => [...prevExpenses, response.data]);
            //console.log('helo');
           // console.log('response hei',response.data);
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred");
        }
        getExpense();
    };

    const getExpense = async() =>{
        const response = await axios.get(`${BASE_URL}get-expenses`);
        setExpenses(response.data);
         console.log(response.data);
    }

    const deleteExpense = async (id) => {
        try {
            const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
            getExpense();
          
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred");
        }
    }
    
    const totalExpense = () =>{
        let totalExpense = 0;
        expenses.forEach((expense) => {
            totalExpense =  totalExpense + expense.amount
        })

        return totalExpense;
    }

     const totalBalance = () =>{
        return totalIncome() - totalExpense();
     }
    
      const transactionHistory = () =>{
        const history = [...incomes, ...expenses]
        history.sort((a,b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history.slice(0,3);
      }
    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncome,
            incomes,   // Expose incomes so other components can use it
            deleteIncome,
            totalIncome,
            addExpense,
            expenses,
            getExpense,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext= () =>{
    return useContext(GlobalContext);
}