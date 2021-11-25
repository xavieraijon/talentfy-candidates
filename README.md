# TalentFY Positions

Ejercicio Front-End Angular para TalentFY.

![TalentFY Positions Screenshot](screenshot.jpg)

# Instrucciones

Instalar todas las dependencias del proyecto:

```bash
npm install
```

Se ha usado como servicio REST fake [json-server](https://github.com/typicode/json-server)

Se debe instalar **json-server** para el correcto funcionamiento de la aplicación.

## Instalación y puesta en marcha de **JSON Server**

**Instalación**

`npm install -g json-server`

En la carpeta `assets/data` del repositorio ya existe el archivo `db.json`, que es una copia del `positions.json` con el mismo formato.

Una vez instalado, accedemos a la ruta del proyecto y arrancamos el servidor JSON de la siguiente forma:

```bash
json-server --watch src/assets/data/db.json
```

Una vez arrancado el servidor JSON, ya podemos proceder a arrancar el servidor de desarrollo de Angular como siempre:

```bash
ng serve
```

Gracias!

Xavi
