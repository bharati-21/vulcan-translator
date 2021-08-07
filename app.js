var userText = document.querySelector('.user-text');
var btnTranslate = document.querySelector('.btn-translate');
var vulcanText = document.querySelector('.vulcan-text');

btnTranslate.addEventListener('click', translateText);

function translateText(e) {
    e.preventDefault();

    var text = userText.value;

    fetch(getTranslationURL(text))
    .then(res => {
        console.log(res);
        return res.json()
    })
    .then(json => {
        vulcanText.innerText = json.contents.translated;
    })
    .catch(err => {
        console.log("Error occurred:", err)
        alert('Something unexpected happened. Please try after sometime!');
    });
}

function getTranslationURL(text) {
    return "https://api.funtranslations.com/translate/vulcan.json" + "?text=" + text;
}