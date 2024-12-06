// import React from 'react'
// import styled from 'styled-components'
// import { useGlobalContext } from '../../context/globalContext'

// function History() {
//    const {transactionHistory} =  useGlobalContext();

//    const [...history] = transactionHistory()
   
//   return (
//    <HistoryStyled>
//         <h2>Recent History</h2>
//         {history.map((item) => {
//             const {_id, title, amount, type} = item
//             return(
//                <div key={_id} className=' history-item'>
//                     <p style={{
//                         color:type === 'expense' ?'red' : 'var(--color-green)'
//                     }}>
//                         {title}
//                     </p>
//                     <p style={{
//                         color:type === 'expense' ?'red' : 'var(--color-green)'
//                     }}>
//                         {
//                             type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`
//                         }
//                     </p>
//                </div>
//             )
//         })}
//    </HistoryStyled>
//   )
// }

// const HistoryStyled = styled.div`
    
// 8
// 9
// const HistoryStyled
// display: flex;
// =
// style d.div
// flex-direction: column;
// gap: 1rem;
// 1
// .history-item
// {
//     background: #FCF6F9;
//     border: 2px solid #FFFFFF;
//     box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
//     padding: 1rem;
//     border-radius: 20px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// }
// `
// export default History

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';

function History() {
  const { transactionHistory } = useGlobalContext();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredHistory, setFilteredHistory] = useState([]);

  useEffect(() => {
    // Filter history based on selected category
    if (selectedCategory === 'All') {
      setFilteredHistory(transactionHistory);
    } else {
      setFilteredHistory(transactionHistory.filter(item => item.type === selectedCategory));
    }
  }, [selectedCategory, transactionHistory]);

  return (
    <HistoryStyled>
      <h2>Recent History</h2>
      {/* <div className="filter">
        <button onClick={() => setSelectedCategory('All')}>All</button>
        <button onClick={() => setSelectedCategory('income')}>Income</button>
        <button onClick={() => setSelectedCategory('expense')}>Expense</button>
      </div> */}
      {filteredHistory.map(item => {
        const { _id, title, amount, type } = item;
        return (
          <div key={_id} className="history-item">
            <p className="title" style={{ color: type === 'expense' ? 'red' : 'var(--color-green)' }}>
              {title}
            </p>
            <p className="amount" style={{ color: type === 'expense' ? 'red' : 'var(--color-green)' }}>
              {type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`}13
            </p>
          </div>
        );
      })}
    </HistoryStyled>
  );
}

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .filter {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;

    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: #007bff;
      color: white;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  .history-item {
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default History;
