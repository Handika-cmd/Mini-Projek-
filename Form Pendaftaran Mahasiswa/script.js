const form = document.getElementById("form");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const jurusan = document.getElementById("jurusan");
const semester = document.getElementById("semester");
const reset = document.getElementById("resetButton");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const mahasiswa = {
        nama: nama.value,
        email: email.value,
        jurusan: jurusan.value,
        semester: semester.value
    };

    const dataJSON = JSON.stringify(mahasiswa);
    localStorage.setItem("pengguna", dataJSON);
});

const dataTersimpan = localStorage.getItem("pengguna");
const penggunaTersimpan = JSON.parse(dataTersimpan);

if (penggunaTersimpan){
    hasil.innerHTML=
    "Nama: " + penggunaTersimpan.nama + "<br>" +
    "Email: " + penggunaTersimpan.email + "<br>" +
    "Jurusan: " + penggunaTersimpan.jurusan + "<br>" +
    "Semester: " + penggunaTersimpan.semester;
}else{
    hasil.textContent = "Belum ada data tersimpan"
};

reset.addEventListener("click", function(event){

    event.preventDefault();

    localStorage.removeItem("pengguna");
    hasil.textContent = "Data berhasil dihapus";
    form.reset()
});