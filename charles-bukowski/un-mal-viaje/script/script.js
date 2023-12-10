const padreOpciones = document.getElementById("padreOpciones");
const tresBarras = document.getElementById("tresBarras");
const opcionTemas = document.getElementById("opcionTemas");
const cerrarOpcionesTemas = document.getElementById("cerrar-opcionesTemas");


const btnLetraVideoDies = document.getElementById("btnLetraVideoDies");
const letraVideoDies = document.getElementById("letra-videoDies");


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


btnLetraVideoDies.addEventListener("click", ()=>{
    if(btnLetraVideoDies.classList.contains("btnLetraVideos")){
        letraVideoDies.style.display = "block";
        btnLetraVideoDies.classList.replace("btnLetraVideos", "btnLetraVideosB");
    }
    else if(btnLetraVideoDies.classList.contains("btnLetraVideosB")){
        letraVideoDies.style.display = "none";
        btnLetraVideoDies.classList.replace("btnLetraVideosB", "btnLetraVideos");
    }
});


