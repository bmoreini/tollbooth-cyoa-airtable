var options=[];
var buttonElement = document.getElementById("button1");
var currentStoryElement = document.getElementById("currentStory");
var dropdown = document.getElementById("choices");
var messages = [];
var choices;
var answer;
var hasImage = false;

function start() {
  setup();
  scene1();
}

function startNoDB() {
  setupNoDB();
}

function setup() {
    setOptions([{ choice: "No DB", target: "" }]);
    buttonElement.innerHTML = "Choose One.";
    buttonElement.onclick = function () {
      getScene(dropdown.value);
    }
}

function setOptions(options) {
    let dropdown = document.getElementById("choices");
    while (dropdown.options.length) {
        dropdown.remove(0);
    }
    for (let i = 0; i < options.length; i++) {
    // This is object-oriented JavaScript (hence capital letter)
        let option = new Option(options[i].choice, options[i].target);
        dropdown.options.add(option);
    }
}


function displayStory(text, delay = false, append = false) {
    let currentStoryElement = document.getElementById("currentStory");
    if (typeof(text) === 'string') {
        currentStoryElement.innerHTML = text;
    } 
	// the following makes text reveal slowly if a delay is indicated in the database
	else if (delay) {
        // Disable the button to prevent making a selection before
        // full message is delivered.
        buttonElement.disabled = true;
        // Keep shifting strings from the array until it is empty.
        if (append) {
            currentStoryElement.innerHTML += `<br /><br />${text.shift()}`;
        } 
		else {
            currentStoryElement.innerHTML = text.shift();
        }
        if (text.length) {
            setTimeout(function () {
                displayStory(text, delay, true);
            }, delay);
        } 
		else {
            // Done. Re-enable button.
            buttonElement.disabled = false;
        }
    } 
	else {
        currentStoryElement.innerHTML = text.join('<br /><br />');
    }
}


function showModal(htmlData){
  let statsBox = document.getElementById("modalBox");
  let statsText = document.getElementById("modal-content");
  statsText.innerHTML = htmlData;
  statsBox.style.display = "block";
}

function hideModal() {
  let statsBox = document.getElementById("modalBox");
  statsBox.style.display = "none";
}

function addImage(imageURL){
  let image = document.createElement("img");
  image.src = imageURL;
  image.setAttribute("width", "400px");
  let storyBox = document.getElementById("storybox");
  if (hasImage == true) {
      storyBox.innerHTML="";
  }
  storyBox.style.textAlign = "center";
  storyBox.appendChild(image);
  hasImage = true;
}

function setupNoDB() {
  story("Game Loading");
  options=["testing 1", "test 2", "test3"];
  setOptionsNoDB(options);
  buttonElement.innerHTML = "Pick One!";
  buttonElement.setAttribute("onclick", "checkAnswersNoDB(dropdown.value)");
  scene1NoDB();
}

function setOptionsNoDB(options) {
  let dropdown = document.getElementById("choices");
  while (dropdown.options.length) {
    dropdown.remove(0);
  }
  for (let i = 0; i < options.length; i++) {
    let option = new Option(options[i]);
    dropdown.options.add(option);
  }
}

function story(text) {
  currentStoryElement.innerHTML = text;
}

function delayText(text, delay) {
  let index = 0;
  story("");
  let callback = function (text) {
    story(currentStoryElement.innerHTML  + text[index]+ "<br />"+ "<br />");
    index += 1;
    if (index >text.length-1){
      clearInterval(timer);
    }
  }
  let timer = setInterval(function () {
    callback(text);
  }, delay);
}
