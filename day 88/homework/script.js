function countCapitalLetters(text) {
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 'A' && text[i] <= 'Z') {
            counter++;
        }
    }
    return counter;
}

const letters = prompt()

const capitalCount = countCapitalLetters(letters)

console.log(capitalCount)