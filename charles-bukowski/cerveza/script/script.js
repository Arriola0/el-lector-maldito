const padreOpciones = document.getElementById("padreOpciones");
const tresBarras = document.getElementById("tresBarras");
const opcionTemas = document.getElementById("opcionTemas");
const cerrarOpcionesTemas = document.getElementById("cerrar-opcionesTemas");


const btnLetraVideoCinco = document.getElementById("btnLetraVideoCinco");
const letraVideoCinco = document.getElementById("letra-videoCinco");


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


    btnLetraVideoCinco.addEventListener("click", ()=>{
        if(btnLetraVideoCinco.classList.contains("btnLetraVideos")){
            letraVideoCinco.style.display = "block";
            btnLetraVideoCinco.classList.replace("btnLetraVideos", "btnLetraVideosB");
        }
        else if(btnLetraVideoCinco.classList.contains("btnLetraVideosB")){
            letraVideoCinco.style.display = "none";
            btnLetraVideoCinco.classList.replace("btnLetraVideosB", "btnLetraVideos");
        }
    });
    

