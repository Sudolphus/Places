//business logic
function ListOfPlaces() {
  this.places = [];
}

ListOfPlaces.prototype.addPlace = function(name) {
  this.places.push(name);
}

function Place(name) {
  this.place = name;
  this.locations = [];
  this.landmarks = [];
  this.timeOfYear = [];
  this.notes = [];
}

Place.prototype.addLocation = function(name) {
  this.locations.push(name);
}

Place.prototype.addLandmark = function(name) {
  this.landmarks.push(name);
}

Place.prototype.addTimeOfYear = function(name) {
  this.timeOfYear.push(name);
}

Place.prototype.addNote = function(name) {
  this.notes.push(name);
}

Place.prototype.removeLocation = function(id) {
  delete this.locations[id];
}

Place.prototype.removeLandmark = function(id) {
  delete this.landmarks[id];
}

Place.prototype.removeTimeOfYear = function(id) {
  delete this.timeOfYear[id];
}

Place.prototype.removeNote = function(id) {
  delete this.notes[id];
}

const placeList = new ListOfPlaces();

//user interface
$(document).ready(function () {
  $("#addPlace").click(function() {
    const placeName = $("input[name=placeName]").val();

    if (!placeName) {
      alert('Enter a Place Name!');
      return;
    }

    const newPlace = new Place(placeName);
    placeList.addPlace(newPlace);
  })
})