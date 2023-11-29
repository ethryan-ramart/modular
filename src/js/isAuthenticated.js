export function isAuthenticated() {
  let sessionToken = null;
  console.log("a")
  if (typeof window !== "undefined") {
    sessionToken = localStorage.getItem("token");
  }
  return sessionToken !== null;
}
