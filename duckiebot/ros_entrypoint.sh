#!/bin/bash
set -e

# setup ros environment
source "/opt/ros/$ROS_DISTRO/setup.bash"
source "/duckietown_ws/devel/setup.bash"
export HOSTNAME=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 8 | head -n 1)
export ROS_HOSTNAME="$(/bin/hostname -I)"
exec "$@"