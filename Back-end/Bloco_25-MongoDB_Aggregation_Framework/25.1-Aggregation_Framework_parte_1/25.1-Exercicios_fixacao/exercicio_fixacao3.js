db.transactions.aggregate(
  [
    { $match: { value: { $gt: 1000 } } },
    { $limit: 3 },
  ]
);