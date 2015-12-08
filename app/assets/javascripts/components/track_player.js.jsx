var TrackPlayer = React.createClass({
  playClick: function () {
    this.props.track.play();
  },

  render: function () {
    return (
      <div className="track">
        <p className="track-name">{this.props.track.name}</p>
        <button onClick={this.playClick}>Play</button>
      </div>
    );
  }
});
