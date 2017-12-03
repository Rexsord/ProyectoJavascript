	//<script>
	var Estudiante = function()
		{
			var self = this;
			self.id = "";
			self.nombre = "";
			self.matricula = "";
			self.identificacion = "";
			self.telefono = "";
			self.email = "";
		};
	
	
	function addRow()
	{
	
		//Objeto Estudiante
		var est1 = new Estudiante();												//Crear objeto para llenarlo a través del formulario
		est1.id = document.getElementById("inputId").value;								//Obtener los datos del formulario
		est1.nombre = document.getElementById("inputNombre").value;
		est1.matricula = document.getElementById("inputMatricula").value;
		est1.identificacion = document.getElementById("inputIdent").value;
		est1.telefono = document.getElementById("inputTel").value;
		est1.email = document.getElementById("inputEmail").value;
		
		//Creación de la tabla
		var table = document.getElementById("estudiantes");							
		var tr = document.createElement("tr");
		
		//Creación y vinculación de los datos
		var tdId = document.createElement("td");
		var txtId = document.createTextNode(est1.id);
		var tdNombre = document.createElement("td");
		var txtNombre = document.createTextNode(est1.nombre);
		var tdMatricula = document.createElement("td");
		var txtMatricula = document.createTextNode(est1.matricula);
		var tdIdentificacion = document.createElement("td");
		var txtIdentificacion = document.createTextNode(est1.identificacion);
		var tdTelefono = document.createElement("td");
		var txtTelefono = document.createTextNode(est1.telefono);
		var tdEmail = document.createElement("td");
		var txtEmail = document.createTextNode(est1.email);
		
		//Insercción en la tabla
		tdId.appendChild(txtId);
		tr.appendChild(tdId);
		tdNombre.appendChild(txtNombre);
		tr.appendChild(tdNombre);
		tdMatricula.appendChild(txtMatricula);
		tr.appendChild(tdMatricula);
		tdIdentificacion.appendChild(txtIdentificacion);
		tr.appendChild(tdIdentificacion);
		tdTelefono.appendChild(txtTelefono);
		tr.appendChild(tdTelefono);
		tdEmail.appendChild(txtEmail);
		tr.appendChild(tdEmail);
		
		table.appendChild(tr);
	}
	//</script>