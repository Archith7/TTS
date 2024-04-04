let speech = new SpeechSynthesisUtterance();

// let voices=[];
// let voiceselect=document.querySelector("select");
// window.speechSynthesis.onvoiceschanged=()=>{
// voices=window.speechSynthesis.getVoices();
// speech.voice=voices[0];
// voices.forEach((voice,i)=>(voiceselect.options[i]=new Option(voice.name,i)));

// };
// voiceselect.addEventListener("change",()=>{
//     speech.voice=voices[voiceselect.value];
//     if (speech.voice==null) {
//         speech.voice=voices[0];
//     }
// })

document.querySelector("button").addEventListener("click", () => {

    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech)
});


// let speech = new SpeechSynthesisUtterance();

// document.querySelector("button").addEventListener("click", () => {
//   speech.text = document.querySelector("textarea").value;

//   // Get available voices
//   const voices = window.speechSynthesis.getVoices();

//   // Find a female voice (replace "en-US" with your desired language code if needed)
//   let femaleVoice;
//   for (const voice of voices) {
//     if (voice.lang.startsWith("Microsoft Jenny Online") && voice.localName.toLowerCase().includes("female")) {
//       femaleVoice = voice;
//       break; // Stop searching after finding a female voice
//     }
//   }

//   // If a female voice is found, use it, otherwise use the default
//   speech.voice = femaleVoice || window.speechSynthesis.getVoices()[0];

//   window.speechSynthesis.speak(speech);
// });

