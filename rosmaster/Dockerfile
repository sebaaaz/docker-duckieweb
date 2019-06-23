FROM ros:melodic
MAINTAINER Sebastián Zapata "szapata@dcc.uchile.cl"

COPY duckietown_msgs/ /duckietown_ws/src/duckietown_msgs/

RUN /bin/bash -c "source /ros_entrypoint.sh; cd /duckietown_ws/; catkin_make"

ADD ros_entrypoint.sh /

# CMD ["roslaunch", "rosbridge_server", "rosbridge_websocket.launch"]