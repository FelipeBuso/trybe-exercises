USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1 AS column1, 2 AS column2, 3 AS column3;
SELECT 10 + 15;
SELECT CONCAT('sum of 10 + 15 is ', 10 + 15);
SELECT * FROM Scientists;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;
SELECT Name FROM Scientists ORDER BY name;
SELECT Name FROM Projects ORDER BY name DESC;
SELECT CONCAT('O projeto ', Name,' precisou de ', Hours,' horas para ser concluído') FROM Projects;
SELECT Name, Hours From Projects ORDER BY hours DESC LIMIT 3;
SELECT DISTINCT Project FROM AssignedTo;
SELECT Name From Projects ORDER BY hours DESC LIMIT 1;
SELECT Name From Projects ORDER BY hours LIMIT 1 OFFSET 1;
SELECT * From Projects ORDER BY hours LIMIT 5;
SELECT CONCAT('Existem ', COUNT(Name),' cientistas na tabela Scientists.') FROM Scientists;

