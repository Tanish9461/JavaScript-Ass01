// Variables for pre-defined arrays
const noun1 = ['The Dog', 'My teacher', 'The Elephant', 'Mom', 'Dad']; 
const verb = ['does not like', 'jumped on ', 'read', 'ate', 'kissed']; 
const adjective = ['a funny', 'a scary', 'a goofy', 'a barking', 'a fat']; 
const noun2 = ['goat', 'monkey', 'fish', 'butterfly', 'frog']; 
const setting = ['in the park', 'in my soup', 'under the stars', 'on the grass', 'by the sea'];
const studentnumber = ['200552822'];

// Variables to keep track of array indices
let initiated_noun1 = 0;
let initiated_verb = 0;
let initiated_adjective = 0;
let initiated_noun2 = 0;
let initiated_setting = 0;
let initiated_studentnumber = 0;

// Constants for main button query selectors
const n1Button = document.getElementById("noun1");
const vbButton = document.getElementById("verb");
const adjButton = document.getElementById("adjective");
const n2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");
const studentnumberbutton = document.getElementById("studentnumber");

// Constants for p tags to display selected words
const selectedNoun1 = document.getElementById("selectedNoun1");
const selectedVerb = document.getElementById("selectedVerb");
const selectedAdjective = document.getElementById("selectedAdjective");
const selectedNoun2 = document.getElementById("selectedNoun2");
const selectedSetting = document.getElementById("selectedSetting");
const selectedStudentNumber = document.getElementById("selectedStudentNumber");

// Constants for final buttons and p tag to display story
const playbackButton = document.getElementById("showStory");
const randomButton = document.getElementById("randomStory");
const storyParagraph = document.getElementById("watchStory");

/* Functions */

// Function to handle click event on "Noun 1" button
function noun1_on_click() {
    selectedNoun1.textContent = noun1[initiated_noun1];
    initiated_noun1 = (initiated_noun1 + 1) % noun1.length;
}

// Function to handle click event on "Verb" button
function verb_on_click() {
    selectedVerb.textContent = verb[initiated_verb];
    initiated_verb = (initiated_verb + 1) % verb.length;
}

// Function to handle click event on "Adjective" button
function adjective_on_click() {
    selectedAdjective.textContent = adjective[initiated_adjective];
    initiated_adjective = (initiated_adjective + 1) % adjective.length;
}

// Function to handle click event on "Noun 2" button
function noun2_on_click() {
    selectedNoun2.textContent = noun2[initiated_noun2];
    initiated_noun2 = (initiated_noun2 + 1) % noun2.length;
}

// Function to handle click event on "Setting" button
function setting_on_click() {
    selectedSetting.textContent = setting[initiated_setting];
    initiated_setting = (initiated_setting + 1) % setting.length;
}

// Function to handle click event on "StudentNumber" button
function studentnumber_on_click() {
    selectedStudentNumber.textContent = studentnumber[initiated_studentnumber];
    initiated_studentnumber = (initiated_studentnumber + 1) % studentnumber.length;
}

// Function to concatenate selected words and display the story
function playback_on_click() {
    const story = `${selectedNoun1.textContent} ${selectedVerb.textContent} ${selectedAdjective.textContent} ${selectedNoun2.textContent} ${selectedSetting.textContent}  ${selectedStudentNumber.textContent}`;
    storyParagraph.textContent = story;
}

// Function to generate a random story and display it
function random_on_click() {
    const randomNoun1Index = Math.floor(Math.random() * noun1.length);
    const randomVerbIndex = Math.floor(Math.random() * verb.length);
    const randomAdjectiveIndex = Math.floor(Math.random() * adjective.length);
    const randomNoun2Index = Math.floor(Math.random() * noun2.length);
    const randomSettingIndex = Math.floor(Math.random() * setting.length);
    const randomStudentNumberIndex = Math.floor(Math.random() * studentnumber.length);

    const randomNoun1 = noun1[randomNoun1Index];
    const randomVerb = verb[randomVerbIndex];
    const randomAdjective = adjective[randomAdjectiveIndex];
    const randomNoun2 = noun2[randomNoun2Index];
    const randomSetting = setting[randomSettingIndex];
    const randomStudentNumber = studentnumber[randomStudentNumberIndex];

    const randomStory = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting} ${randomStudentNumber}`;
    storyParagraph.textContent = randomStory;
}

/* Event Listeners */

// Add event listeners to each button to trigger respective functions on click
n1Button.addEventListener("click", noun1_on_click);
vbButton.addEventListener("click", verb_on_click);
adjButton.addEventListener("click", adjective_on_click);
n2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
studentnumberbutton.addEventListener("click", studentnumber_on_click);

// Add event listeners to final buttons to trigger playback and random story functions on click
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);