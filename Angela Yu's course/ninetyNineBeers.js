// 99 Bottles of beers on the wall Lyrics, challenge

function beer() {
    var numberOfBottles = 99
    while (numberOfBottles >= 1) {
        console.log(bottleWord(numberOfBottles) + " of beer on the wall, " + bottleWord(numberOfBottles) + " of beer.");
        numberOfBottles--;
        console.log("Take one down and pass it around, " + bottleWord(numberOfBottles) + " of beer on the wall.");
    }
    console.log('No more bottles of beer on the wall, no more bottles of beer.');
    console.log('Go to the store and buy some more, 99 bottles of beer on the wall.');
}

function bottleWord(numberOfBottles) {
    if (numberOfBottles === 0) {
        return "no more bottles";
    } else if (numberOfBottles === 1) {
        return numberOfBottles + " " + "bottle";
    } else {
        return numberOfBottles + " " + "bottles";
    }
}

beer();

//Will have to revisit
