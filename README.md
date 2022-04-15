# M.I.A.G.E

Vue project for Master degree about Cocktails

* Martini
* Izarra
* Amaretto
* Gin
* Eau de vie

## Checklist

[x] Une API REST (REST-like mais la seule [bonne API gratuite de cocktail](https://www.thecocktaildb.com/))

[x] Projet VueJS qui se lance sans soucis d'installation

[x] Un menu et au moins 4 pages

[x] Une application responsive et sur desktop, tablette, paysage et portrait

[x] L’application doit utiliser au moins deux plugins Capacitor (LocalNotifications & Motion)

LocalNotification plugin is used to send notifications to the user when a cocktail is added or removed from the favourites cocktails' list. A notification is also scheduled at 4:30 pm every day to notify the user that it's aperitif time.

Motion plugin is used to add a cocktail to the list of favourites. To do so you need to go on a cocktail detail page and shake you phone. For now it only works on the first cocktail detail page opened in use. To be able to add another cocktail to the list by shaking you phone, you need to close the application, reopen it and click on a new cocktail to shake.

Group of 3 composed of Elyne Merlaud, Samuel Rigaud and Lucas Douillard

## Project setup
```
npm install
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Compiles and run on Android device
```
npm install --save @capacitor/motion
npm i @capacitor/android
npm run build
npx cap sync
npx cap open
```
the project will be launched on Android studio
Wait until the build is done
Start the project on your Android device by clicking on the green arrow
