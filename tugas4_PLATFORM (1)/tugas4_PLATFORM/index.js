function prosesInput() {
  let nama = document.getElementById("nama").value;
  let jumlah = parseInt(document.getElementById("jumlah").value);
  let container = document.getElementById("pilihanContainer");

  container.innerHTML = ""; // Bersihkan isi sebelumnya

  if (isNaN(jumlah) || jumlah <= 0) {
    container.innerHTML = "<p>Masukkan jumlah pilihan yang valid.</p>";
    return;
  }

  let formHTML = "";
  for (let i = 1; i <= jumlah; i++) {
    formHTML += `<label for="pilihan${i}">Pilihan ${i}:</label>
                     <input type="text" id="pilihan${i}" placeholder="Teks Pilihan ${i}">
                     <br><br>`;
  }

  formHTML += `<button onclick="tampilkanPilihan('${nama}', ${jumlah})">Submit</button>`;
  container.innerHTML = formHTML;
}

function tampilkanPilihan(nama, jumlah) {
  let pilihanText = [];
  for (let i = 1; i <= jumlah; i++) {
    let pilihan = document.getElementById(`pilihan${i}`).value;
    if (pilihan) pilihanText.push(pilihan);
  }

  if (pilihanText.length !== jumlah) {
    alert("Harap isi semua pilihan sebelum melanjutkan.");
    return;
  }

  let pilihanHTML = "<h3>Pilihan:</h3>";

  // Radio Button
  pilihanHTML += "<p><b>Dalam bentuk Radio Button:</b></p>";
  for (let i = 0; i < pilihanText.length; i++) {
    pilihanHTML += `<input type="radio" name="pilihan" value="${pilihanText[i]}"> ${pilihanText[i]}<br>`;
  }

  // Drop Down
  pilihanHTML += "<p><b>Dalam bentuk Drop Down:</b></p>";
  pilihanHTML += `<select>`;
  for (let i = 0; i < pilihanText.length; i++) {
    pilihanHTML += `<option value="${pilihanText[i]}">${pilihanText[i]}</option>`;
  }
  pilihanHTML += `</select>`;

  document.getElementById("pilihanContainer").innerHTML = pilihanHTML;
}
