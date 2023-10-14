const padreOpciones = document.getElementById("padreOpciones");
const tresBarras = document.getElementById("tresBarras");
const opcionesA = document.getElementById("opcionesA");
const opcionesB = document.getElementById("opcionesB");
const opcionAutores = document.getElementById("opcionAutores");
const cerrarOpcionesAutores = document.getElementById("cerrar-opcionesAutores");
const opcionTemas = document.getElementById("opcionTemas");
const cerrarOpcionesTemas = document.getElementById("cerrar-opcionesTemas");



const btnLetraVideoNueve = document.getElementById("btnLetraVideoNueve");
const letraVideoNueve = document.getElementById("letra-videoNueve");
const btnLetraVideoDies = document.getElementById("btnLetraVideoDies");
const letraVideoDies = document.getElementById("letra-videoDies");
const btnLetraVideoCinco = document.getElementById("btnLetraVideoCinco");
const letraVideoCinco = document.getElementById("letra-videoCinco");
const btnLetraVideoSeis = document.getElementById("btnLetraVideoSeis");
const letraVideoSeis = document.getElementById("letra-videoSeis");





tresBarras.addEventListener("click", ()=>{

    if(tresBarras.classList.contains("tresBarrasA")){
        padreOpciones.style.animation = "deplazarOpcionesA 1s";
        padreOpciones.style.animationFillMode = "forwards";
        tresBarras.classList.replace("tresBarrasA", "tresBarrasB");
    }
    else if(tresBarras.classList.contains("tresBarrasB")){
        padreOpciones.style.animation = "deplazarOpcionesB 2s";
        padreOpciones.style.animationFillMode = "forwards";
        tresBarras.classList.replace("tresBarrasB", "tresBarrasA");
    }
    
    });

    
opcionesA.addEventListener("click", ()=>{
    
    if(opcionesA.classList.contains("opcionesA")){
        opcionAutores.style.animation = "desplazarOpcionesAutoresA 1s";
        opcionAutores.style.animationFillMode = "forwards";
        opcionesA.classList.replace("opcionesA", "opcionesAA")

                opcionTemas.style.animation = "desplazarOpcionesAutoresB 0s";
                opcionTemas.style.animationFillMode = "forwards";
                opcionesB.classList.replace("opcionesBB", "opcionesB");
    }
    else if(opcionesA.classList.contains("opcionesAA")){
        opcionAutores.style.animation = "desplazarOpcionesAutoresB 2s";
        opcionAutores.style.animationFillMode = "forwards";
        opcionesA.classList.replace("opcionesAA", "opcionesA");
    }

});

cerrarOpcionesAutores.addEventListener("click", ()=>{
    if(opcionesA.classList.contains("opcionesAA")){
        opcionAutores.style.animation = "desplazarOpcionesAutoresB 2s";
        opcionAutores.style.animationFillMode = "forwards";
        opcionesA.classList.replace("opcionesAA", "opcionesA");
    }
});



opcionesB.addEventListener("click", ()=>{

    if(opcionesB.classList.contains("opcionesB")){
        opcionTemas.style.animation = "desplazarOpcionesAutoresA 1s";
        opcionTemas.style.animationFillMode = "forwards";
        opcionesB.classList.replace("opcionesB", "opcionesBB");
        
                opcionAutores.style.animation = "desplazarOpcionesAutoresB 0s";
                opcionAutores.style.animationFillMode = "forwards";
                opcionesA.classList.replace("opcionesAA", "opcionesA");

    }
    else if(opcionesB.classList.contains("opcionesBB")){
        opcionTemas.style.animation = "desplazarOpcionesAutoresB 2s";
        opcionTemas.style.animationFillMode = "forwards";
        opcionesB.classList.replace("opcionesBB", "opcionesB");
    }


});

cerrarOpcionesTemas.addEventListener("click", ()=>{
if(opcionesB.classList.contains("opcionesBB")){
opcionTemas.style.animation = "desplazarOpcionesAutoresB 2s";
        opcionTemas.style.animationFillMode = "forwards";
        opcionesB.classList.replace("opcionesBB", "opcionesB");
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


btnLetraVideoSeis.addEventListener("click", ()=>{
    if(btnLetraVideoSeis.classList.contains("btnLetraVideos")){
        letraVideoSeis.style.display = "block";
        btnLetraVideoSeis.classList.replace("btnLetraVideos", "btnLetraVideosB");
    }
    else if(btnLetraVideoSeis.classList.contains("btnLetraVideosB")){
        letraVideoSeis.style.display = "none";
        btnLetraVideoSeis.classList.replace("btnLetraVideosB", "btnLetraVideos");
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






