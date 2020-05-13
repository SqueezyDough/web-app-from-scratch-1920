<!-- Add a link to your live demo in Github Pages 🌐-->
# Hearthstone Evergreen

## Description
Hearthstone Evergreen is a single page web app using client-side routing to create a overview/details interface. The app makes use of a community created Hearthstone API. This web app shows all cards that are in the s-called evergreen set. This set will always be playable in the Standard game mode while other (newer) card sets rotate out after 1 or 2 years. The user can click on any card to see the card details.

------

### Overview page
![4bdb4462b93a7ba6e2e93f2a9b4d8dce](https://user-images.githubusercontent.com/33430653/81810304-ffb99300-9522-11ea-8ca5-ec7f5dda5960.png)

------

### Card details
![ec8099f9e612d3f6861fb6a3fc629ba0](https://user-images.githubusercontent.com/33430653/81810338-106a0900-9523-11ea-85f2-dac4a11e5562.png)

------

### Error page
When the user enters an ID that does not exist the website shows an error page
![60d4dd47e4560e61f48efdc7f0face04](https://user-images.githubusercontent.com/33430653/81810398-2aa3e700-9523-11ea-878c-d108b8340eb3.png)

------

### Loader
When the user visits the site for the first time all cards are fetched from the API and stored in the LocalStorage.
![abebd0d684c50869620b672594b38e4a](https://user-images.githubusercontent.com/33430653/81810500-5626d180-9523-11ea-8444-d4e25ed6cff4.png)

------

## Feautures
- Loading data using the Hearthstone API
- Show a loading indicator while loading
- View all cards from the Evergreen set, sorted by class and mana cost
- View card details
- Internal navigation to go to a class quickly

### Features I would implement if I've had more time
* Filters
* Sorting
* Searching

------

## API
I've used the unofficial [Hearthstone API](https://rapidapi.com/omgvamp/api/hearthstone) from [RapdAPI](https://rapidapi.com/)



------

## Install
Clone repository
```
git clone: https://github.com/SqueezyDough/web-app-from-scratch-1920.git
```
Open index.html

## License
SqueezyDough @ [MIT](https://opensource.org/licenses/MIT)
