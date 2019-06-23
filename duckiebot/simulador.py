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
		while 1:
			self.twist.v 	 = random()*2 - 1
			self.twist.omega = random()*16 - 8
			self.publisher.publish(self.twist)


def main():
	rospy.init_node("duck_"+os.environ['HOSTNAME'])
	duckiebot = Simulador()
	while not rospy.is_shutdown():
		duckiebot.publicar()
		sleep(2)

if __name__ =='__main__':
	try:
		main()
	except rospy.ROSInterruptException:
		pass