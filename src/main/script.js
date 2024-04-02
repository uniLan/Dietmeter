let mealList = [];
let activityList = [];
let authKey = '';

function inputAuthKey() {
    authKey = prompt("Enter Authkey in training AI doc to unlock GPT chat: ");
}
/**
 * This function will get the user input and return question from the user input. Return SERVICE ERROR if nothing found.
 */
function questionHandler(userInput) {
    if (userInput.startsWith("#chat")) {
        getAndDisplayAnswer(userInput.substring(4));
        return;
    } else if (userInput === 'My meal') {
        // show temp chat
        botAddMessage("You meal:");

        mealList.forEach(element => {
            botAddMessage(element);
        });
        return;
    } 
    if (userInput === 'My activity') {
        botAddMessage("Your activity:");
        
        activityList.forEach(element => {
            botAddMessage(element);
        });
        return;
    }
    if (userInput === 'New meal') {
        botAddMessage("Meal Suggestions updated");
        updateMealSuggestion();
        return;
    }
    if (dummyConver[userInput] !== undefined){
        setTimeout(() => {
            botAddMessage(dummyConver[userInput]); //excuted after the 1600ms
        }, 1600);
       
        return;
    }
	
    botAddMessage("SERVISE ERROR:!");
}

/**
 * This function will sent the msge to the chatGPT and return the respound
 * @param {String} msge 
 */
function getChatAns(msge) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'api.openai.com',
            path: '/v1/chat/completions',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            }
        };

        const req = new XMLHttpRequest();
        
        req.open(options.method, 'https://' + options.hostname + options.path, true);

        req.setRequestHeader('Content-Type', options.headers['Content-Type']);
        req.setRequestHeader('Authorization', options.headers['Authorization']);

        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    const response = JSON.parse(req.responseText);
                    resolve(response);
                } else {
                    reject(new Error('Request failed with status ' + req.status));
                }
            }
        };

        req.send(JSON.stringify({
            'model': 'gpt-3.5-turbo',
            'messages': [
                {
                    'role': 'user',
                    'content': msge
                }
            ],
            'temperature': 0.7
        }));
    });
}

// Example usage
function displayAnswer(response) {
    const answer = response.choices[0].message.content;
    botAddMessage(answer);
    const model = response.model;
    const role = response.choices[0].message.role;
    console.log(model + " " +role);
}

function getAndDisplayAnswer(mesg) {
    getChatAns(mesg)
        .then(displayAnswer)
        .catch(error => console.error(error));
}

function setupTemporaryResponseHandler(type) {
    const originalOnClick = document.getElementById('chat-send').onclick; // Save the original onclick handler

    document.getElementById('chat-send').onclick = function() {
        const userInput = document.getElementById('chat-input').value;
        if (userInput.trim() !== '') {
            let confirmationMessage;
            if (type === "meal") {
                // Add the meal to the meal list
                const mealListDoc = document.getElementById('meal-list');
                const mealItem = document.createElement('div');
                mealItem.textContent = `Meal: ${userInput}`;
                mealListDoc.appendChild(mealItem);
                mealList.push(userInput);
                confirmationMessage = `You ate: ${userInput}`;
            } else if (type === "activity") {
                // Add the activity to the activity list
                const activityListDoc = document.getElementById('today-activities').querySelector('.activity-list');
                const activityItem = document.createElement('div');
                activityItem.textContent = `Activity: ${userInput}`;
                activityListDoc.appendChild(activityItem);
                activityList.push(userInput);
                confirmationMessage = `You did: ${userInput}`;
            }

            // Echo the confirmation message in the chat window
            botAddMessage(confirmationMessage);

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
    const userInput = document.getElementById('chat-input').value.trim();

    // Check if the userInput is not empty
    if (userInput !== '') {
        
        userAddMessage(userInput);
        questionHandler(userInput);
        
    }
}

function userAddMessage(msge) {
    document.getElementById('chat-messages').innerHTML += `<div class="chat-message">User: ${msge}</div>`;
    document.getElementById('chat-input').value = ''; // Clear the input field
    const chatMessagesContainer = document.getElementById('chat-messages-container');
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

}

function botAddMessage(msge) {
    document.getElementById('chat-messages').innerHTML += `<div class="chat-message">Bot: ${msge}</div>`;
    const chatMessagesContainer = document.getElementById('chat-messages-container');
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

}

let counter = 0;
function updateMealSuggestion() {
    let meals = "";
    if (counter == 0) {
        meals = 'Steak 12oz and Apple juice 300ml';
        counter++;
    } else {
        meals = 'Prime Rib 15oz and Lette 10grams';
        counter--;
    }
    const mealListDoc = document.getElementById('meal-suggestions-list');
    const mealItem = document.createElement('div');
    mealItem.textContent = meals;
    mealListDoc.appendChild(mealItem);
}

