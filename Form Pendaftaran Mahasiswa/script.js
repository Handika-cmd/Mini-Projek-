const form = document.getElementById("form");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const jurusan = document.getElementById("jurusan");
const semester = document.getElementById("semester");
const hasil = document.querySelector(".result p");

form.addEventListener("submit", function(event){

    event.preventDefault();

    hasil.innerHTML =
    "Nama: " + nama.value + "<br>" + "<br>" +
    "Email: " + email.value + "<br>" + "<br>" 
});