// // import React, { useEffect } from 'react'
// // import styled from 'styled-components';
// // import { InnerLayout } from '../../styles/Layouts';
// // import { dollar } from '../../utils/icons';
// // import { useGlobalContext } from '../../context/globalContext';
// // import History from '../History/History';
// // import Chart from '../Chart/Chart';


// // function Dashboard() {
// //   const {totalExpense,incomes, expenses, totalIncome , totalBalance,getIncome,getExpense} = useGlobalContext();

// //   useEffect(() =>{
// //     getExpense();
// //     getIncome();
// //   },[]);

// //   return (
// //     <DashboardStyled>
// //     <InnerLayout>     
// //     <h1>All Transactions</h1>
// //       <div className="stats-con">
// //         <div className="chart-con">
// //           <Chart />
// //           <div className='amount-con'>
// //                 <div className='income'>
// //                     <h2>Total Income</h2>
// //                     <p>
// //                       {dollar} {totalIncome()}
// //                     </p>
// //                 </div>
// //                 <div className='expense'>
// //                     <h2>Total Expense</h2>
// //                     <p>
// //                      {dollar} {totalExpense()}
// //                     </p>
// //                 </div>
// //                 <div className='balance'>
// //                     <h2>Total Balane</h2>
// //                     <p>
// //                      {dollar} {totalExpense()}
// //                     </p>
// //                 </div>
// //           </div>
// //         </div>
// //         <div className='history-con'>
// //              <History/>
// //             <div className='salary-title'>
// //                Min
// //                <span>
// //                   Salary
// //                </span>
// //                Max
// //             </div>
// //             <div className='salary-item'>
// //               <p>
// //                   {Math.min(...incomes.map(item => item.amount))}
// //               </p>
// //               <p>
// //                   {Math.max(...incomes.map(item => item.amount))}
// //               </p>
// //             </div>

// //             <div className='salary-title'>
// //                Min
// //                <span>
// //                   Expense
// //                </span>
// //                Max
// //             </div>
// //             <div className='salary-item'>
// //               <p>
// //                   {Math.min(...expenses.map(item => item.amount))}
// //               </p>
// //               <p>
// //                   {Math.max(...expenses.map(item => item.amount))}
// //               </p>
// //             </div>

// //         </div>
// //       </div>
// //     </InnerLayout>
// //     </DashboardStyled>
// //   )
// // }

// // const DashboardStyled = styled.div`
// //     .stats-con{
// //     display: grid;
// //     grid-template-columns: repeat (5, 1fr);
// //     gap: 2rem;
// //      .chart-con{
// //       grid-column: 1 / 4;
// //       height: 400px;
// //           .amount-con{
// //           display: grid;
// //           grid-template-columns: repeat (4, 1fr);
// //           gap: 2rem;
// //           margin-top: 2rem;
// //           .income, .expense{
// //               grid-column:span 2;
// //             }              
// //       .income, .expense, .balance{
// //       background: #FCF6F9;
// //       border: 2px solid #FFFFFF;
// //       box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
// //       border-radius: 20px;
// //       padding: 1rem;
// //       P{
// //       font-size: 3.5rem; 
// //       font-weight: 700;
// //       }
// //    }
      
// //     .balance{
// //         grid-column: 2 / 4; 
// //         display: flex;
// //         flex-direction: column;
// //         justify-content: center;
// //         align-items: center;
// //         p{
// //         color: var(--color-green);
// //         opacity: 0.6;
// //         font-size: 4.5rem;
// //           }
// //        }
// //     }

    
// //     .history-con{
// //       grid-column: 4 / -1;
// //         h2{
// //           margin: 1rem ;
// //           display: flex;
// //           align-items: center;
// //           justify-content: space-between;
// //         }
// //       .salary-title{
// //         font-size: 1.2rem;
// //           span{
// //           font-size: 1.8rem;
// //         }
          
// //         .salary-item{
// //         background: #FCF6F9;
// //         border: 2px solid #FFFFFF;
// //         box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
// //         padding: 1rem;
// //         border-radius: 20px;
// //         display: flex;
// //         justify-content: space-between;
// //         align-items: center;
// //         p{
// //           font-weight: 600;
// //           font-size: 1.6rem;
// //         }
// //   }
// // }
// // `;
// // export default Dashboard


// import React, { useEffect } from 'react';
// import styled from 'styled-components';
// import { InnerLayout } from '../../styles/Layouts';
// import { dollar } from '../../utils/icons';
// import { useGlobalContext } from '../../context/globalContext';
// import History from '../History/History';
// import Chart from '../Chart/Chart';

// function Dashboard() {
//   const { totalExpense, incomes, expenses, totalIncome, totalBalance, getIncome, getExpense } = useGlobalContext();

//   useEffect(() => {
//     getExpense();
//     getIncome();
//   }, []);

//   const minIncome = incomes.length > 0 ? Math.min(...incomes.map(item => item.amount)) : 0;
//   const maxIncome = incomes.length > 0 ? Math.max(...incomes.map(item => item.amount)) : 0;
//   const minExpense = expenses.length > 0 ? Math.min(...expenses.map(item => item.amount)) : 0;
//   const maxExpense = expenses.length > 0 ? Math.max(...expenses.map(item => item.amount)) : 0;

//   return (
//     <DashboardStyled>
//       <InnerLayout>
//         <h1>All Transactions</h1>
//         <div className="stats-con">
//           <div className="chart-con">
//             <Chart />
//             <div className='amount-con'>
//               <div className='income'>
//                 <h2>Total Income</h2>
//                 <p>{dollar} {totalIncome()}</p>
//               </div>
//               <div className='expense'>
//                 <h2>Total Expense</h2>
//                 <p>{dollar} {totalExpense()}</p>
//               </div>
//               <div className='balance'>
//                 <h2>Total Balance</h2>
//                 <p>{dollar} {totalBalance()}</p>
//               </div>
//             </div>
//           </div>
//           <div className='history-con'>
//             <History />
//             <div className='salary-title'>
//               Min <span>Salary</span> Max
//             </div>
//             <div className='salary-item'>
//               <p>{minIncome}</p>
//               <p>{maxIncome}</p>
//             </div>
//             <div className='salary-title'>
//               Min <span>Expense</span> Max
//             </div>
//             <div className='salary-item'>
//               <p>{minExpense}</p>
//               <p>{maxExpense}</p>
//             </div>
//           </div>
//         </div>
//       </InnerLayout>
//     </DashboardStyled>
//   );
// }

// // const DashboardStyled = styled.div`
// //   .stats-con {
// //     display: grid;
// //     grid-template-columns: repeat(5, 1fr);
// //     gap: 2rem;
    
// //     .chart-con {
// //       grid-column: 1 / 4;
// //       height: 400px;

// //       .amount-con {
// //         display: grid;
// //         grid-template-columns: repeat(4, 1fr);
// //         gap: 2rem;
// //         margin-top: 2rem;

// //         .income, .expense {
// //           grid-column: span 2;
// //         }

// //         .income, .expense, .balance {
// //           background: #FCF6F9;
// //           border: 2px solid #FFFFFF;
// //           box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
// //           border-radius: 20px;
// //           padding: 1rem;
          
// //           p {
// //             font-size: 3.5rem;
// //             font-weight: 700;
// //           }
// //         }

// //         .balance {
// //           grid-column: 2 / 4;
// //           display: flex;
// //           flex-direction: column;
// //           justify-content: center;
// //           align-items: center;

// //           p {
// //             color: var(--color-green);
// //             opacity: 0.6;
// //             font-size: 4.5rem;
// //           }
// //         }
// //       }
// //     }

// //     .history-con {
// //       grid-column: 4 / -1;

// //       h2 {
// //         margin: 1rem;
// //         display: flex;
// //         align-items: center;
// //         justify-content: space-between;
// //       }

// //       .salary-title {
// //         font-size: 1.2rem;
// //         span {
// //           font-size: 1.8rem;
// //         }
// //       }

// //       .salary-item {
// //         background: #FCF6F9;
// //         border: 2px solid #FFFFFF;
// //         box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
// //         padding: 1rem;
// //         border-radius: 20px;
// //         display: flex;
// //         justify-content: space-between;
// //         align-items: center;

// //         p {
// //           font-weight: 600;
// //           font-size: 1.6rem;
// //         }
// //       }
// //     }
// //   }
// // `;

// const DashboardStyled = styled.div`
//   h1 {
//     text-align: center;
//     font-size: 2.5rem;
//     margin-bottom: 2rem;
//     color: #333;
//   }

//   .stats-con {
//     display: grid;
//     grid-template-columns: 3fr 2fr;
//     gap: 3rem;
//     align-items: start;

//     .chart-con {
//       background: #fff;
//       border-radius: 12px;
//       padding: 2rem;
//       box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
//       position: relative;

//       .amount-con {
//         display: grid;
//         grid-template-columns: repeat(3, 1fr);
//         gap: 1.5rem;
//         margin-top: 2rem;

//         .income, .expense, .balance {
//           background: #f9f9f9;
//           border-radius: 12px;
//           padding: 1.5rem;
//           text-align: center;
//           transition: transform 0.3s ease;

//           &:hover {
//             transform: translateY(-5px);
//           }

//           h2 {
//             font-size: 1.2rem;
//             font-weight: 600;
//             margin-bottom: 1rem;
//             color: #666;
//           }

//           p {
//             font-size: 2.5rem;
//             font-weight: 700;
//             color: #333;
//           }
//         }

//         .income {
//           border-left: 5px solid #4caf50;
//         }

//         .expense {
//           border-left: 5px solid #f44336;
//         }

//         .balance {
//           border-left: 5px solid #2196f3;
//         }

//         .balance p {
//           color: #2196f3;
//         }
//       }
//     }

//     .history-con {
//       background: #fff;
//       border-radius: 12px;
//       padding: 2rem;
//       box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

//       .salary-title {
//         font-size: 1.4rem;
//         font-weight: 600;
//         margin-bottom: 1.5rem;
//         color: #666;
//         display: flex;
//         justify-content: space-between;
//       }

//       .salary-item {
//         background: #f9f9f9;
//         border-radius: 12px;
//         padding: 1rem;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         margin-bottom: 1.5rem;
//         box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);

//         p {
//           font-weight: 600;
//           font-size: 1.4rem;
//           color: #333;
//         }

//         &:hover {
//           box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
//         }
//       }
//     }
//   }

//   @media (max-width: 768px) {
//     .stats-con {
//       grid-template-columns: 1fr;
//     }

//     .chart-con {
//       margin-bottom: 2rem;
//     }
//   }
// `;


// export default Dashboard;


// import React, { useEffect } from 'react';
// import styled from 'styled-components';
// import { InnerLayout } from '../../styles/Layouts';
// import { dollar } from '../../utils/icons';
// import { useGlobalContext } from '../../context/globalContext';
// import History from '../History/History';
// import Chart from '../Chart/Chart';

// function Dashboard() {
//   const { totalExpense, incomes, expenses, totalIncome, totalBalance, getIncome, getExpense } = useGlobalContext();

//   useEffect(() => {
//     getExpense();
//     getIncome();
//   }, []);

//   const minIncome = incomes.length > 0 ? Math.min(...incomes.map(item => item.amount)) : 0;
//   const maxIncome = incomes.length > 0 ? Math.max(...incomes.map(item => item.amount)) : 0;
//   const minExpense = expenses.length > 0 ? Math.min(...expenses.map(item => item.amount)) : 0;
//   const maxExpense = expenses.length > 0 ? Math.max(...expenses.map(item => item.amount)) : 0;

//   return (
//     <DashboardStyled>
//       <InnerLayout>
//         <h1>All Transactions</h1>
//         <div className="stats-con">
//           <div className="chart-con">
//             <Chart />
//             <div className='amount-con'>
//               <div className='income'>
//                 <h2>Total Income</h2>
//                 <p>{dollar} {totalIncome()}</p>
//               </div>
//               <div className='expense'>
//                 <h2>Total Expense</h2>
//                 <p>{dollar} {totalExpense()}</p>
//               </div>
//               <div className='balance'>
//                 <h2>Total Balance</h2>
//                 <p>{dollar} {totalBalance()}</p>
//               </div>
//             </div>
//           </div>
//           <div className='history-con'>
//             {/* <h2>Recent Transactions</h2> */}
//             <History />
//             <div className='salary-section'>
//               <div className='salary-title'>
//                 <span>Min Salary:</span>
//                 <p>{minIncome}</p>
//               </div>
//               <div className='salary-title'>
//                 <span>Max Salary:</span>
//                 <p>{maxIncome}</p>
//               </div>
//               <div className='salary-title'>
//                 <span>Min Expense:</span>
//                 <p>{minExpense}</p>
//               </div>
//               <div className='salary-title'>
//                 <span>Max Expense:</span>
//                 <p>{maxExpense}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </InnerLayout>
//     </DashboardStyled>
//   );
// }

// // const DashboardStyled = styled.div`
// //   h1 {
// //     text-align: center;
// //     font-size: 2.5rem;
// //     margin-bottom: 2rem;
// //     color: #2c3e50;
// //   }

// //   .stats-con {
// //     display: grid;
// //     grid-template-columns: 3fr 2fr;
// //     gap: 2rem;
// //     align-items: start;

// //     .chart-con {
// //       background: #ffffff;
// //       border-radius: 12px;
// //       padding: 1.5rem;
// //       box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
// //       position: relative;

// //       .amount-con {
// //         display: grid;
// //         grid-template-columns: repeat(3, 1fr);
// //         gap: 1rem;
// //         margin-top: 1rem;

// //         .income, .expense, .balance {
// //           border-radius: 10px;
// //           padding: 1.2rem;
// //           text-align: center;
// //           transition: transform 0.3s ease, box-shadow 0.3s ease;
// //           background-color: #f9f9f9;
// //           border: 1px solid #e0e0e0;

// //           &:hover {
// //             transform: translateY(-2px);
// //             box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
// //           }

// //           h2 {
// //             font-size: 1.2rem;
// //             font-weight: 500;
// //             color: #34495e;
// //           }

// //           p {
// //             font-size: 2rem;
// //             font-weight: 700;
// //             color: #2980b9;
// //           }
// //         }

// //         .income {
// //           border-left: 5px solid #27ae60;
// //         }

// //         .expense {
// //           border-left: 5px solid #c0392b;
// //         }

// //         .balance {
// //           border-left: 5px solid #2980b9;
// //         }
// //       }
// //     }

// //     .history-con {
// //       background: #ffffff;
// //       border-radius: 12px;
// //       padding: 2rem;
// //       box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

// //       h2 {
// //         margin-bottom: 1.5rem;
// //         font-size: 1.6rem;
// //         font-weight: 600;
// //         color: #2c3e50;
// //         border-bottom: 2px solid #e0e0e0;
// //         padding-bottom: 0.5rem;
// //       }

// //       .salary-section {
// //         display: grid;
// //         grid-template-columns: repeat(2, 1fr);
// //         gap: 1rem;
// //         margin-top: 1rem;

// //         .salary-title {
// //           background: #f9f9f9;
// //           border-radius: 10px;
// //           padding: 1rem;
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: center;
// //           box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);

// //           span {
// //             font-weight: 500;
// //             font-size: 1.2rem;
// //             color: #34495e;
// //           }

// //           p {
// //             font-weight: 700;
// //             font-size: 1.4rem;
// //             color: #2980b9;
// //           }
// //         }
// //       }
// //     }
// //   }

// //   @media (max-width: 768px) {
// //     .stats-con {
// //       grid-template-columns: 1fr;
// //     }
// //   }
// // `;



// export default Dashboard;

// import React, { useEffect } from 'react';
// import styled from 'styled-components';
// import { InnerLayout } from '../../styles/Layouts';
// import { dollar } from '../../utils/icons';
// import { useGlobalContext } from '../../context/globalContext';
// import History from '../History/History';
// import Chart from '../Chart/Chart';

// function Dashboard() {
//   const { totalExpense, incomes, expenses, totalIncome, totalBalance, getIncome, getExpense } = useGlobalContext();

//   useEffect(() => {
//     getExpense();
//     getIncome();
//   }, []);

//   const minIncome = incomes.length > 0 ? Math.min(...incomes.map(item => item.amount)) : 0;
//   const maxIncome = incomes.length > 0 ? Math.max(...incomes.map(item => item.amount)) : 0;
//   const minExpense = expenses.length > 0 ? Math.min(...expenses.map(item => item.amount)) : 0;
//   const maxExpense = expenses.length > 0 ? Math.max(...expenses.map(item => item.amount)) : 0;

//   return (
//     <DashboardStyled>
//       <InnerLayout>
//         <h1>All Transactions</h1>
//         <div className="stats-con">
//           <div className="chart-con">
//             <Chart />
//             <div className="amount-con">
//               <div className="income-card">
//                 <h2>Total Income</h2>
//                 <p>{dollar} {totalIncome()}</p>
//               </div>
//               <div className="expense-card">
//                 <h2>Total Expense</h2>
//                 <p>{dollar} {totalExpense()}</p>
//               </div>
//               <div className="balance-card">
//                 <h2>Total Balance</h2>
//                 <p>{dollar} {totalBalance()}</p>
//               </div>
//             </div>
//           </div>
//           <div className="history-con">
//             <History />
//             <div className="salary-section">
//               <h3>Salary</h3>
//               <div className="min-max">
//                 <p>Min: {minIncome}</p>
//                 <p>Max: {maxIncome}</p>
//               </div>
//             </div>
//             <div className="expense-section">
//               <h3>Expense</h3>
//               <div className="min-max">
//                 <p>Min: {minExpense}</p>
//                 <p>Max: {maxExpense}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </InnerLayout>
//     </DashboardStyled>
//   );
// }

// const DashboardStyled = styled.div`
//   h1 {
//     text-align: center;
//     font-size: 2.5rem;
//     margin-bottom: 2rem;
//     color: #333;
//   }

//   .stats-con {
//     display: grid;
//     grid-template-columns: 3fr 2fr;
//     gap: 3rem;
//     align-items: start;

//     .chart-con {
//       background: #fff;
//       border-radius: 12px;
//       padding: 2rem;
//       box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
//       position: relative;

//       .amount-con {
//         display: grid;
//         grid-template-columns: repeat(3, 1fr);
//         gap: 1.5rem;
//         margin-top: 2rem;

//         .income-card, .expense-card, .balance-card {
//           background-color: #f0f0f0;
//           border-radius: 10px;
//           padding: 1rem;
//           text-align: center;
//           box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
//         }

//         // .income-card {
//         //   border-left: 5px solid #009688; /* Teal for income */
//         // }

//         // .expense-card {
//         //   border-left: 5px solid #ff5722; /* Deep orange for expense */
//         // }

//         // .balance-card {
//         //   border-left: 5px solid #4caf50; /* Green for balance */
//         // }
//       }
//     }

//     .history-con {
//       background: #fff;
//       border-radius: 12px;
//       padding: 2rem;
//       box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

//       .salary-section, .expense-section {
//         border-bottom: 1px solid #ccc;
//         padding-bottom: 1rem;
//       }

//       .min-max {
//         display: flex;
//         justify-content: space-between;
//       }
//     }
//   }

//   @media (max-width: 768px) {
//     .stats-con {
//       grid-template-columns: 1fr;
//     }

//     .chart-con {
//       margin-bottom: 2rem;
//     }
//   }
// `;

// export default Dashboard;
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/icons';
import { useGlobalContext } from '../../context/globalContext';
import History from '../History/History';
import Chart from '../Chart/Chart';

function Dashboard() {
  const { totalExpense, incomes, expenses, totalIncome, totalBalance, getIncome, getExpense } = useGlobalContext();

  useEffect(() => {
    getExpense();
    getIncome();
  }, []);

  const minIncome = incomes.length > 0 ? Math.min(...incomes.map(item => item.amount)) : 0;
  const maxIncome = incomes.length > 0 ? Math.max(...incomes.map(item => item.amount)) : 0;
  const minExpense = expenses.length > 0 ? Math.min(...expenses.map(item => item.amount)) : 0;
  const maxExpense = expenses.length > 0 ? Math.max(...expenses.map(item => item.amount)) : 0;

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <Card className="income-card">
                <h2>Total Income</h2>
                <p>{dollar} {totalIncome()}</p>
              </Card>
              <Card className="expense-card">
                <h2>Total Expense</h2>
                <p>{dollar} {totalExpense()}</p>
              </Card>
              <Card className="balance-card">
                <h2>Total Balance</h2>
                <p>{dollar} {totalBalance()}</p>
              </Card>
            </div>
          </div>
          <div className="history-con">
            <History />
            <div className="salary-section">
              <h3>Salary</h3>
              <div className="min-max">
                <p>Min: <span className="min">{minIncome}</span></p>
                <p>Max: <span className="max">{maxIncome}</span></p>
              </div>
            </div>
            <div className="expense-section">
              <h3>Expense</h3>
              <div className="min-max">
                <p>Min: <span className="min">{minExpense}</span></p>
                <p>Max: <span className="max">{maxExpense}</span></p>
              </div>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const Card = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const DashboardStyled = styled.div`
  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #333;
  }

  .stats-con {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 3rem;
    align-items: start;

    .chart-con {
      background: #fff;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
      position: relative;

      .amount-con {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        margin-top: 2rem;
      }
    }

    .history-con {
      background: #fff;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

      .salary-section, .expense-section {
        border-bottom: 1px solid #ccc;
        padding-bottom: 1rem;
      }

      .min-max {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .min {
    color: #ff5722; // Red for minimum values
  }

  .max {
    color: #4caf50; // Green for maximum values
  }

  @media (max-width: 768px) {
    .stats-con {
      grid-template-columns: 1fr;
    }

    .chart-con {
      margin-bottom: 2rem;
    }
  }
`;

export default Dashboard;


// import React, { useEffect } from 'react';
// import styled from 'styled-components';
// import { InnerLayout } from '../../styles/Layouts';
// import { dollar } from '../../utils/icons';
// import { useGlobalContext } from '../../context/globalContext';
// import History from '../History/History';
// import Chart from '../Chart/Chart';

// function Dashboard() {
//   const { totalExpense, incomes, expenses, totalIncome, totalBalance, getIncome, getExpense } = useGlobalContext();

//   useEffect(() => {
//     getExpense();
//     getIncome();
//   }, []);

//   const minIncome = incomes.length > 0 ? Math.min(...incomes.map(item => item.amount)) : 0;
//   const maxIncome = incomes.length > 0 ? Math.max(...incomes.map(item => item.amount)) : 0;
//   const minExpense = expenses.length > 0 ? Math.min(...expenses.map(item => item.amount)) : 0;
//   const maxExpense = expenses.length > 0 ? Math.max(...expenses.map(item => item.amount)) : 0;

//   return (
//     <DashboardStyled>
//       <InnerLayout>
//         <h1>All Transactions</h1>
//         <div className="stats-con">
//           <div className="chart-con">
//             <Chart />
//             <div className='amount-con'>
//               <div className='income'>
//                 <h2>Total Income</h2>
//                 <p>{dollar} {totalIncome()}</p>
//               </div>
//               <div className='expense'>
//                 <h2>Total Expense</h2>
//                 <p>{dollar} {totalExpense()}</p>
//               </div>
//               <div className='balance'>
//                 <h2>Total Balance</h2>
//                 <p>{dollar} {totalBalance()}</p>
//               </div>
//             </div>
//           </div>
//           <div className='history-con'>
//             <History />
//             <div className='salary-title'>
//               Min <span>Salary</span> Max
//             </div>
//             <div className='salary-item'>
//               <p>{minIncome}</p>
//               <p>{maxIncome}</p>
//             </div>
//             <div className='salary-title'>
//               Min <span>Expense</span> Max
//             </div>
//             <div className='salary-item'>
//               <p>{minExpense}</p>
//               <p>{maxExpense}</p>
//             </div>
//           </div>
//         </div>
//       </InnerLayout>
//     </DashboardStyled>
//   );
// }

// const DashboardStyled = styled.div`
//   h1 {
//     text-align: center;
//     font-size: 2.5rem;
//     margin-bottom: 2rem;
//     color: #333;
//   }

//   .stats-con {
//     display: grid;
//     grid-template-columns: 3fr 2fr;
//     gap: 3rem;
//     align-items: start;

//     .chart-con {
//       background: #fff;
//       border-radius: 12px;
//       padding: 2rem;
//       box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
//       position: relative;

//       .amount-con {
//         display: grid;
//         grid-template-columns: repeat(3, 1fr);
//         gap: 1.5rem;
//         margin-top: 2rem;

//         .income, .expense, .balance {
//           background: #f9f9f9;
//           border-radius: 12px;
//           padding: 1.5rem;
//           text-align: center;
//           transition: transform 0.3s ease;

//           &:hover {
//             transform: translateY(-5px);
//           }

//           h2 {
//             font-size: 1.2rem;
//             font-weight: 600;
//             margin-bottom: 1rem;
//             color: #666;
//           }

//           p {
//             font-size: 2.5rem;
//             font-weight: 700;
//             color: #333;
//           }
//         }

//         .income {
//           border-left: 5px solid #4caf50;
//         }

//         .expense {
//           border-left: 5px solid #f44336;
//         }

//         .balance {
//           border-left: 5px solid #2196f3;
//         }

//         .balance p {
//           color: #2196f3;
//         }
//       }
//     }

//     .history-con {
//       background: #fff;
//       border-radius: 12px;
//       padding: 2rem;
//       box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

//       h2 {
//         margin-bottom: 1.5rem;
//         font-size: 1.5rem;
//         color: #666;
//       }

//       .salary-title {
//         font-size: 1.2rem;
//         margin: 1rem 0;

//         span {
//           font-size: 1.8rem;
//           font-weight: 600;
//           color: #333;
//         }
//       }

//       .salary-item {
//         background: #f9f9f9;
//         border-radius: 12px;
//         padding: 1rem;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         margin-bottom: 1.5rem;

//         p {
//           font-size: 1.6rem;
//           font-weight: 600;
//           color: #333;
//         }
//       }
//     }
//   }
// `;

// export default Dashboard;

// import React from 'react';

// const Dashboard = () => {
//   const transactions = [
//     { description: 'Salary', amount: '+$2,000', type: 'income' },
//     { description: 'Rent', amount: '-$700', type: 'expense' },
//     { description: 'Freelance', amount: '+$500', type: 'income' },
//     { description: 'Groceries', amount: '-$150', type: 'expense' },
//     { description: 'Gym Membership', amount: '-$50', type: 'expense' }
//   ];

//   const dashboardStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gap: '20px',
//     padding: '40px',
//     backgroundColor: '#f5f7fa',
//     minHeight: '100vh',
//     boxSizing: 'border-box',
//   };

//   const cardStyle = {
//     backgroundColor: '#ffffff',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     padding: '20px',
//     textAlign: 'center',
//     transition: 'transform 0.3s ease',
//   };

//   const cardHoverStyle = {
//     ...cardStyle,
//     transform: 'translateY(-10px)',
//   };

//   const cardTitleStyle = {
//     fontSize: '24px',
//     color: '#495057',
//     marginBottom: '20px',
//   };

//   const cardAmountStyle = {
//     fontSize: '32px',
//     color: '#343a40',
//     fontWeight: 'bold',
//     margin: 0,
//   };

//   const transactionHistoryStyle = {
//     gridColumn: 'span 3',
//     backgroundColor: '#ffffff',
//     borderRadius: '8px',
//     padding: '20px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     marginTop: '20px',
//   };

//   const transactionItemStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: '15px 0',
//     borderBottom: '1px solid #ddd',
//   };

//   const transactionItemLastStyle = {
//     borderBottom: 'none',
//   };

//   const incomeStyle = {
//     color: '#28a745',
//     fontWeight: 'bold',
//   };

//   const expenseStyle = {
//     color: '#dc3545',
//     fontWeight: 'bold',
//   };

//   const transactionTitleStyle = {
//     fontSize: '20px',
//     color: '#495057',
//     marginBottom: '20px',
//   };

//   return (
//     <div style={dashboardStyle}>
//       {/* Financial summary cards */}
//       <div style={cardStyle}>
//         <h2 style={cardTitleStyle}>Total Income</h2>
//         <p style={cardAmountStyle}>$5,000</p>
//       </div>
//       <div style={cardStyle}>
//         <h2 style={cardTitleStyle}>Total Expense</h2>
//         <p style={cardAmountStyle}>$2,500</p>
//       </div>
//       <div style={cardStyle}>
//         <h2 style={cardTitleStyle}>Net Balance</h2>
//         <p style={cardAmountStyle}>$2,500</p>
//       </div>

//       {/* Transaction History */}
//       <div style={transactionHistoryStyle}>
//         <h3 style={transactionTitleStyle}>Recent Transactions</h3>
//         {transactions.map((transaction, index) => (
//           <div
//             style={{
//               ...transactionItemStyle,
//               ...(index === transactions.length - 1 ? transactionItemLastStyle : {}),
//             }}
//             key={index}
//           >
//             <span>{transaction.description}</span>
//             <span
//               style={transaction.type === 'income' ? incomeStyle : expenseStyle}
//             >
//               {transaction.amount}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

