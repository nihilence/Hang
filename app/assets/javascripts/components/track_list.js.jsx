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
      <div className="track-list">
        <h1> Track List </h1>
        {
          this.state.tracks.map(function (track) {
            return <TrackPlayer key={track.get('id')} track={track}>track.name </TrackPlayer>;
          })

        });
        }
      </div>
    );
  },

  _onChange: function () {
    this.setState({ tracks: TrackStore.all() });
  }
});
