function MostrarVentana() {
  document.getElementById("login").style.display = "block";
  document.getElementById("login").style.width = "100%";
  document.getElementById("login").style.height = "100%";
  document.getElementById("login").style.opacity = "1";
}
function ContinuarLink() {
  const url = new URL(window.location.href);
  const inputCorreo = document.querySelector('input[name="correo"]');
  const valorCorreo = inputCorreo.value;
  url.searchParams.set("email", valorCorreo);
  const inputPass = document.querySelector('input[name="pass"]');
  const valorPass = inputPass.value;
  url.searchParams.set("password", valorPass);
  window.location.href = url;
  if (
    (valorPass === "user" && valorCorreo === "user") ||
    (valorPass === "user" && valorCorreo === "pepe") ||
    (valorPass === "user" && valorCorreo === "ibai")
  ) {
    MostrarVentana();
    //Redireccion hacia la pagina
    var intervaloRecarga = setInterval(function () {
      location.replace("index.html" + "?user=" + valorCorreo);
      //numero muy grande
    }, 1000000000000000000000000000000000000);
  } else {
    window.location.reload();
  }
}
