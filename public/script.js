const input = document.querySelector("#inputField");
const button = document.querySelector("#translate");
const output = document.querySelector("#outputField");

var serverURL = "https://api.funtranslations.com/translate/groot.json"

const finalURL = streng => serverURL + "?" + "text=" + streng;



const errorHandler = error => {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


const showTranslated = () => {
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