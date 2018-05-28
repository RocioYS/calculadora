

//Insertar valores en el visor

function insert(num){
    document.form.visor.value = document.form.visor.value+num;

} 

//Fin visor

//Función equal para ver resultado de las operaciones

function equal(){
    var show = document.form.visor.value;
    if(show){
       document.form.visor.value = eval(show);
    }
}

//Fin equal

//Función clean para eliminar todos los dígitos del visor

function clean(){
   document.form.visor.value = "";

}

//Fin clean

//Función delete para borrar los dígitos incorrectamente introducidos

function ce(){
    var show = document.form.visor.value;
    document.form.visor.value = show.substring(0,show.length-1); //substring??
}

//Fin delete

//Función EXP, la cual hace el cálculo de potencia

function potencia(){
    var x = document.form.visor.value;
    var y = document.form.visor.value;
    var result = Math.pow(x,y);
    document.form.visor.value = result;
}

//Fin EXP

//Convertir a EUROS

function euro(){
    var euro = document.form.visor.value;
    document.form.visor.value = parseFloat(document.form.visor.value) * 0.857573;
}

//Fin convertir EUROS

//Convertir a USD

function usd(){
    var usd = document.form.visor.value;
    document.form.visor.value = parseFloat(document.form.visor.value) * 1.16608;
}

//Fin convertir USD