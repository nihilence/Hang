(function(root){
  root.TrackUtil = {
    createTrack: function(track) {
      $.ajax({
        url: '/tracks',
        method: 'POST',
        data: JSON.stringify({ track: track }),
        dataType: 'json',
        contentType: 'application/json',
        success: function (track) {
          TrackActions.addTrack(new Track(track));
        }
      });
    },

    fetchTracks: function () {
      $.getJSON('/tracks', function (trackObjects) {
        var tracks = trackObjects.map(function (trackData) {
          return new Track(trackData);
        });

        TrackActions.resetTracks(tracks);
      });

    }
  };
})(this);
