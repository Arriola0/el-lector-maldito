const padreOpciones = document.getElementById("padreOpciones");
const tresBarras = document.getElementById("tresBarras");
const opcionesA = document.getElementById("opcionesA");
const opcionesB = document.getElementById("opcionesB");
const opcionAutores = document.getElementById("opcionAutores");
const cerrarOpcionesAutores = document.getElementById("cerrar-opcionesAutores");
const opcionTemas = document.getElementById("opcionTemas");
const cerrarOpcionesTemas = document.getElementById("cerrar-opcionesTemas");


const btnLetraVideoSiete = document.getElementById("btnLetraVideoSiete");
const letraVideoSiete = document.getElementById("letra-videoSiete");







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













