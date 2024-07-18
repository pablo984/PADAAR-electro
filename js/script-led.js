
//INGRESO DE DATOS DE USUARIO DE PÁGINA DE LEDS:
let valorTensionFuente = "";
let valorTensionLed = "";
let valorIntensidadFuente = "";
let valorIntensidadLed = "";
let valorTension = "";
let valorIntensidad = "";

//VARIABLE QUE ALMACENA EL VALOR DEL SESSIONSTORAGE DE LA PÁGINA DE LEDs:
let idDelBotonElegidoEnLeds;

//RESULTADO:
let resultadoPaginaLeds;

//BOTONES DE CÁLCULO (Calcular Serie, Paralelo, Watts) en página de LEDs:
const botonSerie = document.querySelector(".boton-serie");
const botonParalelo = document.querySelector(".boton-paralelo");
const botonWatts = document.querySelector(".boton-watts");

//IDs DE LAS CAJAS DE INGRESO DE VALORES:
//CAJA DE CÁLCULO DE LEDS EN SERIE:
const datoTensionFuente = document.getElementById("idTensionFuente");
const datoTensionLed = document.getElementById("idTensionLed");
//CAJA DE CÁLCULO DE LEDS EN PARALELO:
const datoIntensidadFuente = document.getElementById("idIntensidadFuente");
const datoIntensidadLed = document.getElementById("idIntensidadLed");
//CAJA DE CÁLCULO DE WATTS:
const datoDeTension = document.getElementById("idCalculoWatts");
const datoDeIntensidad = document.getElementById("idIntensidad");

//SECCIONES OCULTAS PÁGINA LEDs:
const seccionSerie = document.querySelector(".calculo-serie");
const seccionResultadoSerie = document.querySelector(".resultado-serie");
const spanLedsEnSerie = document.querySelector(".leds-en-serie");

const seccionParalelo = document.querySelector(".calculo-paralelo");
const seccionResultadoParalelo = document.querySelector(".resultado-paralelo");
const spanLedsEnParalelo = document.querySelector(".leds-en-paralelo");

const seccionWatts = document.querySelector(".calculo-watts");
const seccionResultadoWatts = document.querySelector(".resultado-watts");
const spanWatts = document.querySelector(".consumo-en-watts");

//BOTONES DE OPCIONES (mA-A) EN PÁGINA DE LEDs:
const opcionmALedA = document.getElementById("mA-LED-A");
const opcionALedA = document.getElementById("a-LED-A");
const opcionmALedB = document.getElementById("mA-LED-B");
const opcionALedB = document.getElementById("a-LED-B");
const opcionmALedC = document.getElementById("mA-LEDC");
const opcionALedC = document.getElementById("a-LEDC");

//BOTONES "CALCULAR" EN PÁGINA DE LEDs:
const botonCalcularLedsEnSerie = document.getElementById("boton-calcular-leds-serie");
const botonCalcularLedsEnParalelo = document.getElementById("boton-calcular-leds-paralelo");
const botonCalcularWatts = document.getElementById("boton-calcular-watts");

//BOTÓN "RESET":
const botonReset = document.querySelector(".boton-reset-pag-led");

//EVENTOS AL PRESIONAR BOTONES:
botonSerie.addEventListener("click", mostrarCalculadoraSerie);
botonParalelo.addEventListener("click", mostrarCalculadoraParalelo);
botonWatts.addEventListener("click", mostrarCalculadoraWatts);

opcionmALedA.addEventListener("click", mALedA);
opcionALedA.addEventListener("click", aLedA);
opcionmALedB.addEventListener("click", mALedB);
opcionALedB.addEventListener("click", aLedB);
opcionmALedC.addEventListener("click", mALedC);
opcionALedC.addEventListener("click", aLedC);


//EVENTOS AL PRESIONAR LOS BOTONES "CALCULAR":
botonCalcularLedsEnSerie.addEventListener("click", chequearYCalcularSerie);
botonCalcularLedsEnParalelo.addEventListener("click", chequearYCalcularParalelo);
botonCalcularWatts.addEventListener("click", chequearYCalcularWatts);

//EVENTO AL PRESIONAR EL BOTÓN "RESET":
botonReset.addEventListener("click", resetearPagina);

//FUNCIONES QUE MUESTRAN SECCIONES EN EL HTML:
function mostrarCalculadoraSerie(){
    //Obtiene el ID del botón:
    let idBotonElegido2 = botonSerie.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBotonElegido2", idBotonElegido2);
    seccionSerie.style.display="block";
    seccionParalelo.style.display="none";
    seccionWatts.style.display="none";
    animarBotonSerie();
    quitarClaseABotonParalelo();
    quitarClaseABotonWatts();
}

function mostrarCalculadoraParalelo(){
    //Obtiene el ID del botón:
    let idBotonElegido2 = botonParalelo.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBotonElegido2", idBotonElegido2);
    seccionParalelo.style.display="block";
    seccionSerie.style.display="none";
    seccionWatts.style.display="none";
    animarBotonParalelo();
    quitarClaseABotonSerie();
    quitarClaseABotonWatts();
}

function mostrarCalculadoraWatts(){
    //Obtiene el ID del botón:
    let idBotonElegido2 = botonWatts.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBotonElegido2", idBotonElegido2);
    seccionWatts.style.display="block";
    seccionParalelo.style.display="none";
    seccionSerie.style.display="none";
    animarBotonWatts();
    quitarClaseABotonSerie();
    quitarClaseABotonParalelo();
}

//FUNCIONES QUE ILUMINAN LAS OPCIONES:
//SECCION PARA CALCULAR WATTS:
function mALedA(){
    iluminar(opcionmALedA);
    //Obtiene el ID del botón:
    let idBotonI = opcionmALedA.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBotonI", idBotonI);
    //Remover las otras clases para apagar la iluminación:
    eliminarIluminacion(opcionALedA);
}

function aLedA(){
    iluminar(opcionALedA);
    //Obtiene el ID del botón:
    let idBotonI = opcionALedA.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBotonI", idBotonI);
    //Remover las otras clases para apagar la iluminación:
    eliminarIluminacion(opcionmALedA);
}

function mALedB(){
    iluminar(opcionmALedB);
    //Obtiene el ID del botón:
    let idBotonIB = opcionmALedB.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBotonIB", idBotonIB);
    //Remover las otras clases para apagar la iluminación:
    eliminarIluminacion(opcionALedB);
}

function aLedB(){
    iluminar(opcionALedB);
    //Obtiene el ID del botón:
    let idBotonIB = opcionALedB.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBotonIB", idBotonIB);
    //Remover las otras clases para apagar la iluminación:
    eliminarIluminacion(opcionmALedB);
}

function mALedC(){
    iluminar(opcionmALedC);
    //Obtiene el ID del botón:
    let idBotonIC = opcionmALedC.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBotonIC", idBotonIC);
    //Remover las otras clases para apagar la iluminación:
    eliminarIluminacion(opcionALedC);
}

function aLedC(){
    iluminar(opcionALedC);
    //Obtiene el ID del botón:
    let idBotonIC = opcionALedC.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBotonIC", idBotonIC);
    //Remover las otras clases para apagar la iluminación:
    eliminarIluminacion(opcionmALedC);
}

//FUNCIONES QUE CHEQUEAN INGRESO DE DATOS, Y CHEQUEAN LOS CÁLCULOS: 
//CÁLCULO DE LEDS EN SERIE:
function chequearYCalcularSerie(){
    cargarDatosDeUsuario();

    if((valorTensionFuente === "") || (valorTensionLed === "")){
        alert("Tenés que completar TODOS los campos");
    }
    else{
        let mostrarSeccionResultado = seccionResultadoSerie.style.display="block";
        let mostrarBotonReset = botonReset.style.display="block";
        resultadoPaginaLeds = (valorTensionFuente / valorTensionLed).toFixed(0);
        spanLedsEnSerie.innerHTML = resultadoPaginaLeds;
        mostrarSeccionResultado;
        mostrarBotonReset;
    }    
}

//CÁLCULO DE LEDS EN PARALELO:
function chequearYCalcularParalelo(){
    cargarDatosDeUsuario();

    let idDelBoton1 = sessionStorage.getItem("idBotonI");
    let idDelBoton2 = sessionStorage.getItem("idBotonIB");

    if((valorIntensidadFuente === "") || (valorIntensidadLed === "")){
        alert("Tenés que completar TODOS los campos");
    }
    else if(idDelBoton1 == null){
        alert("Tenés que elegir alguna de las opciones de mA-A");
    }
    else if(idDelBoton2 == null){
        alert("Tenés que elegir alguna de las opciones mA-A");
    }
    else{
        let mostrarSeccionResultado = seccionResultadoParalelo.style.display="block";
        let mostrarBotonReset = botonReset.style.display="block";

        if(idDelBoton1 == "mA-LED-A" && idDelBoton2 == "mA-LED-B"){
            resultadoPaginaLeds = ((valorIntensidadFuente / 1000) / (valorIntensidadLed / 1000));
            spanLedsEnParalelo.innerHTML = resultadoPaginaLeds;
            mostrarSeccionResultado;
            mostrarBotonReset;
        }
        else if(idDelBoton1 == "a-LED-A" && idDelBoton2 == "mA-LED-B"){
            resultadoPaginaLeds = (valorIntensidadFuente / (valorIntensidadLed / 1000));
            spanLedsEnParalelo.innerHTML = resultadoPaginaLeds;
            mostrarSeccionResultado;
            mostrarBotonReset;
        }
        else if(idDelBoton1 == "a-LED-A" && idDelBoton2 == "a-LED-B"){
            resultadoPaginaLeds = (valorIntensidadFuente / valorIntensidadLed);
            spanLedsEnParalelo.innerHTML = resultadoPaginaLeds;
            mostrarSeccionResultado;
            mostrarBotonReset;
        }
        else{
            console.log("Hay algo que falla...");
        }
    }
}

function chequearYCalcularWatts(){
    cargarDatosDeUsuario();

    let idDelBoton = sessionStorage.getItem("idBotonIC");
    
    if((valorTension === "") || (valorIntensidad === "")){
        alert("Tenés que completar TODOS los campos");
    }
    else if(idDelBoton == null){
        alert("Tenés que elegir alguna de las opciones de mA-A");
    }
    else{
        let mostrarSeccionResultado = seccionResultadoWatts.style.display="block";
        let mostrarBotonReset = botonReset.style.display="block";
        
        if(idDelBoton == "mA-LEDC"){
            resultadoPaginaLeds = (valorTension * (valorIntensidad / 1000)).toFixed(1);
            spanWatts.innerHTML = resultadoPaginaLeds;
            mostrarSeccionResultado;
            mostrarBotonReset;
        }
        else{
            resultadoPaginaLeds = (valorTension * valorIntensidad);
            spanWatts.innerHTML = resultadoPaginaLeds;
            mostrarSeccionResultado;
            mostrarBotonReset;
        }
    }    
}

//FUNCIÓN QUE LEE LOS DATOS INGRESADOS POR EL USUARIO:
function cargarDatosDeUsuario(){
    valorTensionFuente = datoTensionFuente.value;
    valorTensionLed = datoTensionLed.value;
    
    valorIntensidadFuente = datoIntensidadFuente.value;
    valorIntensidadLed = datoIntensidadLed.value;

    valorTension = datoDeTension.value;
    valorIntensidad = datoDeIntensidad.value;
}


//FUNCIONES REUTILIZABLES PARA ILUMINAR Y APAGAR TEXTO Y BOTONES:
function iluminar(boton){
    boton.classList.toggle("iluminar-boton");    
}

function eliminarIluminacion(boton){
    boton.classList.remove("iluminar-boton");
}

//FUNCIONES QUE AGREGAN CLASES AL HTML:
function animarBotonSerie(){
    botonSerie.classList.toggle("animar-boton-serie");
}

function animarBotonParalelo(){
    botonParalelo.classList.toggle("animar-boton-paralelo");
}

function animarBotonWatts(){
    botonWatts.classList.toggle("animar-boton-watts");
}

//FUNCIONES QUE QUITAN CLASES AL HTML:
function quitarClaseABotonSerie(){
    botonSerie.classList.remove("animar-boton-serie");    
}

function quitarClaseABotonParalelo(){
    botonParalelo.classList.remove("animar-boton-paralelo");    
}

function quitarClaseABotonWatts(){
    botonWatts.classList.remove("animar-boton-watts");
}

function resetearPagina(){
    location.reload();
    sessionStorage.clear(); //Borra todos los datos del sessionStorage.
}