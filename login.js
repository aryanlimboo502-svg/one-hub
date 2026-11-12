const authCard = document.getElementById("auth-card");

document.querySelectorAll("[data-show-register]").forEach((button) => {
    button.addEventListener("click", () => {
        authCard.classList.add("is-registering");
        document.title = "OneHub | Create account";
    });
});

document.querySelectorAll("[data-show-login]").forEach((button) => {
    button.addEventListener("click", () => {
        authCard.classList.remove("is-registering");
        document.title = "OneHub | Sign in";
    });
});

document.querySelectorAll(".auth-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const status = form.querySelector(".form-status");
        status.textContent = form.classList.contains("sign-in-form")
            ? "Sign-in is not connected to an account service yet."
            : "Account creation is not connected to an account service yet.";
    });
});
