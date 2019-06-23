#!/bin/bash
set -e

# setup ros environment
source "/opt/ros/$ROS_DISTRO/setup.bash"
export ROS_MASTER_URI=http://ros-master:11311
export ROS_HOSTNAME=ros-master
exec "$@"