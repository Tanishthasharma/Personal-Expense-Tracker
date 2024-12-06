// import React from 'react'
// import {Chart as ChartJs,
//     CategoryScale, 
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     ArcElement
// } from 'chart.js';

// import {Line} from 'react-chartjs-2'

// ChartJs.register(
//     CategoryScale, 
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     ArcElement    
// )

// function Chart() {
    
// 29 Function Chart() {
//     const {incomes, expenses} = useGlobalContext();

//         const data = {
//           labels: incomes.map((inc) =>{
//             const {date} = inc
//             return dateFormat(date)
//         }),
//         datasets: [
//         {
//         label: 'Income',
//         data:[
//         ...incomes.map((income) => {
//         const {amount} = income
//         return amount
//         })
//     ],
//     backgroundColor:'green'
//     tension: .2
//     },
//     {
//         label: 'Expenses',
//         data:[
//         ...expenses.map((expense) => {
//         const {amount} = expense
//         return amount
//         })
//     ],
//     backgroundColor:'red'
//     tension: .2
//     }
//   ]
// }
//   return (
//     <div>
//       <Line data={data}/>
//     </div>
//   )
// }

//  const ChartStyled =styled.div`
// background: #FCF6F9;
// border: 2px solid #FFFFFF;
// box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
// padding: 1rem;
// border-radius: 20px; 
// height: 100%;
//  `

// export default Chart;


import React from 'react';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext'; // Ensure this is correctly imported

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

function Chart() {
    const { incomes, expenses } = useGlobalContext();

    // Ensure `dateFormat` is a valid function. You can implement it like below if not already done.
    const dateFormat = (date) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    const data = {
        labels: incomes.map((inc) => {
            const { date } = inc;
            return dateFormat(date); // Format the date
        }),
        datasets: [
            {
                label: 'Income',
                data: incomes.map((income) => income.amount), // Map over income amounts
                backgroundColor: 'green',
                tension: 0.2,
                borderColor: 'green',
                fill: false,
            },
            {
                label: 'Expenses',
                data: expenses.map((expense) => expense.amount), // Map over expense amounts
                backgroundColor: 'red',
                tension: 0.2,
                borderColor: 'red',
                fill: false,
            },
        ],
    };

    return (
        <ChartStyled>
            <Line data={data} />
        </ChartStyled>
    );
}

const ChartStyled = styled.div`
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart;
