const padreOpciones = document.getElementById("padreOpciones");
const tresBarras = document.getElementById("tresBarras");
const opcionTemas = document.getElementById("opcionTemas");
const cerrarOpcionesTemas = document.getElementById("cerrar-opcionesTemas");


const btnLetraVideoSiete = document.getElementById("btnLetraVideoSiete");
const letraVideoSiete = document.getElementById("letra-videoSiete");


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


    btnLetraVideoSiete.addEventListener("click", ()=>{
        if(btnLetraVideoSiete.classList.contains("btnLetraVideos")){
            letraVideoSiete.style.display = "block";
            btnLetraVideoSiete.classList.replace("btnLetraVideos", "btnLetraVideosB");
        }
        else if(btnLetraVideoSiete.classList.contains("btnLetraVideosB")){
            letraVideoSiete.style.display = "none";
            btnLetraVideoSiete.classList.replace("btnLetraVideosB", "btnLetraVideos");
        }
    });
    



