var notes = {
    "C": 0,
    "Db": 1,
    "C#": 1,
    "D": 2,
    "Eb": 3,
    "D#": 3,
    "E": 4,
    "F": 5,
    "GB": 6,
    "F#": 6,
    "G": 7,
    "AB": 8,
    "G": 8,
    "A": 9,
    "BB": 10,
    "A#":10,
    "B":11
};

function pitchClass() {
    var req;
    req = prompt("Pick a note");
    while (this[req.toUpperCase()] === undefined) {
       req = prompt("There is no such note in our database. Please try again");
    }
    console.log("the number associated with that note is " + this[req.toUpperCase()]);
}
notes.getTheNotes = pitchClass;
notes.getTheNotes();