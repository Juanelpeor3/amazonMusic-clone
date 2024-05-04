//leemos el input y le damos al boton para buscar
const boton = document.getElementById("searchButton");
boton.addEventListener("click", function () {
  const buscar = document.getElementById("searchInput").value;
  //si es don bosco pone la cancion si no lo es la busca
  if (buscar.toLowerCase() === "don bosco") {
    window.location.href = "https://www.youtube.com/watch?v=ZW3MxZKnJec&t=1s";
  } else {
    buscar = searchTerm.split(" ").join("+");
    window.location.href =
      "https://www.youtube.com/results?search_query=" + buscar;
  }
});
