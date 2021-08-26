SELECT M.title, BO.rating
FROM Pixar.Movies M
INNER JOIN Pixar.BoxOffice BO
ON M.id = BO.movie_id
ORDER BY BO.rating DESC;
