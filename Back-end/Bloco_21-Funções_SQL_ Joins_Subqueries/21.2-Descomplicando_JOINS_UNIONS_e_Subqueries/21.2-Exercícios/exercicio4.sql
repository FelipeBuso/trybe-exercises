SELECT T.*, M.*
FROM Pixar.Theater T
LEFT JOIN Pixar.Movies M
ON T.id = M.theater_id
ORDER BY T.name;
