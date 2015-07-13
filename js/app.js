(function (global, document) {

  // When clock will reach these values, alarm will be activated 
  var alarm = {
    hour: null,
    minute: null
  };

  // Adds zeros if number consists of less digits than required
  //
  // Sample usage:
  //
  // addZeros(1, 2) will output "10"
  // addZeros('', 3) will output "000"
  // addZeros(19, 2) will output "19"
  //
  var addZeros = function(input, requiredLength) {

    var currentLength = input.toString().length,
        output = input;

    if (currentLength < requiredLength) {

      var zerosToAdd = requiredLength - currentLength;
      output = Array.apply(null, Array(zerosToAdd)).map(function() {
        return "0";
      }).join('') + output;

    }

    return output;

  };

  // Register alarm click event
  (function() {

    var alarmButtonEl = document.querySelector('.js-alarm-button'),
        alarmEl = document.querySelector('.js-alarm'),
        alarmFormCancelButtonEl = document.querySelector('.js-alarm-form-cancel-button'),
        alarmForm = document.querySelector('.js-alarm-form');

    // Flip to "Alarm set" form
    alarmButtonEl.addEventListener('click', function(evt) {
      evt.preventDefault();

      alarmEl.classList.add('is-flipped');
    }, false);

    // Set an alarm
    alarmForm.addEventListener('submit', function(evt) {
      evt.preventDefault();

      var hour = document.querySelector('.js-alarm-hour').value,
          minute = document.querySelector('.js-alarm-minute').value;

      alarm.hour = hour;
      alarm.minute = minute;
      console.log(alarm);

      alarmEl.classList.remove('is-flipped');

      return false;

    }, true);

    // Cancel setting an alarm
    alarmFormCancelButtonEl.addEventListener('click', function(evt) {
      evt.preventDefault();

      alarmEl.classList.remove('is-flipped');

    }, false);

  })();

  // Re-draw the clock display
  var render = function(timestamp) {

    var D = new Date(),
        hours = addZeros(D.getHours(), 2),
        minutes = addZeros(D.getMinutes(), 2),
        seconds = addZeros(D.getSeconds(), 2),
        milliseconds = addZeros(D.getMilliseconds(), 3);

    document.querySelector('.js-clock').innerHTML =
      hours + ":" + minutes + ":" + seconds + "." + milliseconds;

    if (hours == alarm.hour && minutes == alarm.minute) {
      document.querySelector('.js-alarm-button-icon').classList.add('is-ringing');

      alarm.hour = null;
      alarm.minute = null;
    }

    global.requestAnimationFrame(render);

  }


  global.requestAnimationFrame(render);

})(this, document);
