FROM alpineros/alpine-ros:melodic-ros-core
MAINTAINER Sebastián Zapata "szapata@dcc.uchile.cl"

COPY duckietown_msgs/ /duckietown_ws/src/duckietown_msgs/

RUN apk add --no-cache --virtual .build-deps \
	cmake \
	clang \
	clang-dev \
	make \
	gcc \
	g++ \
	libc-dev \
	linux-headers \
	&& /bin/bash -c "source /ros_entrypoint.sh; cd /duckietown_ws/; catkin_make" \
	&& apk del --no-cache .build-deps

RUN apk add --no-cache ros-melodic-rosbridge-server

ADD ros_entrypoint.sh /

# CMD ["roslaunch", "rosbridge_server", "rosbridge_websocket.launch"]