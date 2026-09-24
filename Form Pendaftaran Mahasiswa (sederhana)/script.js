const form = document.getElementById("form");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const jurusan = document.getElementById("jurusan");
const semester = document.getElementById("semester");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", function(event){

    event.preventDefault();

    hasil.innerHTML =
    "Nama: " + nama.value + "<br>" + "<br>" +
    "Email Aktif: " + email.value + "<br>" + "<br>" +
    "Jurusan: " + jurusan.value + "<br>" + "<br>" +
    "Semester: " + semester.value + "<br>" + "<br>";
});
