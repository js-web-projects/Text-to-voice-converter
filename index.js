
const play_btn = document.getElementById("play")
const pause_btn = document.getElementById("pause")
let voices = []
const voices_selector = document.querySelector("select");

function printvoices(){

    voices = window.speechSynthesis.getVoices();
    voices.forEach((voice,index) => {
        voices_selector.options[index] = new Option(voice.name,index)
    });

}

function speak(){
    const text = document.getElementById("text").value;

    if(speechSynthesis.paused){
        speechSynthesis.resume();
        play_btn.style.display = "none"
        pause_btn.style.display = "block"
        return;
    }

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.voice = voices[voices_selector.value]

    window.speechSynthesis.speak(utterance)
    play_btn.style.display = "none"
    pause_btn.style.display = "block"

    utterance.onend = function(){
        play_btn.style.display = "block";
        pause_btn.style.display = "none";
    }

}

function stop(){
    window.speechSynthesis.pause();
    play_btn.style.display = "block"
    pause_btn.style.display = "none"
}


window.speechSynthesis.onvoiceschanged = printvoices

