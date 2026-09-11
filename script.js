const btn = document.getElementById("myBtn");
btn.addEventListener("mouseover", function () {
  btn.style.transform = "translateY(-5px) scale(1.05)";
  btn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
});
btn.addEventListener("mouseout", function () {
  btn.style.transform = "none";
  btn.style.boxShadow = "none";
});

// DOM Manipulation: klik effect
btn.addEventListener("click", function () {
  btn.textContent = "Sudah ditekan!";
  btn.style.backgroundColor = "lightgreen";
  btn.style.color = "black";
});

const counterText = document.getElementById("counter");
let count = 0;
btn.addEventListener("click", () => {
  count++;
  counterText.textContent = "Jumlah ditekan: " + count;
});

btn.addEventListener("click", () => {
  count++;
  counterText.textContent = "Jumlah klik: " + count;
  btn.textContent = "Sudah diklik!";
  btn.style.backgroundColor = "lightgreen";
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterText.textContent = "Jumlah klik: " + count;
  btn.textContent = "Klik Aku";
  btn.style.backgroundColor = "aqua";
});
