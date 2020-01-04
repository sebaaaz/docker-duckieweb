$(function() {
	getDuckiebots();
	alert("Si no aparecen los duckiebots en la lista puedes recargar la página.\nEl tiempo dependerá de la cantidad de duckiebots activados.\nEstamos trabajando para mejorar el sistema de carga.");
	cargarVistaPatos();
});

var duckiebots = {};

var ros = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
});

var topicTypeClient = new ROSLIB.Service({
          ros : ros,
          name : '/rosapi/topics',
          serviceType : 'rosapi/Topics',
        });

var request = new ROSLIB.ServiceRequest({});

function getDuckiebots() {
	topicTypeClient.callService(request, function(result) {
		topics = result.topics
		for (var i = 0; i < topics.length; i++) {
			name = topics[i];
			if (name.substring(1,5) == "duck") {
				name = name.substring(name.indexOf("_")+1, name.indexOf("/", 4));
				addDuckiebot(name);
			}
		}
	});
}

function addDuckiebot(duckiebot_name) {
	param = new ROSLIB.Param({
		ros : ros,
		name : "duck_"+duckiebot_name+"_IP"
	});
	param.get(function(value) {
		duckiebots[duckiebot_name] = {}
		duckiebots[duckiebot_name]["nombre"] = duckiebot_name
		duckiebots[duckiebot_name]["ip"] = value
	});
}

function showDuckiebotInfo(duckiebot_name) {
	$("#duckiebotN").text(duckiebots[duckiebot_name]["nombre"]);
	$("#duckiebotIP").text(duckiebots[duckiebot_name]["ip"]);
}

function cargarPato(duckiebot_name) {
		try {speed.unsubscribe();}
		catch {}
		suscribirVelocidad(ros, duckiebot_name);
		showDuckiebotInfo(duckiebot_name);
}

function cargarVistaPatos(){
	$("#cargandoPatos").hide(); //ocultar loading
	$("#listaPatos").text("");
	for (var pato in duckiebots) {
		elemento = $('<li><div class="form-inline"><img src="/img/on.png"/><div class="cajaNombrePatoLista" id='+pato+'>'+'<div class="F">'+pato+'</div></div></div></li>');
		elemento.attr('onclick', "cargarPato('"+pato+"');")
		$("#listaPatos").append(elemento); //mostrar lista patos
	}
}