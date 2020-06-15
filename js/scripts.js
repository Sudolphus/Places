//business logic
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

Place.prototype.addLandmarks = function(name) {
  this.landmarks.push(name);
}

Place.prototype.addTimeOfYear = function(name) {
  this.timeOfYear.push(name);
}

Place.prototype.addNote = function(name) {
  this.notes.push(name);
}

Place.prototypes.removeLocation = function(id) {
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