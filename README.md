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

[x] Une application esponsive et sur desktop, tablette, paysage et portrait

[x] L’application doit utiliser au moins deux plugins Capacitor (LocalNotifications & Motion)

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
Start the project on your Android device by click on the green arrow
