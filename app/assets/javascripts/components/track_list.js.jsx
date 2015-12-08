var TrackList = React.createClass({
  componentDidMount: function () {
    TrackStore.addChangeListener(this._onChange);
    TrackUtil.fetchTracks();
  },

  getInitialState: function () {
    return { tracks:  TrackStore.all() };
  },

  render: function () {
    return (
      <div>
        <h1 className="track-header"> Track List </h1>
        <div className="track-list">
          {
            this.state.tracks.map(function (track) {
              return <TrackPlayer key={track.id} track={track}>track.name </TrackPlayer>;
            })

           });
          }
        </div>
      </div>
    );
  },

  _onChange: function () {
    this.setState({ tracks: TrackStore.all() });
  }
});
