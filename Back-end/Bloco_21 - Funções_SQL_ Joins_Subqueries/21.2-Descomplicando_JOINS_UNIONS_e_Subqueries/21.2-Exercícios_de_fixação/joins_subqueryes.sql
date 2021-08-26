-- Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
SELECT a.first_name, a.last_name, f.title
from sakila.actor a
INNER JOIN sakila.film f
INNER JOIN sakila.film_actor fa
ON a.actor_id = fa.actor_id
AND f.film_id = fa.film_id;

-- Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .
SELECT c.customer_id, c.first_name, c.last_name, c.email, a.address_id, a.address
FROM sakila.customer c
INNER JOIN sakila.address a
on c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

-- Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
SELECT f1.film_id, f1.replacement_cost, f2.film_id, f2.replacement_cost
from sakila.film AS f1, sakila.film AS f2
WHERE f1.replacement_cost = f2.replacement_cost;

-- Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
SELECT f1.title, f1.rental_duration, f2.title, f2.rental_duration
from sakila.film AS f1, sakila.film AS f2
WHERE f1.rental_duration = f2.rental_duration
AND f1.rental_duration BETWEEN 2 AND 4;

-- odos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor , exibindo apenas o nome e o sobrenome . Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
(SELECT first_name, last_name FROM sakila.actor)
UNION ALL
(SELECT first_name, last_name FROM sakila.staff);

