const podcasts = document.querySelectorAll(".song");
const podcastsWrapper = document.querySelector(".podcasts");
const podcastWidth = podcasts[0].offsetHeight;
let currentPosition = 0;
let maxPosition = podcasts.length - 3; // Adjust based on visible podcasts

const leftButton = document.querySelector(".izquierda");
const rightButton = document.querySelector(".derecha");

leftButton.addEventListener("click", () => {
  if (currentPosition > 0) {
    currentPosition = currentPosition - 1;
    // currentPosition--;
    podcastsWrapper.style.transform = `translateX(${
      currentPosition * -podcastWidth
    }px)`;
  }
});

rightButton.addEventListener("click", () => {
  if (currentPosition < maxPosition) {
    currentPosition = currentPosition + 1;
    // currentPosition++;
    podcastsWrapper.style.transform = `translateX(${
      currentPosition * -podcastWidth
    }px)`;
  }
});
function MostrarMenuBiblioteca() {
  document.getElementById("login").style.display = "block";
  document.getElementById("login").style.width = "100%";
  document.getElementById("login").style.height = "100%";
  document.getElementById("login").style.opacity = "1";
}
function AlternarPausado() {
  document.getElementById("pausa").style.opacity = "1";
  document.getElementById("pausa").style.display = "block";
}
