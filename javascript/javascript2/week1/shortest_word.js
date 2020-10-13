

//---------------------find_the_shortest_word-----------------------------//

function find_shortest_word (danishWords) {
    danish_letter1 = danishWords;
    words = danishWords.replace(",", " ").split(" ");
    words.forEach(function (word) {
        if (word.length < danish_letter.length) {
            danish_letter1 =  word
        };
    });
    return danish_letter1
};

console.log(find_shortest_word("bil plante kaffe bog ø planetarium"));