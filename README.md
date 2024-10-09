# Game deck

Se trata de una aplicación social y de gestión de grupos para juegos on-line esta primera version tiene base en el juego World of warcraft. En un futuro se adaptará para otros juegos.

## Instalación del proyecto.

1. Instalar las dependencias mediante el comando `npm install` o `npm i`.

2. Guardar el archivo `.env.example` como `.env` y cubrir los datos necesarios.

3. Ejecutar `npm run initDb` para crear la base de datos.

4. Ejecutar `npm run dev` para lanzar el back-end, ejecutar `npm run start` para el uso de la dependecia concurrently que lanzara tanto servidor como cliente.

5. Endpoints postman preparados con la autorización vacía, se indica en los headers cual requiere token de autorización.

## Base de datos relacional

- Base de datos SQL, usando MYSQL workbench y la dependecia mysql2, esto funciona de manera diferente a postgresql o SQL server de Microsoft (revisar documentación de sql workbench para conocer la estrucutra de datos devuelta por la DB)

## Endpoints del usuario

- **POST** - `/users/register` - Crea un nuevo usuario pendiente de activar.
- **POST** - `/users/login` - Logea a un usuario retornando un token.
- **POST** - `/users/password/recover` - Recuperación de contraseña
- **PUT** - `/users/validate/:registrationCode` - Valida a un usuario recién registrado.
- **PUT** - `/users/password/reset` - Permite actualizar la contraseña despues de recuperarla.
- **PUT** - `/users/password/change` - Permite cambiar la contraseña.

## Endpoints Hermandad

- **GET** - `/guilds` - Retorna información pública de las hermandades
- **GET** - `/guilds/:guildId` -Retorna hermandad por Id
- **GET** - `/guilds/:guildId/posts`- Retorna todos los posts de una hermandad
- **GET** - `/guilds/:guildId/posts/:postId`-Retorna un post por Id
- **POST** - `/guilds` - Crea una nueva hermandad
- **POST** - `/guilds/:guildId/join` - Manda solicitud de union a hermandad
- **POST** - `/guilds/posts` - Crea nuevo post dentro de hermandad
- **PUT** - `/guilds/:guildId` - Editar información o detalles de la guild
- **PUT** - `/guilds/:guildId/:joinReqId` - Acepta o rechaza union a hermandad
