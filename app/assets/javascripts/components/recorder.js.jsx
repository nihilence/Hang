var Recorder = React.createClass({
  getInitialState: function () {
    return({ recording: false, track: new Track() });
  },

  componentDidMount: function () {
    KeyStore.addChangeListener(this._keysChanged);
  },

  _keysChanged: function () {
    if (this.state.recording) {
      this.state.track.addNotes(KeyStore.all());
    }
  },

  render: function() {
    var klass = this.state.recording ? "recording" : "record";
    return(
      <div>
        <div className="buttons">
          <h2>Record:</h2>
          <button onClick={this.recordClick} className={klass}></button>
          <button onClick={this.playClick} className="play"></button>
        </div>
        { this.saveButton() }
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
  },

  save: function () {
    this.state.track.set('name', prompt('Enter track name: '));
    this.state.track.save();
  },

  saveButton: function() {
    if (!this.state.recording && !this.state.track.isBlank()) {
      return(
        <button className="save" onClick={ this.save }>Save Track</button>
      );
    }
  }
});
