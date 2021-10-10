db.movies.find(
  { 
    $and: [
      { category: { $in: ["adventure", "family"] } },
      { ratings: { $size: 4} },
      { imdbRating: {$not: { $lt: 7 } } },
    ]
  }
);