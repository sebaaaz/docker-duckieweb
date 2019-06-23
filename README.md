## docker-duckieweb
Repositorio para levantar servicios de duckieweb en docker.
Simplemente dirigirse a la carpeta y en la terminar correr el siguiente comando:
```bash
docker-compose up
```
Luego se puede acceder localmente con cualquier navegador a:
http://localhost:4000

Para simular varios duckiebots, simplemente escalar este servicio con docker-compose (ejemplo con 3 duckiebots):

```bash
docker-compose up --scale duckiebot=3
```

## Problemas actuales
Los simuladores aún no se encuentran full operativos dado que actualmente se está mejorando el modo de conexión entre los contenedores. Dado esto, el problema actual es la dificultad para abrir todos los puertos que usa ROS para generar la comunicación entre nodos, pues, sin estos puertos abiertos no existe comunicación bidireccional entre host y contenedores o inter-contenedores.
(Considerar que cada contenedor puede ser visto como una máquina diferente para ROS).

Algunas soluciones posibles que se estarán probando:
- Abrir manualmente todos los puertos mediante el archivo docker-compose (costoso y es un costo de tiempo tremendo en cada ejecución).
- Investigar más acerca de las variables de entorno que usa ROS y como permite comunicar máquinas bidireccionalmente (solución óptima y a la cual espero llegar).
- Ejecutar "roscore" en la máquina host y comunicar todos los contenedores hacia este ros-master alojado en el host. (no me agrada mucho esta solución, pues quiero evitar que el PC interfiera con las conexiones entre los contenedores).

Finalmente agregar que es posible tener todos los contenedores alojados en el host (más o menos la tercera solución planteada), pero esto deja de ser viable cuando se quieren testear muchos duckiebots a la vez, pues no permite diferenciación entre contenedores.

# Ejemplo error actual:
Para un entendimiento literal del error, este ocurre precisamente al realizar en la terminal:
```bash
rosnode info /duck_xxxxxxxxxx
```
Con xxxxx el nombre del contenedor asociado. Se genera el siguiente error:
```
Node [/duck_cfcc223f7421]
Publications: 
 * /duck_cfcc223f7421/wheels_driver_node/car_cmd [duckietown_msgs/Twist2DStamped]
 * /rosout [rosgraph_msgs/Log]

Subscriptions: None

Services: 
 * /duck_cfcc223f7421/get_loggers
 * /duck_cfcc223f7421/set_logger_level


contacting node http://duckiebot-cfcc223f7421:38257/ ...
ERROR: Communication with node[http://duckiebot-cfcc223f7421:38257/] failed!

```
