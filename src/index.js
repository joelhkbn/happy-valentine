import "./styles.css";

const appElement = document.getElementById("app");

// Fungsi untuk memeriksa apakah mode gelap atau terang
function checkMode() {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return isDarkMode ? "dark" : "light";
}

// Tambahkan kelas untuk mode gelap/terang ke elemen HTML
appElement.classList.add(checkMode());

appElement.innerHTML = `
  <h1>Hello Sayangku! Azura Chlsy Kirana</h1>
  <div>
    <div class="container">
      <img src="foto1.jpg" alt="Foto 1" class="image">
      <div class="text">
        <h2>Tulisan 1</h2>
        <p>Deskripsi dari tulisan 1.</p>
      </div>
      <img src="foto2.jpg" alt="Foto 2" class="image">
      <div class="text">
        <h2>Tulisan 2</h2>
        <p>Deskripsi dari tulisan 2.</p>
      </div>
      <img src="foto3.jpg" alt="Foto 3" class="image">
      <div class="text">
        <h2>Tulisan 3</h2>
        <p>Deskripsi dari tulisan 3.</p>
      </div>
      <img src="foto4.jpg" alt="Foto 4" class="image">
      <div class="text">
        <h2>Tulisan 4</h2>
        <p>Deskripsi dari tulisan 4.</p>
      </div>
      <img src="foto5.jpg" alt="Foto 5" class="image">
      <div class="text">
        <h2>Tulisan 5</h2>
        <p>Deskripsi dari tulisan 5.</p>
      </div>
      <img src="foto6.jpg" alt="Foto 6" class="image">
      <div class="text">
        <h2>Tulisan 6</h2>
        <p>Deskripsi dari tulisan 6.</p>
      </div>
    </div>
    <div class="container">
      <img src="foto7.jpg" alt="Foto 7" class="image">
      <div class="text">
        <h2>Tulisan 7</h2>
        <p>Deskripsi dari tulisan 7.</p>
      </div>
    </div>
  </div>
`;
