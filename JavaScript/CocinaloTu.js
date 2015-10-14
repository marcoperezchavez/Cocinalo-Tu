
function anadir_a_lista(num){
    if(num==0){
 	var frutasyv = document.getElementById("seleccionarFrutas").value;
 	var frutasyv = frutasyv.valueOf();
 	generarCelda(frutasyv,num);
    }
     if(num==1){
        
 	var carnes = document.getElementById("seleccionarCarnes").value;
 	var carnes = carnes.valueOf();
 	generarCelda(carnes,num);
    }
     if(num==2){

 	var lacteos = document.getElementById("seleccionarLacteos").value;
 	var lacteos = lacteos.valueOf();
 	generarCelda(lacteos,num);
    }
 	
	
}
function generarCelda(texto, numero){
     lista("add", texto);
    var productNoCell;
    var productNoCell2
    
    var tabla = document.getElementById('tableproductos');
 	var lastRow = tabla.rows.length;  
 	var row = tabla.insertRow(lastRow);
    
    if(numero==0){
 	 productNoCell = row.insertCell(0);
    }
     if(numero==1){
 	 productNoCell = row.insertCell(0);
     productNoCell2 = row.insertCell(0);
    
    }
     if(numero==2){
 	 productNoCell = row.insertCell(0);
     productNoCell2 = row.insertCell(0);
     productNoCell2 = row.insertCell(0);
    }
    
    var div = document.createElement("td");
    
    productNoCell.innerHTML=  texto;
	productNoCell.style.backgroundColor="white"; 
}

function buscar(){
    alert("buscar, falta asignar un id a cada td que se inserta para poder leerlo desde aqui o guardarlos a la vez en una lista para buscar");
     localStorage.removeItem("items");
}
function deleteRow(){
    document.getElementById("tableproductos").deleteRow(-1);
    lista("del",0);
}
    
function lista(dato,valor){
        
      var item = localStorage.getItem("items");
    alert("primer valor" + item);
      if(item ==null || item==""){
          valor = valor + ",";
      }else{
      valor = item + "," + valor;
      }
      localStorage.setItem("items",valor)
      alert(localStorage.getItem("items"));
      
        
}
