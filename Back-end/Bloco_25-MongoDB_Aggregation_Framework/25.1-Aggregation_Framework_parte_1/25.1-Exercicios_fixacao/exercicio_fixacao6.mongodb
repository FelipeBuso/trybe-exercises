db.transactions.aggregate(
  [
    {
      $group: {
        _id: "$bank",
        total: { $sum: "$value" },
      },
    },
  ]
);