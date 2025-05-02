// DOM elemanlarını seçme
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Login formunu kontrol et
loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Formun sayfayı yenilemesini engelle

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Kullanıcı adı ve şifre kontrolü (admin/admin)
    if (username === "admin" && password === "admin") {
        // Giriş bilgilerini localStorage'a kaydet
        localStorage.setItem("isLoggedIn", "true");

        // Blog sayfasına yönlendir
        window.location.href = "../index/index.html";
    } else {
        alert("Geçersiz kullanıcı adı veya şifre.");
    }
});
