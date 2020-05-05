export const data = [
  {
    task: 'Hole Punch',
    stocked: 294,
    timeReqPer: 8000,
    createdPerHour: 450,
    multiplier: 3
  },
  {
    task: 'Cut Elastic',
    stocked: 392,
    timeReqPer: 2580,
    createdPerHour: 1125,
    multiplier: null
  },
  {
    task: 'Cap Elastic',
    stocked: 940,
    timeReqPer: 5500,
    createdPerHour: 655,
    multiplier: null
  },
  {
    task: 'Foam',
    stocked: 1190,
    timeReqPer: 10000,
    createdPerHour: 360,
    multiplier: null
  },
  {
    task: 'Snap 1',
    stocked: 994,
    timeReqPer: 8500,
    createdPerHour: 423,
    multiplier: null
  },
  {
    task: 'Snap 2',
    stocked: 200,
    timeReqPer: 10000,
    createdPerHour: 360,
    multiplier: null
  },
  {
    task: 'Clean',
    stocked: 10000,
    timeReqPer: 10500,
    createdPerHour: 343,
    multiplier: null
  }
];

export const assemblyInventory = [
  {item: 'Snaps', stocked: 50000},
  {item: 'Elastic', stocked: 30},
  {item: 'Blanks', stocked: 2400},
  {item: 'Foam', stocked: 230000}
];

export const smallInventory = [
  {item: 'Hand Sanitizer', stocked: 6, warning: 8},
  {item: 'Denatured Alcohol', stocked: 2, warning: 3},
  {item: 'Packing Rolls', stocked: 7, warning: 5},
  {item: 'Stickers', stocked: 6, warning: 10}
];

export const staff = [
  {name: 'Adam', hours: 40, phone: 123456, email: 'Adam@email.com'},
  {name: 'Rob', hours: 40, phone: 123456, email: 'Rob@email.com'},
  {name: 'Chase', hours: 40, phone: 123456, email: 'Chase@email.com'},
  {name: 'Macie', hours: 40, phone: 123456, email: 'Macie@email.com'},
  {name: 'Emma', hours: 40, phone: 123456, email: 'Emma@email.com'},
  {name: 'Stefan', hours: 20, phone: 123456, email: 'Stefan@email.com'},
  {name: 'Ryan', hours: 20, phone: 123456, email: 'Ryan@email.com'},
  {name: 'Zack', hours: 40, phone: 123456, email: 'Zack@email.com'},
  {name: 'Kyle', hours: 20, phone: 123456, email: 'Kyle@email.com'}
];

export const sumOfHours = arrayOfStaff => {
  let runningTotal = 0;

  for (const p of arrayOfStaff) {
    runningTotal += p.hours;
  }
  return runningTotal;
};
