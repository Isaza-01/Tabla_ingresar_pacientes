var campoFiltrar = document.querySelector ("#filtrar-tabla");

campoFiltrar.addEventListener ("input", function(){

    var pacientes = document.querySelectorAll (".paciente");

    if(this.value.length > 0){
        //con este for estamos capturando todos los pacientes nativos y los que se agregan.
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes [i];
            var Tdnombre = paciente.querySelector (".info-nombre");
            var nombre = Tdnombre.textContent;
            var expresion = new RegExp(this.value,"i");            
            if (!expresion.test(nombre)){
                paciente.classList.add ("invisible");
            }else {
                paciente.classList.remove ("invisible"); 
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes [i];
            paciente.classList.remove("invisible");
        }
    }
     
});