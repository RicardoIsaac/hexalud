# Hexalud

Hexalud es una aplicación Node.js para gestionar mutaciones de ADN. Este README proporciona una descripción general de la estructura del proyecto y las instrucciones para configurarlo y ejecutarlo en tu máquina local.

## Tabla de Contenidos

- [Requisitos previos](#requisitos-previos)
- [Empezar](#empezar)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Uso](#uso)

## Requisitos previos

Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:

- Node.js y npm instalados en tu máquina.
- MongoDB instalado y en ejecución localmente o una conexión a un servidor MongoDB remoto.
- Un editor de texto o un entorno de desarrollo integrado de tu elección (por ejemplo, Visual Studio Code).

## Empezar

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/RicardoIsaac/hexalud
git clone https://gitlab.com/hexalud1/hexalud.git
```
2. Navega al directorio del proyecto:

```bash
cd hexalud
```
3. Instala las dependencias del proyecto:
```bash
npm install
```
4. Crea un archivo .env en la raíz del proyecto y agrega tu cadena de conexión de MongoDB:
```bash
MongoSRV=your-mongodb-connection-string
```
5. Inicia el servidor:

```bash
npm start
```
El servidor debería estar funcionando ahora en http://localhost:80.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- **server.js:** El archivo principal del servidor que configura Express y lo inicia.
- **routes/adn.routes.js:** Contiene las rutas de la API para gestionar las mutaciones de ADN.
- **middleware/error.middleware.js:**Middleware personalizado para el manejo de errores.
- **package.json:** Archivo de configuración que lista las dependencias del proyecto y los scripts.
- **controllers/dna.controller.js:**  Funciones que ayudan en el funcionamiento del servidor.

## Uso

El proyecto está estructurado de la siguiente manera:

- Accede a la API en http://localhost:80 o en el puerto que hayas especificado.
- El punto de inicio en la raíz (/) devolverá un mensaje de "Conexión exitosa" si el servidor está en funcionamiento.
- Utiliza los puntos finales de la API definidos en adn.routes.js para gestionar las mutaciones de ADN.

```javascript
import express from 'express';
import { mutationSearch, getStats } from '../controllers/dna.controller.js';

const router = express.Router();

router.post('/mutation', mutationSearch);

router.get('/stats', getStats);

export default router;
```

- Define un endpoint POST en /mutation que se mapea a la función controladora mutationSearch. Este endpoint se utilizará para verificar si una secuencia de ADN contiene mutaciones.

- En POST /mutation, se espera un objeto NxN con el nombre dna ({ dna: [NxN] }). Si el objeto no existe o no es una matriz NxN, el servidor lanzará un nuevo error.

- Define un endpoint GET en /stats que se mapea a la función controladora getStats. Este endpoint se utilizará para recuperar estadísticas relacionadas con las mutaciones de ADN.