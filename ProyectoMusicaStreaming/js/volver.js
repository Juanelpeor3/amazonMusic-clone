let urlIndex = new URL(window.location.href);
let paramIndex = urlIndex.searchParams.get("user");
if (
  paramIndex == null ||
  paramIndex == "" ||
  (paramIndex !== "user" && paramIndex !== "pepe" && paramIndex !== "ibai")
) {
  window.location.href = "login.html";
}
