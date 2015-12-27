var TrackPlayer = React.createClass({
  playClick: function () {
    this.props.track.play();
  },

  render: function () {
    return (
      <div className="track">
        <button onClick={this.playClick}>Play</button>
        <text className="track-name">{this.props.track.get('name')}</text>
      </div>
    );
  }
});
