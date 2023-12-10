const padreOpciones = document.getElementById("padreOpciones");
const tresBarras = document.getElementById("tresBarras");
const opcionTemas = document.getElementById("opcionTemas");
const cerrarOpcionesTemas = document.getElementById("cerrar-opcionesTemas");



const btnLetraVideoSeis = document.getElementById("btnLetraVideoSeis");
const letraVideoSeis = document.getElementById("letra-videoSeis");


tresBarras.addEventListener("click", ()=>{

    if(tresBarras.classList.contains("tresBarrasA")){
        opcionTemas.style.animation = "desplazarOpcionesAutoresA 1s";
        opcionTemas.style.animationFillMode = "forwards";
        tresBarras.classList.replace("tresBarrasA", "tresBarrasB");
    }
    else if(tresBarras.classList.contains("tresBarrasB")){
        opcionTemas.style.animation = "desplazarOpcionesAutoresB 2s";
        opcionTemas.style.animationFillMode = "forwards";
        tresBarras.classList.replace("tresBarrasB", "tresBarrasA");
    }
    
    });



    btnLetraVideoSeis.addEventListener("click", ()=>{
        if(btnLetraVideoSeis.classList.contains("btnLetraVideos")){
            letraVideoSeis.style.display = "block";
            btnLetraVideoSeis.classList.replace("btnLetraVideos", "btnLetraVideosB");
        }
        else if(btnLetraVideoSeis.classList.contains("btnLetraVideosB")){
            letraVideoSeis.style.display = "none";
            btnLetraVideoSeis.classList.replace("btnLetraVideosB", "btnLetraVideos");
        }
    });