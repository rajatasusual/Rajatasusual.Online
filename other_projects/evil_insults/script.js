let text = [
];

let pElement = document.querySelector("p");
let textboxContainer = document.querySelector(".textbox");


// calling the function
typewriter(text, text.length - 1, pElement, textboxContainer);

function addInsult(textArray) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            textArray.push(this.responseText);
        }
    };
    xmlhttp.open("GET", "https://evilinsult.com/generate_insult.php", true);
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlhttp.send();

}

// TypeWriter function
function typewriter(textArray, text_max, textElement, textContainer) {

    addInsult(textArray);

    let char_counter = 0; // char counter, e.g.: abc = 0 1 2, b = 1
    let text_out = ""; // text output
    let text_order = 0; // array text order to be print
    let add_this_char = ""; // add this character now to text_out
    let can_jump_next_text = false; // can you click and jump to the next array?


    setInterval(() => {
        // check the array order, then get the text from this array that is in the "char_counter" position! to the "add_this_char"
        add_this_char = textArray[text_order].charAt(char_counter);

        // add the current char + all the past ones if there's some to output
        text_out += add_this_char;
        char_counter++; // increase the char order

        // while the array order be less than the max amount of arrays:
        if (text_order < text_max) {
            // you'll be able to jump to the next array in case there's no more text to render now
            if (add_this_char == "") can_jump_next_text = true;
        }

        // append the output to the text element <p> or other
        textElement.innerText = text_out;

    }, 30); // do it each 30 miliseconds


    // if you click in the textbox:
    textContainer.addEventListener('click', () => {

        addInsult(text);

        if (can_jump_next_text) { // if you are allowed to jump
            if (text_order < text_max) text_order++; // increase the array order
            char_counter = 0; // make char counter back to 0
            text_out = ""; // clean text output
            add_this_char = ""; // clean add this char
            can_jump_next_text = false; // you cannot jump now until it ends again
        }
    });

}