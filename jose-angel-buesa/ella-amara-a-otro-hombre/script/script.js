const padreOpciones = document.getElementById("padreOpciones");
const tresBarras = document.getElementById("tresBarras");
const opcionTemas = document.getElementById("opcionTemas");
const cerrarOpcionesTemas = document.getElementById("cerrar-opcionesTemas");



const btnLetraVideoCatorce = document.getElementById("btnLetraVideoCatorce");
const letraVideoCatorce = document.getElementById("letra-videoCatorce");



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
    



    btnLetraVideoCatorce.addEventListener("click", ()=>{
        if(btnLetraVideoCatorce.classList.contains("btnLetraVideos")){
            letraVideoCatorce.style.display = "block";
            btnLetraVideoCatorce.classList.replace("btnLetraVideos", "btnLetraVideosB");
        }
        else if(btnLetraVideoCatorce.classList.contains("btnLetraVideosB")){
            letraVideoCatorce.style.display = "none";
            btnLetraVideoCatorce.classList.replace("btnLetraVideosB", "btnLetraVideos");
        }
    });