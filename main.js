audio.volume = 0.5;
// Your sounds
let sounds = [new Audio('./Fox/fox0a.dsp.wav'), 
                new Audio('./Fox/fox0b.dsp.wav'), 
                new Audio('./Fox/fox0c.dsp.wav'),
                new Audio('./Fox/fox0d.dsp.wav'), 
                new Audio('./Fox/fox01.dsp.wav'),
                new Audio('./Fox/fox1c.dsp.wav'), 
                new Audio('./Fox/fox1c.dsp.wav'), 
                new Audio('./Fox/fox1c.dsp.wav'), 
                new Audio('./Fox/fox1c.dsp.wav'), 
                new Audio('./Fox/fox1c.dsp.wav'), 
                new Audio('./Fox/fox1c.dsp.wav'), 
                new Audio('./Fox/fox1c.dsp.wav'), 
                new Audio('./Fox/fox1c.dsp.wav'), 
                new Audio('./Fox/fox1c.dsp.wav'), 
                new Audio('./Fox/fox1c.dsp.wav'), 
                new Audio('./Fox/fox1c.dsp.wav'), 
                new Audio('./Fox/fox1c.dsp.wav'), 
                new Audio('./Fox/fox1d.dsp.wav'), 
                new Audio('./Fox/fox02.dsp.wav'), 
                new Audio('./Fox/fox03.dsp.wav'),
                new Audio('./Fox/fox04.dsp.wav'), 
                new Audio('./Fox/fox05.dsp.wav'),
                new Audio('./Fox/fox06.dsp.wav'), 
                new Audio('./Fox/fox07.dsp.wav'), 
                new Audio('./Fox/fox08.dsp.wav'),
                new Audio('./Fox/fox09.dsp.wav'), 
                new Audio('./Fox/fox10.dsp.wav'),
                new Audio('./Fox/fox11.dsp.wav'), 
                new Audio('./Fox/fox12.dsp.wav'), 
                new Audio('./Fox/fox13.dsp.wav'),
                new Audio('./Fox/fox15.dsp.wav'), 
                new Audio('./Fox/fox20.dsp.wav')];
let lastSound = 0; // Not necessary but we don't want overlapping tracks.
// Listen for click on button (ID soundmachine)
// pointerdown is more suitable so adjusted it.
document.querySelector("#soundmachine1").addEventListener("pointerdown", () => {
// This is a small fix to allow the sound to be spammable and clear last track.
  sounds[lastSound].pause();
  sounds[lastSound].currentTime = 0;
  let random = Math.floor(Math.random() * sounds.length);
  sounds[random].play();
  lastSound = random; // For the next click we want to cancel this sound if it's playing.
  console.log(lastSound); // Just so you can see it count/play
});
document.querySelector("#soundmachine2").addEventListener("pointerdown", () => {
    sounds[lastSound].pause();
    sounds[lastSound].currentTime = 0;
    let random = Math.floor(Math.random() * sounds.length);
    sounds[random].play();
    let random2 = Math.floor(Math.random() * sounds.length);
    sounds[random2].play();
    lastSound = random; // For the next click we want to cancel this sound if it's playing.
    //console.log(lastSound); // Just so you can see it count/play
});
