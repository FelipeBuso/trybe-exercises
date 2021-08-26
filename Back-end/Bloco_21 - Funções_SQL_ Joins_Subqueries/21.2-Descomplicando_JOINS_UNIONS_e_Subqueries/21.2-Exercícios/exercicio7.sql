SELECT
	M.title,
	(	
		SELECT BO.rating
		FROM Pixar.BoxOffice AS BO
        WHERE M.id = BO.movie_id
	) as rating
FROM Pixar.Movies AS M
WHERE M.year > 2009;

SELECT M.title, BO.rating
FROM Pixar.Movies M
INNER JOIN Pixar.BoxOffice BO
ON M.id = BO.movie_id
WHERE M.year > 2009;
