function Track(attrs) {
  var defaults = { name: "", sequence: [] };
  this.attributes = $.extend(defaults, attrs);
}

Track.prototype = {
  startRecording: function () {
    this.attributes.sequence = [];
    this.start = Date.now();
  },

  addNotes: function(notes) {
    this.attributes.sequence.push({ notes: notes, timeSlice: Date.now() - this.start });
  },

  get: function(attr) {
    return this.attributes[attr];
  },

  set: function (attr, val) {
    this.attributes[attr] = val;
  },

  stopRecording: function () {
    this.addNotes([]);
  },

  play: function () {
    if (this.interval) return;

    var currentNote = 0,
        playbackStartTime = Date.now(),
        sequence = this.attributes.sequence,
        delta;

    this.interval = setInterval( function(){

      delta = Date.now() - playbackStartTime;
      if(currentNote < sequence.length) {

        if (delta >= sequence[currentNote].timeSlice){

          var notes = sequence[currentNote].notes || [];
          KeyActions.groupUpdate(notes);
          currentNote++;
        }
      } else {
        clearInterval(this.interval);
        delete this.interval;
      }
    }.bind(this), 1);
  },

  isBlank: function () {
    return this.attributes.sequence.length === 0;
  },

  save: function () {
    if (this.isBlank()) {
      throw "track cannot be blank!";
    } else if (this.attributes.name === "") {
      throw "name cannot be blank";
    } else {
      TrackActions.createTrack(this.attributes);
    }
  }


};
