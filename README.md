

# docker-duckieweb
Repositorio para levantar servicios de duckieweb en docker.
Instalar docker, docker-compose, dirigirse a la carpeta y en la terminal y correr el siguiente comando:
```bash
docker-compose up
```
Luego se puede acceder localmente con cualquier navegador a:
http://localhost:4000

Para simular varios duckiebots, simplemente escalar este servicio con docker-compose (ejemplo con 3 duckiebots):

```bash
docker-compose up -d --scale duckiebot=3
```

## Work in progress
- Automatizar comprobación automática de nuevos duckiebots conectados y publicando mensajes.
- Reducir peso de los contenedores.