#!/bin/bash
set -e

# setup ros environment
source "/duckietown_ws/devel/setup.bash"
source "/opt/ros/$ROS_DISTRO/setup.bash"
exec "$@"