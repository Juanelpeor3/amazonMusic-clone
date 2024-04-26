let url = new URL(window.location.href);
let param = url.searchParams.get("user");
if (param == null) {
  window.location.href = "login.html";
}
