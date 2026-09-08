// =========================
// SECCIONES
// =========================

const secciones = [
    "inicio",
    "regalos",
    "flores",
    "fotos",
    "chats",
    "recuerdos",
    "futuro"
];


// =========================
// FUNCIÓN PARA MOSTRAR UNA SECCIÓN
// =========================

function mostrarSeccion(id) {

    // Ocultamos todas las secciones
    secciones.forEach(function(seccion) {

        document.getElementById(seccion).style.display = "none";

    });


    // Mostramos solamente la sección elegida
    document.getElementById(id).style.display = "flex";


    // Regresamos al inicio de la página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =========================
// AL CARGAR LA PÁGINA
// =========================

mostrarSeccion("inicio");


// =========================
// BOTÓN SÍ
// =========================

const botonSi = document.getElementById("botonSi");

const mensaje = document.getElementById("mensaje");

botonSi.addEventListener("click", function() {

    mensaje.textContent = "SABÍA QUE DIRÍAS QUE SÍ 😎❤️";

    setTimeout(function() {

        mostrarSeccion("regalos");

    }, 800);

});


// =========================
// BOTÓN NO
// =========================

const botonNo = document.getElementById("botonNo");

botonNo.addEventListener("click", function() {

    mensaje.textContent = "¿Segura? 🥺 Mejor inténtalo de nuevo ❤️";

});


// =========================
// CAJITA DE FLORES
// =========================

const cajaFlores = document.getElementById("cajaFlores");

cajaFlores.addEventListener("click", function() {

    mostrarSeccion("flores");

});


// =========================
// CAJITA DE FOTOS
// =========================

const cajaFotos = document.getElementById("cajaFotos");

cajaFotos.addEventListener("click", function() {

    mostrarSeccion("fotos");

});


// =========================
// CAJITA DE CHATS
// =========================

const cajaChats = document.getElementById("cajaChats");

cajaChats.addEventListener("click", function() {

    mostrarSeccion("chats");

});


// =========================
// CAJITA DE RECUERDOS
// =========================

const cajaRecuerdos = document.getElementById("cajaRecuerdos");

cajaRecuerdos.addEventListener("click", function() {

    mostrarSeccion("recuerdos");

});


// =========================
// CAJITA DEL FUTURO
// =========================

const cajaFuturo = document.getElementById("cajaFuturo");

cajaFuturo.addEventListener("click", function() {

    mostrarSeccion("futuro");

});


// =========================
// BOTONES "VOLVER"
// =========================

const volverFlores = document.getElementById("volverFlores");

volverFlores.addEventListener("click", function() {

    mostrarSeccion("regalos");

});


const volverFotos = document.getElementById("volverFotos");

volverFotos.addEventListener("click", function() {

    mostrarSeccion("regalos");

});


const volverChats = document.getElementById("volverChats");

volverChats.addEventListener("click", function() {

    mostrarSeccion("regalos");

});


const volverRecuerdos = document.getElementById("volverRecuerdos");

volverRecuerdos.addEventListener("click", function() {

    mostrarSeccion("regalos");

});


const volverFuturo = document.getElementById("volverFuturo");

volverFuturo.addEventListener("click", function() {

    mostrarSeccion("regalos");

});