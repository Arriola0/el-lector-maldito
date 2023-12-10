const padreOpciones = document.getElementById("padreOpciones");
const tresBarras = document.getElementById("tresBarras");
const opcionTemas = document.getElementById("opcionTemas");
const cerrarOpcionesTemas = document.getElementById("cerrar-opcionesTemas");



const btnLetraVideoDos = document.getElementById("btnLetraVideoDos");
const letraVideoDos = document.getElementById("letra-videoDos");


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


    btnLetraVideoDos.addEventListener("click", ()=>{
        if(btnLetraVideoDos.classList.contains("btnLetraVideos")){
            letraVideoDos.style.display = "block";
            btnLetraVideoDos.classList.replace("btnLetraVideos", "btnLetraVideosB")
        }
        else if(btnLetraVideoDos.classList.contains("btnLetraVideosB")){
            letraVideoDos.style.display = "none";
            btnLetraVideoDos.classList.replace("btnLetraVideosB", "btnLetraVideos")
        }
    });
    
