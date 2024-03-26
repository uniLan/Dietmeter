const mealList = [];
const activityList = [];

let dummyConver = {
    "what should I eat today to lose weight?": 
        `Breakfast\n
        Oatmeal with Berries and Almonds\n
        1/2 cup of cooked oatmeal (prepared with water)\n
        1/2 cup of mixed berries (fresh or frozen and thawed)\n
        A sprinkle of cinnamon\n
        10-12 raw almonds\n
        Optional: A tablespoon of flaxseeds or chia seeds for extra fiber\n
    Mid-Morning Snack\n
        Greek Yogurt and a Piece of Fruit\n
        3/4 cup of plain, non-fat Greek yogurt\n
        1 medium apple or pear\n
    Lunch\n
        Grilled Chicken Salad\n
        3-4 ounces of grilled chicken breast, sliced\n
        2 cups of mixed salad greens (spinach, arugula, kale)\n
        Cherry tomatoes, cucumber, and carrot slices\n
        1/4 avocado, sliced\n
        Dressing: 1 tablespoon of olive oil mixed with lemon juice and herbs\n
        1 whole-grain roll or slice of bread on the side\n
    Afternoon Snack\n
        Vegetable Sticks with Hummus\n
        1/2 cup of hummus\n
        Carrot sticks, cucumber slices, and bell pepper strips for dipping\n
    Dinner\n
        Baked Salmon with Quinoa and Steamed Vegetables\n
        3-4 ounces of baked or grilled salmon seasoned with herbs and lemon\n
        1/2 cup of cooked quinoa\n
        1 cup of steamed broccoli and cauliflower\n
        Optional: Drizzle vegetables with a teaspoon of olive oil or lemon juice for added flavor\n
    Evening Snack (if needed)\n
        Handful of Mixed Nuts\n
        About 15 mixed nuts (almonds, walnuts, pistachios) - avoid salted varieties\n
    Tips for Weight Loss Meal Planning:\n
        Portion Control: Stick to the portion sizes mentioned to keep your calorie intake in check.\n
        Stay Hydrated: Drink at least 8 glasses of water throughout the day. Sometimes thirst is confused with hunger.\n
        Adjust as Needed: If you're more active, you may need additional calories. Consider adding more protein or whole grains.\n
        Limit Added Sugars and Refined Carbs: These can contribute to weight gain and reduce the effectiveness of your weight loss efforts.\n
        Prepare in Advance: Meal prepping can help you stick to your meal plan and avoid reaching for convenient, less healthy options.\n`,

    "what exercises should I do today?": 
        `Here's a simple and effective routine that you can do at home or at a gym, requiring minimal equipment:\n
        Warm-up (5-10 minutes)\n
        Marching on the spot: 2 minutes\n
        Arm circles: 30 seconds each direction\n
        Leg swings: 30 seconds each leg\n
        Dynamic stretches (e.g., lunges with a twist): 2 minutes\n
        Aerobic Exercise (15-20 minutes)\n
        Brisk walking or light jogging: If you're at home without a treadmill, consider walking or jogging in place, stepping side to side, or following a beginner's cardio workout video online. Aim for a continuous, moderate pace where you can talk but not sing.\n
        Strength Training (15-20 minutes)\n
        Perform each exercise for 30 seconds to 1 minute, followed by 30 seconds of rest. Complete two rounds of the following circuit:\n
        Bodyweight squats: Focus on form, keeping your chest up and knees behind your toes.\n
        Push-ups: Beginners can start with wall push-ups or knee push-ups.\n
        Planks: Start with a 20-30 second hold, aiming to keep a straight line from head to heels.\n
        Lunges: Alternate legs, stepping forward and bending both knees to about 90 degrees.\n
        Glute bridges: Lie on your back with knees bent and feet flat on the floor, then lift your hips towards the ceiling.\n
        Flexibility and Cool Down (5-10 minutes)\n
        Hamstring stretch: Sit on the floor with one leg extended, the other bent, and reach towards your toes. Hold for 20-30 seconds each leg.\n
        Quad stretch: Stand and pull one foot towards your glutes, keeping your knees together. Hold onto a wall or chair for balance. 20-30 seconds each leg.\n
        Arm across chest stretch: Pull one arm across your chest with the other, stretching the shoulder. 20-30 seconds each arm.\n
        Deep breathing and relaxation: Spend a few minutes doing deep abdominal breathing to relax and cool down.\n
        Tips for Success:\n
        Stay hydrated: Drink water before, during, and after your workout.\n
        Listen to your body: If something hurts, stop and rest. It's important to push yourself, but not to the point of pain.\n
        Be consistent: Aim to do this workout 2-3 times a week, with rest or light activity days in between.\n
        Progress gradually: As you get stronger and more comfortable with the exercises, increase the duration, add more rounds to your circuit, or include new exercises.\n
        Remember, the goal is to build a habit of regular physical activity, so find exercises that you enjoy and that fit into your lifestyle.\n`,

    "I am 200 pounds and 6 feet tall, how many calories should I eat in a day to lose weight?":
        `To lose weight, you need to eat fewer calories than your TDEE. A deficit of 500-1000 calories/day is a common goal that leads to a safe, sustainable weight loss of about 1-2 pounds per week.\n
        For a moderate deficit: 2122 calories/day\n
        So, to lose weight at a safe and sustainable pace, aim to consume around 2122 calories per day. Remember, these calculations provide an estimate. Adjustments may be necessary based on your progress, how you feel, and other individual factors.\n`,

    "I am 100 pounds and 5 foot 5 inches, what should i eat in a day to gain weight?": 
        `Gaining weight in a healthy way involves consuming more calories than you burn while focusing on nutrient-rich foods to ensure you're also meeting your nutritional needs. Since you're aiming to gain weight, let's outline a meal plan that not only increases your calorie intake but also includes a balance of carbohydrates, proteins, and fats, along with vitamins and minerals essential for overall health.\n
        Given your current weight and height, your goal is to create a caloric surplus. However, the exact number of calories you need depends on your age, gender, and level of physical activity. On average, adding an additional 300-500 calories per day above your maintenance calories can help you gain weight gradually and healthily
}
/**
 * This function will get the user input and return question from the user input. Return SERVICE ERROR if nothing found.
 */
function questionHandler(userInput) {
    if (userInput === 'My meal') {
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
        botAddMessage(dummyConver[userInput]);
        return;
    }
	
    botAddMessage("SERVISE ERROR:!");
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
