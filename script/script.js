
const padreOpciones = document.getElementById("padreOpciones");
const tresBarras = document.getElementById("tresBarras");
const opcionTemas = document.getElementById("opcionTemas");
const cerrarOpcionesTemas = document.getElementById("cerrar-opcionesTemas");

const btnVerA = document.getElementById("btnVerA");
const sectionVideos = document.getElementById("sectionVideos");


const btnVerB = document.getElementById("btnVerB");
const sectionVideosB = document.getElementById("sectionVideosB");


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




btnVerA.addEventListener("click", ()=>{
    sectionVideos.style.display = "grid";
    btnVerA.style.display = "none";
})


btnVerB.addEventListener("click", ()=>{
    sectionVideosB.style.display = "grid";
    btnVerA.style.display = "block";
    btnVerB.style.display = "none";
})

