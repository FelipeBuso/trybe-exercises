db.movies.createIndex({ subject: "text" });

db.movies.find(
  {
    description: { $regex: /^The/i }
  }
);