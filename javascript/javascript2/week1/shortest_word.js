function find_shortest_word(danishWords) {
    danish_letter = danishWords;
    words = danishWords.replace(",", " ").split(" ");
    words.forEach(function (word) {
        if (word.length < danish_letter.length) {
            danish_letter = word
        };
    });
    return danish_letter
};

console.log(find_shortest_word("bil plante kaffe bog ø planetarium"));