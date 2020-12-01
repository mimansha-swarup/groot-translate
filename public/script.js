const input = document.querySelector("#inputField");
const button = document.querySelector("#translate");
const output = document.querySelector("#outputField");

var serverURL = "https://api.funtranslations.com/translate/groot.json"

function finalURL(streng) {
    return serverURL + "?" + "text=" + streng;

}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function showTranslated() {
    var inptText = input.value



    fetch(finalURL(inptText))
        .then(response => response.json())
        .then(json => {
            console.log(json)
            output.innerText = json.contents.translated;
        })
        .catch(errorHandler)

}

button.addEventListener('click', showTranslated)