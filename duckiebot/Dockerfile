FROM alpineros/alpine-ros:melodic-ros-core
MAINTAINER Sebastián Zapata "szapata@dcc.uchile.cl"

RUN apk --no-cache add cmake clang clang-dev make gcc g++ libc-dev linux-headers

RUN /bin/bash -c "mkdir -p duckiebot_ws/src/duckiebot_msgs; cd duckiebot_ws/src; catkin_create_pkg duckiebot_simulador"

ADD duckietown_msgs duckiebot_ws/src/duckietown_msgs

ADD src duckiebot_ws/src/duckiebot_simulador/src

ADD launch duckiebot_ws/src/duckiebot_simulador/launch

RUN /bin/bash -c "source /ros_entrypoint.sh; cd /duckiebot_ws/; catkin_make"

ADD ros_entrypoint.sh /

RUN apk --no-cache del cmake clang clang-dev make gcc g++ libc-dev linux-headers

# CMD ["roslaunch", "duckiebot_simulador", "duckiebot.launch"]