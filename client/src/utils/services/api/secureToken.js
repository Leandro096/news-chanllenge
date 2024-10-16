export function saveToken(value) {
    localStorage.setItem("token", value);
}

export function getToken() {
    return localStorage.getItem("token");
}

export function deleteToken() {
    localStorage.removeItem("token");
}
