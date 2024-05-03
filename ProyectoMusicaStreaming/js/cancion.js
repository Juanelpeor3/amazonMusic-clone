let audio = null;

function musica(nombre) {
  //constantes que utilizaremos en las funciones
  const despausaButton = document.getElementById("despausa");
  const pausaButton = document.getElementById("pausa");
  const volumenSlider = document.getElementById("volumen");
  const duracionSlider = document.getElementById("duracion");
  despausaButton.addEventListener("click", function () {
    if (audio) {
      audio.play();
    }
  });
  pausaButton.addEventListener("click", function () {
    if (audio) {
      audio.pause();
    }
  });
  if (nombre == "p1") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/Maestro_Sin_Igual.mp3");
    duracionSlider.max = audio.duration;
    audio.play();

    //duracion
    sliderDuracion(audio);
    //logica pausa y despausa
    pausaDespausa(audio);
    //ajustar volumen
    ajustarVolumen(audio);
  }
  if (nombre == "p2") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/Salon_Vacio.mp3");
    duracionSlider.max = audio.duration;
    audio.play();

    //duracion
    sliderDuracion(audio);
    //logica pausa y despausa
    pausaDespausa(audio);
    //ajustar volumen
    ajustarVolumen(audio);
  }

  if (nombre == "p3") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/Es_tres.mp3");
    duracionSlider.max = audio.duration;
    audio.play();

    //duracion
    sliderDuracion(audio);
    //logica pausa y despausa
    pausaDespausa(audio);
    //ajustar volumen
    ajustarVolumen(audio);
  }
  function sliderDuracion(audio) {
    audio.addEventListener("loadedmetadata", function () {
      const duracion = audio.duration;
      duracionSlider.max = duracion;
      //actualizar el slider con la duracion del audio
      //asocio los minutos y segundos totales del audio a una varible para
      //asignarles en el caso de que lo necesiten un 0 a la izquierda
      var minutosTotal = Math.floor(duracion / 60);
      var segundosTotal = Math.floor(duracion % 60);
      if (minutosTotal < 10) {
        minutosTotal = "0" + minutosTotal;
      }
      if (segundosTotal < 10) {
        segundosTotal = "0" + segundosTotal;
      }
      //Actualizo el id duration-total con el siguiente contenido
      document.getElementById("duration-total").innerHTML =
        minutosTotal + ":" + segundosTotal;
      duracionSlider.value = duracion;
      //Muevo yo el slider y la cancion va a ese minuto y segundo
      duracionSlider.addEventListener("input", function () {
        var nuevaDuracion = Math.min(duracion, duracionSlider.value);
        duracionSlider.value = nuevaDuracion;
        audio.currentTime =
          (nuevaDuracion / duracionSlider.max) * audio.duration;
      });
      //mueve el slider segun la duracion de la cancion
      audio.addEventListener("timeupdate", function () {
        const currentTime = audio.currentTime;
        //asocio los minutos y segundos actuales del audio a una varible para
        //asignarles en el caso de que lo necesiten un 0 a la izquierda
        var minutosActual = Math.floor(currentTime / 60);
        var segundosActual = Math.floor(currentTime % 60);
        if (minutosActual < 10) {
          minutosActual = "0" + minutosActual;
        }
        if (segundosActual < 10) {
          segundosActual = "0" + segundosActual;
        }
        //Actualizo el id duration con el siguiente contenido
        document.getElementById("duration").innerHTML =
          minutosActual + ":" + segundosActual;
        //Actualizo el slider
        const progress = currentTime / audio.duration;
        duracionSlider.value = progress * duracionSlider.max;
      });
    });
  }
  function pausaDespausa(audio) {
    despausaButton.style.display = "none";
    pausaButton.style.display = "block";
  }
  function ajustarVolumen(audio) {
    volumenSlider.addEventListener("input", function () {
      var a = volumenSlider.value;
      var a = a / 100;
      audio.volume = a;
    });
  }
}
