const mealList = [];
const activityList = [];

let dummyConver = { 
    "What should I eat today to lose weight?" : 
    `Breakfast
    Oatmeal with Berries and Almonds
    1/2 cup of cooked oatmeal (prepared with water)
    1/2 cup of mixed berries (fresh or frozen and thawed)
    A sprinkle of cinnamon
    10-12 raw almonds
    Optional: A tablespoon of flaxseeds or chia seeds for extra fiber
Mid-Morning Snack
    Greek Yogurt and a Piece of Fruit
    3/4 cup of plain, non-fat Greek yogurt
    1 medium apple or pear
Lunch
    Grilled Chicken Salad
    3-4 ounces of grilled chicken breast, sliced
    2 cups of mixed salad greens (spinach, arugula, kale)
    Cherry tomatoes, cucumber, and carrot slices
    1/4 avocado, sliced
    Dressing: 1 tablespoon of olive oil mixed with lemon juice and herbs
    1 whole-grain roll or slice of bread on the side
Afternoon Snack
    Vegetable Sticks with Hummus
    1/2 cup of hummus
    Carrot sticks, cucumber slices, and bell pepper strips for dipping
Dinner
    Baked Salmon with Quinoa and Steamed Vegetables
    3-4 ounces of baked or grilled salmon seasoned with herbs and lemon
    1/2 cup of cooked quinoa
    1 cup of steamed broccoli and cauliflower
    Optional: Drizzle vegetables with a teaspoon of olive oil or lemon juice for added flavor
Evening Snack (if needed)
    Handful of Mixed Nuts
    About 15 mixed nuts (almonds, walnuts, pistachios) - avoid salted varieties
Tips for Weight Loss Meal Planning:
    Portion Control: Stick to the portion sizes mentioned to keep your calorie intake in check.
    Stay Hydrated: Drink at least 8 glasses of water throughout the day. Sometimes thirst is confused with hunger.
    Adjust as Needed: If you're more active, you may need additional calories. Consider adding more protein or whole grains.
    Limit Added Sugars and Refined Carbs: These can contribute to weight gain and reduce the effectiveness of your weight loss efforts.
    Prepare in Advance: Meal prepping can help you stick to your meal plan and avoid reaching for convenient, less healthy options.`,

    "What exercises should I do today?" : 
    `Here's a simple and effective routine that you can do at home or at a gym, requiring minimal equipment:

    Warm-up (5-10 minutes)
    Marching on the spot: 2 minutes
    Arm circles: 30 seconds each direction
    Leg swings: 30 seconds each leg
    Dynamic stretches (e.g., lunges with a twist): 2 minutes
    Aerobic Exercise (15-20 minutes)
    Brisk walking or light jogging: If you're at home without a treadmill, consider walking or jogging in place, stepping side to side, or following a beginner's cardio workout video online. Aim for a continuous, moderate pace where you can talk but not sing.
    Strength Training (15-20 minutes)
    Perform each exercise for 30 seconds to 1 minute, followed by 30 seconds of rest. Complete two rounds of the following circuit:
    
    Bodyweight squats: Focus on form, keeping your chest up and knees behind your toes.
    Push-ups: Beginners can start with wall push-ups or knee push-ups.
    Planks: Start with a 20-30 second hold, aiming to keep a straight line from head to heels.
    Lunges: Alternate legs, stepping forward and bending both knees to about 90 degrees.
    Glute bridges: Lie on your back with knees bent and feet flat on the floor, then lift your hips towards the ceiling.
    Flexibility and Cool Down (5-10 minutes)
    Hamstring stretch: Sit on the floor with one leg extended, the other bent, and reach towards your toes. Hold for 20-30 seconds each leg.
    Quad stretch: Stand and pull one foot towards your glutes, keeping your knees together. Hold onto a wall or chair for balance. 20-30 seconds each leg.
    Arm across chest stretch: Pull one arm across your chest with the other, stretching the shoulder. 20-30 seconds each arm.
    Deep breathing and relaxation: Spend a few minutes doing deep abdominal breathing to relax and cool down.
    Tips for Success:
    Stay hydrated: Drink water before, during, and after your workout.
    Listen to your body: If something hurts, stop and rest. It's important to push yourself, but not to the point of pain.
    Be consistent: Aim to do this workout 2-3 times a week, with rest or light activity days in between.
    Progress gradually: As you get stronger and more comfortable with the exercises, increase the duration, add more rounds to your circuit, or include new exercises.
    Remember, the goal is to build a habit of regular physical activity, so find exercises that you enjoy and that fit into your lifestyle."`,

    "I am 200 pounds and 6 feet tall, how many calories should I eat in a day to lose weight?":
    `To lose weight, you need to eat fewer calories than your TDEE. A deficit of 500-1000 calories/day is a common goal that leads to a safe, sustainable weight loss of about 1-2 pounds per week.
    For a moderate deficit: 2122 calories/day
    So, to lose weight at a safe and sustainable pace, aim to consume around 2122 calories per day. Remember, these calculations provide an estimate. Adjustments may be necessary based on your progress, how you feel, and other individual factors.`,

    "I am 100 pounds and 5 foot 5 inches, what should i eat in a day to gain weight?": 
    `Gaining weight in a healthy way involves consuming more calories than you burn while focusing on nutrient-rich foods to ensure you're also meeting your nutritional needs. Since you're aiming to gain weight, let's outline a meal plan that not only increases your calorie intake but also includes a balance of carbohydrates, proteins, and fats, along with vitamins and minerals essential for overall health.

    Given your current weight and height, your goal is to create a caloric surplus. However, the exact number of calories you need depends on your age, gender, and level of physical activity. On average, adding an additional 300-500 calories per day above your maintenance calories can help you gain weight gradually and healthily. It's important to increase your portion sizes and eat more frequently throughout the day.
    
    Here's a sample meal plan designed to promote weight gain:
    
    Breakfast
    Omelette: 3 eggs with spinach, mushrooms, and cheese.
    Whole grain toast: 2 slices with avocado spread.
    Greek yogurt: Full-fat, mixed with honey and granola.
    Mid-Morning Snack
    Smoothie: Blend 1 banana, a scoop of protein powder, 1 tablespoon of peanut butter, a handful of oats, and whole milk or a milk alternative for extra calories.
    Lunch
    Quinoa Salad: 1 cup cooked quinoa with grilled chicken breast, mixed greens, feta cheese, olives, and a drizzle of olive oil and lemon juice.
    Fruit: 1 apple or a serving of grapes.
    Afternoon Snack
    Trail Mix: A handful of mixed nuts and dried fruits.
    Cheese and Crackers: Whole grain crackers with slices of cheese.
    Dinner
    Salmon: Grilled or baked salmon fillet with a teriyaki or honey mustard glaze.
    Sweet Potato: 1 large, roasted or mashed with a pat of butter.
    Steamed Vegetables: Broccoli and carrots with olive oil drizzled on top.
    Evening Snack
    Cottage Cheese: Full-fat, mixed with almond slices and a bit of honey.
    Dark Chocolate: A few squares for a treat.
    Tips for Weight Gain:
    Choose nutrient-dense foods: Focus on whole foods that provide vitamins, minerals, and antioxidants, along with calories.
    Incorporate healthy fats: Avocados, nuts, seeds, and olive oil are excellent sources of healthy fats that can increase your calorie intake without consuming large amounts of food.
    Eat more frequently: Have snacks between meals to increase your overall calorie intake.
    Drink your calories: Consider adding smoothies or shakes as they can be a high-calorie, nutritious addition to your diet.
    Exercise: Incorporating strength training into your routine can help you build muscle mass instead of just gaining fat.
    Remember, gaining weight should be a gradual process. Focus on consistent, healthy eating habits and consult with a healthcare provider or a registered dietitian for personalized advice and to ensure your meal plan meets all your nutritional needs.`,

    "How can I eat healthily on a budget?" : 
    `-Meal Planning: Plan your meals for the week to avoid buying unnecessary items and stick to a shopping list based on those plans.
    -Smart Shopping: Opt for generic brands, take advantage of sales and coupons, and consider buying in bulk to save money. Choose whole foods over processed items, and buy seasonal or frozen produce to get more value for your money.
    -Home Cooking: Prepare meals at home to control ingredients and costs. Cook in batches to save time and money, and be creative with leftovers to minimize waste.
    -Limit Meat Consumption: Reduce meat portions and incorporate plant-based proteins like beans and lentils, which are cheaper and nutritious alternatives.
    
    -Reduce Waste: Store food properly to extend its life and find uses for food scraps, such as making vegetable stock from peels.
    -Drink Water: Opt for tap water instead of bottled drinks to save money and reduce environmental impact.`,

    "What are the benefits of drinking enough water?" : 
    "Drinking enough water has numerous benefits for your body and overall health. Staying well-hydrated is essential for maintaining the function of every system in your body. Here are some of the key benefits of drinking enough water: It Enhances Physical Performance, Optimizes Brain Function, Promotes Healthy Skin, Aids Digestion and Prevents Constipation, Facilitates Nutrient Absorption, Regulates Body Temperature, Supports Kidney Function, Helps Maintain Blood Pressure, Boosts Metabolism, Aids in Weight Loss, Reduces Headaches and Migraines, and Detoxifies the Body."
 };

/**
 * This function will get the user input and return question from the user input. Return SERVICE ERROR if nothing found.
 */
function questionHandler() {
    //TODO
    getuserInput(); // get user input
    botAddMessage(); // send to the chat
	
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

        if (userInput === 'My meal') {
            // show temp chat
            botAddMessage("You meal:");

            mealList.forEach(element => {
                botAddMessage(element);
            });
        } else if (userInput === 'My activity') {
            
            botAddMessage("Your activity:");
            
            activityList.forEach(element => {
                botAddMessage(element);
            });
        } else if (userInput === 'New meal') {
            botAddMessage("Meal Suggestions updated");
            updateMealSuggestion();
        } else {
            botAddMessage("SERVISE ERROR:!");
        }
        
    }
}

function userAddMessage(msge) {
    document.getElementById('chat-messages').innerHTML += `<div class="chat-message">User: ${msge}</div>`;
}

function botAddMessage(msge) {
    document.getElementById('chat-messages').innerHTML += `<div class="chat-message">Bot: ${msge}</div>`;
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
