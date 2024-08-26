
const padreOpciones = document.getElementById("padreOpciones");
const tresBarras = document.getElementById("tresBarras");
const opcionTemas = document.getElementById("opcionTemas");
const cerrarOpcionesTemas = document.getElementById("cerrar-opcionesTemas");

const btnUno = document.getElementById("btnUno");
const btnDos = document.getElementById("btnDos");

const sectionUno = document.getElementById("sectionUno");
const sectionDos = document.getElementById("sectionDos");


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


btnUno.addEventListener("click", ()=>{
    sectionDos.style.display = "grid";
    btnUno.style.display = "none";
    btnDos.style.display = "block";
})


btnDos.addEventListener("click", ()=>{
    sectionUno.style.display = "grid";
    btnDos.style.display ="none";
})

