
const padreOpciones = document.getElementById("padreOpciones");
const tresBarras = document.getElementById("tresBarras");
const opcionesA = document.getElementById("opcionesA");
const opcionesB = document.getElementById("opcionesB");
const opcionAutores = document.getElementById("opcionAutores");
const cerrarOpcionesAutores = document.getElementById("cerrar-opcionesAutores");
const opcionTemas = document.getElementById("opcionTemas");
const cerrarOpcionesTemas = document.getElementById("cerrar-opcionesTemas");


const btnLetraVideoUno = document.getElementById("btnLetraVideoUno");
const letraVideoUno = document.getElementById("letra-videoUno");
const btnLetraVideoDos = document.getElementById("btnLetraVideoDos");
const letraVideoDos = document.getElementById("letra-videoDos");
const btnLetraVideoTres = document.getElementById("btnLetraVideoTres");
const letraVideoTres = document.getElementById("letra-videoTres");
const btnLetraVideoCuatro = document.getElementById("btnLetraVideoCuatro");
const letraVideoCuatro = document.getElementById("letra-videoCuatro");
const btnLetraVideoCinco = document.getElementById("btnLetraVideoCinco");
const letraVideoCinco = document.getElementById("letra-videoCinco");
const btnLetraVideoSeis = document.getElementById("btnLetraVideoSeis");
const letraVideoSeis = document.getElementById("letra-videoSeis");
const btnLetraVideoSiete = document.getElementById("btnLetraVideoSiete");
const letraVideoSiete = document.getElementById("letra-videoSiete");
const btnLetraVideoOcho = document.getElementById("btnLetraVideoOcho");
const letraVideoOcho = document.getElementById("letra-videoOcho");
const btnLetraVideoNueve = document.getElementById("btnLetraVideoNueve");
const letraVideoNueve = document.getElementById("letra-videoNueve");
const btnLetraVideoDies = document.getElementById("btnLetraVideoDies");
const letraVideoDies = document.getElementById("letra-videoDies");
const btnLetraVideoOnce = document.getElementById("btnLetraVideoOnce");
const letraVideoOnce = document.getElementById("letra-videoOnce");









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





btnLetraVideoUno.addEventListener("click", ()=>{
    if(btnLetraVideoUno.classList.contains("btnLetraVideos")){
        letraVideoUno.style.display = "block";
        btnLetraVideoUno.classList.replace("btnLetraVideos", "btnLetraVideosB");
    }
    else if(btnLetraVideoUno.classList.contains("btnLetraVideosB")){
        letraVideoUno.style.display = "none";
        btnLetraVideoUno.classList.replace("btnLetraVideosB", "btnLetraVideos");
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


btnLetraVideoTres.addEventListener("click", ()=>{
    if(btnLetraVideoTres.classList.contains("btnLetraVideos")){
        letraVideoTres.style.display = "block";
        btnLetraVideoTres.classList.replace("btnLetraVideos", "btnLetraVideosB");
    }
    else if(btnLetraVideoTres.classList.contains("btnLetraVideosB")){
        letraVideoTres.style.display = "none";
        btnLetraVideoTres.classList.replace("btnLetraVideosB", "btnLetraVideos");
    }
});


btnLetraVideoCuatro.addEventListener("click", ()=>{
    if(btnLetraVideoCuatro.classList.contains("btnLetraVideos")){
        letraVideoCuatro.style.display = "block";
        btnLetraVideoCuatro.classList.replace("btnLetraVideos", "btnLetraVideosB");
    }
    else if(btnLetraVideoCuatro.classList.contains("btnLetraVideosB")){
        letraVideoCuatro.style.display = "none";
        btnLetraVideoCuatro.classList.replace("btnLetraVideosB", "btnLetraVideos");
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



btnLetraVideoOcho.addEventListener("click", ()=>{
    if(btnLetraVideoOcho.classList.contains("btnLetraVideos")){
        letraVideoOcho.style.display = "block";
        btnLetraVideoOcho.classList.replace("btnLetraVideos", "btnLetraVideosB");
    }
    else if(btnLetraVideoOcho.classList.contains("btnLetraVideosB")){
        letraVideoOcho.style.display = "none";
        btnLetraVideoOcho.classList.replace("btnLetraVideosB", "btnLetraVideos");
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



























