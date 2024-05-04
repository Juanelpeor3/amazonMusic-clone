let urlIndex = new URL(window.location.href);
let paramIndex = urlIndex.searchParams.get("user");
if (paramIndex == null) {
  window.location.href = "login.html";
}
