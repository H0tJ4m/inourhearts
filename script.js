window.onload = function() {
    var speech = new SpeechSynthesisUtterance();
    speech.text = document.getElementById("loveLetter").innerText;
    speech.lang = 'en-US';
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
};
