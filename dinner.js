const wifeSayings = ["It doesn't matter to me.", 'I would love some Mexican!', "We haven't done Mexican in a while!", "I don't care, babe. You pick.", 'Anything but pizza', "As long as I have Dr. Pepper, I'm happy.", 'Fajitas for me!', 'I would love some chips and guacamole!', 'I truly just want you to be happy. You pick.', 'Queso!', 'Beans and Rice!', 'Mexican is fine, I guess.', "Let's have Pablo serve us tonight."];

const wifeSays = () => {
    const rand = Math.floor(Math.random() * wifeSayings.length);
    return wifeSayings[rand];
};

const button = document.getElementById("clickableButton");
const responseOutput = document.getElementById("responseOutput")

button.addEventListener("click", () => {
    const speechBubble = wifeSays()
    responseOutput.innerHTML = speechBubble
})

