var KeyNote = React.createClass({
  componentDidMount: function () {
    this.note = new Note(TONES[this.props.noteName]);
    KeyStore.addChangeListener(this._onChange);
  },

  getInitialState: function () {
    return {pressed: this.thisKeyPressed() };
  },

  thisKeyPressed: function () {
    return KeyStore.all().indexOf(this.props.noteName) !== -1;
  },

  render: function () {
    var className = "note-key";
    if (this.state.pressed) {
      className += " pressed";
    }

    return <div className={className}>{this.props.noteName}</div>;
  },

  _onChange: function () {
    var pressed = this.thisKeyPressed();
    if (pressed) {
      this.note.start();
    } else {
      this.note.stop();
    }
    this.setState({ pressed: pressed});
  }
});
