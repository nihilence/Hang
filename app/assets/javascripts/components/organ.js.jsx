var Organ = React.createClass({
  getInitialState: function () {
    return { notes: KeyStore.all() };
  },

  componentDidMount: function () {
    KeyStore.addChangeListener(this._onChange);
  },

  _onChange: function (){
    this.setState({ notes: KeyStore.all() });
  },

  render: function () {
    return (
      <div className="container">
        <div className="keys">
          {
            Object.keys(TONES).map(function(noteName) {
              return (<KeyNote noteName={noteName} key={noteName}/> );
            })
          }
        </div>
        <Recorder/>
      </div>
    );
  }
});
