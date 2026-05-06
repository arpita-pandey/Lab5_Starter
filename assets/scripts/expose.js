// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let hornSelect = document.getElementById('horn-select');
  let hornImage = document.querySelector('img');
  let hornAudio = document.querySelector('audio');
  let volumeControl = document.getElementById('volume');
  let volumeIcon = document.querySelector('#volume-controls img');
  let playButton = document.querySelector('button');

  hornSelect.addEventListener('change', () => {
    let selectedHorn = hornSelect.value;
    hornImage.src = `assets/images/${selectedHorn}.svg`;
    hornAudio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  volumeControl.addEventListener('input', () => {
    let volumeValue = volumeControl.value;
    hornAudio.volume = volumeValue / 100;

    if(volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if(volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if(volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  }); 
  
  playButton.addEventListener('click', () => {
    hornAudio.play();
    if(hornSelect.value === 'party-horn') {
      let jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}