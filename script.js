
function sendMessage() {
    const input = document.getElementById("user-message");
    const message = input.value.trim();

    if (message === "") {
        return;
    }

    const chatBox = document.getElementById("chat-box");

    const newMessage = document.createElement("div");
    newMessage.classList.add("message");

    newMessage.innerHTML = `<strong>You:</strong> ${message}`;

    chatBox.appendChild(newMessage);

    // Auto-scroll
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input
    input.value = "";
}

// Send message when Enter key is pressed
document
    .getElementById("user-message")
    .addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

