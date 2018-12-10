AZT

Una aplicacion web para manejar de inventarios, hecha en Angular 7 en el frontend, con algunas dependencias como Bootstrap 4, entre otras. 
El servidor hecho en NodeJS con express, utilizando typescript. La base de datos esta hecha en MySQL.

########################################################################################
Instrucciones:

El frontend de la aplicacion se encuentra en AZT/azurian-test-front
El backend de la aplicacion se encuentra AZT/azurian-test-api

Para correr el proyecto, es necesario instalar las dependencias tanto en el backend como en el front,
dentro de cada carpeta, ejecutar en la terminal "npm install"

La base de datos esta hecha con MySQL, el script de la base de datos se encuentra dentro del proyecto de backend en: 

AZT/azurian-test-api/db/db_script.sql   -----> ejecutar este script en el manejador de base de datos de MySQL.

Y un script de INSERTS para data de prueba en la misma locacion:

AZT/azurian-test-api/db/sample_data.sql

En la terminal, para ejecutar el FRONTEND: 
>'npm start' o 'ng serve'

En la terminal, para ejecutar el BACKEND: 
>'npm start' 
