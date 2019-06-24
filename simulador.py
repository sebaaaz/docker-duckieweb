#!/usr/bin/env python

import rospy, os
from random import random
from time import sleep
from duckietown_msgs.msg import Twist2DStamped

class Simulador(object):
	def __init__(self):
		super(Simulador, self).__init__()
		self.publisher = rospy.Publisher("/duck_"+os.environ['HOSTNAME']+"/wheels_driver_node/car_cmd", Twist2DStamped, queue_size=1)
		self.twist = Twist2DStamped()

	def publicar(self):
		self.twist.v 	 = random()*2 - 1
		self.twist.omega = random()*16 - 8
		self.publisher.publish(self.twist)


def main():
	rospy.init_node("duck_"+os.environ['HOSTNAME'])
	duckiebot = Simulador()
	r = rospy.Rate(1)
	while not rospy.is_shutdown():
		duckiebot.publicar()
		r.sleep()

if __name__ =='__main__':
	try:
		main()
	except rospy.ROSInterruptException:
		pass