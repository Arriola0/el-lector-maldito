const padreOpciones = document.getElementById("padreOpciones");
const tresBarras = document.getElementById("tresBarras");
const opcionTemas = document.getElementById("opcionTemas");
const cerrarOpcionesTemas = document.getElementById("cerrar-opcionesTemas");



const btnLetraVideoDoce = document.getElementById("btnLetraVideoDoce");
const letraVideoDoce = document.getElementById("letra-videoDoce");



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
    



    btnLetraVideoDoce.addEventListener("click", ()=>{
        if(btnLetraVideoDoce.classList.contains("btnLetraVideos")){
            letraVideoDoce.style.display = "block";
            btnLetraVideoDoce.classList.replace("btnLetraVideos", "btnLetraVideosB");
        }
        else if(btnLetraVideoDoce.classList.contains("btnLetraVideosB")){
            letraVideoDoce.style.display = "none";
            btnLetraVideoDoce.classList.replace("btnLetraVideosB", "btnLetraVideos");
        }
    });