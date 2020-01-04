#!/bin/bash
set -e

# setup ros environment
source "/usr/ros/$ROS_DISTRO/setup.bash"
source "/duckiebot_ws/devel/setup.bash"
export ROS_HOSTNAME="$(/bin/hostname -i)"
exec "$@"