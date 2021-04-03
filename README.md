### Variables de entorno example

**Opción 1:** Sin librería, iniciá la app con `NAME=leti npm start`
Esto no escala a medida que vayas agregando más variables de entorno. El commando de startup se vuelve demasiado largo y tedioso.

**Opción 2:** Con una librería. Por ejemplo `dotenv` te permite especificar tus variables de entorno para el ambiente local, en un archivo `.env` que ponés en el root path del proyecto. Al comenzar la app con `npm start` (o lo que sea), los valores de las variables se leen de ahí. Es importante NO commitear ese archivo (ponerlo en gitignore).
