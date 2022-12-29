let pElement = document.querySelector("p");
let textboxContainer = document.querySelector(".textbox");
// if you click in the textbox:
textboxContainer.addEventListener('click', () => {

    addInsult();
});


function addInsult() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            pElement.innerText = "";
            let char_counter = 0; // char counter, e.g.: abc = 0 1 2, b = 1
            let text_out = ""; // text output
            let add_this_char = ""; // add this character now to text_out

            setInterval(() => {
                // check the array order, then get the text from this array that is in the "char_counter" position! to the "add_this_char"
                add_this_char = this.responseText.charAt(char_counter);

                // add the current char + all the past ones if there's some to output
                text_out += add_this_char;
                char_counter++; // increase the char order

                // append the output to the text element <p> or other
                pElement.innerText = text_out;

            }, 30); // do it each 30 miliseconds

        }
    };
    xmlhttp.open("GET", "https://api.chucknorris.io/jokes/random", false);
    xmlhttp.setRequestHeader("Accept", "text/plain");
    xmlhttp.send();

}

addInsult();

