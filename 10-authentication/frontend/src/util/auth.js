import { redirect } from "react-router-dom";

export function setToken(token) {
  const expiratoryDate = new Date();
  expiratoryDate.setHours(expiratoryDate.getHours() + 1);
  localStorage.setItem("tokenExpiratoryDate", expiratoryDate.toISOString());
  localStorage.setItem("token", token);
}

export function getDuration() {
  const expiratoryDate = new Date(localStorage.getItem("tokenExpiratoryDate"));
  const now = new Date();
  return expiratoryDate.getTime() - now.getTime();
}

export function getToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  if (getDuration() < 0) {
    clearToken();
    return "EXPIRED";
  }

  return token;
}

export function clearToken() {
  localStorage.removeItem("token");
}

export function tokenLoader() {
  return getToken();
}

export function checkTokenLoader() {
  const token = getToken();

  if (!token) {
    return redirect("/auth?mode=login");
  }

  return null;
}
