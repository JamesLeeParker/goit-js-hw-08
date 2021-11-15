import Player from '@vimeo/player';
const iframeRef = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframeRef);
const throttle = require('lodash.throttle');

const onPlay = () => {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(function (error) {});
};

let currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime);

player.on(
  'timeupdate',
  throttle(function () {
    onPlay();
  }, 500),
);
