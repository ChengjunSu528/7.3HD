document.addEventListener('DOMContentLoaded', function () {
    console.log("My project is running!");

    const button = document.getElementById("generateBtn");
    const output = document.getElementById("output");

    button.addEventListener("click", function () {
        const now = new Date();
        const message = `Hello! You clicked the button at ${now.toLocaleTimeString()}`;
        output.textContent = message;
    });
});
