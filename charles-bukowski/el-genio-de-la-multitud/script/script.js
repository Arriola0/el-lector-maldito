const padreOpciones = document.getElementById("padreOpciones");
const tresBarras = document.getElementById("tresBarras");
const opcionTemas = document.getElementById("opcionTemas");
const cerrarOpcionesTemas = document.getElementById("cerrar-opcionesTemas");


const btnLetraVideoNueve = document.getElementById("btnLetraVideoNueve");
const letraVideoNueve = document.getElementById("letra-videoNueve");


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


btnLetraVideoNueve.addEventListener("click", ()=>{
    if(btnLetraVideoNueve.classList.contains("btnLetraVideos")){
        letraVideoNueve.style.display = "block";
        btnLetraVideoNueve.classList.replace("btnLetraVideos", "btnLetraVideosB");
    }
    else if(btnLetraVideoNueve.classList.contains("btnLetraVideosB")){
        letraVideoNueve.style.display = "none";
        btnLetraVideoNueve.classList.replace("btnLetraVideosB", "btnLetraVideos");
    }
});
