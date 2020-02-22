
import * as templateEngine from "./templateEngine.js";

fetchData();

function fetchData() {
    const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards';

    fetch(url, {
        headers: {
            'x-rapidapi-host' : 'omgvamp-hearthstone-v1.p.rapidapi.com',
            'x-rapidapi-key' : '7df4822919mshbffd471d5b9df6fp1a2b0bjsndd91db79cbcd'
        }
    }).then( res => { if (res.ok) { return res.json() }
    }).then(data => {
        console.log(data);

        const explorerContainer = document.getElementById('explorer');

        data.Classic.forEach(card => {
            if (card.img) {
                const cardImage = document.createElement('img');
                cardImage.setAttribute('src', card.img);
                explorerContainer.appendChild(cardImage);
            }
        });

        //const explorerContainer = document.getElementById('explorer')
        //const renderHTML = templateEngine.renderView(explorerHTML, data);
    });
}
