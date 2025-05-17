// script.js - all-in-one for your health dashboard app

// BMI Calculator
function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const heightCm = parseFloat(document.getElementById('height').value);
  if (!weight || !heightCm) {
    alert('Please enter valid weight and height!');
    return;
  }
  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  let category = '';
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal weight';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obesity';
  document.getElementById('bmi-result').innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}

// Mood Tracker
function saveMood() {
  const mood = document.querySelector('input[name="mood"]:checked');
  if (!mood) {
    alert('Please select your mood');
    return;
  }
  alert(`Mood "${mood.value}" saved!`);
}

// Sleep Tracker
function saveSleep() {
  const sleepHours = parseFloat(document.getElementById('sleep-hours').value);
  if (isNaN(sleepHours) || sleepHours < 0 || sleepHours > 24) {
    alert('Please enter valid hours of sleep (0-24)');
    return;
  }
  alert(`You slept ${sleepHours} hours last night!`);
}

// Blood Pressure Monitor
function saveBloodPressure() {
  const systolic = parseInt(document.getElementById('systolic').value);
  const diastolic = parseInt(document.getElementById('diastolic').value);
  if (!systolic || !diastolic) {
    alert('Please enter valid blood pressure readings');
    return;
  }
  alert(`Blood Pressure saved: ${systolic}/${diastolic} mmHg`);
}

// Exercise Tracker
function saveExercise() {
  const exerciseType = document.getElementById('exercise-type').value;
  const duration = parseInt(document.getElementById('exercise-duration').value);
  if (!exerciseType || isNaN(duration) || duration <= 0) {
    alert('Please select exercise type and enter valid duration');
    return;
  }
  alert(`Saved: ${duration} minutes of ${exerciseType}`);
}

// Blood Sugar Tracker
function saveBloodSugar() {
  const bloodSugar = parseFloat(document.getElementById('blood-sugar-level').value);
  if (isNaN(bloodSugar) || bloodSugar <= 0) {
    alert('Please enter a valid blood sugar level');
    return;
  }
  alert(`Blood Sugar level saved: ${bloodSugar} mg/dL`);
}

// Cholesterol Tracker
function saveCholesterol() {
  const cholesterol = parseFloat(document.getElementById('cholesterol-level').value);
  if (isNaN(cholesterol) || cholesterol <= 0) {
    alert('Please enter a valid cholesterol level');
    return;
  }
  alert(`Cholesterol level saved: ${cholesterol} mg/dL`);
}

// Heart Rate Monitor
function saveHeartRate() {
  const heartRate = parseInt(document.getElementById('heart-rate').value);
  if (!heartRate || heartRate <= 0) {
    alert('Please enter a valid heart rate');
    return;
  }
  alert(`Heart Rate saved: ${heartRate} bpm`);
}

// Calorie Counter
function saveCalories() {
  const calories = parseInt(document.getElementById('calories').value);
  if (!calories || calories <= 0) {
    alert('Please enter valid calories consumed');
    return;
  }
  alert(`Calories consumed saved: ${calories} kcal`);
}

// Activity Level Selector
function saveActivityLevel() {
  const activity = document.querySelector('input[name="activity"]:checked');
  if (!activity) {
    alert('Please select your activity level');
    return;
  }
  alert(`Activity Level saved: ${activity.value}`);
}

// Yoga and Meditation Tracker
function saveYogaMeditation() {
  const yogaDuration = parseInt(document.getElementById('yoga-duration').value);
  const meditationDuration = parseInt(document.getElementById('meditation-duration').value);
  if (isNaN(yogaDuration) || yogaDuration < 0 || isNaN(meditationDuration) || meditationDuration < 0) {
    alert('Please enter valid durations for yoga and meditation');
    return;
  }
  alert(`Yoga: ${yogaDuration} min, Meditation: ${meditationDuration} min saved`);
}

// Simple AI Assistant Chat (dummy)
function sendMessage() {
  const input = document.getElementById('ai-input');
  const message = input.value.trim();
  if (!message) {
    alert('Type a message first!');
    return;
  }
  const chatBox = document.getElementById('ai-chat-box');
  const userMsg = document.createElement('div');
  userMsg.className = 'user-msg';
  userMsg.textContent = `You: ${message}`;
  chatBox.appendChild(userMsg);

  // Dummy bot response
  const botMsg = document.createElement('div');
  botMsg.className = 'bot-msg';
  botMsg.textContent = "AI Assistant: Sorry, I'm still learning and can't help much yet.";
  chatBox.appendChild(botMsg);

  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = '';
}

// Attach Event Listeners on page load
document.addEventListener('DOMContentLoaded', () => {
  const bmiBtn = document.getElementById('bmi-calc-btn');
  if (bmiBtn) bmiBtn.addEventListener('click', calculateBMI);

  const moodBtn = document.getElementById('mood-save-btn');
  if (moodBtn) moodBtn.addEventListener('click', saveMood);

  const sleepBtn = document.getElementById('sleep-save-btn');
  if (sleepBtn) sleepBtn.addEventListener('click', saveSleep);

  const bpBtn = document.getElementById('bp-save-btn');
  if (bpBtn) bpBtn.addEventListener('click', saveBloodPressure);

  const exerciseBtn = document.getElementById('exercise-save-btn');
  if (exerciseBtn) exerciseBtn.addEventListener('click', saveExercise);

  const sugarBtn = document.getElementById('sugar-save-btn');
  if (sugarBtn) sugarBtn.addEventListener('click', saveBloodSugar);

  const cholesterolBtn = document.getElementById('cholesterol-save-btn');
  if (cholesterolBtn) cholesterolBtn.addEventListener('click', saveCholesterol);

  const hrBtn = document.getElementById('heart-rate-save-btn');
  if (hrBtn) hrBtn.addEventListener('click', saveHeartRate);

  const calorieBtn = document.getElementById('calorie-save-btn');
  if (calorieBtn) calorieBtn.addEventListener('click', saveCalories);

  const activityBtn = document.getElementById('activity-save-btn');
  if (activityBtn) activityBtn.addEventListener('click', saveActivityLevel);

  const yogaBtn = document.getElementById('yoga-save-btn');
  if (yogaBtn) yogaBtn.addEventListener('click', saveYogaMeditation);

  const aiSendBtn = document.getElementById('ai-send-btn');
  if (aiSendBtn) aiSendBtn.addEventListener('click', sendMessage);
});
