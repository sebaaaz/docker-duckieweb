// ROSLIB
function suscribirVelocidad(ros, duckiebot) {
  speed = new ROSLIB.Topic({
  ros: ros,
  name: '/duck_'+duckiebot+'/wheels_driver_node/car_cmd',
  messageType: 'duckietown_msgs/Twist2DStamped'
});

speed.subscribe(function(message) {

  v = message.v;          // Velocidad Linear
  omega = message.omega;  // Velocidad Angular

  $("#quacklometers").text(Math.trunc(v*100)/100); // Editar valor bruto
  $("#quackdianes").text(Math.trunc(omega*-100)/100);
  
  omega /= 8.0;
  
  ho = (120 - Math.abs(omega)*120).toString(); // HSL
  hv = (120 - Math.abs(v)*120).toString(); // HSL

  v = Math.abs(v*50 - 50)         // 1 -> 0% | 0 -> 50% | -1 -> 100%
  omega = Math.abs(omega*50 - 50)

  $("#indicadorV").css({"top" : v+"%", "background-color" : "black"});
  $("#indicadorH").css({"margin-left" : omega+"%", "background-color" : "black"});
  $("#barraV").css({"background-color" : "hsl("+hv+", 100%, 35%)"});
  $("#barraH").css({"background-color" : "hsl("+ho+", 100%, 35%)"});

});
};

function suscribirCamara(ros) {

  camara = new ROSLIB.Topic({
  ros: ros,
  name: '/usb_cam/image_raw/compressed',
  messageType : 'sensor_msgs/Image'
});

camara.subscribe(function(message) {
  foto = message.data;
  $("#camara").attr("src", "http://localhost:8080/stream?topic=/usb_cam/image_raw&type=ros_compressed");
});
};