(function(root) {
  var _tracks = [];
  var CHANGE_EVENT = "change";

  root.TrackStore = $.extend({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    all: function(callback) {
      return _tracks.slice(0);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case OrganConstants.ADD_TRACK:
          root.TrackStore._addTrack(payload.track);
          break;
        case OrganConstants.RESET_TRACKS:
          root.TrackStore._resetTracks(payload.tracks);
          break;
      }
    }),

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    _addTrack: function(track) {
      if (_tracks.indexOf(track) !== -1) {
        _tracks.push(track);
        this.emit(CHANGE_EVENT);
      }
    },

    _resetTracks: function (tracks) {
      _tracks = tracks.slice(0);
      this.emit(CHANGE_EVENT);
    }
  });
})(this);
