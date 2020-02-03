
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", true);
xhr.setRequestHeader("x-rapidapi-host", "omgvamp-hearthstone-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "7df4822919mshbffd471d5b9df6fp1a2b0bjsndd91db79cbcd");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
    }
};