'use strict';

console.log('The site must have a React!');

// // /// //// ///// /////// ////////////////
// sadness native code for testing mockup //
var timiMockup = function () {
  var place = {};
      place.render = document.getElementsByClassName('timi-places')[0];
      place.trigger = [];
      place.trigger['component'] = document.getElementsByClassName('timi-place-display')[0];
      place.trigger['component'].onclick = function () {
        place.trigger['map'] = document.getElementById('place_display_map').checked;
        if (!place.trigger['map']) {
          place.render.classList.remove('timi-places-map');
          place.render.classList.add('timi-places-list');
        } else {
          place.render.classList.add('timi-places-map');
          place.render.classList.remove('timi-places-list');
        }
      }
}
timiMockup();
