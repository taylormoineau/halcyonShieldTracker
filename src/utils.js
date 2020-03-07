export const filterTransactionsByMonth = (transactionData, selectedMonth) => {
  const filterTransactions = (monthStart, monthEnd) =>
    transactionData.filter(t => {
      if (t.transactionDate >= monthStart && t.transactionDate <= monthEnd) {
        return t;
      }
    });

  switch (selectedMonth) {
    case 1:
      return filterTransactions(1577858400, 1580536799);
    case 2:
      return filterTransactions(1580536800, 1583042399);
    case 3:
      return filterTransactions(1583042400, 1585717199);
  }
};

export const sumOfTransactions = transactionsArr => {
  let runningTotal = 0;

  transactionsArr.map(t => {
    t.purchases.map(p => {
      runningTotal += p.price * p.quantity;
    });
  });
  return runningTotal;
};

export const calculatePoints = transactionAmount =>
  Math.floor(
    Math.max(0, transactionAmount - 50) + Math.max(0, transactionAmount - 100)
  );
