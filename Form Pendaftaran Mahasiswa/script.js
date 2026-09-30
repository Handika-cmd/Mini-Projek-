// Langkah 1: buat variabel untuk mengambil elemen htmlnya menggunakan getElemenById atau  query lainnya.
const form = document.getElementById("form");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const jurusan = document.getElementById("jurusan");
const semester = document.getElementById("semester");
const hasil = document.querySelector(".result p");

// Langkah 2: jalankan fungsi event formnya dengan menggunakan pola addEventListener("submit", function(){...})
form.addEventListener("submit", function(event){
    // Langkah 3: buat event defaultnya
    event.preventDefault();
// Langkah 4: buat data "mahasiswa" masing masing data dikasih "value"
    const mahasiswa ={
        nama: nama.value,
        email: email.value,
        jurusan: jurusan.value,
        semester: semester.value

    };
    
    // langkah 5: buat Variabel jSON stringify()
    const dataJSON = JSON.stringify(mahasiswa);
    // Langkah 6: simpan dataJSON ke local storage dan buat key nya
    localStorage.setItem("mahasiswa",dataJSON);
 });

// Langkah 7: ambil dataJSONnya
const dataTersimpan = localStorage.getItem("mahasiswa");
// Langkah 8: kembalikan dataJSON menjadi object parse()
const mahasiswaTersimpan = JSON.parse(dataTersimpan);

// Langkah 8: Tampilkan ke layar jika ada data, kirimkan pesan "belum ada data" jika tidak ada data.
if(mahasiswaTersimpan){
    hasil.innerHTML =
    "Nama: " + mahasiswaTersimpan.nama + "<br>"+
    "Email: " + mahasiswaTersimpan.email + "<br>" +
    "Jurusan: " + mahasiswaTersimpan.jurusan + "<br>"+
    "Semester: " + mahasiswaTersimpan.semester;
}else{
    hasil.textContent = "Belum ada data tersimpan";
};