document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Create a custom animated popup
        let popup = document.createElement("div");
        popup.className = "custom-popup";
        popup.innerHTML = "<strong>Indian Handicrafts Marketplace</strong><br>Thank you for your inquiry! We'll get back to you soon.";
        
        document.body.appendChild(popup);

        // Fade-in effect
        setTimeout(() => {
            popup.style.opacity = "1";
        }, 100);

        // Auto-close popup after 3 seconds
        setTimeout(() => {
            popup.style.opacity = "0";
            setTimeout(() => popup.remove(), 500);
        }, 3000);
    });
});

function explore() {
    window.location.href = "#products";
}
