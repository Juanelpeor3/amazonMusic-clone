function musica(nombre) {
  const despausaButton = document.getElementById("despausa");
  const pausaButton = document.getElementById("pausa");
  const volumenSlider = document.getElementById("volumen");
  const duracionSlider = document.getElementById("duracion");
  if (nombre == "p1") {
    let audio = new Audio("music/Maestro_Sin_Igual.mp3");
    audio.play();
    //duracion
    audio.addEventListener("loadedmetadata", function () {
      var duracion = audio.duration;
      duracionSlider.max = duracion;
      //actualizar el slider con la duracion del audio
      document.getElementById("duration-total").innerHTML =
        Math.floor(duracion / 60) + ":" + Math.floor(duracion % 60);
      duracionSlider.value = duracion;
      //Muevo yo el slider y la cancion va a ese minuto
      duracionSlider.addEventListener("input", function () {
        var nuevaDuracion = Math.min(duracion, duracionSlider.value);
        duracionSlider.value = nuevaDuracion;
        audio.currentTime =
          (nuevaDuracion / duracionSlider.max) * audio.duration;
      });
      //mueve el slider segun la duracion de la cancion
      audio.addEventListener("timeupdate", function () {
        const currentTime = audio.currentTime;
        document.getElementById("duration").innerHTML =
          Math.floor(currentTime / 60) + ":" + Math.floor(currentTime % 60);
        const progress = currentTime / audio.duration;
        duracionSlider.value = progress * duracionSlider.max;
      });
    });
    //logica pausa y despausa
    despausaButton.style.display = "none";
    pausaButton.style.display = "block";
    despausaButton.addEventListener("click", function () {
      audio.play();
    });
    pausaButton.addEventListener("click", function () {
      audio.pause();
    });
    //ajustar volumen
    volumenSlider.addEventListener("input", function () {
      var a = volumenSlider.value;
      var a = a / 100;
      audio.volume = a;
    });
  }
  if (nombre == "p2") {
    let audio = new Audio("music/Salon_Vacio.mp3");
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
  if (nombre == "p3") {
    let audio = new Audio("music/Es_tres.mp3");
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
