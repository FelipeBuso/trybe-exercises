USE sakila;
SELECT * FROM actor ORDER BY first_name;
UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

SELECT * FROM category;
UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

SELECT * FROM film
WHERE length > 100 
AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost > 20;

UPDATE film
SET rental_rate = 25.00
WHERE length > 100 
AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost > 20;

SELECT 
    *
FROM
    film;
UPDATE film
SET rental_rate = (
CASE 
	WHEN length BETWEEN 0 and 100 THEN 10.00
	WHEN length > 100 THEN 20.00
END);
            