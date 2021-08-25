-- Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
SELECT COUNT(active)
FROM sakila.customer
GROUP BY active;

-- Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja , o status dos clientes (ativos ou inativos) e a quantidade de clientes por status .
SELECT store_id, active, count(active)
FROM sakila.customer
GROUP BY store_id, active
ORDER BY store_id;

-- Monte uma query que exiba a média de duração de locação por classificação indicativa ( rating ) dos filmes cadastrados na tabela sakila.film . Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating
ORDER BY AVG(length) DESC;

-- Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT district, COUNT(district)
FROM sakila.address
GROUP BY district
ORDER BY COUNT(district) DESC;

-- Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT district, COUNT(district)
FROM sakila.address
GROUP BY district
ORDER BY COUNT(district) DESC;

-- Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
SELECT rating, AVG(length) AS 'Médias duração ente 115 e 120.50'
FROM sakila.film
GROUP BY rating
HAVING AVG(length) BETWEEN 115.0 AND 121.50
ORDER BY AVG(length) DESC;

-- Usando a query a seguir, exiba apenas os valores de custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
SELECT rating, SUM(replacement_cost) AS 'Soma de custos de substituição acima de 3950.50'
FROM sakila.film
GROUP by rating
HAVING SUM(replacement_cost) > 3950.50
ORDER BY SUM(replacement_cost);
