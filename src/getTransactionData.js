// Assuming the shape of the data was a database/API request that returned an array of transactions from a specific user.
//It's an array of John Smith's transactions. For each transaction it lists his purchases and their prices, ids, etc.

import {transactionData} from './transactionData';
import {data} from './data';

export const sumOfSeconds = () => {
  let runningTotal = 0;

  for (const t of data) {
    runningTotal += t.timeReqPer;
  }

  return runningTotal;
};

//Function to sum an array of transactions sent to it.

const sumOfTransactions = transactionsArr => {
  let runningTotal = 0;

  for (const t of transactionsArr) {
    for (const p of t.purchases) {
      runningTotal += p.price * p.quantity;
    }
  }
  return runningTotal;
};

//Calculates the points, give it a dollar amount.

const calculatePoints = transactionAmount =>
  Math.floor(
    Math.max(0, transactionAmount - 50) + Math.max(0, transactionAmount - 100)
  );

//Month converter for simplicity's sake. I wanted to change the params intuitively with 1, 2, 3.. etc. This will take that number
//and return the string of the month for anywhere you will need it. Since this app only has need of 3 months it only has 3.

const months = ['January', 'February', 'March'];
export const simpleMonthConverter = monthNum => months[monthNum - 1];

const awaitDatabaseResponse = milliseconds =>
  new Promise(resolve => setTimeout(resolve, milliseconds));

export const getTransactionData = async selectedMonth => {
  await awaitDatabaseResponse(500); // simulates waiting for the network/backend
  const transactionsFilteredByMonth = transactionData.filter(
    t => new Date(t.transactionDate * 1000).getMonth() + 1 === selectedMonth
  );
  const spent = sumOfTransactions(transactionsFilteredByMonth).toFixed(2);
  return {
    purchases: transactionsFilteredByMonth
      .flatMap(t => t.purchases.map(p => ({...t, ...p}))) // give an array of all purchases with their transaction data in the same object
      .sort((a, b) => a.transactionDate - b.transactionDate),
    spent,
    points: calculatePoints(spent),
    totalPoints: calculatePoints(sumOfTransactions(transactionData)),
    monthName: simpleMonthConverter(selectedMonth)
  };
};

export const getItemInfo = async itemId => {
  await awaitDatabaseResponse(500); // simulates waiting for the network/backend

  const matchId = p => p.itemId === itemId;
  const transaction = transactionData.find(d => d.purchases.some(matchId));
  const purchase = transaction.purchases.find(matchId);
  return {...transaction, ...purchase}; // combine transaction object with purchase object
};
