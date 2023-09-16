document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = loginForm.elements.email.value;
        const password = loginForm.elements.password.value;

        // Kiểm tra email và mật khẩu tại đây
        // Nếu hợp lệ, thực hiện đăng nhập
        const user = {
            name: "tien",
            email: "Nguyenvanductien@gmail.com",
            password: "tien",
        };

        if (email === user.email && password === user.password) {
            // Đăng nhập thành công
            localStorage.setItem("user", JSON.stringify(user));
            alert("Đăng nhập thành công!");

            // Chuyển hướng về trang index.html sau khi đăng nhập thành công
            window.location.href = "index.html";
        } else {
            // Email hoặc mật khẩu sai
            alert("Email hoặc mật khẩu sai!");
        }
    });

    // Kiểm tra xem người dùng đã đăng nhập trước đó hay chưa
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        showLoggedInUser(user.name);
    }

    function showLoggedInUser(name) {
        const loggedInUser = document.getElementById("loggedInUser");
        const logoutButton = document.getElementById("logoutButton");

        loggedInUser.textContent = name;
        logoutButton.style.display = "inline-block";
    }
});
