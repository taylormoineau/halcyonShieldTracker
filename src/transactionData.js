// Assuming the shape of the data was a database/API request that returned an array of transactions from a specific user.
//It's an array of John Smith's transactions. For each transaction it lists his purchases and their prices, ids, etc.

export const getTransactionData = () => [
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
        itemId: 3249,
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
        itemName: 'Eggplant',
        price: 59.3,
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
        itemId: 88930,
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
        itemId: 9301,
        itemName: 'Pizza Slice',
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
