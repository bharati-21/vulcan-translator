# VULCAN TRANSLATOR
 A simple, fun translator that converts plain English into the Star Trek's famous Vulcan language.
 
 ### This application translates English to minion lamguage using a translator API.
Live demo of the application: https://bharati-vulcan-translator.netlify.app/
<hr />

## PREREQUISITES
* HTML
* CSS
* JavaScript
  * DOM Manipulation
  * APIs
  * Callbacks
  * Promises
  * Fetch API
  
<hr />

## WORKING
1. User enters the text to be translated in a `<textarea>` field.
2. When user clicks the "Translate" button, the event handler associated with button click is invoked.
3. The event handler then retrieves the text from the `<textarea>`, and creates a `fetch()` request to the URL: ***https://api.funtranslations.com/translate/vulcan.json?text=userText***, where userText is the to be translated.
4. Once the translation is returned as a Response object, it is then converted to an object to retrieve the translation from the key `contents.translated`.
5. The translation is displayed using a readonly `<textarea>`.

<hr />

## URL of the API
https://api.funtranslations.com/translate/vulcan.json?text=userText

<hr />

## My Learnings
- Callbacks
- Promises
- Fetch API requests

<hr />

## Challenges
- Handling errors from the API
