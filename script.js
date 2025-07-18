document.addEventListener("DOMContentLoaded", () => {
    const tokensSold = 12500;
    const totalTokens = 5000000;
    const progressBar = document.getElementById("progress-bar");
    const percent = (tokensSold / totalTokens) * 100;
    progressBar.style.width = percent + "%";
    document.getElementById("tokens-sold").textContent = tokensSold.toLocaleString();
document.getElementById("newsletter-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("email-message");
    if (email.includes("@")) {
        message.textContent = "✅ Merci ! Vous serez informé par email.";
        message.style.color = "green";
        // 👉 Tu peux aussi enregistrer l’email dans un fichier backend ici
    } else {
        message.textContent = "❌ Adresse email invalide.";
        message.style.color = "red";
    }
});


