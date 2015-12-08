$(function (root) {
  var NOTE_MAP = {};
  var tones = Object.keys(window.TONES);
  var validKeys = [
    65,
    83,
    68,
    70,
    74,
    75,
    76,
    186
  ];

  tones.forEach(function(tone,i) {
    NOTE_MAP[validKeys[i]] = tone;
  });

  var _heldKeys = [];

  $(document).on('keydown', function (e) {
    var code = e.keyCode;
    var valid = validKeys.indexOf(code) !== -1;

    if (_heldKeys.indexOf(code) === -1 && valid) {
      _heldKeys.push(code);
      KeyActions.keyPressed(NOTE_MAP[code]);
    }
  });

  $(document).on('keyup', function(e) {
    var code = e.keyCode;
    var idx = _heldKeys.indexOf(code);

    if (idx !== -1) {
      _heldKeys.splice(idx, 1);
      KeyActions.keyReleased(NOTE_MAP[code]);
    }
  });
});
