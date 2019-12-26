FROM ros:melodic
MAINTAINER Sebastián Zapata "szapata@dcc.uchile.cl"

RUN /bin/bash -c "mkdir -p duckiebot_ws/src/duckiebot_msgs; cd duckiebot_ws/src; catkin_create_pkg duckiebot_simulador"

ADD duckietown_msgs duckiebot_ws/src/duckietown_msgs

ADD src duckiebot_ws/src/duckiebot_simulador/src

ADD launch duckiebot_ws/src/duckiebot_simulador/launch

RUN /bin/bash -c "source /ros_entrypoint.sh; cd /duckiebot_ws/; catkin_make"

ADD ros_entrypoint.sh /

# CMD ["roslaunch", "duckiebot_simulador", "duckiebot.launch"]