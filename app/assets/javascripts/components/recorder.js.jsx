var Recorder = React.createClass({
  getInitialState: function () {
    return({ recording: false, track: new Track() });
  },

  componentDidMount: function () {
    KeyStore.addChangeListener(this._keysChanged);
  },

  _keysChanged: function () {
    this.state.track.addNotes(KeyStore.all());
  },

  render: function() {
    var klass = this.state.recording ? "recording" : "record";
    return(
      <div className="buttons">
        <h2>Record:</h2>
        <button onClick={this.recordClick} className={klass}></button>
        <button onClick={this.playClick} className="play"></button>
      </div>
    );
  },

  recordClick: function() {
    if(this.state.recording) {
      this.state.track.stopRecording();
      this.setState({ recording: false });
    } else {
      this.setState({ recording: true });
      this.state.track.startRecording();
    }
  },

  playClick: function() {
    if(!this.state.track.isBlank()) {
      this.state.track.play();
    }
  }
});
