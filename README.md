# docker-duckieweb
Testing docker

```bash
docker-compose up
```
Luego se puede acceder localmente con cualquier navegador a:
http://localhost:4000

Para simular un duckiebot, primero añadir la dirección de rosbridge al iniciar un navegador que corre localmente en el host:

```bash
sudo bash -c "echo $'\n'127.0.0.1 rosbridge >> /etc/hosts"
```
