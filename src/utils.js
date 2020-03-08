export const filterTransactionsByMonth = (transactionData, selectedMonth) =>
  transactionData.filter(
    t => new Date(t.transactionDate * 1000).getMonth() + 1 === selectedMonth
  );

export const sumOfTransactions = transactionsArr => {
  let runningTotal = 0;

  transactionsArr.map(t =>
    t.purchases.map(p => (runningTotal += p.price * p.quantity))
  );
  return runningTotal;
};

export const calculatePoints = transactionAmount =>
  Math.floor(
    Math.max(0, transactionAmount - 50) + Math.max(0, transactionAmount - 100)
  );

const months = ['January', 'February', 'March'];
export const simpleMonthConverter = monthNum => months[monthNum - 1];
