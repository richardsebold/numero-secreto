const elementoChute = document.getElementById("chute");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();

recognition.lang = "pt-BR";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(event) {
    const chute = event.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiValorValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `;
}

recognition.addEventListener("end", () => {
    if (tentativas > 0) {
        recognition.start();
    }
});
    

