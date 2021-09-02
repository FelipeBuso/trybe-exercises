USE sakila;

CREATE VIEW film_with_categories AS
SELECT F.title AS 'titulo',
(
	SELECT FC.category_id
    FROM sakila.film_category FC
    WHERE FC.film_id = F.film_id
) AS 'id_categoria',
(
	SELECT C.name
    FROM sakila.category C
    WHERE C.category_id = id_categoria
) AS 'nome_categoria'
FROM sakila.film F
ORDER BY titulo;

