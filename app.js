function capitalize() {
    const str = document.getElementById("value").value;
    const words = str.split(" ");
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const capitalizedString = capitalizedWords.join(" ");
    document.getElementById("result").innerHTML = capitalizedString;
}