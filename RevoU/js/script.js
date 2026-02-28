// Welcome Text
let userName = prompt("Masukkan Nama Anda:");
if(userName){
  document.getElementById("welcomeText").innerText =
  "Hi " + userName + ", Welcome To Website";
}

// Form Handling
document.getElementById("contactForm")
.addEventListener("submit", function(e){
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let tanggal = document.getElementById("tanggal").value;
  let pesan = document.getElementById("pesan").value;
  let gender = document.querySelector('input[name="gender"]:checked');

  if(!nama || !tanggal || !gender || !pesan){
    alert("Semua field harus diisi!");
    return;
  }

  let currentTime = new Date();

  document.getElementById("result").innerHTML = `
    <p><strong>Current Time:</strong> ${currentTime}</p>
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
    <p><strong>Pesan:</strong> ${pesan}</p>
  `;
});