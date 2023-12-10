const padreOpciones = document.getElementById("padreOpciones");
const tresBarras = document.getElementById("tresBarras");
const opcionTemas = document.getElementById("opcionTemas");
const cerrarOpcionesTemas = document.getElementById("cerrar-opcionesTemas");


const btnLetraVideoQuince = document.getElementById("btnLetraVideoQuince");
const letraVideoQuince = document.getElementById("letra-videoQuince");


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
    

    btnLetraVideoQuince.addEventListener("click", ()=>{
        if(btnLetraVideoQuince.classList.contains("btnLetraVideos")){
            letraVideoQuince.style.display = "block";
            btnLetraVideoQuince.classList.replace("btnLetraVideos", "btnLetraVideosB");
        }
        else if(btnLetraVideoQuince.classList.contains("btnLetraVideosB")){
            letraVideoQuince.style.display = "none";
            btnLetraVideoQuince.classList.replace("btnLetraVideosB", "btnLetraVideos");
        }
    });


