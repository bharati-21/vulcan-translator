var userText = document.querySelector('.user-text');
var btnTranslate = document.querySelector('.btn-translate');
var vulcanText = document.querySelector('.vulcan-text');

btnTranslate.addEventListener('click', translateText);

function translateText(e) {
    var text = userText.value;

    fetch(getTranslationURL(text))
    .then(res => res.json())
    .then(json => {
        vulcanText.innerHTML = json.contents.translated;
    })
    .catch(err => console.log("Error occured", err));
}

function getTranslationURL(text) {
    return "https://api.funtranslations.com/translate/vulcan.json" + "?text=" + text;
}