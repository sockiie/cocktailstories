# cocktail-stories-element-plus

## Project setup

```
npm install
```

### Run FAKE Rest API with -- id idDrink

```
npm run id
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Groupmember

```
Lisa Marie Hirschberger
31878

Alpay Malkoc
31865
```

## App-URL

```
https://cocktailstories.netlify.app/

```

## Foreign Code

```
Fake Rest API
https://github.com/typicode/json-server

Die async Methoden (fetchDrink,fetchDrinks,deleteDrink,addDrink) um in die db.json daten abzuspeichern haben wir in diesem Video erlernt und auf unsere App angeglichen.
vue.config.js ist aus dem Video entnommen.
https://www.youtube.com/watch?v=qZXt1Aom3Cs&t=4915s


```

## Code-Architektur

```
Die App besteht auf 3 Views.

Auf der ersten View "Home" werden Informationen zu der Website gegeben.

Die zweite View "Cocktails" greift auf eine Public API (https://www.thecocktaildb.com/api.php) zu und generiert Random Cocktails. Diese Cocktails können durch Favorisieren in die db.json gespeichert werden oder erneut einen random Cocktail anzeigen lassen.
Von der View wird das Objekt "randomcocktails" in die Komponente Drinkdetail gegeben und dort dagestellt.

In der dritten View "Favorites" werden die in der db.json gespeicherten Cocktails dargestellt.
Die Componente "Drink" stellt die Cocktails da, in der Komponente "Drinks" wird die Komponente "Drink" für jeden angelegten Cocktail in der db.json aufgerufen.
Jeder "Drink" kann gelöscht werden oder erneut mit der "DrinkDetails" Komponente geöffnet werden, um mehr Informationen zu erhalten.
"Drinkdetails" ist eine Komponente, damit sie nicht nur in der "Cocktails" View sondern auch bei der Favoritenview verwendet werden kann. Dadurch vermeiden wir Codedoppelung und steigern die Performance.
Durch die Verwendung einer FAKE REST API ist es möglich Cocktails in seiner Favoritenliste persistent abzuspeichern.
```
