const padreOpciones = document.getElementById("padreOpciones");
const tresBarras = document.getElementById("tresBarras");
const opcionTemas = document.getElementById("opcionTemas");
const cerrarOpcionesTemas = document.getElementById("cerrar-opcionesTemas");


const btnLetraVideoOnce = document.getElementById("btnLetraVideoOnce");
const letraVideoOnce = document.getElementById("letra-videoOnce");


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


    btnLetraVideoOnce.addEventListener("click", ()=>{
        if(btnLetraVideoOnce.classList.contains("btnLetraVideos")){
            letraVideoOnce.style.display = "block";
            btnLetraVideoOnce.classList.replace("btnLetraVideos", "btnLetraVideosB");
        }
        else if(btnLetraVideoOnce.classList.contains("btnLetraVideosB")){
            letraVideoOnce.style.display = "none";
            btnLetraVideoOnce.classList.replace("btnLetraVideosB", "btnLetraVideos");
        }
    });
    