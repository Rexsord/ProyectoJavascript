
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
	var row = "<tr>"
	//	+ "<td>" + "<input id = 'chk1' type='checkbox'>" + "</td>"
		+ "<td>" + estudiante.id + "</td>"
		+ "<td>" + estudiante.nombre + "</td>"
		+ "<td>" + estudiante.matricula + "</td>"
		+ "<td>" + estudiante.ident + "</td>"
		+ "<td>" + estudiante.tel + "</td>"
		+ "<td>" + estudiante.email + "</td>";

	$("table tbody").append(row);
}

function guardarDB(estudiante) {
	//Buscamos el controlador localStorage
	myStorage = window.localStorage;

	var estudiantesArray = [];

	var dbEstudiantes = myStorage.getItem("estudiantesArray");
	if (dbEstudiantes != null) {
		estudiantesArray = JSON.parse(dbEstudiantes);
	}

	estudiantesArray.push(estudiante);
	myStorage.setItem("estudiantesArray", JSON.stringify(estudiantesArray));

}

function analizaDB() {


	myStorage = window.localStorage;
	var arreglo = [];

	var dbEstudiantes = myStorage.getItem("estudiantesArray");
	if (dbEstudiantes != null) {
		arreglo = JSON.parse(dbEstudiantes);
		
		arreglo.splice(arreglo.indexOf(seleccion),6);

	}

	myStorage.setItem("estudiantesArray", JSON.stringify(arreglo));

}

function limpiaDB(){
	
	window.localStorage.clear();
	

}

function cargarDB(){

	myStorage = window.localStorage;
	var dbEstudiantes = myStorage.getItem("estudiantesArray")
	if (dbEstudiantes != null) {
		var estudiantesArray = JSON.parse(dbEstudiantes);

		$.each(estudiantesArray, function (i, est) {
			agregarEstudiante(est);
		});
	}

}


$(document).ready(function () {



	cargarDB();

	$("#estudiantes tr").click(function(){    
		seleccion = $(this).find('td:first').html();
		//alert(seleccion);    
	 });


	$("#Registrar").click(function () {

		var id = $("#inputId").val();
		var nombre = $("#inputNombre").val();
		var matricula = $("#inputMatricula").val();
		var ident = $("#inputIdent").val();
		var tel = $("#inputTel").val();
		var email = $("#inputEmail").val();

		var est = new Estudiante();
		est.id = id;
		est.nombre = nombre;
		est.matricula = matricula;
		est.ident = ident;
		est.tel = tel;
		est.email = email;

		agregarEstudiante(est);
		guardarDB(est);
	});

	$("#Eliminar").click(function () {

		analizaDB();
	

	});

	$("#Limpiar").click(function () {
		
				limpiaDB();
	
			});

});
