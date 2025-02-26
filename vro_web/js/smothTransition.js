document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});

window.addEventListener("beforeunload", (event) => {
    document.body.classList.add("fade-out");
});
