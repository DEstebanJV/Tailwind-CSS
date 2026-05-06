Como instalar Tailwind CSS en Node.js

# Instalacion

el curso uso la version 3 de tailwind por lo cual vamos a instalar esa version

Crear el index.html

revisamos que estemos usando la version 22.x de node

```bash
node -v
```
Si no es la versión 22.x, entonces actualizamos con el siguiente comando:
```bash
nvm install 22
```
Inicializar NodeJS, ¿cómo? con el comando: 

```bash
npm init -y
```
Con esto se crea un archivo que puedes configurar en el futuro: package.json

Ahora es el momento de agregar Tailwind con la siguiente línea de comando: 
```bash
npm install -D tailwindcss@3
```
La letra -D indica que estamos en el entorno de desarrollo. En este caso el curso está hecho en base a la versión 3 de Tailwind, por lo que en vez de colocar @latest para que nos traiga la última versión, usamos @3 para usar esta en específico.

Una vez hecho esto se instalarán varios paquetes y recursos que requiera el Tailwind.

El siguiente paso es habilitar la configuración inicial de Tailwind con el comando: 
```bash
npx tailwind init
```
Con esto se crea el archivo de configuración de Tailwind: tailwind.config.js

Ahora en el archivo tailwind.config.js le vamos a indicar cuál es el index:
```bash
content: ['./index.html'],
```

El paso que sigue es crear el archivo tailwind.css.
En mi caso yo creé dos estructuras de carpetas una src/css/tailwind.css y otra public/css/tailwind.css.

En la src le agregaremos los @imports al archivo .css, mientras que en el public es donde Tailwind irá agregando los estilos de cada clase que utilicemos en nuestros proyectos.

Para agregar los @imports escribimos 3 líneas de código:

src/css/tailwind.css
```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```
Agregamos la ruta del archivo .css a la hoja de HTML con la etiqueta <link>
Recuerden que según la estructura de carpetas llamamos a public porque allí es donde se guardarán los estilos finales, y no en la src

Continuamos yendo al package.json para crear un comando a través del cuál se puedan ver los cambios que hagamos en el proyecto:

```bash
 "build-tailwind": "npx tailwindcss -i ./src/css/tailwind.css -o ./public/css/tailwind.css"
 ```

 Ahora si ejecutamos el comando npm run build-tailwind, se generará el archivo public/css/tailwind.css con los estilos de Tailwind.

 ¿No se actualizan los cambios?

Recuerda entonces utilizar el código anterior y utilizar el --watch para que se escuchen realmente los cambios y puedas ver el proyecto con absolutamente todas las últimas actualizaciones que hayas realizado.

```bash
npm run build-tailwind --watch
```