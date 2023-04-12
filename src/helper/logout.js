export default function logOutAdmin() {
window.localStorage.removeItem("token")
window.localStorage.removeItem("id")
window.localStorage.removeItem("is_creator")
window.localStorage.removeItem("is_active")
}