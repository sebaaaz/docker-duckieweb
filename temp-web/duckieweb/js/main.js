$(function() {
	getTopics();
	alert("Esta alerta es generada automáticamente para cargar los duckiebots :)\nSi no aparecen en la lista puedes recargar la página.\nEl tiempo dependerá de la cantidad de duckiebots activados.");
	cargarVistaPatos();
});

var duckiebots = [];

var ros = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
});

var topicTypeClient = new ROSLIB.Service({
          ros : ros,
          name : '/rosapi/topics',
          serviceType : 'rosapi/Topics',
        });

var request = new ROSLIB.ServiceRequest({});

function getTopics() {
	topicTypeClient.callService(request, function(result) {
		topics = result.topics
		for (var i = 0; i < topics.length; i++) {
			name = topics[i];
			if (name.substring(1,5) == "duck") {
				duckiebots.push(name.substring(name.indexOf("_")+1, name.indexOf("/", 4)));
			}
		}
	});
}

function changeName(name) {
	$("#duckiebotN").text(name);
}

function changeIP(IP) {
	$("#duckiebotIP").text(IP);
}

function setDuckIP(duckName) {
	param = new ROSLIB.Param({
		ros : ros,
		name : "duck_"+duckName+"_IP"
	});
	param.get(function(value) {
		changeIP(value);
	});
}

function cargarPato(duckName) {
		try { speed.unsubscribe(); }
		catch { }
		suscribirVelocidad(ros, duckName);
		changeName(duckName);
		setDuckIP(duckName);
}

function cargarVistaPatos(){
	$("#cargandoPatos").hide(); //ocultar loading
	$("#listaPatos").text("");
	for (var i = 0; i < duckiebots.length; i++) {
		pato = duckiebots[i];
		elemento = $('<li><div class="form-inline"><img src="/img/on.png"/><div class="cajaNombrePatoLista" id='+pato+'>'+'<div class="F">'+pato+'</div></div></div></li>');
		elemento.attr('onclick', "cargarPato('"+pato+"');")
		$("#listaPatos").append(elemento); //mostrar lista patos
	}
}