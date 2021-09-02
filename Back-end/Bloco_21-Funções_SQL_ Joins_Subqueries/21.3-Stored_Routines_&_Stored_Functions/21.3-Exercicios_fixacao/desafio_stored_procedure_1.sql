USE sakila;
DELIMITER $$

CREATE PROCEDURE dez_atores_mais_populares()
BEGIN
	SELECT DISTINCT actor_id AS 'Actor ID',
    (
    SELECT COUNT(FA2.film_id)
    FROM sakila.film_actor FA2
    WHERE FA1.actor_id = FA2.actor_id
    ) AS 'Total Films'
    FROM sakila.film_actor FA1
    ORDER BY `Total Films` DESC
    LIMIT 10;
END $$

DELIMITER ;
