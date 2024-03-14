function addActivity() {
    alert("Here you would open a form or modal to add a new activity.");
}

function openMealRecording() {
    alert("Here you would open a form or modal to record a new meal.");
    openChatWindow()
    const userInput = sendNewMessage("What you eat? How many?");
    sendNewMessage("You ate: " + userInput);
}

function toggleChatWindow() {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow.classList.contains('hiddenCtrl-hide')) {
        chatWindow.classList.remove('hiddenCtrl-hide');
        chatWindow.classList.add('hiddenCtrl-show');
    } else {
        chatWindow.classList.remove('hiddenCtrl-show');
        chatWindow.classList.add('hiddenCtrl-hide');
    }
}

function openChatWindow() {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow.classList.contains('hiddenCtrl-hide')) {
        chatWindow.classList.remove('hiddenCtrl-hide');
        chatWindow.classList.add('hiddenCtrl-show');
    }
}

function closeChatWindow() {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow.classList.contains('hiddenCtrl-show')) {
        chatWindow.classList.remove('hiddenCtrl-show');
        chatWindow.classList.add('hiddenCtrl-hide');
    }
}

function sendMessage() {
    // Get the user's message from the input field
    const userInput = document.getElementById('chat-input').value;

    // Check if the userInput is not empty
    if (userInput.trim() !== '') {
        // Create a new div element to hold the message
        const messageDiv = document.createElement('div');
        // Add a class for styling (optional)
        messageDiv.classList.add('chat-message');
        // Set the text content to the user's input
        messageDiv.textContent = userInput;

        // Append the new message div to the chat-messages div
        document.getElementById('chat-messages').appendChild(messageDiv);

        // Clear the input field
        document.getElementById('chat-input').value = '';

        // Scroll the chat-messages div to the bottom
        const chatMessagesContainer = document.getElementById('chat-messages-container');
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

        return userInput;
    }
}

function sendNewMessage(message) {
    document.getElementById('chat-input').value = message;
    return sendMessage();
}

