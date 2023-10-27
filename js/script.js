
window.onload = function() {
  var yourName = prompt('Please enter your Name: ', '');
  var teksNama = document.getElementById("yourName");
  teksNama.innerHTML = yourName;
}

const nama = document.getElementById('nama');
const tanggalLahir = document.getElementById('date');
const jenisKelamin = document.getElementsByName('jenis_kelamin');
const pesan = document.getElementById('pesan');

function getJenisKelamin() {
  for (let i = 0; i < jenisKelamin.length; i++) {
    if (jenisKelamin[i].checked) {
      return jenisKelamin[i].value;
    }
  }
}

function submitMessage() {

let newDate = new Date();

let jam = newDate.getHours();
let menit = newDate.getMinutes();
let detik = newDate.getSeconds();
let utc =  newDate.toUTCString();

let waktu = `Current time: ${jam}:${menit}:${detik}, ${utc}.`;


  let errorMessage = '';
  if (nama.value === '') {
    errorMessage += 'Nama belum diisi.\n';
  }
  if (tanggalLahir.value === '') {
    errorMessage += 'Tanggal lahir belum diisi.\n';
  }
  if (!getJenisKelamin()) {
    errorMessage += 'Jenis kelamin belum dipilih.\n';
  }
  if (pesan.value === '') {
    errorMessage += 'Pesan belum diisi.\n';
  }
  if (errorMessage !== '') {
    document.getElementById('hasil').value = errorMessage;
  } else {
    const namaValue = nama.value;
    const tanggalLahirValue = tanggalLahir.value;
    const jenisKelaminValue = getJenisKelamin();
    const pesanValue = pesan.value;
    
    document.getElementById('hasil').value = `${waktu}\n\nNama: ${namaValue}\nTanggal Lahir: ${tanggalLahirValue}\nJenis Kelamin: ${jenisKelaminValue}\nPesan: ${pesanValue}`;
  }
  event.preventDefault();
    }