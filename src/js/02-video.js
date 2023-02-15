import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_KEY = 'videoplayer-current-time'

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
    localStorage.setItem('LOCAL_KEY', e.seconds)
}

const currentTime = localStorage.getItem(LOCAL_KEY);

if(currentTime) {
    player.setCurrentTime(localStorage.getItem(LOCAL_KEY))
}
