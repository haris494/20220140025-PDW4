// Fungsi untuk menampilkan alert saat tombol "Start Meeting" ditekan
function show() {
    alert("Let's start the meeting!");
  }
  
  // Fungsi untuk menampilkan tanggal dan waktu saat dokumen HTML selesai dimuat
  document.addEventListener("DOMContentLoaded", function() {
    // Membuat objek Date untuk mendapatkan tanggal dan waktu saat ini
    var date = new Date();
    
    // Opsi untuk format tanggal
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    // Mendapatkan tanggal dalam format yang diinginkan
    var formattedDate = date.toLocaleDateString('en-US', options);
    
    // Mendapatkan waktu dalam format yang diinginkan
    var time = date.toLocaleTimeString('en-US');
    
    // Menampilkan tanggal dan waktu di elemen dengan id "hasil"
    document.getElementById("hasil").innerHTML = "Today is " + formattedDate + ", " + time;
  });
  