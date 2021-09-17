db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transacoes"
    }
  },
  { $limit: 4 }
]);