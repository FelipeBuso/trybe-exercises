USE sakila;

CREATE VIEW film_info AS
SELECT A.actor_id,
CONCAT(A.first_name, ' ', A.last_name) AS 'actor',
(
	SELECT F.title 
    FROM sakila.film F
    WHERE F.film_id = FC.film_id
) AS 'titulo'
FROM sakila.actor A
INNER JOIN sakila.film_actor FC
ON A.actor_id = FC.actor_id
ORDER BY actor, titulo;


