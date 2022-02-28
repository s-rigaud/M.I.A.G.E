const CocktailRequestMixin = {
    data() {
        return {
            BASE_URL: "https://www.thecocktaildb.com/api/json/v1/1",
            cards: [],
        }
    },
    methods: {
        // API connection logic
        async retrieveRandomCocktail() {
            let response = await fetch(`${this.BASE_URL}/random.php`);
            if (response.ok) {
                let json = await response.json();
                console.log(json);
                return json.drinks[0];
            } else {
                alert("CocktailAPI Error : HTTP-" + response.status);
            }
        },
        async retrieveSingleCocktail(cocktailId) {
            let response = await fetch(`${this.BASE_URL}/lookup.php?i=${cocktailId}`);
            if (response.ok) {
                let json = await response.json();
                return json.drinks[0];
            } else {
                alert("CocktailAPI Error : HTTP-" + response.status);
            }
        },
        async retrieveCocktailsStartingWith(letter) {
            console.log(letter)
            let response = await fetch(`${this.BASE_URL}/search.php?f=${letter}`);
            if (response.ok) {
                let json = await response.json();
                console.log(`Retrieve cocktail starting with ${letter} from API`, json.drinks);
                if (json.drinks == null) return []
                return json.drinks;
            } else {
                alert("CocktailAPI Error : HTTP-" + response.status);
            }
        },
        parseCocktailFromAPI(cocktailObject) {
            let ingredients = [];
            for (let i = 1; i < 10; i++) {
                if (
                    cocktailObject["strIngredient" + i] != null &&
                    cocktailObject["strIngredient" + i] != ""
                ) {
                    ingredients.push({
                        name: cocktailObject["strIngredient" + i],
                        quantity: cocktailObject["strMeasure" + i],
                    });
                } else {
                    break;
                }
            }
            return {
                id: cocktailObject.idDrink,
                name: cocktailObject.strDrink,
                ingredients: ingredients,
                image: cocktailObject.strDrinkThumb,
            };
        },
    }
}
export default CocktailRequestMixin