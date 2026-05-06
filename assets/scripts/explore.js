// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let exploreButton = document.querySelector('button');
  let textInput = document.getElementById('text-to-speak');
  let voiceSelect = document.getElementById('voice-select');
  let synth = window.speechSynthesis;
  let image = document.querySelector('img');

  populateVoiceList();
  synth.addEventListener('voiceschanged', populateVoiceList);

  
  function populateVoiceList() {
    let voices = synth.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach((voice) => {
      let option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  exploreButton.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(textInput.value);
    let selectedVoice = voiceSelect.value;
    let voices = synth.getVoices();
    utterance.voice = voices.find(voice => voice.name === selectedVoice);

    utterance.addEventListener('start', () => { image.src = 'assets/images/smiling-open.png'; });
    utterance.addEventListener('end', () => { image.src = 'assets/images/smiling.png'; });

    synth.speak(utterance);
});


  
}