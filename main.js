//Get the DOM elements from HTML and CSS
const plantInput = document.getElementById("plantInput");
const PlantButton = document.getElementById("PlantButton");
const garden = document.getElementById("garden");
const emojiSelect = document.getElementById("emojiSelect");
const addEmojiButton = document.getElementById("addEmojiButton");

//Welcome the user with their name
const userName = prompt("What is your name?");
const welcomeMessage = document.getElementsByTagName('h1')[0];

//Change heading 1
welcomeMessage.innerHTML = welcomeMessage
.innerHTML.replace("My", `${userName}'s`);

//Create arrays to store plant names and emojis
const plants=[];
const emoji =[];

//Create event listener for the "Add plant" and add the new plant name to the stored array 

PlantButton.addEventListener("click", function() {
  const plantname=plantInput.value;
  
  if (plantname !==""){
    plants.push(plantname);
  
  const plantElement =
        document.createElement("div");
        plantElement.classList.add("plant");
        plantElement.textContent = plantname;
        garden.appendChild(plantElement);

//Clear the input box so that a new plant can be added
  plantInput.value = "";
}
});

//Display the plants in the stored array
function displayPlants() {
}
//Loop through the plants in the array and display them
for (const plant of plants) {
  const plantElements =
  document.createElement("div");
  plantElement.classList.add("plant");
  plantElement.textContent = plant;
  garden.appendChild(plantElement);
}

//Adding an emoji to the garden
addEmojiButton.addEventListener("click", function () {
  const selectedEmoji = emojiSelect.value;
  
  // Get the selected emoji from the dropdown list and push to the end of the array
  if (selectedEmoji !== "") {
    emoji.push(selectedEmoji);

    const emojiElement = document.createElement("div");
    emojiElement.classList.add("emoji");
    emojiElement.textContent = selectedEmoji;
    garden.appendChild(emojiElement);
    
    //Reset drop down so a new emoji can be selected
    emojiSelect.value = "";
  }
});
function displayPlantsAndEmojis() {
}
