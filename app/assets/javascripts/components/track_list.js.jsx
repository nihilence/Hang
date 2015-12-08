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
        <h3> Track List </h3>
        {
          this.state.tracks.map(function(track) {
            return <TrackPlayer key={track.get('id')} track={ track }/>;
          })
        }
      </div>
    );
  }
});
