# Node js API para ejemplo de [12 factor factor configuración](https://12factor.net/config)

## Cómo usar variables de entorno

### En localhost:

**Opción 1:** Sin librería, iniciá la app con `NAME=leti npm start`
Esto no escala a medida que vayas agregando más variables de entorno. El commando de startup se vuelve demasiado largo y tedioso.

**Opción 2:** Con una librería. Por ejemplo `dotenv` te permite especificar tus variables de entorno para el ambiente local, en un archivo `.env` que ponés en el root path del proyecto. Al comenzar la app con `npm start` (o lo que sea), los valores de las variables se leen de ahí. Es importante NO commitear ese archivo (ponerlo en gitignore).

### En Heroku:
1. Ir a la app en Heroku.
2. Click en Settings.
3. Scrollear a "Config vars".
4. Agregar / editar variables

![image](https://user-images.githubusercontent.com/17788257/113490697-29184000-94a2-11eb-9def-30c28d33be06.png)


### En Elastic Beanstalk:
1. Ir al Environmnet
2. En el menú de la izquiera click en "Configuración"
3. Ir a "Software"
4. Scrollear hasta "Environment properties"
5. Agregar / editar variable

![Screen Shot 2021-04-03 at 17 48 18](https://user-images.githubusercontent.com/17788257/113491135-d0967200-94a4-11eb-9607-40a148013d4f.png)
