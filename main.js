// DataArray
let myJsonData = [
  {
    songId: 1,
    songName: '01 Bandeya - Dil Juunglee 190Kbps',
    songImage:
      'https://c.saavncdn.com/267/Bandeya-From-Dil-Juunglee--Hindi-2018-20180222044014-500x500.jpg',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 2,
    songName: '8 Parche - Baani Sandhu (DjPunjab.Com)',
    songImage:
      'https://a10.gaanacdn.com/images/albums/11/2804211/crop_480x480_2804211.jpg',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 3,
    songName: '8_Raflaan_(Original)-Mankirt_Aulakh-(JattZone.com)',
    songImage:
      'https://c.saavncdn.com/590/8-Raflaan-Extended-Version-feat-Gurlej-Akhtar--Punjabi-2021-20210427170611-500x500.jpg',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 4,
    songName: '52 Gaj Ka Daman(PaglaSongs)',
    songImage: 'https://i.ytimg.com/vi/CZt-rVn2BJs/maxresdefault.jpg',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 5,
    songName: 'Adhiya-(Original)-Karan-Aujla',
    songImage:
      'https://a10.gaanacdn.com/images/albums/77/3478577/crop_480x480_1603178934_3478577.jpg',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 6,
    songName: 'Att-Chukni-Ranjit-Bawa',
    songImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZocAl7FvFNBKPbkK4pjnrqQp5JCSKB1d9ZJ2OvJB2A&s',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 7,
    songName: 'Bandook Jass Manak 320kbps-(Mp3Sup)',
    songImage:
      'https://c.saavncdn.com/140/Bandook-Punjabi-2019-20201021081805-500x500.jpg',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 8,
    songName: 'Beimaan - Inder Chahal (DjPunjab.Com)',
    songImage:
      'https://a10.gaanacdn.com/images/albums/15/2992215/crop_480x480_2992215.jpg',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 9,
    songName: 'Botal Free - Jordan Sandhu (DjPunjab.Com)',
    songImage:
      'https://c.saavncdn.com/311/Botal-Free-Punjabi-2020-20200429184010-500x500.jpg',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 10,
    songName: 'Busy Busy - Nimrat Khaira',
    songImage:
      'https://bollyfry.in/wp-content/uploads/2020/09/Busy-Busy-Nimrat-Khaira.jpg?v=1600242495',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 11,
    songName: 'Butterfly-Jass_Manak-(JattZone.com)',
    songImage:
      'https://m.media-amazon.com/images/M/MV5BYzhkOTIxNmUtNDBjYi00MGY4LWIzNTQtOWMyZGQ2MjQ1NDYxXkEyXkFqcGdeQXVyMTI2NDQ4ODIw._V1_.jpg',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 12,
    songName: 'Chandigarh-(Mr-Jatt.com)',
    songImage: 'https://i.ytimg.com/vi/oXa226RIZ4g/maxresdefault.jpg',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 13,
    songName: 'Char_Din_Ft_Kulwinder_Billa',
    songImage:
      'http://riskyhd.com/videos/data/Latest_Punjabi_Videos/201601/Chaar_Din/ethumbs/ethumb-014.jpg',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 14,
    songName: 'Charche_-_Himmat_Sandhu_(DJJOhAL.Com)',
    songImage:
      'https://a10.gaanacdn.com/images/albums/21/2054821/crop_480x480_1515839244_2054821.jpg',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 15,
    songName: 'Dhokha Dhadi - Arijit Singh - 320Kbps',
    songImage: 'https://i.ytimg.com/vi/I-Pnr0MQTbU/maxresdefault.jpg',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 16,
    songName: 'Dholna-B-Praak',
    songImage: 'https://static.toiimg.com/photo/65970644.cms?imgsize=168535',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 17,
    songName: 'Gaddi_Ch_Yaar_-_Kamal_Khaira__(DjPunjab.Com)',
    songImage:
      'https://i.scdn.co/image/ab67616d0000b273fde7965435a41a7a5510ea7b',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 18,
    songName: 'Guilty - Karan Aujla',
    songImage:
      'https://www.lyricsbell.com/wp-content/uploads/2021/01/guilty-karan-aujla.jpg',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 19,
    songName: 'Haye-Tauba-Shipra-Goyal',
    songImage:
      'https://bollyfry.in/wp-content/uploads/2020/09/Haye-Tauba-Shipra-Goyal-Parmish-Verma.jpg?v=1599808423',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 20,
    songName: 'Ja Ve Mundya - Ranjit Bawa - 190Kbps',
    songImage:
      'https://is1-ssl.mzstatic.com/image/thumb/Music71/v4/81/3a/36/813a362b-5769-c31a-2c38-0fc5693124c4/8903431630278_cover.jpg/400x400cc.jpg',
    authorName: 'Rohit Madeshiya',
  },
  {
    songId: 21,
    songName: 'Jean - Ranjit Bawa (DjPunjab.Com)',
    songImage: 'https://i.ytimg.com/vi/kEELvkhQPk4/maxresdefault.jpg',
    authorName: 'Rohit Madeshiya',
  },
];
// Song Mapping Start
let rightBox = document.querySelector('.songMainBox');
myJsonData.map((songItem, index) => {
  let songBox = document.createElement('div');
  songBox.classList.add('songBox');
  songBox.setAttribute('key', index + 1);
  songBox.addEventListener('click', songHandle(index));
  let imageBox = document.createElement('div');
  imageBox.classList.add('imageBox');
  songBox.appendChild(imageBox);
  let img = document.createElement('img');
  img.src = songItem.songImage;
  imageBox.appendChild(img);
  rightBox.appendChild(songBox);
  let songDescription = document.createElement('div');
  songDescription.classList.add('songDescription');
  let heading_three = document.createElement('h3');
  let heading_three_text = document.createTextNode(songItem.songName);
  heading_three.appendChild(heading_three_text);
  songDescription.appendChild(heading_three);
  let heading_four = document.createElement('h4');
  let heading_four_text = document.createTextNode(songItem.authorName);
  heading_four.appendChild(heading_four_text);
  songDescription.appendChild(heading_four);
  songBox.appendChild(songDescription);
});
// Wavesurfer Start
let wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'rgba(233, 233, 237,.5)',
  progressColor: '#ffffff',
  barGap: 2,
  barWidth: 3,
  barRadius: 3,
  cursorWidth: 3,
  height: 30,
  cursorColor: 'transparent',
});
// Music load
let myMusic = './Music/01 Bandeya - Dil Juunglee 190Kbps.mp3';
wavesurfer.load(myMusic);

// Main Data load
let mainImage = document.querySelector('.mainImage');
mainImage.src = myJsonData[0].songImage;
let songName = document.querySelector('.songName');
let songName_text = document.createTextNode(myJsonData[0].songName);
songName.appendChild(songName_text);
let playPauseIcon = document.getElementById('playPauseIcon');
// Song Select Function

function songHandle(index) {
  return async function newFunc() {
    document.getElementById('songCurrentTime').innerText = '00:00';
    let tempdata = myJsonData[index];
    await wavesurfer.load(`./Music/${tempdata.songName}.mp3`);
    let mainImageNew = document.querySelector('.mainImage');
    let songNameNew = document.querySelector('.songName');
    songNameNew.innerHTML = '';
    mainImageNew.src = tempdata.songImage;
    let song_text = document.createTextNode(tempdata.songName);
    songNameNew.appendChild(song_text);
    playMusic();
  };
}
// Time Calculator Function
const calculatTime = (time) => {
  let minutes = Math.round(time / 60);
  let seconds = Math.round(time % 60);
  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
// get the current time of song
wavesurfer.on('audioprocess', function () {
  let currentSongTime = calculatTime(wavesurfer.getCurrentTime());
  document.getElementById('songCurrentTime').innerText = currentSongTime;
});
// Play Pause Handle Function
function playMusic() {
  let songDuration = calculatTime(wavesurfer.getDuration());
  document.getElementById('songTotalTime').innerText = songDuration;

  if (playPauseIcon.src.includes('play')) {
    playPauseIcon.src = 'pause.png';
    wavesurfer.play();
  } else {
    playPauseIcon.src = 'play.png';
    wavesurfer.pause();
  }
}
// Finish Function
wavesurfer.on('finish', function () {
  playPauseIcon.src = 'play.png';
  wavesurfer.stop();
});

// Volume Toggle Function
function handleVolume() {
  let volumeBtn = document.getElementById('volumeBtn');
  wavesurfer.toggleMute();
  if (volumeBtn.src.includes('volume')) {
    volumeBtn.src = 'mute.png';
  } else {
    volumeBtn.src = 'volume.png';
  }
}
// Forward Music Function
function forwardMusic() {
  wavesurfer.skipForward();
}
// Backward Music Function
function backwardMusic() {
  wavesurfer.skipBackward();
}
// All Function Handle By Keyboard
document.body.onkeyup = (e) => {
  if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
    playMusic();
  } else if (e.code == 'ArrowRight' || e.keyCode == 39) {
    forwardMusic();
  } else if (e.code == 'ArrowLeft' || e.keyCode == 37) {
    backwardMusic();
  } else if (e.code == 'M' || e.keyCode == 77) {
    handleVolume();
  } else {
    console.log('INVALID KEY PRESSS');
  }
};
// Favourite Song Handle Function

function favouriteHandle() {
  let favouriteIcon = document.getElementById('favouriteIcon');
  if (favouriteIcon.src.includes('Outline')) {
    favouriteIcon.src = 'heartFill.png';
  } else {
    favouriteIcon.src = 'heartOutline.png';
  }
}
