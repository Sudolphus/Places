//business logic
function ListOfPlaces() {
  this.places = [];
}

ListOfPlaces.prototype.addPlace = function(name) {
  this.places.push(name);
}

ListOfPlaces.prototype.findPlace = function(name) {
  for (i = 0; i < this.places.length; i++) {
    if (this.places[i].place === name) {
      return this.places[i];
    }
  }
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
    } else if (placeList.findPlace(placeName)) {
      alert('That place is already added!');
    }

    const newPlace = new Place(placeName);
    placeList.addPlace(newPlace);
    $("#addedPlaces").append(`<option value="${placeName}">${placeName}</option>`)

    $("#output").append(`<li class="places" id="output${placeName}">${placeName}</li>`);
    $(`#output${placeName}`).click(function() {
      const placeRef = placeList.findPlace($(`#output${placeName}`).html());
      if (placeRef.locations.length > 0){
        $(`#output${placeName}`).append(`<ul id='location${placeName}'><strong>Locations:</strong></ul>`)
        placeRef.locations.forEach(function(element) {
          $(`#location${placeName}`).append(`<li>${element}</li>`);
        })
      }
      if (placeRef.landmarks.length > 0){
        $(`#output${placeName}`).append(`<ul id='landmark${placeName}'><strong>Landmarks:</strong></ul>`)
        placeRef.locations.forEach(function(element) {
          $(`#landmark${placeName}`).append(`<li>${element}</li>`);
        })
      }
      if (placeRef.timeOfYear.length > 0){
        $(`#output${placeName}`).append(`<ul id='timeOfYear${placeName}'><strong>Time of Year:</strong></ul>`)
        placeRef.timeOfYear.forEach(function(element) {
          $(`#timeOfYear${placeName}`).append(`<li>${element}</li>`);
        })
      }
      if (placeRef.notes.length > 0){
        $(`#output${placeName}`).append(`<ul id='notes${placeName}'><strong>Notes:</strong></ul>`)
        placeRef.notes.forEach(function(element) {
          $(`#notes${placeName}`).append(`<li>${element}</li>`);
        })
      }
      })
    })
  $("#addQuality").click(function() {
    const value = $("input[name=qualityInput]").val();
    const type = $("#qualityType").val();
    const place = $('#addedPlaces').val();

    if (!value) {
      alert("Enter a value to be appended!");
      return;
    }

    let appendedPlace = placeList.findPlace(place);

    if (type === "location") {
      appendedPlace.addLocation(value);
    } else if (type === "landmark") {
      appendedPlace.addLandmark(value);
    } else if (type === "timeofYear") {
      appendedPlace.addTimeOfYear(value);
    } else if (type === "note") {
      appendedPlace.addNote(value);
    }
  })
})