//Variables globales de administrador
const d = document;
let nameUser = d.querySelector("#nombre-usuario");
let btnLogout = d.querySelector("btnLogout");

d.addEventListener("DOMContentLoaded", ()=>{
    getUser();
})

//Función para poner el nombre del usuario
let getUSer = () => {
    let user = JSON.parse(localStorage.getItem("userLogin"));
    nameUser.textContent = user.nombre;
};

//Evento para el botón de logout
btnLogout.addEventListener("click", ()=>{
    localStorage.removeItem("userLogin");
    location.href = "../login.html";
});