1.Configurar metodo autenticacion en mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Dosmil24*';

2. CREATE DB:
'CREATE DATABASE `desarrolloempresariales` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION=''N'' */'

3. CREATE TABLA:
'CREATE TABLE `estudiantes` (
  `idestuadiantes` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `edad` int DEFAULT NULL,
  `genero` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`idestuadiantes`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci'
