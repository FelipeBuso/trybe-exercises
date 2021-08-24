use sakila;
SELECT * FROM staff;
INSERT INTO staff (first_name, last_name, address_id, store_id, username)
VALUES ('Felipe', 'Buso', 5, 1, 'felipe');

INSERT INTO staff (first_name, last_name, address_id, store_id, username) VALUES
('teste1', 'sobrenome_teste1', 6, 1, 'teste1'),
('teste2', 'sobrenome_teste2', 7, 1, 'teste2');

SELECT * from actor;
SELECT * FROM customer;

INSERT INTO actor (first_name, last_name)
	SELECT customer.first_name, customer.last_name
    FROM customer
    LIMIT 5;
    
SELECT * FROM category;
INSERT INTO category (name) VALUES
('categoryA'),
('categoryB'),
('categoryC');

SELECT * FROM store;
INSERT INTO store (manager_staff_id, address_id)
values(3, 3);
    