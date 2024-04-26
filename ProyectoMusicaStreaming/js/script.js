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
