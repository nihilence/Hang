function Track(attrs) {
  var defaults = { name: " ", sequence: [] };
  this.attributes = $.extend(defaults, attrs);
  this.sequence = this.attributes.sequence;
}

Track.prototype = {
  startRecording: function () {
    this.sequence = [];
    this.start = Date.now();
  },

  addNotes: function(notes) {
    this.sequence.push({ notes: notes, timeSlice: Date.now() - this.start });
  },

  stopRecording: function () {
    this.addNotes([]);
  },

  play: function () {
    if (this.interval) return;

    var currentNote = 0,
        playbackStartTime = Date.now(),
        sequenceLength = this.sequence.length,
        delta;

    this.interval = setInterval( function(){

      delta = Date.now() - playbackStartTime;

      if(currentNote < sequenceLength) {
        if (delta >= this.sequence[currentNote].timeSlice){
          var notes = this.sequence[currentNote].notes || [];
          KeyActions.groupUpdate(notes);
          currentNote++;
          console.log("sequence ", this.sequence.length);
          console.log("CN ", currentNote);
        }
      } else {
        clearInterval(this.interval);
        delete this.interval;
      }
    }.bind(this), 1);
  },

  isBlank: function () {
    return this.sequence.length === 0;
  }


};
