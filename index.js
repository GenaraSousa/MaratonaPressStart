function checkTextEquality(textOne, textTwo) {
    return cleanText(textOne).join('') === cleanText(textTwo).join('');
}

function cleanText(text) {
    const listString = [...text];
    const position = listString.findIndex((char) => char === "#");
    console.log(listString);
    if (position === -1) return listString;

    if (position === 0) {
        listString.splice(position, 1);
        return cleanText(listString);
    }

    listString.splice(position - 1, 2)
    return cleanText(listString);
}

function Main() {
    console.log(checkTextEquality("ab#c#", "ad#c#"));
    console.log(checkTextEquality("ab##", "c#d#"));
    console.log(checkTextEquality("ac#", "b"));
    console.log(checkTextEquality("y#fo##f", "y#f#o##f"));
}

Main();