const padreOpciones = document.getElementById("padreOpciones");
const tresBarras = document.getElementById("tresBarras");
const opcionTemas = document.getElementById("opcionTemas");
const cerrarOpcionesTemas = document.getElementById("cerrar-opcionesTemas");



const btnLetraVideoTrece = document.getElementById("btnLetraVideoTrece");
const letraVideoTrece = document.getElementById("letra-videoTrece");



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
    



    btnLetraVideoTrece.addEventListener("click", ()=>{
        if(btnLetraVideoTrece.classList.contains("btnLetraVideos")){
            letraVideoTrece.style.display = "block";
            btnLetraVideoTrece.classList.replace("btnLetraVideos", "btnLetraVideosB");
        }
        else if(btnLetraVideoTrece.classList.contains("btnLetraVideosB")){
            letraVideoTrece.style.display = "none";
            btnLetraVideoTrece.classList.replace("btnLetraVideosB", "btnLetraVideos");
        }
    });