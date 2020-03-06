import {getTransactionData} from './transactionData';

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
