//param esta declarado en el index y hace referencia la parametro
//user de la url actual
const tituloSeccion = document.querySelectorAll(".tituloseccion");
const tituloCancionSeccion1 = document.querySelectorAll(
  ".perder .song-perder .titulo"
);
const cantantesCancionSeccion1 = document.querySelectorAll(
  ".perder .song-perder .subtitulo"
);
const imagenesCancionSeccion1 = document.querySelectorAll(
  ".perder .song-perder img"
);
const tituloCancionSeccion2 = document.querySelectorAll(
  ".masgusta .song-masgusta .titulo"
);
const cantantesCancionSeccion2 = document.querySelectorAll(
  ".masgusta .song-masgusta .subtitulo"
);
const imagenesCancionSeccion2 = document.querySelectorAll(
  ".masgusta .song-masgusta img"
);
if (param === "user") {
}
if (param === "pepe") {
  tituloSeccion[1].textContent = "Según lo que más te gusta";
  tituloSeccion[2].textContent =
    "Porque has escuchado canciones como 'Es tres'";
  tituloCancionSeccion1[0].textContent = "El profesor de codigos y chistes";
  cantantesCancionSeccion1[0].textContent = "Juan Magán, Daddy Yankee, Aitana";
  imagenesCancionSeccion1[0].src = "img-songs/El_Profesor.png";
  imagenesCancionSeccion1[0].onclick = function () {
    musica("c4");
  };
  tituloCancionSeccion1[1].textContent = "Salesianos";
  cantantesCancionSeccion1[1].textContent = "Rauw";
  imagenesCancionSeccion1[1].src = "img-songs/Salesianos.png";
  imagenesCancionSeccion1[1].onclick = function () {
    musica("c8");
  };
  tituloCancionSeccion1[2].textContent = "DesAmor";
  cantantesCancionSeccion1[2].textContent = "Auronplay";
  imagenesCancionSeccion1[2].src = "img-songs/Desamor.png";
  imagenesCancionSeccion1[2].onclick = function () {
    musica("c7");
  };
  tituloCancionSeccion1[3].textContent = "Maestro sin igual";
  cantantesCancionSeccion1[3].textContent = "BadVicente,Ozucenteg";
  imagenesCancionSeccion1[3].src = "img-songs/Maestro_sin_igual.png";
  imagenesCancionSeccion1[3].onclick = function () {
    musica("c1");
  };
  //Primer apartado
  tituloCancionSeccion2[0].textContent = "Fanática";
  cantantesCancionSeccion2[0].textContent = "Plan B";
  imagenesCancionSeccion2[0].src = "img-songs/bbdd.png";
  tituloCancionSeccion2[1].textContent = "DILUVIO";
  cantantesCancionSeccion2[1].textContent = "Rauw";
  imagenesCancionSeccion2[1].src = "img-songs/bbdd.png";
  tituloCancionSeccion2[2].textContent = "Saxobeat";
  cantantesCancionSeccion2[2].textContent = "Alexandra";
  imagenesCancionSeccion2[2].src = "img-songs/bbdd.png";
  tituloCancionSeccion2[3].textContent = "Cats";
  cantantesCancionSeccion2[3].textContent = "The Living";
  imagenesCancionSeccion2[3].src = "img-songs/bbdd.png";
  //Segundo apartado
}
if (param === "ibai") {
  tituloSeccion[1].textContent = "Hoy lo está petando";
  tituloSeccion[2].textContent = "Más cosas que te van";
  tituloSeccion[1].textContent = "Según lo que más te gusta";
  tituloSeccion[2].textContent =
    "Porque has escuchado canciones como 'Es tres'";
  tituloCancionSeccion1[0].textContent = "Fanática";
  cantantesCancionSeccion1[0].textContent = "Plan B";
  imagenesCancionSeccion1[0].src = "img-songs/bbdd.png";
  tituloCancionSeccion1[1].textContent = "DILUVIO";
  cantantesCancionSeccion1[1].textContent = "Rauw";
  imagenesCancionSeccion1[1].src = "img-songs/bbdd.png";
  tituloCancionSeccion1[2].textContent = "Saxobeat";
  cantantesCancionSeccion1[2].textContent = "Alexandra";
  imagenesCancionSeccion1[2].src = "img-songs/bbdd.png";
  tituloCancionSeccion1[3].textContent = "Cats";
  cantantesCancionSeccion1[3].textContent = "The Living";
  imagenesCancionSeccion1[3].src = "img-songs/bbdd.png";
  //Primer apartado
  tituloCancionSeccion2[0].textContent = "Fanática";
  cantantesCancionSeccion2[0].textContent = "Plan B";
  imagenesCancionSeccion2[0].src = "img-songs/bbdd.png";
  tituloCancionSeccion2[1].textContent = "DILUVIO";
  cantantesCancionSeccion2[1].textContent = "Rauw";
  imagenesCancionSeccion2[1].src = "img-songs/bbdd.png";
  tituloCancionSeccion2[2].textContent = "Saxobeat";
  cantantesCancionSeccion2[2].textContent = "Alexandra";
  imagenesCancionSeccion2[2].src = "img-songs/bbdd.png";
  tituloCancionSeccion2[3].textContent = "Cats";
  cantantesCancionSeccion2[3].textContent = "The Living";
  imagenesCancionSeccion2[3].src = "img-songs/bbdd.png";
  //Segundo apartado
}
