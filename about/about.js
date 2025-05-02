// Kullanıcı giriş yapmamışsa login sayfasına yönlendir
if (!localStorage.getItem("isLoggedIn")) {
    window.location.href = "../login/login.html";
}

// Çıkış yapma işlevi
const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "../login/login.html";
});
