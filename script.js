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
  btn.style.color = "black"
});
