
# docker-duckieweb
Repositorio para levantar servicios de duckieweb en docker.
Simplemente dirigirse a la carpeta y en la terminar correr el siguiente comando:
```bash
docker-compose up
```
Luego se puede acceder localmente con cualquier navegador a:
http://localhost:4000

Para simular varios duckiebots, simplemente escalar este servicio con docker-compose (ejemplo con 3 duckiebots):

```bash
docker-compose up -d --scale duckiebot=3
```

## Problemas encontrados
Al suscribirse a un tópico, solo este es visualizado aunque otro sea clickeado. Arreglar este error es prioridad.

## Work in progress
- ~~ Suscribirse y desuscribirse de los tópicos [URGENTE] ~~ (Listo)
- Automatizar comprobación automática de nuevos duckiebots conectados y publicando mensajes.
- Mejorar Dockerfiles y docker-compose.yaml
- Reducir peso de los contenedores.