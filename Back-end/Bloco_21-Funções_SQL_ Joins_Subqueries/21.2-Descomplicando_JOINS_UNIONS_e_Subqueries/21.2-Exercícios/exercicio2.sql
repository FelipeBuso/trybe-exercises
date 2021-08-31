SELECT M.title, BO.domestic_sales, BO.international_sales
FROM Pixar.Movies M
INNER JOIN Pixar.BoxOffice BO
ON M.id = BO.movie_id
WHERE BO.international_sales > BO.domestic_sales;
