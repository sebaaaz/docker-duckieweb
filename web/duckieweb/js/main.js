$(function() {
	getTopics();
	alert("Esta alerta es generada automáticamente para cargar los duckiebots :)\nSi no aparecen en la lista puedes recargar la página.\nEl tiempo dependerá de la cantidad de duckiebots activados.");
	console.log(duckiebots);
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
		duckiebots = result.topics;
	});
}

function cargarVistaPatos(){
	$("#cargandoPatos").hide(); //ocultar loading
	$("#listaPatos").text("");
	for (var i = 0; i < duckiebots.length; i++){
		name = duckiebots[i].slice(1);
		if (name.substring(0,4) == "duck") {
			pato = name.substring(name.indexOf("_")+1, name.indexOf("/"));
			$("#listaPatos").append('<li><div class="form-inline"><img src="/img/on.png"/><div class="cajaNombrePatoLista" id='+pato+'>'+'<div class="F">'+pato+'</div></div></div></li>'); //mostrar lista patos
			$("#"+pato).click(function() {
				try {
					speed.unsubscribe();
					suscribirVelocidad(ros, this.id);
					$("#duckiebotN").text(this.id);
				}
				catch {
					suscribirVelocidad(ros, this.id);
					$("#duckiebotN").text(this.id);
				}
			});
		}
	};
};