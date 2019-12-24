#!/usr/bin/env python

import rospy, socket
from random import random
from time import sleep
from duckietown_msgs.msg import Twist2DStamped

class Simulador(object):
	value = random()
	# publisher = rospy.Publisher("/duck_"+socket.gethostname()+"/wheels_driver_node/car_cmd", Twist2DStamped, queue_size=1)
	publisher = rospy.Publisher("/duck_"+"simulator"+"/wheels_driver_node/car_cmd", Twist2DStamped, queue_size=1)
	twist = Twist2DStamped()

	def publicar(self):
		diff = random()
		self.twist.v 	 = self.value*2 - 1 + diff*0.1
		self.twist.omega = self.value*16 - 8 + diff*0.1
		self.publisher.publish(self.twist)


def main():
	# rospy.init_node("duck_"+socket.gethostname())
	rospy.init_node("duck_"+"simulator")
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