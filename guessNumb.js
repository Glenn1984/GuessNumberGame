document.backgroundColor = "#ccc";

let name = prompt('Welkom bij het Guess the number game!\n\nWat is je naam ?\n\n');
alert('Hallo, ' + name);

let number = prompt('Voer een cijfer in tussen de 0 en 25 om te raden:');
alert('Bedankt! Laten we snel gaan kijken of ' + parseInt(number) + ' overeenkomt met het getal van de computer.');

let calculation = function (min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);
    // get a random integer between two values, both min and max are inclusive.
    return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(calculation);

if (number === calculation) {
    alert('Gefeliciteerd, u heeft het goed geraden!');
} else {
    alert('Helaas, u heeft het fout!');
};

alert('Dag ' + name + ' , Tot de volgende keer.')
window.stop();
window.location.reload();
