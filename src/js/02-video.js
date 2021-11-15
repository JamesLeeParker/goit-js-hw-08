import Player from '@vimeo/player';
const iframeRef = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframeRef);
const throttle = require('lodash.throttle');

const currentTime = localStorage.getItem('videoplayer-current-time');
console.log(currentTime);

const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('timeupdate', onPlay);
