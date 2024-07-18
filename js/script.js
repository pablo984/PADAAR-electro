//INGRESO DE DATOS DEL USUARIO:
let valorTension = "";
let valorResistencia = "";
let valorIntensidad = "";
let valorTension2 = "";
let valorResistencia2 = "";
let valorIntensidad2 = "";

//VARIABLES QUE ALMACENARÁN LOS VALORES DEL SESSIONSTORAGE:
let idDelBotonElegido; //almacena el valor del botón de Voltaje, Intensidad o Resistencia.

//RESULTADO:
let resultado;

//BOTONES DE CÁLCULO (Calcular Voltaje, Intensidad, Resistencia):
const botonVoltaje = document.querySelector(".boton-voltaje");
const botonIntensidad = document.querySelector(".boton-intensidad");
const botonResistencia = document.querySelector(".boton-resistencia");

//IDs DE LAS CAJAS DE INGRESO DE VALORES:
//CAJA DE CÁLCULO DE VOLTAJE:
const datoResistencia = document.getElementById("idResistencia");
const datoCorriente = document.getElementById("idCorriente");
//CAJA DE CÁLCULO DE CORRIENTE: 
const datoVoltaje = document.getElementById("idVoltaje");
const datoResistencia2 = document.getElementById("idResistencia2");
//CAJA DE CÁLCULO DE RESISTENCIA:
const datoVoltaje2 = document.getElementById("idVoltaje2");
const datoCorriente2 = document.getElementById("idCorriente2");

//SECCIONES OCULTAS:
const seccionVoltaje = document.querySelector(".calculo-voltaje");
const seccionIntensidad = document.querySelector(".calculo-corriente");
const seccionResistencia = document.querySelector(".calculo-resistencia");
const seccionResultadoTension = document.querySelector(".resultado-tension");
const seccionResultadoCorriente = document.querySelector(".resultado-corriente");
const seccionResultadoCorriente2 = document.querySelector(".resultado-corriente-2");
const seccionResultadoResistencia = document.querySelector(".resultado-resistencia");
const spanTension = document.querySelector(".tension1");
const spanIntensidad1 = document.querySelector(".intensidad1");
const spanIntensidad2 = document.querySelector(".intensidad2");
const spanResistencia = document.querySelector(".ohmios");

//BOTONES DE OPCIONES (Ω-KΩ-MΩ-mA-A):
const opcionOhm = document.querySelector(".ohm");
const opcionKohm = document.querySelector(".kohm");
const opcionMohm = document.querySelector(".mohm");

const opcionmA = document.querySelector(".mA");
const opcionA = document.querySelector(".a");

const opcionOhm2 = document.getElementById("ohm2");
const opcionKohm2 = document.getElementById("kohm2");
const opcionMohm2 = document.getElementById("mohm2");

const opcionA2 = document.getElementById("a2");
const opcionmA2 = document.getElementById("mA2");

//BOTONES "CALCULAR":
const botonCalcularVoltaje = document.getElementById("boton-calcular-voltaje");
const botonCalcularCorriente = document.getElementById("boton-calcular-corriente");
const botonCalcularResistencia = document.getElementById("boton-calcular-resistencia");

//BOTÓN "RESET":
const botonReset = document.querySelector(".boton-reset");

//EVENTOS AL PRESIONAR LOS BOTONES:
botonVoltaje.addEventListener("click", mostrarCalculadoraVoltaje);
botonIntensidad.addEventListener("click", mostrarCalculadoraIntensidad);
botonResistencia.addEventListener("click", mostrarCalculadoraResistencia);

opcionOhm.addEventListener("click", ohm);
opcionKohm.addEventListener("click", kohm);
opcionMohm.addEventListener("click", mohm);
opcionmA.addEventListener("click", mA);
opcionA.addEventListener("click", a);
opcionOhm2.addEventListener("click", ohm2);
opcionKohm2.addEventListener("click", kohm2);
opcionMohm2.addEventListener("click", mohm2);
opcionA2.addEventListener("click", a2);
opcionmA2.addEventListener("click", mA2);

//EVENTOS AL PRESIONAR LOS BOTONES "CALCULAR":
botonCalcularVoltaje.addEventListener("click", chequearYCalcularVoltaje);
botonCalcularCorriente.addEventListener("click", chequearYCalcularCorriente);
botonCalcularResistencia.addEventListener("click", chequearYCalcularResistencia);

//EVENTO AL PRESIONAR EL BOTÓN "RESET":
botonReset.addEventListener("click", resetear);

//FUNCIONES QUE MUESTRAN SECCIONES EN EL HTML: 
function mostrarCalculadoraVoltaje(){
    //Obtiene el ID del botón:
    let idBotonElegido = botonVoltaje.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBotonElegido", idBotonElegido);
    seccionVoltaje.style.display="block"; 
    seccionIntensidad.style.display="none"; 
    seccionResistencia.style.display="none"; 
    animarBotonVoltaje();
    quitarClaseAIntensidad()
    quitarClaseAResistencia()   
}

function mostrarCalculadoraIntensidad(){
    //Obtiene el ID del botón:
    let idBotonElegido = botonIntensidad.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBotonElegido", idBotonElegido);
    seccionIntensidad.style.display="block"; 
    seccionVoltaje.style.display="none"; 
    seccionResistencia.style.display="none";
    animarBotonIntensidad();
    quitarClaseAVoltaje()
    quitarClaseAResistencia()
}

function mostrarCalculadoraResistencia(){
    //Obtiene el ID del botón:
    let idBotonElegido = botonResistencia.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBotonElegido", idBotonElegido);
    seccionResistencia.style.display="block"; 
    seccionVoltaje.style.display="none"; 
    seccionIntensidad.style.display="none"; 
    animarBotonResistencia();
    quitarClaseAVoltaje()
    quitarClaseAIntensidad()
}


//FUNCIONES QUE ILUMINAN LAS OPCIONES:
//SECCION PARA CALCULAR VOLTAJE:
function ohm(){
    iluminar(opcionOhm);
    //Obtiene el ID del botón:
    let idBoton = opcionOhm.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBoton", idBoton); 
    //Remover las otras clases para apagar la iluminación: 
    eliminarIluminacion(opcionKohm);
    eliminarIluminacion(opcionMohm);
}

function kohm(){
    iluminar(opcionKohm);
    //Obtiene el ID del botón:
    let idBoton = opcionKohm.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBoton", idBoton); 
    //Remover las otras clases para apagar la iluminación: 
    eliminarIluminacion(opcionOhm);
    eliminarIluminacion(opcionMohm);
}

function mohm(){
    iluminar(opcionMohm);
    //Obtiene el ID del botón:
    let idBoton = opcionMohm.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBoton", idBoton); 
    //Remover las otras clases para apagar la iluminación: 
    eliminarIluminacion(opcionOhm);
    eliminarIluminacion(opcionKohm);
}

function mA(){
    iluminar(opcionmA);
    //Obtiene el ID del botón:
    let idBotonA = opcionmA.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBotonA", idBotonA); 
    //Remover las otras clases para apagar la iluminación: 
    eliminarIluminacion(opcionA);
}

function a(){
    iluminar(opcionA);
    //Obtiene el ID del botón:
    let idBotonA = opcionA.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBotonA", idBotonA); 
    //Remover las otras clases para apagar la iluminación: 
    eliminarIluminacion(opcionmA);
}

//SECCIÓN PARA CALCULAR CORRIENTE:
function ohm2(){
    iluminar(opcionOhm2);
    //Obtiene el ID del botón:
    let idBoton2 = opcionOhm2.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBoton2", idBoton2); 
    //Remover las otras clases para apagar la iluminación: 
    eliminarIluminacion(opcionKohm2);
    eliminarIluminacion(opcionMohm2);
}

function kohm2(){
    iluminar(opcionKohm2);
    //Obtiene el ID del botón:
    let idBoton2 = opcionKohm2.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBoton2", idBoton2); 
    //Remover las otras clases para apagar la iluminación: 
    eliminarIluminacion(opcionOhm2);
    eliminarIluminacion(opcionMohm2);
}

function mohm2(){
    iluminar(opcionMohm2);
    //Obtiene el ID del botón:
    let idBoton2 = opcionMohm2.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBoton2", idBoton2); 
    //Remover las otras clases para apagar la iluminación: 
    eliminarIluminacion(opcionOhm2);
    eliminarIluminacion(opcionKohm2);
}

//SECCIÓN PARA CALCULAR RESISTENCIA:
function a2(){
    iluminar(opcionA2);
    //Obtiene el ID del botón:
    let idBotonA2 = opcionA2.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBotonA2", idBotonA2); 
    //Remover las otras clases para apagar la iluminación: 
    eliminarIluminacion(opcionmA2);
}

function mA2(){
    iluminar(opcionmA2);
    //Obtiene el ID del botón:
    let idBotonA2 = opcionmA2.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBotonA2", idBotonA2); 
    //Remover las otras clases para apagar la iluminación: 
    eliminarIluminacion(opcionA2);
}

//FUNCIONES REUTILIZABLES PARA ILUMINAR Y APAGAR TEXTO Y BOTONES:
function iluminar(boton){
    boton.classList.toggle("iluminar-boton");    
}

function eliminarIluminacion(boton){
    boton.classList.remove("iluminar-boton");
}

//FUNCIONES QUE QUITAN CLASES AL HTML:
function quitarClaseAVoltaje(){
    botonVoltaje.classList.remove("animar-boton-voltaje");
}

function quitarClaseAIntensidad(){
    botonIntensidad.classList.remove("animar-boton-intensidad");
}

function quitarClaseAResistencia(){
    botonResistencia.classList.remove("animar-boton-resistencia");
}

//FUNCIONES QUE AGREGAN CLASES AL HTML:
function animarBotonVoltaje(){
    botonVoltaje.classList.toggle("animar-boton-voltaje");
}

function animarBotonIntensidad(){
    botonIntensidad.classList.toggle("animar-boton-intensidad");
}

function animarBotonResistencia(){
    botonResistencia.classList.toggle("animar-boton-resistencia");
}


//FUNCIONES QUE CHEQUEAN INGRESO DE DATOS, Y CHEQUEAN LOS CÁLCULOS: 
//CÁLCULO DE VOLTAJE:
function chequearYCalcularVoltaje(){
    cargarDatos();

    let idDelBoton = sessionStorage.getItem("idBoton");
    let idDelBotonA = sessionStorage.getItem("idBotonA");

    if((valorResistencia == "") || (valorIntensidad == "")){
        alert("Tenés que complar TODOS los campos");        
    }
    else if(idDelBoton == null){
        alert("Tenés que elegir alguna de las opciones de Ω-KΩ-MΩ");
    }    
    else if(idDelBotonA == null){
        alert("Tenés que elegir alguna de las opciones de mA-A")
    }
    else{
        let mostrarSeccionResultado = seccionResultadoTension.style.display = "block";
        let mostrarBotonReset = botonReset.style.display = "block";

        if(idDelBoton === "ohm" && idDelBotonA === "mA"){
            resultado = (valorResistencia * (valorIntensidad/1000)).toFixed(1);
            spanTension.innerHTML = resultado;
            mostrarSeccionResultado;
            mostrarBotonReset;
            console.log("El valor del voltaje es de:", resultado);
        }
        else if(idDelBoton === "kohm" && idDelBotonA === "mA"){
            resultado = ((valorResistencia * 1000) * (valorIntensidad/1000)).toFixed(1);
            spanTension.innerHTML = resultado;
            mostrarSeccionResultado;
            mostrarBotonReset;
            console.log("El valor del voltaje es de:", resultado);
        }
        else if(idDelBoton === "mohm" && idDelBotonA === "mA"){
            resultado = ((valorResistencia * 1000000) * (valorIntensidad/1000)).toFixed(1);
            spanTension.innerHTML = resultado;
            mostrarSeccionResultado;
            mostrarBotonReset;
            console.log("El valor del voltaje es de:", resultado);
        }   
        else if(idDelBoton === "ohm" && idDelBotonA === "a"){
            resultado = (valorResistencia * valorIntensidad).toFixed(1);
            spanTension.innerHTML = resultado;
            mostrarSeccionResultado;
            mostrarBotonReset;
            console.log("El valor del voltaje es de:", resultado);
        } 
        else if(idDelBoton === "kohm" && idDelBotonA === "a"){
            resultado = ((valorResistencia * 1000) * valorIntensidad).toFixed(1);
            spanTension.innerHTML = resultado;
            mostrarSeccionResultado;
            mostrarBotonReset;
            console.log("El valor del voltaje es de:", resultado);
        }
        else if(idDelBoton === "mohm" && idDelBotonA === "a"){
            resultado = ((valorResistencia * 1000000) * valorIntensidad).toFixed(1);
            spanTension.innerHTML = resultado;
            mostrarSeccionResultado;
            mostrarBotonReset;
            console.log("El valor del voltaje es de:", resultado);
        }
        else{
            console.log("Hay algo que falla");
        }
    }
}

//CÁLCULO DE CORRIENTE:
function chequearYCalcularCorriente(){
    cargarDatos();

    let idDelBoton2 = sessionStorage.getItem("idBoton2");

    if((valorTension == "") || (valorResistencia2 == "")){
        alert("Tenés que complar TODOS los campos");        
    }
    else if(idDelBoton2 == null){
        alert("Tenés que elegir alguna de las opciones de Ω-KΩ-MΩ");
    }    
    else{
        let mostrarBotonReset = botonReset.style.display = "block";
        
        if(idDelBoton2 === "ohm2" && (parseInt(valorTension) < parseInt(valorResistencia2))){
            resultado = ((valorTension / valorResistencia2) * 1000).toFixed(1);
            spanIntensidad1.innerHTML = resultado;
            seccionResultadoCorriente.style.display = "block";
            mostrarBotonReset;
            console.log("El valor de la Intensidad es de:", resultado, "mA");
        }
        else if(idDelBoton2 === "ohm2" && (parseInt(valorTension) > parseInt(valorResistencia2))){
            resultado = (valorTension / valorResistencia2).toFixed(1);
            spanIntensidad2.innerHTML = resultado;
            seccionResultadoCorriente2.style.display = "block"
            mostrarBotonReset;
            console.log("El valor de la intensidad es de:", resultado, "A");
        }
        else if(idDelBoton2 === "kohm2"){
            resultado = (valorTension / (valorResistencia2 * 1000) *1000).toFixed(1);
            spanIntensidad1.innerHTML = resultado;
            seccionResultadoCorriente.style.display = "block";
            mostrarBotonReset;
            console.log("El valor de la Intensidad es de:", resultado, "mA");
        }
        
        else if(idDelBoton2 == "mohm2"){
            resultado = valorTension / (valorResistencia2 * 1000000).toFixed(1);
            spanIntensidad1.innerHTML = resultado;
            seccionResultadoCorriente.style.display = "block";
            mostrarBotonReset;
            console.log("El valor de la Intensidad es de:", resultado, "mA");
        }
        else{
            console.log("Hay algo que falla");
        }
    }
}

//CÁLCULO DE RESISTENCIA:
function chequearYCalcularResistencia(){
    cargarDatos();

    let idDelBoton2A = sessionStorage.getItem("idBotonA2");

    if((valorTension2 == "") || (valorIntensidad2 == "")){
        alert("Tenés que complar TODOS los campos");        
    }
    else if(idDelBoton2A == null){
        alert("Tenés que elegir alguna de las opciones de mA-A");
    }    
    else{
        let mostrarSeccionResultado = seccionResultadoResistencia.style.display = "block";
        let mostrarBotonReset = botonReset.style.display = "block";
    
        if(idDelBoton2A === "mA2"){
            resultado = ((valorTension2 / valorIntensidad2) * 1000).toFixed(0);
            spanResistencia.innerHTML = resultado;
            mostrarSeccionResultado;
            mostrarBotonReset;
            console.log("El valor de la resistencia es de ", resultado, "Ω");
        }
        else{
            resultado = (valorTension2 / valorIntensidad2).toFixed(0);
            spanResistencia.innerHTML = resultado;
            mostrarSeccionResultado;
            mostrarBotonReset;
            console.log("El valor de la resistencia es de ", resultado, "Ω");
        }
    }
}

function cargarDatos(){
    valorTension = datoVoltaje.value;
    valorResistencia = datoResistencia.value;
    valorIntensidad = datoCorriente.value;
    valorTension2 = datoVoltaje2.value;
    valorResistencia2 = datoResistencia2.value;
    valorIntensidad2 = datoCorriente2.value;
    // idDelBotonElegido = sessionStorage.getItem("idBotonElegido");
}

function resetear(){
    location.reload();
    sessionStorage.clear(); //Borra todos los datos del sessionStorage.
}













