db.transactions.aggregate(
  [
    { 
      $match: {
        $and: [
          { value: { $gte: 700, $lte: 6000 } },
          { to: "Lisa Simpson" }
        ]
      }
    }
  ]
);