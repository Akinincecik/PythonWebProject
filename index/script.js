const postForm = document.getElementById("postForm");
const postTitleInput = document.getElementById("postTitle");
const postContentInput = document.getElementById("postContent");
const postsContainer = document.getElementById("postsContainer");

// Yazıları yükleme ve gösterme
function loadPosts() {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    postsContainer.innerHTML = "";

    posts.forEach((post, index) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <button class="delete-btn" data-index="${index}">Sil</button>
        `;

        const deleteBtn = postElement.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            deletePost(index);
        });

        postsContainer.appendChild(postElement);
    });
}


// Yazı silme
function deletePost(index) {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.splice(index, 1); // Belirtilen index’teki yazıyı sil
    localStorage.setItem("posts", JSON.stringify(posts));
    loadPosts(); // Yeniden yükle
}

// Yazı ekleme
postForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = postTitleInput.value;
    const content = postContentInput.value;

    if (title && content) {
        const newPost = {
            title: title,
            content: content
        };

        // localStorage'da saklama
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push(newPost);
        localStorage.setItem("posts", JSON.stringify(posts));

        // Formu temizle
        postTitleInput.value = "";
        postContentInput.value = "";

        // Yazıları tekrar yükle
        loadPosts();
    }
});

// Sayfa yüklendiğinde yazıları göster
loadPosts();
