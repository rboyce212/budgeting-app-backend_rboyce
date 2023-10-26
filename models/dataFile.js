const { v4: uuidv4 } = require("uuid");

const dataArray = [
  {
    id: uuidv4(),
    item_name: "Root Canal",
    amount: 26000,
    date: "2023-10-02",
    from: "dentist",
    category: "bills"
  },
  {
    id: uuidv4(),
    item_name: "Groceries",
    amount: 22700,
    date: "2023-10-04",
    from: "amazon fresh",
    category: "food"
  },
  {
    id: uuidv4(),
    item_name: "Netflix",
    amount: 2200,
    date: "2023-10-02",
    from: "dentist",
    category: "entertainment"
  },
  {
    id: uuidv4(),
    item_name: "MTA Pass",
    amount: 9400,
    date: "2023-10-05",
    from: "mta",
    category: "transportation"
  },
  {
    id: uuidv4(),
    item_name: "Dinner",
    amount: 600,
    date: "2023-10-05",
    from: "seamless",
    category: "food"
  },
  {
    id: uuidv4(),
    item_name: "Compression Socks",
    amount: 5296,
    date: "2023-10-06",
    from: "amazon",
    category: "personal"
  },
  {
    id: uuidv4(),
    item_name: "Misc Supplies",
    amount: 600,
    date: "2023-10-02",
    from: "cvs",
    category: "household"
  }
];

module.export = dataArray;
