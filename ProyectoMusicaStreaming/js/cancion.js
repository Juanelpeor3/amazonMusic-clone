function musica(nombre) {
  const despausaButton = document.getElementById("despausa");
  const pausaButton = document.getElementById("pausa");
  const volumenSlider = document.getElementById("volumen");
  if (nombre == "p1") {
    let audio = new Audio("music/Vicente.mp3");
    audio.play();
    despausaButton.style.display = "none";
    pausaButton.style.display = "block";
    despausaButton.addEventListener("click", function () {
      audio.play();
    });
    pausaButton.addEventListener("click", function () {
      audio.pause();
    });
    volumenSlider.addEventListener("input", function () {
      var a = volumenSlider.value;
      var a = a / 100;
      audio.volume = a;
    });
  }
}
