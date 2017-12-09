
var estudiantesArray = [];

var Estudiante = function () {
	var self = this;
	self.id = "";
	self.nombre = "";
	self.matricula = "";
	self.ident = "";
	self.tel = "";
	self.email = "";
};

var seleccion;


function agregarEstudiante(estudiante) {
	var row = '<tr id ="tr' + estudiante.id + '">'
		+ "<td>" + '<input id = "' + estudiante.id + '" type="checkbox">' + "</td>"
		+ "<td>" + estudiante.id + "</td>"
		+ "<td>" + estudiante.nombre + "</td>"
		+ "<td>" + estudiante.matricula + "</td>"
		+ "<td>" + estudiante.ident + "</td>"
		+ "<td>" + estudiante.tel + "</td>"
		+ "<td>" + estudiante.email + "</td>"
		+ "</tr>"

	$("table tbody").append(row);
}

function guardarDB(estudiante) {
	//Buscamos el controlador localStorage
	myStorage = window.localStorage;


	var dbEstudiantes = myStorage.getItem("estudiantesArray");
	if (dbEstudiantes != null) {
		estudiantesArray = JSON.parse(dbEstudiantes);
	}

	estudiantesArray.push(estudiante);
	myStorage.setItem("estudiantesArray", JSON.stringify(estudiantesArray));

}

function graba() {
	localStorage.setItem('estudiantesArray', JSON.stringify(estudiantesArray));
};

function analizaDB(id) {

	var dbEstudiantes = localStorage.getItem('estudiantesArray');
	//localStorage.removeItem("estudiantesArray");

	if (dbEstudiantes != null) {
		var arreglo = JSON.parse(dbEstudiantes);

		for (var i = 0; i < arreglo.length; i++) {

			if (arreglo[i].id == id) {

				arreglo.splice(i, 1);
				var fila = document.getElementById("tr"+id).rowIndex-1; 
				if (typeof foo !== 'undefined') {
					document.getElementById("estudiantesArray").deleteRow(fila);
				  }
				
				estudiantesArray = arreglo;
				graba();
				break;
			}

		}
	}

};




function limpiaDB() {

	window.localStorage.clear();


};

function cargarDB() {

	myStorage = window.localStorage;
	var dbEstudiantes = myStorage.getItem("estudiantesArray")
	if (dbEstudiantes != null) {
		var estudiantesArray = JSON.parse(dbEstudiantes);

		$.each(estudiantesArray, function (i, est) {
			agregarEstudiante(est);
		});
	}

};


$(document).ready(function () {


	//cargarDB();

	myStorage = window.localStorage;
	var dbEstudiantes = myStorage.getItem("estudiantesArray")
	if (dbEstudiantes != null) {
		var estudiantesArray = JSON.parse(dbEstudiantes);

		$.each(estudiantesArray, function (i, est) {
			agregarEstudiante(est);
		});
	}


	$("#Registrar").click(function () {

		var est = new Estudiante();
		est.id = $("#inputId").val();
		est.nombre = $("#inputNombre").val();
		est.matricula = $("#inputMatricula").val();
		est.ident = $("#inputIdent").val();
		est.tel = $("#inputTel").val();
		est.email = $("#inputEmail").val();

		agregarEstudiante(est);
		guardarDB(est);
	});

	$("#Limpiar").click(function () {

		limpiaDB();

	});

	$("#Eliminar").click(function () {
		$("input:checkbox:checked").each(function () {
			analizaDB($(this).attr("id"));
		});
	});

});
