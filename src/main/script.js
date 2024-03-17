function setupTemporaryResponseHandler(type) {
    const originalOnClick = document.getElementById('chat-send').onclick; // Save the original onclick handler

    document.getElementById('chat-send').onclick = function() {
        const userInput = document.getElementById('chat-input').value;
        if (userInput.trim() !== '') {
            let confirmationMessage;
            if (type === "meal") {
                // Add the meal to the meal list
                const mealList = document.getElementById('meal-list');
                const mealItem = document.createElement('div');
                mealItem.textContent = `Meal: ${userInput}`;
                mealList.appendChild(mealItem);
                confirmationMessage = `You ate: ${userInput}`;
            } else if (type === "activity") {
                // Add the activity to the activity list
                const activityList = document.getElementById('today-activities').querySelector('.activity-list');
                const activityItem = document.createElement('div');
                activityItem.textContent = `Activity: ${userInput}`;
                activityList.appendChild(activityItem);
                confirmationMessage = `You did: ${userInput}`;
            }

            // Echo the confirmation message in the chat window
            const chatMessages = document.getElementById('chat-messages');
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('chat-message'); // Assuming you have CSS for .chat-message
            messageDiv.textContent = confirmationMessage;
            chatMessages.appendChild(messageDiv);

            document.getElementById('chat-input').value = ''; // Clear the input field
            document.getElementById('chat-messages-container').scrollTop = document.getElementById('chat-messages-container').scrollHeight; // Scroll to latest message

            // Restore the original chat functionality after echoing the response and adding the item
            document.getElementById('chat-send').onclick = originalOnClick;
        }
    };
}

function recordMeal() {
    openChatWindow();
    document.getElementById('chat-messages').innerHTML += '<div class="chat-message">What meal did you get, how many?</div>';
    setupTemporaryResponseHandler("meal");
}

function addActivity() {
    openChatWindow();
    document.getElementById('chat-messages').innerHTML += '<div class="chat-message">What exercise did you do, and how many?</div>';
    setupTemporaryResponseHandler("activity");
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


