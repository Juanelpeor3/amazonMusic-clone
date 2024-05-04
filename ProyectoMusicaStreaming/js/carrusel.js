const podcasts = document.querySelectorAll(".song");
const podcastsWrapper = document.querySelector(".podcasts");
const podcastWidth = podcasts[0].offsetHeight;
let posicionActual = 0;
let posicionMax = podcasts.length - 1; // Adjust based on visible podcasts

const botonIzq = document.querySelector(".izquierda");
const botonDer = document.querySelector(".derecha");

botonIzq.addEventListener("click", () => {
  if (posicionActual > 0) {
    posicionActual = posicionActual - 3;
    // posicionActual--;
    podcastsWrapper.style.transform = `translateX(${
      posicionActual * -podcastWidth
    }px)`;
  }
});

botonDer.addEventListener("click", () => {
  if (posicionActual < posicionMax) {
    posicionActual = posicionActual + 3;
    // posicionActual++;
    podcastsWrapper.style.transform = `translateX(${
      posicionActual * -podcastWidth
    }px)`;
  }
});
