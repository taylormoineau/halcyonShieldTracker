//All of the functions used for calculations or filtering transacitons.

//Filters transaction by month based on params of webpage.

export const filterTransactionsByMonth = (transactionData, selectedMonth) =>
  transactionData.filter(
    t => new Date(t.transactionDate * 1000).getMonth() + 1 === selectedMonth
  );

//Function to sum an array of transactions sent to it.

export const sumOfTransactions = transactionsArr => {
  let runningTotal = 0;

  transactionsArr.map(t =>
    t.purchases.map(p => (runningTotal += p.price * p.quantity))
  );
  return runningTotal;
};

//Calculates the points, give it a dollar amount.

export const calculatePoints = transactionAmount =>
  Math.floor(
    Math.max(0, transactionAmount - 50) + Math.max(0, transactionAmount - 100)
  );

//Month converter for simplicity's sake. I wanted to change the params intuitively with 1, 2, 3.. etc. This will take that number
//and return the string of the month for anywhere you will need it. Since this app only has need of 3 months it only has 3.

const months = ['January', 'February', 'March'];
export const simpleMonthConverter = monthNum => months[monthNum - 1];
