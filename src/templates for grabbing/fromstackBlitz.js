//Assume the shape of the data is something like a database of users

const getTransactionData =  [
  {
    transactionId: 20165,
    transactionDate: 1578071968,
    customerId: 32,
    purchases: [
      {
        itemId: 62,
        itemName: 'Cat',
        price: 101.2,
        quantity: 2
      }
    ]
  },
  {
    transactionId: 21142,
    transactionDate: 1578590368,
    customerId: 32,
    purchases: [
      {
        itemId: 2039,
        itemName: 'Snack',
        price: 16.99,
        quantity: 1
      },
      {
        itemId: 62,
        itemName: 'Alienware Computer',
        price: 1293.83,
        quantity: 1
      }
    ]
  },
  {
    transactionId: 39165,
    transactionDate: 1579713568,
    customerId: 32,
    purchases: [
      {
        itemId: 593,
        itemName: 'Fish',
        price: 89.3,
        quantity: 1
      },
      {
        itemId: 4,
        itemName: 'Snail',
        price: 15.01,
        quantity: 13
      },
      {
        itemId: 9384,
        itemName: 'Reasonable purchase',
        price: 89.09,
        quantity: 1
      }
    ]
  },
  {
    transactionId: 48165,
    transactionDate: 1581106408,
    customerId: 32,
    purchases: [
      {
        itemId: 593,
        itemName: 'Fish',
        price: 89.3,
        quantity: 1
      },
      {
        itemId: 62,
        itemName: 'Cat',
        price: 101.2,
        quantity: 1
      },
      {
        itemId: 209,
        itemName: 'Another Random Item Name',
        price: 92.0,
        quantity: 3
      }
    ]
  },
  {
    transactionId: 48995,
    transactionDate: 1581873508,
    customerId: 32,
    purchases: [
      {
        itemId: 593,
        itemName: 'Cactus',
        price: 10.3,
        quantity: 2
      }
    ]
  },
  {
    transactionId: 49999,
    transactionDate: 1583086708,
    customerId: 32,
    purchases: [
      {
        itemId: 390,
        itemName: 'Cactus',
        price: 10.39,
        quantity: 2
      }
    ]
  },
  {
    transactionId: 51345,
    transactionDate: 1583687908,
    customerId: 32,
    purchases: [
      {
        itemId: 5493,
        itemName: 'Calendar from 2018',
        price: 15.0,
        quantity: 4
      },
      {
        itemId: 31,
        itemName: 'Spotted Dog',
        price: 1002.33,
        quantity: 1
      }
    ]
  }
];

const Jan = 1
const Feb = 2
const Mar = 3

const mapThrough = (transactionData, selectedMonth) => {

const totalSpentOnSelectMonth = (start, end) => {
    const filteredTransactionsByMonth = transactionData.filter((t) => {
      if (t.transactionDate >= start && t.transactionDate <= end){
        return t
      };
    })
    console.log(filteredTransactionsByMonth);
    let currentTotal = 0
    filteredTransactionsByMonth.map(t => {
      t["purchases"].map(p =>{
        currentTotal += (p.price * p.quantity)
        }
      )
    })

    return currentTotal
    }

  switch(selectedMonth) {
    case 1 :
    return totalSpentOnSelectMonth(1577858400, 1580536799);
    break;
    case 2 :
    return totalSpentOnSelectMonth(1580536800, 1583042399) 
    break;
    case 3 :
    return totalSpentOnSelectMonth(1583042400, 1585717199) 
    break;
  }



}


const calculatePoints = transactionAmount => {
  return (
    Math.max(0, transactionAmount - 50) + Math.max(0, transactionAmount - 100)
  );
  //   if (transactionAmount >= 50 && transactionAmount <= 100) {
  //     return transactionAmount-50
  //     }

  //     if (transactionAmount >= 100) {
  //         return (50 + ((transactionAmount - 100) * 2))}

  //  return 0
};

console.log("Money Spent on selected month" , mapThrough(getTransactionData,Jan))
console.log ("Points earned for this month", calculatePoints(mapThrough(getTransactionData,Jan)))