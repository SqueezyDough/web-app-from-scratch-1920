
# Hearthstone Evergreen
In this course I will create client-side a web app using a template engine and a routing micro-library.

### Learning goals
> - You can add structure to your code by applying patterns. You can defend the choice for the chosen patterns
> - You can retrieve data, manipulate it and dynamically convert it to html elements using templating
> - You understand how you can work with an external API using asynchronous code
> - You understand how you can manage state in your application and you inform the user of state where necessary

## Description
Hearthstone Evergreen is a single page web app using client-side routing to create a overview/details interface. The app makes use of a community created Hearthstone API. This web app shows all cards that are in the s-called evergreen set. This set will always be playable in the Standard game mode while other (newer) card sets rotate out after 1 or 2 years. The user can click on any card to see the card details.

------

### Overview page
![4bdb4462b93a7ba6e2e93f2a9b4d8dce](https://user-images.githubusercontent.com/33430653/81810304-ffb99300-9522-11ea-8ca5-ec7f5dda5960.png)

------

### Card details
![ec8099f9e612d3f6861fb6a3fc629ba0](https://user-images.githubusercontent.com/33430653/81810338-106a0900-9523-11ea-85f2-dac4a11e5562.png)

------

<details>
<summary> See states </summary>
  
### Error state
When the user enters an ID that does not exist the website shows an error page
![60d4dd47e4560e61f48efdc7f0face04](https://user-images.githubusercontent.com/33430653/81810398-2aa3e700-9523-11ea-878c-d108b8340eb3.png)

------
  
### Loading state
When the user visits the site for the first time all cards are fetched from the API and stored in the LocalStorage.
![abebd0d684c50869620b672594b38e4a](https://user-images.githubusercontent.com/33430653/81810500-5626d180-9523-11ea-8444-d4e25ed6cff4.png)

</details>

------

## Features
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

## Actor Diagram
![actor-diagram (1)](https://user-images.githubusercontent.com/33430653/81862505-1d5e1b00-956a-11ea-9640-232b0e69a09d.png)

------

## Interaction diagram
![int-diagram (1)](https://user-images.githubusercontent.com/33430653/81862504-1cc58480-956a-11ea-95f9-f075b4465cac.png)

------
## API
I've used the unofficial [Hearthstone API](https://rapidapi.com/omgvamp/api/hearthstone) from [RapdAPI](https://rapidapi.com/). The APi does require an API key. Because I don't use node in this app I haven't tried to hide it from github. Something I normally would have done.

The API gives me lots of data and it does take a few seconds before I have all of it.

<details>
  <summary> See properties </summary>
  

  ### Fetching card sets
  The API gives me a lot of irrelevant card sets. For example, Battlegrounds is a set from a entirely different game mode and I don't even know what Wild event is. For the vergreen set only the Classic and Basic sets are relevant. 
  
  ![b59c54301d9ea4dba513b90d7984861a](https://user-images.githubusercontent.com/33430653/81812384-570d3280-9526-11ea-824f-c323ac42dbef.png)

  ------
  
  ### Cleaning the data
  Within a card set, the data is also very dirty. It includes non-collectable objects. In hearthstone every object is a card. but in-game there are bif differences. For example a hero is also a card, even though in-game its just a playable hero skin. There are more assets in this API that is not a card but something else. I had to do a lot of data cleaning to just get the collectable cards. An example of an ectual real card can be found below.

  ![c889f8c60248ae98269fc28590885011 (1)](https://user-images.githubusercontent.com/33430653/81812389-583e5f80-9526-11ea-80bb-347aa581d5ca.png)
  
</details>

------

## Template engine
Usually I use express handlebars when I'm building with SSR. Because this app is stricly client-side it made sense to also use a mutache based template engine. I ended up with a recommendation from Stefan Gerrits which has also used this template engine. Even though they are both based on the same library, it took some time to adjust to the new template engine. because there were some notable differences.

### Looping through data
I had to name the object explicitly to show the class name of Hunter.
```
{{#Set}}
  {{#Hunter}}
     <li><a href="#{{ClassName}}">{{ClassName}}</a></li>
  {{/Hunter}}
  
  ... other classes
{{/Set}}
```

### if / else statements
You can do something else by prefixing a `^` character. In express handlebars you can just type `{{#if}}` `{{else}}`
```
{{#name}}
  <!-- Show the card -->
{{/name}}
{{^name}} 
  <!-- Do something else -->
{{/name}}
```
### Inserting data
With this template engine you'll have to manually select the container in which your content should be inserted. Then, with the `Mustache.to_html()` method, mustache inserts the data requiering a template and the data that is used for the template.
```
const insertContainer = document.querySelector('.collection-overview');
insertContainer.insertAdjacentHTML('beforeend', Mustache.to_html(template, data));
```

## Cleaning data with map, filter, reduce
I've included some functions where I use map, filter and reduce to clean the data

### Map
I often use filter instead of map, because I often want to filter the data instead of manipulating it. I decided to write a map function that doesn't do anmything usefull in the app, but does explain what a map function can do.

This function changes all card names that costs 0 mana to 'useless crap'.
```
// changes the card name to 'useless crap' is a card costs 0
function doSomethingPrettyWithMap(cards) {
    return cards.map(card => {
        if (card.cost === 0) {
            card.name = 'useless crap!';
        }

        return card;
    })
}
```

### Filter
This simple filter function filters out all non-collectible cards.
```
// get all collectable cards
function getCollectables(data) {
    return data.filter(card => card.collectible)
}

```

### Reduce
This function starts with an empty array and puts all class cards in the array from all classes
```
// goes one level deeper than a usual flat()
function getCardsFromCollection(classes) {
    return classes.reduce( (accumulator, currentValue) => {
        const classCards = currentValue[0].Collection
        return accumulator.concat(classCards)
    }, []
    ) 
}
```

------

## Install
Clone repository
```
git clone: https://github.com/SqueezyDough/web-app-from-scratch-1920.git
```
Open index.html

## License
SqueezyDough @ [MIT](https://opensource.org/licenses/MIT)
