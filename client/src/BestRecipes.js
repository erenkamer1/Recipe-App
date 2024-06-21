import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { URL, APP_ID, APP_KEY } from './config';
import { Navigate, useNavigate } from "react-router-dom";

function BestRecipes () { 
    const [recipes , setRecipes] = useState([])
    const [query, setQuery] = useState("") // default search
    const [userInputSearch, setUserInputSearch] = useState("")
    const [categoryTitle, setCategoryTitle] = useState("")
   const navigate = useNavigate()

    

const molePoblano = [
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1c68db894c1c453f83c7a8ca7c42746f",
            "label": "Mole Poblano Recipe",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/1bb/1bbe594398b5d328219f802a8c638558.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQC0sxUPoDJAVru7XP1eNcoFYFFWtt0Fzp5KOLAk%2FrUd%2BwIhAKyt939Gvf2lJsuC9%2F%2FwrduJWgSIW6szajVs60WtFsjwKrkFCEYQABoMMTg3MDE3MTUwOTg2Igz02udOHtPMWneWJA0qlgWwIyqzhGl7PKXcBkGWqObTG0aXDaKYVv7MIGzrJyku5j56YWA%2BUvJkWNVdKtZFFxVQZxxImpdRLMPU4EeoaHI%2F2E%2BhlKhKx%2FV3WoJGvE0jBx%2BiHFH9XmDMX5lkA2f3aoSfNh65oVYSLZTnLmdtkR71Rs4lozoK1q%2Bf3PmQqV4nH68M1kPnn%2FNqaN8M4sZTwDw43CWIug7EDx1%2BXkn6nmRrNehYmDbwNAD8126HW8q1v%2Fpk2q2twGCDGLlRp%2B9SDULAGE22936X2m51P2eVMWOeWEKcyD2Ma6DCn1k4YLQxm4%2BVW%2BV3o%2F69CkAUUTzYsqkUFO%2BFU6LWzumUg1cuTO0h56FVzzlQTX8i6XdRe%2BhGuL1LsUy1FsJia7F5WOX2AaSs1sMP6amsnso4EmPWIaSS6wRWMjik6q0cjssOL6ud%2FBJ%2BJTWb1je5JP8t9BcUt8c3XE9%2FMGVPwa687x7qVWYNFKeyFZW83SqP2UDMtq31a0DFVMQF9W2Ew0VQ4PZK2G92aeNt5C4ryZKXkZKAkTiiC5tEiyxHg5KFAsQgg1S6JtpiHjkrnNCppGNgojGAyprKYgzSP4pslGmE8I3uF6nM0EyqDC41zrPZDHa8zSA%2FTy9HSStcq7PDtkPU%2FJbTwaWuCB6NZ0T2FmDDxZ6si8tnC8J1p0HAzWHa0Vdrzf099kOfXW5rWCoO8VndZhJL7TKISm%2BHro%2BB8frZMz15UVyHFTWZ960xxbDZnIyY5k5wCiMQyLhXj0bVw5jaIFc9R8dLAj1FRLj4wDnTTC1Yee4GsMpm9B7iB7orZc1Mz%2Bb7ZTrzKGsQs5eiGmQoGOwK4nrN6Ln3O8KTw%2FBW2P8iid7IozNy71fNqowspqG7grb9lATVlpfVhjCNz9CzBjqwASFWHiY8Rg131eIJzIFbw75%2FBHr8ipkGqR%2FHCXU16blsF1edTj37aRIlSru3d6PXSl3MaoSGgdp6aPJq6ve6d%2Bw55Bp3fvy5UOLzqKkRNxzyBrAspIAkF5IEXQjEAsNgc2z8mhoZDBT2S20MwYP3bU5rHDSAhbhLsy%2FsI%2FnHTin4%2FJf3DUztR4h6nBXduoxWMEElHsoxLMoEK5zIFTWLVuH7i1%2B9cCbFYP28zXQatx0s&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240620T142053Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKS5Z3CBH%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fc2f14b82c7726d33f2d6411b23eb8f6623aae80a955b2411372f012352472ed",
            "source": "Serious Eats",
            "url": "https://www.seriouseats.com/mole-poblano-recipe-how-to-make-mole",
            "shareAs": "http://www.edamam.com/recipe/mole-poblano-recipe-1c68db894c1c453f83c7a8ca7c42746f/mole+poblano",
            "yield": 34,
            "dietLabels": [],
            "healthLabels": [
                "Dairy-Free",
                "Egg-Free",
                "Soy-Free",
                "Fish-Free",
                "Shellfish-Free",
                "Pork-Free",
                "Red-Meat-Free",
                "Crustacean-Free",
                "Celery-Free",
                "Mustard-Free",
                "Lupine-Free",
                "Mollusk-Free",
                "Alcohol-Free",
                "Kosher"
            ],
            "cautions": [
                "Eggs",
                "Milk",
                "Sulfites"
            ],
            "ingredientLines": [
                "12 dried ancho chiles",
                "12 dried guajillo chiles",
                "6 dried pasilla chiles",
                "4 tablespoons sesame seeds",
                "1 teaspoon aniseed",
                "1 teaspoon black peppercorns",
                "1/2 teaspoon whole cloves",
                "1 teaspoon dried thyme",
                "1/2 teaspoon dried marjoram",
                "3 dried bay leaves, crumbled",
                "1 (1 1/2-inch) stick cinnamon, broken into pieces",
                "2 cups canola oil",
                "7 1/4 cups chicken stock",
                "1/2 cup skin-on almonds",
                "1/2 cup raw shelled peanuts",
                "1/3 cup hulled pumpkin seeds (pepitas)",
                "1/3 cup raisins",
                "2 slices white bread",
                "2 stale corn tortillas",
                "1 medium onion, thinly sliced (about 1 cup)",
                "10 medium cloves garlic, minced (about 10 teaspoons)",
                "2 large tomatillos, husked, rinsed, and quartered",
                "1 large tomato, quartered",
                "1 cup ﬁnely chopped Mexican chocolate",
                "4 tablespoons sugar, plus more to taste",
                "Kosher salt, to taste"
            ],
            "ingredients": [
                {
                    "text": "12 dried ancho chiles",
                    "quantity": 12,
                    "measure": "<unit>",
                    "food": "dried ancho chiles",
                    "weight": 204,
                    "foodCategory": "vegetables",
                    "foodId": "food_aaqhgitaxxj5h7ao772iva3ow8al",
                    "image": "https://www.edamam.com/food-img/dd5/dd576b8674d9fecf0fd5ebc19130797e.jpg"
                },
                {
                    "text": "12 dried guajillo chiles",
                    "quantity": 12,
                    "measure": "<unit>",
                    "food": "dried guajillo chiles",
                    "weight": 6,
                    "foodCategory": "vegetables",
                    "foodId": "food_blhbqv7bbrfga8aw67rq2b0df6x5",
                    "image": "https://www.edamam.com/food-img/6cb/6cb8e4510251a322178f6e191b3a7b1b.jpeg"
                },
                {
                    "text": "6 dried pasilla chiles",
                    "quantity": 6,
                    "measure": "chile",
                    "food": "pasilla",
                    "weight": 42,
                    "foodCategory": "vegetables",
                    "foodId": "food_am1o3rmaeakddybezx8vha42lyhx",
                    "image": "https://www.edamam.com/food-img/60a/60a89f234ab61aaefa029fc7f6924ff7.jpg"
                },
                {
                    "text": "4 tablespoons sesame seeds",
                    "quantity": 4,
                    "measure": "tablespoon",
                    "food": "sesame seeds",
                    "weight": 36,
                    "foodCategory": "plant-based protein",
                    "foodId": "food_bvxfnx8bwz2q3abs04kd6bbuf9w8",
                    "image": "https://www.edamam.com/food-img/291/291b355a7a0948716243164427697279.jpg"
                },
                {
                    "text": "1 teaspoon aniseed",
                    "quantity": 1,
                    "measure": "teaspoon",
                    "food": "aniseed",
                    "weight": 2.1,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_beyvheuancih87bwyqk6yb4av11q",
                    "image": "https://www.edamam.com/food-img/bea/bea10bb0afae1e498edadf0aa1be805e.jpg"
                },
                {
                    "text": "1 teaspoon black peppercorns",
                    "quantity": 1,
                    "measure": "teaspoon",
                    "food": "black peppercorns",
                    "weight": 2.9,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                    "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                },
                {
                    "text": "1/2 teaspoon whole cloves",
                    "quantity": 0.5,
                    "measure": "teaspoon",
                    "food": "cloves",
                    "weight": 1.05,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_abb00nxbw761ggavcuto7b3mw1s0",
                    "image": "https://www.edamam.com/food-img/8bc/8bc63f9742815a245d37e5f346674ca4.jpg"
                },
                {
                    "text": "1 teaspoon dried thyme",
                    "quantity": 1,
                    "measure": "teaspoon",
                    "food": "dried thyme",
                    "weight": 1,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
                    "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
                },
                {
                    "text": "1/2 teaspoon dried marjoram",
                    "quantity": 0.5,
                    "measure": "teaspoon",
                    "food": "dried marjoram",
                    "weight": 0.3,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_bqc1f9kb84j9zcboenn1wb0c6t1a",
                    "image": "https://www.edamam.com/food-img/47f/47f75ecad128851ba407efd51c73eb47.jpg"
                },
                {
                    "text": "3 dried bay leaves, crumbled",
                    "quantity": 3,
                    "measure": "<unit>",
                    "food": "bay leaves",
                    "weight": 1.7999999999999998,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_asx39x4ayja4jab6ivj6zayvkblo",
                    "image": "https://www.edamam.com/food-img/0f9/0f9f5f95df173e9ffaaff2977bef88f3.jpg"
                },
                {
                    "text": "1 (1 1/2-inch) stick cinnamon, broken into pieces",
                    "quantity": 1,
                    "measure": "stick",
                    "food": "cinnamon",
                    "weight": 2.6,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                    "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
                },
                {
                    "text": "2 cups canola oil",
                    "quantity": 2,
                    "measure": "cup",
                    "food": "canola oil",
                    "weight": 436,
                    "foodCategory": "Oils",
                    "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
                    "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
                },
                {
                    "text": "7 1/4 cups chicken stock",
                    "quantity": 7.25,
                    "measure": "cup",
                    "food": "chicken stock",
                    "weight": 1740,
                    "foodCategory": "canned soup",
                    "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
                    "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
                },
                {
                    "text": "1/2 cup skin-on almonds",
                    "quantity": 0.5,
                    "measure": "cup",
                    "food": "almonds",
                    "weight": 71.5,
                    "foodCategory": "plant-based protein",
                    "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                    "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                },
                {
                    "text": "1/2 cup raw shelled peanuts",
                    "quantity": 0.5,
                    "measure": "cup",
                    "food": "peanuts",
                    "weight": 73,
                    "foodCategory": "plant-based protein",
                    "foodId": "food_aft8y4gab0fvs5bcgjac6boztho3",
                    "image": "https://www.edamam.com/food-img/6f4/6f41e31c53bb58cc1b7331d0764963f7.jpg"
                },
                {
                    "text": "1/3 cup hulled pumpkin seeds (pepitas)",
                    "quantity": 0.3333333333333333,
                    "measure": "cup",
                    "food": "hulled pumpkin seeds",
                    "weight": 43,
                    "foodCategory": "plant-based protein",
                    "foodId": "food_b1o86grabpts6ta6igfy4a2b1x22",
                    "image": "https://www.edamam.com/food-img/fbd/fbd8c30b003fa93777ffaa2bcdd58db0.jpg"
                },
                {
                    "text": "1/3 cup raisins",
                    "quantity": 0.3333333333333333,
                    "measure": "cup",
                    "food": "raisins",
                    "weight": 48.33333333333333,
                    "foodCategory": "fruit",
                    "foodId": "food_a3qcdxyb09op1hbwstv5cbmoqc3d",
                    "image": "https://www.edamam.com/food-img/159/159e247350db62e1f87b0636a53687f5.jpg"
                },
                {
                    "text": "2 slices white bread",
                    "quantity": 2,
                    "measure": "slice",
                    "food": "white bread",
                    "weight": 58,
                    "foodCategory": "bread, rolls and tortillas",
                    "foodId": "food_b84uwy0a90fr35b87s94xau97llp",
                    "image": "https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg"
                },
                {
                    "text": "2 stale corn tortillas",
                    "quantity": 2,
                    "measure": "<unit>",
                    "food": "corn tortillas",
                    "weight": 48,
                    "foodCategory": "quick breads and pastries",
                    "foodId": "food_bhw0b95agm97s0abfignnb8fsvb3",
                    "image": "https://www.edamam.com/food-img/b8a/b8ad23dcc06f2324f944e47eb579d644.jpg"
                },
                {
                    "text": "1 medium onion, thinly sliced (about 1 cup)",
                    "quantity": 1,
                    "measure": "cup",
                    "food": "onion",
                    "weight": 160,
                    "foodCategory": "vegetables",
                    "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                    "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                },
                {
                    "text": "10 medium cloves garlic, minced (about 10 teaspoons)",
                    "quantity": 10,
                    "measure": "teaspoon",
                    "food": "garlic",
                    "weight": 28,
                    "foodCategory": "vegetables",
                    "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                    "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                },
                {
                    "text": "2 large tomatillos, husked, rinsed, and quartered",
                    "quantity": 2,
                    "measure": "<unit>",
                    "food": "tomatillos",
                    "weight": 85,
                    "foodCategory": "vegetables",
                    "foodId": "food_b1hu23zbkkdxvxahih2pqax135q7",
                    "image": "https://www.edamam.com/food-img/ef3/ef3a3787e3c6387257de5009bd264e91.jpeg"
                },
                {
                    "text": "1 large tomato, quartered",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "tomato",
                    "weight": 153.75,
                    "foodCategory": "vegetables",
                    "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
                    "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
                },
                {
                    "text": "1 cup ﬁnely chopped Mexican chocolate",
                    "quantity": 1,
                    "measure": "cup",
                    "food": "chocolate",
                    "weight": 173,
                    "foodCategory": "chocolate",
                    "foodId": "food_beu5dozavhrqdpblca414a55qow3",
                    "image": "https://www.edamam.com/food-img/0a1/0a1b6f30cb99e1842cac6167f6f424d7.jpg"
                },
                {
                    "text": "4 tablespoons sugar, plus more to taste",
                    "quantity": 4,
                    "measure": "tablespoon",
                    "food": "sugar",
                    "weight": 49.9999999991548,
                    "foodCategory": "sugars",
                    "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                    "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                },
                {
                    "text": "Kosher salt, to taste",
                    "quantity": 0,
                    "measure": null,
                    "food": "Kosher salt",
                    "weight": 20.80399999999493,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                }
            ],
            "calories": 8111.798666663397,
            "totalWeight": 3480.403579861693,
            "totalTime": 420,
            "cuisineType": [
                "mexican"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "main course"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 8111.798666663397,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 649.4669133333334,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 84.80810133333334,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 1.7827353333333336,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 359.71943450000003,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 176.7632441666667,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 521.5119583324882,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 414.53630833248826,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 106.97564999999997,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 230.56704833248983,
                    "unit": "g"
                },
                "SUGAR.added": {
                    "label": "Sugars, added",
                    "quantity": 144.1849999991565,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 151.758605,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 52.2,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 8063.214319998034,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 1254.7545258336675,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 1404.9497024652921,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 11534.906119722322,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 59.833683480212635,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 22.349795246529123,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 3052.7116666666675,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 3009.568999999999,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 66.61051666666665,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 2.7322578333333327,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 9.132581166666503,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 67.44399833333333,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 11.881527499999997,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 718.6026666666667,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 698.8826666666666,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 11.6,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 0,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 0,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 104.64251000000003,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 385.9961166666667,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 2089.0578221597243,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 405.5899333331698,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 999.1798666666668,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 424.0405066666667,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 173.83731944416274,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 427.9025999999999,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 303.51721,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 17.4,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 335.9672633332514,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 125.47545258336675,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 334.51183392030765,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 245.42353446217706,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 332.40935266784794,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 203.1799567866284,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 436.1016666666668,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 334.39655555555544,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 74.01168518518517,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 227.68815277777773,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 702.506243589731,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 421.5249895833333,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 913.9636538461536,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 179.65066666666667,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 0,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 0,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 697.6167333333336,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 321.6634305555556,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 649.4669133333334,
                    "hasRDI": true,
                    "daily": 999.1798666666668,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 84.80810133333334,
                            "hasRDI": true,
                            "daily": 424.0405066666667,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 1.7827353333333336,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 359.71943450000003,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 176.7632441666667,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Carbs",
                    "tag": "CHOCDF",
                    "schemaOrgTag": "carbohydrateContent",
                    "total": 521.5119583324882,
                    "hasRDI": true,
                    "daily": 173.83731944416274,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 414.53630833248826,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 106.97564999999997,
                            "hasRDI": true,
                            "daily": 427.9025999999999,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 230.56704833248983,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 144.1849999991565,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Protein",
                    "tag": "PROCNT",
                    "schemaOrgTag": "proteinContent",
                    "total": 151.758605,
                    "hasRDI": true,
                    "daily": 303.51721,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 52.2,
                    "hasRDI": true,
                    "daily": 17.4,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 8063.214319998034,
                    "hasRDI": true,
                    "daily": 335.9672633332514,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 1254.7545258336675,
                    "hasRDI": true,
                    "daily": 125.47545258336675,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 1404.9497024652921,
                    "hasRDI": true,
                    "daily": 334.51183392030765,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 11534.906119722322,
                    "hasRDI": true,
                    "daily": 245.42353446217706,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 59.833683480212635,
                    "hasRDI": true,
                    "daily": 332.40935266784794,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 22.349795246529123,
                    "hasRDI": true,
                    "daily": 203.1799567866284,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 3052.7116666666675,
                    "hasRDI": true,
                    "daily": 436.1016666666668,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 3009.568999999999,
                    "hasRDI": true,
                    "daily": 334.39655555555544,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 66.61051666666665,
                    "hasRDI": true,
                    "daily": 74.01168518518517,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 2.7322578333333327,
                    "hasRDI": true,
                    "daily": 227.68815277777773,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 9.132581166666503,
                    "hasRDI": true,
                    "daily": 702.506243589731,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 67.44399833333333,
                    "hasRDI": true,
                    "daily": 421.5249895833333,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 11.881527499999997,
                    "hasRDI": true,
                    "daily": 913.9636538461536,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 718.6026666666667,
                    "hasRDI": true,
                    "daily": 179.65066666666667,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 698.8826666666666,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 11.6,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": true,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": true,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 104.64251000000003,
                    "hasRDI": true,
                    "daily": 697.6167333333336,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 385.9961166666667,
                    "hasRDI": true,
                    "daily": 321.6634305555556,
                    "unit": "µg"
                },
                {
                    "label": "Sugar alcohols",
                    "tag": "Sugar.alcohol",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Water",
                    "tag": "WATER",
                    "schemaOrgTag": null,
                    "total": 2089.0578221597243,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        }
    }
]

const sushi = [
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_735008b211bd5761429bf7b4d402bd2a",
            "label": "Simple sushi",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/4be/4be3bba64872b4748a2979e76debc888.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQC0sxUPoDJAVru7XP1eNcoFYFFWtt0Fzp5KOLAk%2FrUd%2BwIhAKyt939Gvf2lJsuC9%2F%2FwrduJWgSIW6szajVs60WtFsjwKrkFCEYQABoMMTg3MDE3MTUwOTg2Igz02udOHtPMWneWJA0qlgWwIyqzhGl7PKXcBkGWqObTG0aXDaKYVv7MIGzrJyku5j56YWA%2BUvJkWNVdKtZFFxVQZxxImpdRLMPU4EeoaHI%2F2E%2BhlKhKx%2FV3WoJGvE0jBx%2BiHFH9XmDMX5lkA2f3aoSfNh65oVYSLZTnLmdtkR71Rs4lozoK1q%2Bf3PmQqV4nH68M1kPnn%2FNqaN8M4sZTwDw43CWIug7EDx1%2BXkn6nmRrNehYmDbwNAD8126HW8q1v%2Fpk2q2twGCDGLlRp%2B9SDULAGE22936X2m51P2eVMWOeWEKcyD2Ma6DCn1k4YLQxm4%2BVW%2BV3o%2F69CkAUUTzYsqkUFO%2BFU6LWzumUg1cuTO0h56FVzzlQTX8i6XdRe%2BhGuL1LsUy1FsJia7F5WOX2AaSs1sMP6amsnso4EmPWIaSS6wRWMjik6q0cjssOL6ud%2FBJ%2BJTWb1je5JP8t9BcUt8c3XE9%2FMGVPwa687x7qVWYNFKeyFZW83SqP2UDMtq31a0DFVMQF9W2Ew0VQ4PZK2G92aeNt5C4ryZKXkZKAkTiiC5tEiyxHg5KFAsQgg1S6JtpiHjkrnNCppGNgojGAyprKYgzSP4pslGmE8I3uF6nM0EyqDC41zrPZDHa8zSA%2FTy9HSStcq7PDtkPU%2FJbTwaWuCB6NZ0T2FmDDxZ6si8tnC8J1p0HAzWHa0Vdrzf099kOfXW5rWCoO8VndZhJL7TKISm%2BHro%2BB8frZMz15UVyHFTWZ960xxbDZnIyY5k5wCiMQyLhXj0bVw5jaIFc9R8dLAj1FRLj4wDnTTC1Yee4GsMpm9B7iB7orZc1Mz%2Bb7ZTrzKGsQs5eiGmQoGOwK4nrN6Ln3O8KTw%2FBW2P8iid7IozNy71fNqowspqG7grb9lATVlpfVhjCNz9CzBjqwASFWHiY8Rg131eIJzIFbw75%2FBHr8ipkGqR%2FHCXU16blsF1edTj37aRIlSru3d6PXSl3MaoSGgdp6aPJq6ve6d%2Bw55Bp3fvy5UOLzqKkRNxzyBrAspIAkF5IEXQjEAsNgc2z8mhoZDBT2S20MwYP3bU5rHDSAhbhLsy%2FsI%2FnHTin4%2FJf3DUztR4h6nBXduoxWMEElHsoxLMoEK5zIFTWLVuH7i1%2B9cCbFYP28zXQatx0s&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240620T142333Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKS5Z3CBH%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=67ab8c434ed59563d9aed2007c05dd330080f13243d27f50ab8b1d24e6271407",
            "source": "BBC Good Food",
            "url": "https://www.bbcgoodfood.com/recipes/simple-sushi",
            "shareAs": "http://www.edamam.com/recipe/simple-sushi-735008b211bd5761429bf7b4d402bd2a/sushi",
            "yield": 6,
            "dietLabels": [
                "Low-Fat",
                "Low-Sodium"
            ],
            "healthLabels": [
                "Low Potassium",
                "Kidney-Friendly",
                "Vegan",
                "Vegetarian",
                "Pescatarian",
                "Dairy-Free",
                "Gluten-Free",
                "Wheat-Free",
                "Egg-Free",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Soy-Free",
                "Fish-Free",
                "Shellfish-Free",
                "Pork-Free",
                "Red-Meat-Free",
                "Crustacean-Free",
                "Celery-Free",
                "Mustard-Free",
                "Sesame-Free",
                "Lupine-Free",
                "Mollusk-Free",
                "Alcohol-Free",
                "No oil added",
                "FODMAP-Free",
                "Kosher"
            ],
            "cautions": [],
            "ingredientLines": [
                "300g sushi rice",
                "100ml rice wine vinegar",
                "2 tbsp golden caster sugar"
            ],
            "ingredients": [
                {
                    "text": "300g sushi rice",
                    "quantity": 300,
                    "measure": "gram",
                    "food": "rice",
                    "weight": 300,
                    "foodCategory": "grains",
                    "foodId": "food_bpumdjzb5rtqaeabb0kbgbcgr4t9",
                    "image": "https://www.edamam.com/food-img/0fc/0fc9fa8a3e0276198d75b2e259068f8a.jpg"
                },
                {
                    "text": "100ml rice wine vinegar",
                    "quantity": 100,
                    "measure": "milliliter",
                    "food": "rice wine vinegar",
                    "weight": 100.59671753798291,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_axlcd4tack2d20bveizm4ayu0h2w",
                    "image": "https://www.edamam.com/food-img/5f6/5f69b84c399d778c4728e9ab4f8065a2.jpg"
                },
                {
                    "text": "2 tbsp golden caster sugar",
                    "quantity": 2,
                    "measure": "tablespoon",
                    "food": "caster sugar",
                    "weight": 23.9999999995942,
                    "foodCategory": "sugars",
                    "foodId": "food_b83hz1dbrydiwzag8btahb15lu4l",
                    "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                }
            ],
            "calories": 1190.9874091552665,
            "totalWeight": 424.5967175375771,
            "totalTime": 15,
            "cuisineType": [
                "japanese"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "main course"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 1190.9874091552665,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 1.7399999999999998,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 0.474,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 0,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 0.5429999999999999,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 0.46499999999999997,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 261.9402386866094,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 261.9402386866094,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 23.992238686610204,
                    "unit": "g"
                },
                "SUGAR.added": {
                    "label": "Sugars, added",
                    "quantity": 23.95199999959501,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 19.830000000000002,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 0,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 5.2519343507556,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 33.275803052274924,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 106.00596717537982,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 260.49193435075154,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 2.442179015261192,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 3.4924596717537573,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 328.0238687015193,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 0,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 0.21000000000000002,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 0.14855999999992292,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 4.800000000000001,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 0.43499999999999994,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 27,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 27,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 0,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 0,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 0,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 134.07048822600774,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 59.549370457763324,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 2.6769230769230763,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 2.37,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 87.31341289553647,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 39.660000000000004,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 0,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 0.21883059794815002,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 3.3275803052274924,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 25.239515994138053,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 5.542381581930884,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 13.567661195895512,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 31.74963337957961,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 46.860552671645614,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 0,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 17.500000000000004,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 11.427692307686378,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 30.000000000000004,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 33.46153846153845,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 6.75,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 0,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 0,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 0,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 1.7399999999999998,
                    "hasRDI": true,
                    "daily": 2.6769230769230763,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 0.474,
                            "hasRDI": true,
                            "daily": 2.37,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 0.5429999999999999,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 0.46499999999999997,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Carbs",
                    "tag": "CHOCDF",
                    "schemaOrgTag": "carbohydrateContent",
                    "total": 261.9402386866094,
                    "hasRDI": true,
                    "daily": 87.31341289553647,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 261.9402386866094,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 0,
                            "hasRDI": true,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 23.992238686610204,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 23.95199999959501,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Protein",
                    "tag": "PROCNT",
                    "schemaOrgTag": "proteinContent",
                    "total": 19.830000000000002,
                    "hasRDI": true,
                    "daily": 39.660000000000004,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 0,
                    "hasRDI": true,
                    "daily": 0,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 5.2519343507556,
                    "hasRDI": true,
                    "daily": 0.21883059794815002,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 33.275803052274924,
                    "hasRDI": true,
                    "daily": 3.3275803052274924,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 106.00596717537982,
                    "hasRDI": true,
                    "daily": 25.239515994138053,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 260.49193435075154,
                    "hasRDI": true,
                    "daily": 5.542381581930884,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 2.442179015261192,
                    "hasRDI": true,
                    "daily": 13.567661195895512,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 3.4924596717537573,
                    "hasRDI": true,
                    "daily": 31.74963337957961,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 328.0238687015193,
                    "hasRDI": true,
                    "daily": 46.860552671645614,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": true,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": true,
                    "daily": 0,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 0.21000000000000002,
                    "hasRDI": true,
                    "daily": 17.500000000000004,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 0.14855999999992292,
                    "hasRDI": true,
                    "daily": 11.427692307686378,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 4.800000000000001,
                    "hasRDI": true,
                    "daily": 30.000000000000004,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 0.43499999999999994,
                    "hasRDI": true,
                    "daily": 33.46153846153845,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 27,
                    "hasRDI": true,
                    "daily": 6.75,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 27,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": true,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": true,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": true,
                    "daily": 0,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": true,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Sugar alcohols",
                    "tag": "Sugar.alcohol",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Water",
                    "tag": "WATER",
                    "schemaOrgTag": null,
                    "total": 134.07048822600774,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        }
    }
]

const pekingDuck = [
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7cb1b83d2805486f88bd5b7dc1268091",
            "label": "Peking Duck Stir-Fry",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/5a9/5a98b33bea12472303ecaf11f878d9fd?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAvan4F3ZKVLM3B3NgUqTrMp%2FQaD%2FhuGSWXLRF3xJbBMAiAKSjkRryw2yP8xMQxIPBmVwYCQ21ELI%2FwEs7F2i8NsJSq4BQhHEAAaDDE4NzAxNzE1MDk4NiIMfYu4IlkmZ6F9%2BFP5KpUFYciC14uLz3RwDPWc3qu1kkatBAGRXr%2FFHfnOkRU17pE4NzK9zYxYWnjGdoBiK0JIjIEAWZO%2F3kNpvuRPNQguAABv9F2Nw01%2BpR8BIph7o%2BDh3NhihiTpoj2lYg9vn6EzpZKbzFukfXanEa%2BbSoCNpxRKkQ1JkTpF5575FjeK7ydPlDT0c2Uc884KiyTSTRRhfDAJcfcr45Wxki9fvFmD6iVVJRa8Pda84vT4MqO55%2FAL%2BgePdFqR64NTQupBA1aJBPXWy9O%2BEU84XYN341tzjEXX16UBD9rn%2FQIH7jEiDflKbkkIMaNM6i11m2r6skWzpMfuA19ArA%2BZZJOE5C2jLiYpc5Nqt6rQTYX5eErAbGuTOhJrjLemf6RO0ZHdbqqezsqls4OrtIqvcjNC%2F5OEXTR6ufr3NE1ZaeUNAYnUqLBqQ3TnCkbOfjmBWDCkUxS7TSqGCEqV6fGERzLHQ72gBQ7npS4p4%2FjTcRhJh9ENueTwxZzjA6SPriZhNPd7mjHWMK5jOQEioC3Nk8YRt2r3pFCgZZxdVIiHD9Xm%2Ffq3T8%2FOfj8na2jXmzZvWSz2nBeQXyL6W20fGu1d1TXsRmVthRd5yknlQ7s4SyXebGX1mOB3I3hMJ93Owi%2BplCve5zhMciYVKtnjXz6po6lfgd6P%2BlVxZeunzT%2Fweo5EKzXpzQH3pUVMbcgEnuQsytrcOiOCIpObIba6QmNTDDPwxToiT78tzaTrQkBD1qOetoro5dTozDnR%2BHZG5LTP0PnTYF0Yiz%2FMSOR9aFXAMa2gB6X24YkYt4DtV790Eh0Wh9lyKXhSFg2D%2FkZGaZ1aeiM7HqMuRWOe2ZSHUz%2F6v3Kl7nEK26NbSvbDjlNSdmRUg6LXl2l3LCPzKjCz3tCzBjqyAc%2B2bqpLpde87K4yU31scdzFsdzgkz9I%2F1Os42cTL8FFNZFbQJkGFazP1JcHNd8oGqab8ADP5HL4C84BTvdK4VHUBabAtymNKPuCc%2F66GOIM4vkg4A%2BSs2vtc4FG1Pex0FAo2JKPJY4PdFlmCeCL5N%2BufrWol6LS9W7d7Aeu2KNgahopY46Mf2ciKjhKSvZZyDzxWVD79ousMZODS04GEWV%2FkyFvSv%2B93b2FMEVpwsjwVDs%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240620T142452Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEG7TDP6T%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cc5a32589d532a61721709caa90a9a25072bfba949eb918760a1ff8a12deadd1",
            "source": "Food & Wine",
            "url": "https://www.foodandwine.com/recipes/peking-duck-stir-fry",
            "shareAs": "http://www.edamam.com/recipe/peking-duck-stir-fry-7cb1b83d2805486f88bd5b7dc1268091/peking+duck",
            "yield": 4,
            "dietLabels": [
                "Low-Carb"
            ],
            "healthLabels": [
                "Dairy-Free",
                "Egg-Free",
                "Tree-Nut-Free",
                "Fish-Free",
                "Shellfish-Free",
                "Pork-Free",
                "Crustacean-Free",
                "Celery-Free",
                "Mustard-Free",
                "Lupine-Free",
                "Mollusk-Free",
                "Kosher"
            ],
            "cautions": [
                "Gluten",
                "Wheat",
                "Sulfites"
            ],
            "ingredientLines": [
                "2 tablespoons soy sauce",
                "1 tablespoon Shaoxing cooking wine or dry sherry",
                "1 tablespoon Asian sesame oil",
                "1 tablespoon cornstarch",
                "Salt",
                "Four skinless, boneless Pekin duck breasts (6 ounces each), cut crosswise into 1/2-inch-thick slices",
                "3 tablespoons vegetable oil",
                "4 large garlic cloves, thinly sliced",
                "1 large shallot, thinly sliced",
                "1 jalapeño, seeded and thinly sliced",
                "1 red chile, seeded and thinly sliced",
                "2 teaspoons sugar",
                "1/2 cup chicken stock or water",
                "1/4 cup salted, roasted peanuts",
                "2 tablespoons chopped cilantro"
            ],
            "ingredients": [
                {
                    "text": "2 tablespoons soy sauce",
                    "quantity": 2,
                    "measure": "tablespoon",
                    "food": "soy sauce",
                    "weight": 32,
                    "foodCategory": "plant-based protein",
                    "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
                    "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
                },
                {
                    "text": "1 tablespoon Shaoxing cooking wine or dry sherry",
                    "quantity": 1,
                    "measure": "tablespoon",
                    "food": "cooking wine",
                    "weight": 14.499999999754849,
                    "foodCategory": "condiments and sauces",
                    "foodId": "food_aq719loafmwh5zbwk47zlaydv3i4",
                    "image": "https://www.edamam.com/food-img/342/342a6f60c0a0114a29035556c7ce9da1.jpg"
                },
                {
                    "text": "1 tablespoon Asian sesame oil",
                    "quantity": 1,
                    "measure": "tablespoon",
                    "food": "sesame oil",
                    "weight": 13.6,
                    "foodCategory": "Oils",
                    "foodId": "food_b2id9opa0l5afvbw2do5xa1fnz4q",
                    "image": "https://www.edamam.com/food-img/b87/b874ddcfb6770adc7a155355a902ffb8.jpg"
                },
                {
                    "text": "1 tablespoon cornstarch",
                    "quantity": 1,
                    "measure": "tablespoon",
                    "food": "cornstarch",
                    "weight": 7.999999999864745,
                    "foodCategory": "grains",
                    "foodId": "food_a6r17hrba37cqeabesko5a2gk233",
                    "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
                },
                {
                    "text": "Salt",
                    "quantity": 0,
                    "measure": null,
                    "food": "Salt",
                    "weight": 6.698331329997514,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                    "text": "Four skinless, boneless Pekin duck breasts (6 ounces each), cut crosswise into 1/2-inch-thick slices",
                    "quantity": 24,
                    "measure": "ounce",
                    "food": "duck breasts",
                    "weight": 680.388555,
                    "foodCategory": "Poultry",
                    "foodId": "food_af1buxjb28zsaeal5gc0ia70r75d",
                    "image": "https://www.edamam.com/food-img/d5e/d5e02c07028f66463b705d87b0e019d3.jpg"
                },
                {
                    "text": "3 tablespoons vegetable oil",
                    "quantity": 3,
                    "measure": "tablespoon",
                    "food": "vegetable oil",
                    "weight": 42,
                    "foodCategory": "Oils",
                    "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                    "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                },
                {
                    "text": "4 large garlic cloves, thinly sliced",
                    "quantity": 4,
                    "measure": "clove",
                    "food": "garlic",
                    "weight": 20,
                    "foodCategory": "vegetables",
                    "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                    "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                },
                {
                    "text": "1 large shallot, thinly sliced",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "shallot",
                    "weight": 80,
                    "foodCategory": "vegetables",
                    "foodId": "food_bu2ver7a5f52dfap8q9f0bn085qb",
                    "image": "https://www.edamam.com/food-img/d23/d23e3be21df05e9e16c05eadb12341e7.jpeg"
                },
                {
                    "text": "1 jalapeño, seeded and thinly sliced",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "jalapeño",
                    "weight": 14,
                    "foodCategory": "vegetables",
                    "foodId": "food_b7txsnbadj6plsbq27zvwah80r6y",
                    "image": "https://www.edamam.com/food-img/0df/0df9aa459870a6d477b0925c1fdb6d4c.jpg"
                },
                {
                    "text": "1 red chile, seeded and thinly sliced",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "red chile",
                    "weight": 45,
                    "foodCategory": "vegetables",
                    "foodId": "food_a6g98mqatzj7vca6ms3bnbzqxf3s",
                    "image": "https://www.edamam.com/food-img/469/469213672957a242638e20c27e3e8acd.jpeg"
                },
                {
                    "text": "2 teaspoons sugar",
                    "quantity": 2,
                    "measure": "teaspoon",
                    "food": "sugar",
                    "weight": 8.4,
                    "foodCategory": "sugars",
                    "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                    "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                },
                {
                    "text": "1/2 cup chicken stock or water",
                    "quantity": 0.5,
                    "measure": "cup",
                    "food": "chicken stock",
                    "weight": 120,
                    "foodCategory": "canned soup",
                    "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
                    "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
                },
                {
                    "text": "1/4 cup salted, roasted peanuts",
                    "quantity": 0.25,
                    "measure": "cup",
                    "food": "peanuts",
                    "weight": 36.5,
                    "foodCategory": "plant-based protein",
                    "foodId": "food_aft8y4gab0fvs5bcgjac6boztho3",
                    "image": "https://www.edamam.com/food-img/6f4/6f41e31c53bb58cc1b7331d0764963f7.jpg"
                },
                {
                    "text": "2 tablespoons chopped cilantro",
                    "quantity": 2,
                    "measure": "tablespoon",
                    "food": "cilantro",
                    "weight": 1.999999999966186,
                    "foodCategory": "vegetables",
                    "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                    "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
                }
            ],
            "calories": 1390.6910782303542,
            "totalWeight": 1117.2694355657015,
            "totalTime": 30,
            "cuisineType": [
                "chinese"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "main course"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 1390.6910782303542,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 91.23951733724974,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 12.28014962003998,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 0.32214,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 49.75245881836989,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 21.22496695425995,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 53.315499999859824,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 45.78199999986199,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 7.5334999999978365,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 21.829949999995907,
                    "unit": "g"
                },
                "SUGAR.added": {
                    "label": "Sugars, added",
                    "quantity": 8.3832,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 92.16974430059771,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 286.50556116900003,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 2596.1392568804367,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 135.6427059268204,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 207.0989691396238,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 2057.8617872408936,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 20.89448977433597,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 5.07550354634567,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 1011.9072646419295,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 95.88557115188607,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 117.65940882139085,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 1.9419248499519772,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 1.4358314410699209,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 20.72929779767938,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 3.3785018641099005,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 233.24745492497655,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 233.24745492497655,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 0,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 2.7923146297200003,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 0,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 13.332549999999156,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 18.15959999989518,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 556.5924556343718,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 69.5345539115177,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 140.36848821115345,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 61.400748100199905,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 17.771833333286608,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 30.133999999991346,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 184.33948860119546,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 95.50185372300001,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 108.17246903668486,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 13.564270592682043,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 49.3092783665771,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 43.78429334555093,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 116.08049874631095,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 46.14094133041519,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 144.5581806631328,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 10.653952350209563,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 130.73267646821208,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 161.82707082933146,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 110.4485723899939,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 129.5581112354961,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 259.8847587776846,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 58.31186373124414,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 116.34644290500002,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 0,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 88.88366666666103,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 15.132999999912649,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 91.23951733724974,
                    "hasRDI": true,
                    "daily": 140.36848821115345,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 12.28014962003998,
                            "hasRDI": true,
                            "daily": 61.400748100199905,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.32214,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 49.75245881836989,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 21.22496695425995,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Carbs",
                    "tag": "CHOCDF",
                    "schemaOrgTag": "carbohydrateContent",
                    "total": 53.315499999859824,
                    "hasRDI": true,
                    "daily": 17.771833333286608,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 45.78199999986199,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 7.5334999999978365,
                            "hasRDI": true,
                            "daily": 30.133999999991346,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 21.829949999995907,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 8.3832,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Protein",
                    "tag": "PROCNT",
                    "schemaOrgTag": "proteinContent",
                    "total": 92.16974430059771,
                    "hasRDI": true,
                    "daily": 184.33948860119546,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 286.50556116900003,
                    "hasRDI": true,
                    "daily": 95.50185372300001,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 2596.1392568804367,
                    "hasRDI": true,
                    "daily": 108.17246903668486,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 135.6427059268204,
                    "hasRDI": true,
                    "daily": 13.564270592682043,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 207.0989691396238,
                    "hasRDI": true,
                    "daily": 49.3092783665771,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 2057.8617872408936,
                    "hasRDI": true,
                    "daily": 43.78429334555093,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 20.89448977433597,
                    "hasRDI": true,
                    "daily": 116.08049874631095,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 5.07550354634567,
                    "hasRDI": true,
                    "daily": 46.14094133041519,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 1011.9072646419295,
                    "hasRDI": true,
                    "daily": 144.5581806631328,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 95.88557115188607,
                    "hasRDI": true,
                    "daily": 10.653952350209563,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 117.65940882139085,
                    "hasRDI": true,
                    "daily": 130.73267646821208,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 1.9419248499519772,
                    "hasRDI": true,
                    "daily": 161.82707082933146,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 1.4358314410699209,
                    "hasRDI": true,
                    "daily": 110.4485723899939,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 20.72929779767938,
                    "hasRDI": true,
                    "daily": 129.5581112354961,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 3.3785018641099005,
                    "hasRDI": true,
                    "daily": 259.8847587776846,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 233.24745492497655,
                    "hasRDI": true,
                    "daily": 58.31186373124414,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 233.24745492497655,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 2.7923146297200003,
                    "hasRDI": true,
                    "daily": 116.34644290500002,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": true,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 13.332549999999156,
                    "hasRDI": true,
                    "daily": 88.88366666666103,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 18.15959999989518,
                    "hasRDI": true,
                    "daily": 15.132999999912649,
                    "unit": "µg"
                },
                {
                    "label": "Sugar alcohols",
                    "tag": "Sugar.alcohol",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Water",
                    "tag": "WATER",
                    "schemaOrgTag": null,
                    "total": 556.5924556343718,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        }
    }
]

const pizza = [
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b2ebad01df2a319d259c2d3f61eb40c5",
            "label": "Margarita Pizza With Fresh Mozzarella & Basil",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d72/d72d1b7dd988e3b340a4b90ed3d56603.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCICtDGMWdZp4YLHss7YrDqToK6%2BUSrRpdsFDKqmdjDlANAiEAqyUheu4P6HLxGin%2BYUf%2Bt1yTCBVONOWQA1XClE6tEpMqwgUIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDCrJLEYZ7FKBjNZArCqWBTVRr5Gd%2BiyLCJqZa7qHgT0kUDqoxj6WwNZNUedOQfxT%2F2Hm5dJHooPTfXCOqQ%2Bn6NuCCDILNBFMZD4AOTjktTXzCJRKhlhD9HKAlia5XAoTiYW2fDyqH%2FThniwQu1EFaTrjPPq8OteC%2BVI5x8F7jIE%2FP47rzStUsc92yIhj95H6gfZipD5rLH0JwsfFPg7b5AL6e4%2F9c3isOH3SfS89iETi1IF0czAa7wfzY0p9faos%2Fl817Deh31j%2FULrWVXPgwHDUwLnj5AZJChuiGueF0iDoQ2XH2pqGzyg9IK4gYGZHyi9UkYA8pGNaq7tK9Vaw7i5HY%2BcxCE9b5%2FYRaN8PJ4miurdoGORSipCPnHER8Knq81xTZFGGdPjT8C1W9IslpXkME9a0BUFTUNNelTWls9gjl8hiCt41LL2t4tUFs65kWiBgqZidzNhhuC%2BVFUd8l1EoI1UTE0Q1EKEZez5d8jXgikyUNmcEQ1S0bkM8nSusKvHHt4NbRuLRCcqbOrw20BpGuCle5FoqzjnmO9hCCwgT%2Fahe31dGBdFicJQ4SqzeU1Itt5TxhdDcw4xoheF2hiiKK%2FW0hKu%2FWGuLEKODz68NeNXx3G82E5Fstwy5Yy91rZu4dLg3tqS46HrWgwjK5IJTlSugB51g98Ju%2FrudejtJawU%2F7QWu%2FHir%2BNdsLWhchvDvUXAkZehUfRRE2HTpoxzAAglHKJPInRuvrZtAtQ%2F1pslGE56CSPg5Pe8%2FfTwK3Wn8VJ%2FmYeZtI5j8vyNrfByVWPAMXdwqMAtAKn0KMkzSWf1cOpWIXAj%2BDSlVHKq3Jbn6qpwoUHiSI3L%2F3f30fx0pXzBmfw1VKniDLguh0zC1rp7VmTKVwQEX3LrpHaC64Y9Z4ZurMOPTq7MGOrEBo7%2BmVfCCnphV3X8Pv%2FYqvnHcBxJm34G%2FLLCKUhK1Uix4YpreMuw9ja8%2F4FbPKyOCJ4zq5kMHiSl08%2BOoqANZuKktEOr3g0DkvcXvEkjZN3GS2YoJMjCwlxVIjRLiLsYl0i6cb7f07nyLBg7tcni6QvobsZFsn7yC80uRZOwWugJsz0D1%2BjrxYJVn%2FQyW0D8hiuv%2FPLvWZbcmAWL50osgmA9TgSgQnAhW%2BOlmbQ6XUXoP&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240613T133058Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJCMDHD5P%2F20240613%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0e5fb27773d1be285378d3b5c3510b58def776ebdf43bdfa2a05d770b40270ca",
            "source": "Big Girls Small Kitchen",
            "url": "http://www.biggirlssmallkitchen.com/2010/06/cooking-for-others-bff-pizza-party.html",
            "shareAs": "http://www.edamam.com/recipe/margarita-pizza-with-fresh-mozzarella-basil-b2ebad01df2a319d259c2d3f61eb40c5/pizza",
            "yield": 10,
            "dietLabels": [],
            "healthLabels": [
                "Sugar-Conscious",
                "Low Potassium",
                "Kidney-Friendly",
                "Vegetarian",
                "Pescatarian",
                "Egg-Free",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Soy-Free",
                "Fish-Free",
                "Shellfish-Free",
                "Pork-Free",
                "Red-Meat-Free",
                "Crustacean-Free",
                "Celery-Free",
                "Mustard-Free",
                "Sesame-Free",
                "Lupine-Free",
                "Mollusk-Free",
                "Alcohol-Free",
                "Sulfite-Free",
                "Kosher"
            ],
            "cautions": [
                "Sulfites",
                "FODMAP"
            ],
            "ingredientLines": [
                "1 ball pizza dough",
                "3/4 – 1 cup pizza sauce",
                "1 lb fresh mozzarella, thinly sliced",
                "10 basil leaves"
            ],
            "ingredients": [
                {
                    "text": "1 ball pizza dough",
                    "quantity": 1,
                    "measure": "ball",
                    "food": "pizza dough",
                    "weight": 228,
                    "foodCategory": "bread, rolls and tortillas",
                    "foodId": "food_bq98fb1beuvdwxax58q1cayt7w6k",
                    "image": "https://www.edamam.com/food-img/19f/19fc0706f04d44f62fc79ab4d7a07d7b.jpg"
                },
                {
                    "text": "3/4 – 1 cup pizza sauce",
                    "quantity": 0.875,
                    "measure": "cup",
                    "food": "pizza sauce",
                    "weight": 220.5,
                    "foodCategory": "canned soup",
                    "foodId": "food_b5h34pna67md3obisw30sbi0r0v0",
                    "image": "https://www.edamam.com/food-img/f12/f12c2824d7e58877b95f2f4049d1dcd9.jpg"
                },
                {
                    "text": "1 lb fresh mozzarella, thinly sliced",
                    "quantity": 1,
                    "measure": "pound",
                    "food": "mozzarella",
                    "weight": 453.59237,
                    "foodCategory": "Cheese",
                    "foodId": "food_am27cpgbcz7639bm3uvx0ai1xhrs",
                    "image": "https://www.edamam.com/food-img/03e/03ec3a4d46bec5634dc8a352804e4e68.jpg"
                },
                {
                    "text": "10 basil leaves",
                    "quantity": 10,
                    "measure": "leaf",
                    "food": "basil",
                    "weight": 5,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
                    "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
                }
            ],
            "calories": 2066.9811863000004,
            "totalWeight": 907.0923700000001,
            "totalTime": 0,
            "cuisineType": [
                "italian"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "main course"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 2066.9811863000004,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 109.03606377000001,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 65.30600943,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 0.03876000000000001,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 31.945963709000004,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 6.694526630500002,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 139.78201688000001,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 130.50401688000002,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 9.278,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 19.043100000000003,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 127.29910614000002,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 358.33797230000005,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 4381.038918200001,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 2657.9614685,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 199.503474,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 1422.7702012,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 12.004806428000002,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 15.637847204000002,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 1935.3669898,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 1266.3508423,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 25.8165,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 1.599242711,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 2.1362114071000002,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 13.9991360648,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 0.7125791769,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 336.11146590000004,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 289.7614659,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 41.040000000000006,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 10.386006036000001,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 1.8143694800000003,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 1.563025503,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 38.02262451,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 508.07468500000016,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 103.34905931500002,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 167.74779041538466,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 326.53004715000003,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 46.59400562666667,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 37.112,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 254.59821228000004,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 119.44599076666668,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 182.54328825833338,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 265.79614685,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 47.50082714285715,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 30.27170640851064,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 66.69336904444445,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 142.16224730909093,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 276.48099854285715,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 140.70564914444446,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 28.685000000000002,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 133.27022591666667,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 164.3239543923077,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 87.494600405,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 54.813782838461535,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 84.02786647500001,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 432.75025150000005,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 12.095796533333335,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 10.42017002,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 31.685520425,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 109.03606377000001,
                    "hasRDI": true,
                    "daily": 167.74779041538466,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 65.30600943,
                            "hasRDI": true,
                            "daily": 326.53004715000003,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.03876000000000001,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 31.945963709000004,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 6.694526630500002,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Carbs",
                    "tag": "CHOCDF",
                    "schemaOrgTag": "carbohydrateContent",
                    "total": 139.78201688000001,
                    "hasRDI": true,
                    "daily": 46.59400562666667,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 130.50401688000002,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 9.278,
                            "hasRDI": true,
                            "daily": 37.112,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 19.043100000000003,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Protein",
                    "tag": "PROCNT",
                    "schemaOrgTag": "proteinContent",
                    "total": 127.29910614000002,
                    "hasRDI": true,
                    "daily": 254.59821228000004,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 358.33797230000005,
                    "hasRDI": true,
                    "daily": 119.44599076666668,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 4381.038918200001,
                    "hasRDI": true,
                    "daily": 182.54328825833338,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 2657.9614685,
                    "hasRDI": true,
                    "daily": 265.79614685,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 199.503474,
                    "hasRDI": true,
                    "daily": 47.50082714285715,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 1422.7702012,
                    "hasRDI": true,
                    "daily": 30.27170640851064,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 12.004806428000002,
                    "hasRDI": true,
                    "daily": 66.69336904444445,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 15.637847204000002,
                    "hasRDI": true,
                    "daily": 142.16224730909093,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 1935.3669898,
                    "hasRDI": true,
                    "daily": 276.48099854285715,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 1266.3508423,
                    "hasRDI": true,
                    "daily": 140.70564914444446,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 25.8165,
                    "hasRDI": true,
                    "daily": 28.685000000000002,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 1.599242711,
                    "hasRDI": true,
                    "daily": 133.27022591666667,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 2.1362114071000002,
                    "hasRDI": true,
                    "daily": 164.3239543923077,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 13.9991360648,
                    "hasRDI": true,
                    "daily": 87.494600405,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 0.7125791769,
                    "hasRDI": true,
                    "daily": 54.813782838461535,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 336.11146590000004,
                    "hasRDI": true,
                    "daily": 84.02786647500001,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 289.7614659,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 41.040000000000006,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 10.386006036000001,
                    "hasRDI": true,
                    "daily": 432.75025150000005,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 1.8143694800000003,
                    "hasRDI": true,
                    "daily": 12.095796533333335,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 1.563025503,
                    "hasRDI": true,
                    "daily": 10.42017002,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 38.02262451,
                    "hasRDI": true,
                    "daily": 31.685520425,
                    "unit": "µg"
                },
                {
                    "label": "Sugar alcohols",
                    "tag": "Sugar.alcohol",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Water",
                    "tag": "WATER",
                    "schemaOrgTag": null,
                    "total": 508.07468500000016,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        }
    }
]

const cheeseburger = [
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_16865eafc463885ce5fc83076e739d83",
            "label": "Classic Cheeseburger",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c92/c92e49b7e6c3b1730eefae7b0a86c9d4?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQC0sxUPoDJAVru7XP1eNcoFYFFWtt0Fzp5KOLAk%2FrUd%2BwIhAKyt939Gvf2lJsuC9%2F%2FwrduJWgSIW6szajVs60WtFsjwKrkFCEYQABoMMTg3MDE3MTUwOTg2Igz02udOHtPMWneWJA0qlgWwIyqzhGl7PKXcBkGWqObTG0aXDaKYVv7MIGzrJyku5j56YWA%2BUvJkWNVdKtZFFxVQZxxImpdRLMPU4EeoaHI%2F2E%2BhlKhKx%2FV3WoJGvE0jBx%2BiHFH9XmDMX5lkA2f3aoSfNh65oVYSLZTnLmdtkR71Rs4lozoK1q%2Bf3PmQqV4nH68M1kPnn%2FNqaN8M4sZTwDw43CWIug7EDx1%2BXkn6nmRrNehYmDbwNAD8126HW8q1v%2Fpk2q2twGCDGLlRp%2B9SDULAGE22936X2m51P2eVMWOeWEKcyD2Ma6DCn1k4YLQxm4%2BVW%2BV3o%2F69CkAUUTzYsqkUFO%2BFU6LWzumUg1cuTO0h56FVzzlQTX8i6XdRe%2BhGuL1LsUy1FsJia7F5WOX2AaSs1sMP6amsnso4EmPWIaSS6wRWMjik6q0cjssOL6ud%2FBJ%2BJTWb1je5JP8t9BcUt8c3XE9%2FMGVPwa687x7qVWYNFKeyFZW83SqP2UDMtq31a0DFVMQF9W2Ew0VQ4PZK2G92aeNt5C4ryZKXkZKAkTiiC5tEiyxHg5KFAsQgg1S6JtpiHjkrnNCppGNgojGAyprKYgzSP4pslGmE8I3uF6nM0EyqDC41zrPZDHa8zSA%2FTy9HSStcq7PDtkPU%2FJbTwaWuCB6NZ0T2FmDDxZ6si8tnC8J1p0HAzWHa0Vdrzf099kOfXW5rWCoO8VndZhJL7TKISm%2BHro%2BB8frZMz15UVyHFTWZ960xxbDZnIyY5k5wCiMQyLhXj0bVw5jaIFc9R8dLAj1FRLj4wDnTTC1Yee4GsMpm9B7iB7orZc1Mz%2Bb7ZTrzKGsQs5eiGmQoGOwK4nrN6Ln3O8KTw%2FBW2P8iid7IozNy71fNqowspqG7grb9lATVlpfVhjCNz9CzBjqwASFWHiY8Rg131eIJzIFbw75%2FBHr8ipkGqR%2FHCXU16blsF1edTj37aRIlSru3d6PXSl3MaoSGgdp6aPJq6ve6d%2Bw55Bp3fvy5UOLzqKkRNxzyBrAspIAkF5IEXQjEAsNgc2z8mhoZDBT2S20MwYP3bU5rHDSAhbhLsy%2FsI%2FnHTin4%2FJf3DUztR4h6nBXduoxWMEElHsoxLMoEK5zIFTWLVuH7i1%2B9cCbFYP28zXQatx0s&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240620T142800Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKS5Z3CBH%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6bbecfd82f2520f22033ba99d0b1d710d65056ae488948fc7ec6b1b4831d2de9",
            "source": "Martha Stewart",
            "url": "https://www.marthastewart.com/409148/classic-cheeseburger",
            "shareAs": "http://www.edamam.com/recipe/classic-cheeseburger-16865eafc463885ce5fc83076e739d83/cheeseburger",
            "yield": 4,
            "dietLabels": [],
            "healthLabels": [
                "Egg-Free",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Soy-Free",
                "Fish-Free",
                "Shellfish-Free",
                "Pork-Free",
                "Crustacean-Free",
                "Celery-Free",
                "Mustard-Free",
                "Sesame-Free",
                "Lupine-Free",
                "Mollusk-Free",
                "Alcohol-Free",
                "Sulfite-Free"
            ],
            "cautions": [
                "Sulfites"
            ],
            "ingredientLines": [
                "2 pounds ground beef, preferably chuck",
                "2 teaspoons salt",
                "1/4 teaspoon freshly ground black pepper",
                "3 ounces cheddar or Monterey Jack cheese, sliced 1/4 inch thick",
                "4 hamburger buns",
                "2 tomatoes (12 ounces), sliced",
                "8 leaves Bibb lettuce (1 small head)",
                "1 small red onion, sliced"
            ],
            "ingredients": [
                {
                    "text": "2 pounds ground beef, preferably chuck",
                    "quantity": 2,
                    "measure": "pound",
                    "food": "chuck",
                    "weight": 907.18474,
                    "foodCategory": "meats",
                    "foodId": "food_bknby1la98smrsbwnthinbam42nj",
                    "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
                },
                {
                    "text": "2 teaspoons salt",
                    "quantity": 2,
                    "measure": "teaspoon",
                    "food": "salt",
                    "weight": 12,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                    "text": "1/4 teaspoon freshly ground black pepper",
                    "quantity": 0.25,
                    "measure": "teaspoon",
                    "food": "black pepper",
                    "weight": 0.575,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                    "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                },
                {
                    "text": "3 ounces cheddar or Monterey Jack cheese, sliced 1/4 inch thick",
                    "quantity": 3,
                    "measure": "ounce",
                    "food": "Jack cheese",
                    "weight": 85.048569375,
                    "foodCategory": "Cheese",
                    "foodId": "food_atp17pta7d5it2a80ct13ard6aj3",
                    "image": "https://www.edamam.com/food-img/590/59062b9f8d57ebc7d831b7b7c231f726.jpg"
                },
                {
                    "text": "4 hamburger buns",
                    "quantity": 4,
                    "measure": "<unit>",
                    "food": "hamburger buns",
                    "weight": 176,
                    "foodCategory": "bread, rolls and tortillas",
                    "foodId": "food_biei7e8ap2juekb162j79bu40fsu",
                    "image": "https://www.edamam.com/food-img/dbe/dbe3d135d1336ed19703d359e33d58dd.jpg"
                },
                {
                    "text": "2 tomatoes (12 ounces), sliced",
                    "quantity": 12,
                    "measure": "ounce",
                    "food": "tomatoes",
                    "weight": 340.1942775,
                    "foodCategory": "vegetables",
                    "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
                    "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
                },
                {
                    "text": "8 leaves Bibb lettuce (1 small head)",
                    "quantity": 1,
                    "measure": "head",
                    "food": "Bibb lettuce",
                    "weight": 122.25,
                    "foodCategory": "vegetables",
                    "foodId": "food_bf5fxtkbc9alwoajuvsi7amonr5w",
                    "image": "https://www.edamam.com/food-img/719/71996625d0cb47e197093ecd52c97dc2.jpg"
                },
                {
                    "text": "1 small red onion, sliced",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "red onion",
                    "weight": 70,
                    "foodCategory": "vegetables",
                    "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                    "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                }
            ],
            "calories": 2088.6708984232505,
            "totalWeight": 1705.9827805998707,
            "totalTime": 0,
            "cuisineType": [
                "american"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "sandwiches"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 2088.6708984232505,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 77.26375109967502,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 35.93869957853201,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 2.3154818500000003,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 31.647664849995248,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 7.127279070477001,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 111.5176641889725,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 101.9545176786725,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 9.5631465103,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 25.5007424902825,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 239.188454111095,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 647.21961294375,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 3956.2288657260747,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 1099.3640194839688,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 311.9284082462487,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 4802.286335175991,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 28.179510244609574,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 53.81630475626737,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 2659.8159640310005,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 570.692365023,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 54.403270575925006,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 1.9112319906405002,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 2.55117306914225,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 54.16030260311726,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 5.76445737702625,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 422.16105356625,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 263.76105356625004,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 93.28,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 21.650996723812504,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 1.4174761562500002,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 4.24100349201,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 174.55655194385,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 1223.004884787325,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 104.43354492116252,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 118.86730938411542,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 179.69349789266005,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 37.1725547296575,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 38.2525860412,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 478.37690822219,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 215.73987098125002,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 164.8428694052531,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 109.93640194839689,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 74.26866863005921,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 102.17630500374449,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 156.5528346922754,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 489.2391341478852,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 379.97370914728583,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 63.410262780333326,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 60.448078417694454,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 159.26933255337502,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 196.24408224171154,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 338.5018912694829,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 443.4197982327885,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 105.54026339156252,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 902.1248634921877,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 9.44984104166667,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 28.273356613399997,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 145.46379328654166,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 77.26375109967502,
                    "hasRDI": true,
                    "daily": 118.86730938411542,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 35.93869957853201,
                            "hasRDI": true,
                            "daily": 179.69349789266005,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 2.3154818500000003,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 31.647664849995248,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 7.127279070477001,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Carbs",
                    "tag": "CHOCDF",
                    "schemaOrgTag": "carbohydrateContent",
                    "total": 111.5176641889725,
                    "hasRDI": true,
                    "daily": 37.1725547296575,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 101.9545176786725,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 9.5631465103,
                            "hasRDI": true,
                            "daily": 38.2525860412,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 25.5007424902825,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Protein",
                    "tag": "PROCNT",
                    "schemaOrgTag": "proteinContent",
                    "total": 239.188454111095,
                    "hasRDI": true,
                    "daily": 478.37690822219,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 647.21961294375,
                    "hasRDI": true,
                    "daily": 215.73987098125002,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 3956.2288657260747,
                    "hasRDI": true,
                    "daily": 164.8428694052531,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 1099.3640194839688,
                    "hasRDI": true,
                    "daily": 109.93640194839689,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 311.9284082462487,
                    "hasRDI": true,
                    "daily": 74.26866863005921,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 4802.286335175991,
                    "hasRDI": true,
                    "daily": 102.17630500374449,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 28.179510244609574,
                    "hasRDI": true,
                    "daily": 156.5528346922754,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 53.81630475626737,
                    "hasRDI": true,
                    "daily": 489.2391341478852,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 2659.8159640310005,
                    "hasRDI": true,
                    "daily": 379.97370914728583,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 570.692365023,
                    "hasRDI": true,
                    "daily": 63.410262780333326,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 54.403270575925006,
                    "hasRDI": true,
                    "daily": 60.448078417694454,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 1.9112319906405002,
                    "hasRDI": true,
                    "daily": 159.26933255337502,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 2.55117306914225,
                    "hasRDI": true,
                    "daily": 196.24408224171154,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 54.16030260311726,
                    "hasRDI": true,
                    "daily": 338.5018912694829,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 5.76445737702625,
                    "hasRDI": true,
                    "daily": 443.4197982327885,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 422.16105356625,
                    "hasRDI": true,
                    "daily": 105.54026339156252,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 263.76105356625004,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 93.28,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 21.650996723812504,
                    "hasRDI": true,
                    "daily": 902.1248634921877,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 1.4174761562500002,
                    "hasRDI": true,
                    "daily": 9.44984104166667,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 4.24100349201,
                    "hasRDI": true,
                    "daily": 28.273356613399997,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 174.55655194385,
                    "hasRDI": true,
                    "daily": 145.46379328654166,
                    "unit": "µg"
                },
                {
                    "label": "Sugar alcohols",
                    "tag": "Sugar.alcohol",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Water",
                    "tag": "WATER",
                    "schemaOrgTag": null,
                    "total": 1223.004884787325,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        }
    }
]

const coqAuVin = [
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_67b39b403bd31122a0afecd081ef6fae",
            "label": "Coq au Vin",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/da4/da4ab45cfe50d430c0e551bc6ab8b302.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAvan4F3ZKVLM3B3NgUqTrMp%2FQaD%2FhuGSWXLRF3xJbBMAiAKSjkRryw2yP8xMQxIPBmVwYCQ21ELI%2FwEs7F2i8NsJSq4BQhHEAAaDDE4NzAxNzE1MDk4NiIMfYu4IlkmZ6F9%2BFP5KpUFYciC14uLz3RwDPWc3qu1kkatBAGRXr%2FFHfnOkRU17pE4NzK9zYxYWnjGdoBiK0JIjIEAWZO%2F3kNpvuRPNQguAABv9F2Nw01%2BpR8BIph7o%2BDh3NhihiTpoj2lYg9vn6EzpZKbzFukfXanEa%2BbSoCNpxRKkQ1JkTpF5575FjeK7ydPlDT0c2Uc884KiyTSTRRhfDAJcfcr45Wxki9fvFmD6iVVJRa8Pda84vT4MqO55%2FAL%2BgePdFqR64NTQupBA1aJBPXWy9O%2BEU84XYN341tzjEXX16UBD9rn%2FQIH7jEiDflKbkkIMaNM6i11m2r6skWzpMfuA19ArA%2BZZJOE5C2jLiYpc5Nqt6rQTYX5eErAbGuTOhJrjLemf6RO0ZHdbqqezsqls4OrtIqvcjNC%2F5OEXTR6ufr3NE1ZaeUNAYnUqLBqQ3TnCkbOfjmBWDCkUxS7TSqGCEqV6fGERzLHQ72gBQ7npS4p4%2FjTcRhJh9ENueTwxZzjA6SPriZhNPd7mjHWMK5jOQEioC3Nk8YRt2r3pFCgZZxdVIiHD9Xm%2Ffq3T8%2FOfj8na2jXmzZvWSz2nBeQXyL6W20fGu1d1TXsRmVthRd5yknlQ7s4SyXebGX1mOB3I3hMJ93Owi%2BplCve5zhMciYVKtnjXz6po6lfgd6P%2BlVxZeunzT%2Fweo5EKzXpzQH3pUVMbcgEnuQsytrcOiOCIpObIba6QmNTDDPwxToiT78tzaTrQkBD1qOetoro5dTozDnR%2BHZG5LTP0PnTYF0Yiz%2FMSOR9aFXAMa2gB6X24YkYt4DtV790Eh0Wh9lyKXhSFg2D%2FkZGaZ1aeiM7HqMuRWOe2ZSHUz%2F6v3Kl7nEK26NbSvbDjlNSdmRUg6LXl2l3LCPzKjCz3tCzBjqyAc%2B2bqpLpde87K4yU31scdzFsdzgkz9I%2F1Os42cTL8FFNZFbQJkGFazP1JcHNd8oGqab8ADP5HL4C84BTvdK4VHUBabAtymNKPuCc%2F66GOIM4vkg4A%2BSs2vtc4FG1Pex0FAo2JKPJY4PdFlmCeCL5N%2BufrWol6LS9W7d7Aeu2KNgahopY46Mf2ciKjhKSvZZyDzxWVD79ousMZODS04GEWV%2FkyFvSv%2B93b2FMEVpwsjwVDs%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240620T142920Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEG7TDP6T%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=41fd43388ffe81ee523ce2da8c55aeb68d9847e8aec715197f46eddafdc4d4fc",
            "source": "Martha Stewart",
            "url": "http://www.marthastewart.com/340341/coq-au-vin",
            "shareAs": "http://www.edamam.com/recipe/coq-au-vin-67b39b403bd31122a0afecd081ef6fae/coq+au+vin",
            "yield": 6,
            "dietLabels": [
                "Low-Carb"
            ],
            "healthLabels": [
                "Dairy-Free",
                "Egg-Free",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Soy-Free",
                "Fish-Free",
                "Shellfish-Free",
                "Crustacean-Free",
                "Mustard-Free",
                "Sesame-Free",
                "Lupine-Free",
                "Mollusk-Free"
            ],
            "cautions": [
                "Sulfites"
            ],
            "ingredientLines": [
                "6 large chicken legs with thighs, separated, skin on and knuckles removed",
                "1 large yellow onion, cut into 1/2-inch dice",
                "1 large carrot, cut into 1/2-inch dice",
                "2 celery stalks, cut into medium dice",
                "1 head garlic, halved horizontally",
                "1 bottle red wine",
                "1 bouquet garni (parsley, thyme, bay leaf, and peppercorns wrapped in a leek and tied)",
                "Coarse salt and freshly ground pepper",
                "1/4 cup olive oil",
                "3 tablespoons tomato paste",
                "3 tablespoons all-purpose flour",
                "3 cups veal stock for coq au vin",
                "1 pint pearl onions, peeled",
                "1/2 pound smoked slab bacon, diced",
                "1 pound small white mushrooms",
                "3 tablespoons chopped fresh flat-leaf parsley"
            ],
            "ingredients": [
                {
                    "text": "6 large chicken legs with thighs, separated, skin on and knuckles removed",
                    "quantity": 6,
                    "measure": "<unit>",
                    "food": "chicken legs",
                    "weight": 2580,
                    "foodCategory": "Poultry",
                    "foodId": "food_ane1uw5amh8okda3qqu88bow58ul",
                    "image": "https://www.edamam.com/food-img/f53/f53de7dd1054370cdfd98e18ccf77dbe.jpg"
                },
                {
                    "text": "1 large yellow onion, cut into 1/2-inch dice",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "yellow onion",
                    "weight": 150,
                    "foodCategory": "vegetables",
                    "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                    "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                },
                {
                    "text": "1 large carrot, cut into 1/2-inch dice",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "carrot",
                    "weight": 72,
                    "foodCategory": "vegetables",
                    "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
                    "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
                },
                {
                    "text": "2 celery stalks, cut into medium dice",
                    "quantity": 2,
                    "measure": "stalk",
                    "food": "celery",
                    "weight": 80,
                    "foodCategory": "vegetables",
                    "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
                    "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
                },
                {
                    "text": "1 head garlic, halved horizontally",
                    "quantity": 1,
                    "measure": "head",
                    "food": "garlic",
                    "weight": 50,
                    "foodCategory": "vegetables",
                    "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                    "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                },
                {
                    "text": "1 bottle red wine",
                    "quantity": 1,
                    "measure": "bottle",
                    "food": "red wine",
                    "weight": 745.599200575638,
                    "foodCategory": "wines",
                    "foodId": "food_b5q0xv2ba8la5hbzdfzdgaca3fwu",
                    "image": "https://www.edamam.com/food-img/82b/82b8d0db2d5c38fc7498a657c0afc4ee.JPG"
                },
                {
                    "text": "1 bouquet garni (parsley, thyme, bay leaf, and peppercorns wrapped in a leek and tied)",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "bouquet garni",
                    "weight": 7.2,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
                    "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
                },
                {
                    "text": "Coarse salt and freshly ground pepper",
                    "quantity": 0,
                    "measure": null,
                    "food": "Coarse salt",
                    "weight": 31.428901533446467,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                    "text": "Coarse salt and freshly ground pepper",
                    "quantity": 0,
                    "measure": null,
                    "food": "pepper",
                    "weight": 15.714450766723234,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                    "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                },
                {
                    "text": "1/4 cup olive oil",
                    "quantity": 0.25,
                    "measure": "cup",
                    "food": "olive oil",
                    "weight": 54,
                    "foodCategory": "Oils",
                    "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                    "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                },
                {
                    "text": "3 tablespoons tomato paste",
                    "quantity": 3,
                    "measure": "tablespoon",
                    "food": "tomato paste",
                    "weight": 49.124999999169304,
                    "foodCategory": "canned vegetables",
                    "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
                    "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
                },
                {
                    "text": "3 tablespoons all-purpose flour",
                    "quantity": 3,
                    "measure": "tablespoon",
                    "food": "all-purpose flour",
                    "weight": 23.43749999960373,
                    "foodCategory": "grains",
                    "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                    "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                },
                {
                    "text": "3 cups veal stock for coq au vin",
                    "quantity": 3,
                    "measure": "cup",
                    "food": "veal stock",
                    "weight": 720,
                    "foodCategory": "canned soup",
                    "foodId": "food_bxd832fblxgfaibgn0zk0b6dg6dh",
                    "image": "https://www.edamam.com/food-img/428/4284513ddbf46e51f0f33566c0d61715.jpg"
                },
                {
                    "text": "1 pint pearl onions, peeled",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "pearl onions",
                    "weight": 15,
                    "foodCategory": "vegetables",
                    "foodId": "food_bye6035blu09tpb1bnvdsb2js8j6",
                    "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                },
                {
                    "text": "1/2 pound smoked slab bacon, diced",
                    "quantity": 0.5,
                    "measure": "pound",
                    "food": "bacon",
                    "weight": 226.796185,
                    "foodCategory": "cured meats",
                    "foodId": "food_av0awb0bgs18qub01sd9kbx44b61",
                    "image": "https://www.edamam.com/food-img/d42/d426884a125fa39a70d5a5d7217864ec.jpg"
                },
                {
                    "text": "1 pound small white mushrooms",
                    "quantity": 1,
                    "measure": "pound",
                    "food": "white mushrooms",
                    "weight": 453.59237,
                    "foodCategory": "vegetables",
                    "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
                    "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
                },
                {
                    "text": "3 tablespoons chopped fresh flat-leaf parsley",
                    "quantity": 3,
                    "measure": "tablespoon",
                    "food": "parsley",
                    "weight": 11.399999999999999,
                    "foodCategory": "vegetables",
                    "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
                    "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
                }
            ],
            "calories": 8087.252920361644,
            "totalWeight": 5270.1979826846455,
            "totalTime": 789,
            "cuisineType": [
                "french"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "main course"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 8087.252920361643,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 555.4532847879874,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 149.93904748565603,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 1.8813903919500001,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 246.8842875811652,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 106.64594989164894,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 131.0598688872676,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 109.71005164333138,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 21.349817243936222,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 36.63372935187373,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 496.2946663980654,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 2549.0854821000003,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 12217.757297302182,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 807.9611064647193,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 821.1825149931724,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 11150.213535477114,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 41.94644165698721,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 47.51912095426541,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 5441.008003642702,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 1469.3994820563837,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 78.74381476981807,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 3.6690382321532335,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 6.977320500805322,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 160.55765564198117,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 11.28897701295731,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 391.32227653484654,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 329.9160265358847,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 36.09374999938974,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 15.763417873000002,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 4.39436948,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 18.262554370437293,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 471.5266585596328,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 3964.4590671707956,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 404.36264601808216,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 854.5435150584422,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 749.6952374282802,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 43.68662296242254,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 85.39926897574489,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 992.5893327961307,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 849.6951607000001,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 509.07322072092427,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 80.79611064647192,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 195.5196464269458,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 237.2385858612152,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 233.03578698326226,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 431.9920086751401,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 777.286857663243,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 163.26660911737596,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 87.49312752202007,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 305.7531860127695,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 536.7169616004094,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 1003.4853477623823,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 868.3828471505624,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 97.83056913371163,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 656.8090780416667,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 29.29579653333333,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 121.75036246958194,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 392.93888213302733,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 555.4532847879874,
                    "hasRDI": true,
                    "daily": 854.5435150584422,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 149.93904748565603,
                            "hasRDI": true,
                            "daily": 749.6952374282802,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 1.8813903919500001,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 246.8842875811652,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 106.64594989164894,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Carbs",
                    "tag": "CHOCDF",
                    "schemaOrgTag": "carbohydrateContent",
                    "total": 131.0598688872676,
                    "hasRDI": true,
                    "daily": 43.68662296242254,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 109.71005164333138,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 21.349817243936222,
                            "hasRDI": true,
                            "daily": 85.39926897574489,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 36.63372935187373,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Protein",
                    "tag": "PROCNT",
                    "schemaOrgTag": "proteinContent",
                    "total": 496.2946663980654,
                    "hasRDI": true,
                    "daily": 992.5893327961307,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 2549.0854821000003,
                    "hasRDI": true,
                    "daily": 849.6951607000001,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 12217.757297302182,
                    "hasRDI": true,
                    "daily": 509.07322072092427,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 807.9611064647193,
                    "hasRDI": true,
                    "daily": 80.79611064647192,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 821.1825149931724,
                    "hasRDI": true,
                    "daily": 195.5196464269458,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 11150.213535477114,
                    "hasRDI": true,
                    "daily": 237.2385858612152,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 41.94644165698721,
                    "hasRDI": true,
                    "daily": 233.03578698326226,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 47.51912095426541,
                    "hasRDI": true,
                    "daily": 431.9920086751401,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 5441.008003642702,
                    "hasRDI": true,
                    "daily": 777.286857663243,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 1469.3994820563837,
                    "hasRDI": true,
                    "daily": 163.26660911737596,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 78.74381476981807,
                    "hasRDI": true,
                    "daily": 87.49312752202007,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 3.6690382321532335,
                    "hasRDI": true,
                    "daily": 305.7531860127695,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 6.977320500805322,
                    "hasRDI": true,
                    "daily": 536.7169616004094,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 160.55765564198117,
                    "hasRDI": true,
                    "daily": 1003.4853477623823,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 11.28897701295731,
                    "hasRDI": true,
                    "daily": 868.3828471505624,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 391.32227653484654,
                    "hasRDI": true,
                    "daily": 97.83056913371163,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 329.9160265358847,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 36.09374999938974,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 15.763417873000002,
                    "hasRDI": true,
                    "daily": 656.8090780416667,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 4.39436948,
                    "hasRDI": true,
                    "daily": 29.29579653333333,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 18.262554370437293,
                    "hasRDI": true,
                    "daily": 121.75036246958194,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 471.5266585596328,
                    "hasRDI": true,
                    "daily": 392.93888213302733,
                    "unit": "µg"
                },
                {
                    "label": "Sugar alcohols",
                    "tag": "Sugar.alcohol",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Water",
                    "tag": "WATER",
                    "schemaOrgTag": null,
                    "total": 3964.4590671707956,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        }
    }
]

const paella = [
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_06f962154ba0b71973563f7975aeb9e0",
            "label": "Chicken ‘paella’",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/6b2/6b24bd420a1ddc88c0476c90919f2e2e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQC0sxUPoDJAVru7XP1eNcoFYFFWtt0Fzp5KOLAk%2FrUd%2BwIhAKyt939Gvf2lJsuC9%2F%2FwrduJWgSIW6szajVs60WtFsjwKrkFCEYQABoMMTg3MDE3MTUwOTg2Igz02udOHtPMWneWJA0qlgWwIyqzhGl7PKXcBkGWqObTG0aXDaKYVv7MIGzrJyku5j56YWA%2BUvJkWNVdKtZFFxVQZxxImpdRLMPU4EeoaHI%2F2E%2BhlKhKx%2FV3WoJGvE0jBx%2BiHFH9XmDMX5lkA2f3aoSfNh65oVYSLZTnLmdtkR71Rs4lozoK1q%2Bf3PmQqV4nH68M1kPnn%2FNqaN8M4sZTwDw43CWIug7EDx1%2BXkn6nmRrNehYmDbwNAD8126HW8q1v%2Fpk2q2twGCDGLlRp%2B9SDULAGE22936X2m51P2eVMWOeWEKcyD2Ma6DCn1k4YLQxm4%2BVW%2BV3o%2F69CkAUUTzYsqkUFO%2BFU6LWzumUg1cuTO0h56FVzzlQTX8i6XdRe%2BhGuL1LsUy1FsJia7F5WOX2AaSs1sMP6amsnso4EmPWIaSS6wRWMjik6q0cjssOL6ud%2FBJ%2BJTWb1je5JP8t9BcUt8c3XE9%2FMGVPwa687x7qVWYNFKeyFZW83SqP2UDMtq31a0DFVMQF9W2Ew0VQ4PZK2G92aeNt5C4ryZKXkZKAkTiiC5tEiyxHg5KFAsQgg1S6JtpiHjkrnNCppGNgojGAyprKYgzSP4pslGmE8I3uF6nM0EyqDC41zrPZDHa8zSA%2FTy9HSStcq7PDtkPU%2FJbTwaWuCB6NZ0T2FmDDxZ6si8tnC8J1p0HAzWHa0Vdrzf099kOfXW5rWCoO8VndZhJL7TKISm%2BHro%2BB8frZMz15UVyHFTWZ960xxbDZnIyY5k5wCiMQyLhXj0bVw5jaIFc9R8dLAj1FRLj4wDnTTC1Yee4GsMpm9B7iB7orZc1Mz%2Bb7ZTrzKGsQs5eiGmQoGOwK4nrN6Ln3O8KTw%2FBW2P8iid7IozNy71fNqowspqG7grb9lATVlpfVhjCNz9CzBjqwASFWHiY8Rg131eIJzIFbw75%2FBHr8ipkGqR%2FHCXU16blsF1edTj37aRIlSru3d6PXSl3MaoSGgdp6aPJq6ve6d%2Bw55Bp3fvy5UOLzqKkRNxzyBrAspIAkF5IEXQjEAsNgc2z8mhoZDBT2S20MwYP3bU5rHDSAhbhLsy%2FsI%2FnHTin4%2FJf3DUztR4h6nBXduoxWMEElHsoxLMoEK5zIFTWLVuH7i1%2B9cCbFYP28zXQatx0s&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240620T143420Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKS5Z3CBH%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ed7542a29435ee9d43ae5cf95e3c27d80c0cfba3496641a0cb4b89e76f56e69d",
            "source": "Jamie Oliver",
            "url": "http://www.jamieoliver.com/recipes/chicken-recipes/chicken-paella/",
            "shareAs": "http://www.edamam.com/recipe/chicken-paella-06f962154ba0b71973563f7975aeb9e0/paella",
            "yield": 10,
            "dietLabels": [
                "Balanced"
            ],
            "healthLabels": [
                "Sugar-Conscious",
                "Dairy-Free",
                "Gluten-Free",
                "Wheat-Free",
                "Egg-Free",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Soy-Free",
                "Fish-Free",
                "Shellfish-Free",
                "Crustacean-Free",
                "Celery-Free",
                "Mustard-Free",
                "Sesame-Free",
                "Lupine-Free",
                "Mollusk-Free"
            ],
            "cautions": [
                "Sulfites"
            ],
            "ingredientLines": [
                "400 g quality chorizo",
                "1 small onion",
                "50 g jarred piquillo peppers",
                "½ a bunch of fresh flat-leaf parsley",
                "22 free-range chicken drumettes",
                "2 tablespoons extra virgin olive oil",
                "1 teaspoon smoked paprika",
                "2 tablespoon tomato pureé",
                "400 g Bomba paella rice",
                "120 ml white wine",
                "750 ml organic chicken stock",
                "200 g frozen peas",
                "1 lemon"
            ],
            "ingredients": [
                {
                    "text": "400 g quality chorizo",
                    "quantity": 400,
                    "measure": "gram",
                    "food": "chorizo",
                    "weight": 400,
                    "foodCategory": "Cured meats",
                    "foodId": "food_a011ctbbqlxv1ebqtemvla9v6mpa",
                    "image": "https://www.edamam.com/food-img/c01/c0139ae7ad8a0334a23365b6284a5819.jpg"
                },
                {
                    "text": "1 small onion",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "onion",
                    "weight": 70,
                    "foodCategory": "vegetables",
                    "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                    "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                },
                {
                    "text": "50 g jarred piquillo peppers",
                    "quantity": 50,
                    "measure": "gram",
                    "food": "peppers",
                    "weight": 50,
                    "foodCategory": "vegetables",
                    "foodId": "food_bz8rcwobbzm7zhb3wh2n7aznivou",
                    "image": "https://www.edamam.com/food-img/629/629dc9fddc1f8aec27fa337dd6ce2b7c.jpg"
                },
                {
                    "text": "½ a bunch of fresh flat-leaf parsley",
                    "quantity": 0.5,
                    "measure": "bunch",
                    "food": "parsley",
                    "weight": 30,
                    "foodCategory": "vegetables",
                    "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
                    "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
                },
                {
                    "text": "22 free-range chicken drumettes",
                    "quantity": 22,
                    "measure": "<unit>",
                    "food": "chicken drumettes",
                    "weight": 550,
                    "foodCategory": "Poultry",
                    "foodId": "food_b8ggvjya2427xoaegmj51bu1o22g",
                    "image": "https://www.edamam.com/food-img/f92/f928682fc890edded472c5d8baeffed5.jpg"
                },
                {
                    "text": "2 tablespoons extra virgin olive oil",
                    "quantity": 2,
                    "measure": "tablespoon",
                    "food": "extra virgin olive oil",
                    "weight": 27,
                    "foodCategory": "Oils",
                    "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                    "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                },
                {
                    "text": "1 teaspoon smoked paprika",
                    "quantity": 1,
                    "measure": "teaspoon",
                    "food": "smoked paprika",
                    "weight": 2.3,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
                    "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
                },
                {
                    "text": "2 tablespoon tomato pureé",
                    "quantity": 2,
                    "measure": "tablespoon",
                    "food": "tomato pureé",
                    "weight": 31.249999999471658,
                    "foodCategory": "canned vegetables",
                    "foodId": "food_a9li7ueb0mw12dbnr2jlhbry5k3a",
                    "image": "https://www.edamam.com/food-img/d70/d7026867f3273c7210135ca14431139b.jpg"
                },
                {
                    "text": "400 g Bomba paella rice",
                    "quantity": 400,
                    "measure": "gram",
                    "food": "rice",
                    "weight": 400,
                    "foodCategory": "grains",
                    "foodId": "food_bpumdjzb5rtqaeabb0kbgbcgr4t9",
                    "image": "https://www.edamam.com/food-img/0fc/0fc9fa8a3e0276198d75b2e259068f8a.jpg"
                },
                {
                    "text": "120 ml white wine",
                    "quantity": 120,
                    "measure": "milliliter",
                    "food": "white wine",
                    "weight": 119.2958720921021,
                    "foodCategory": "wines",
                    "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
                    "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
                },
                {
                    "text": "750 ml organic chicken stock",
                    "quantity": 750,
                    "measure": "milliliter",
                    "food": "chicken stock",
                    "weight": 760.8155107914675,
                    "foodCategory": "canned soup",
                    "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
                    "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
                },
                {
                    "text": "200 g frozen peas",
                    "quantity": 200,
                    "measure": "gram",
                    "food": "frozen peas",
                    "weight": 200,
                    "foodCategory": "vegetables",
                    "foodId": "food_aqrct01b4nxw5eaxoo8woaxc3xd7",
                    "image": "https://www.edamam.com/food-img/c91/c9130a361d5c5b279bf48c69e2466ec2.jpg"
                },
                {
                    "text": "1 lemon",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "lemon",
                    "weight": 84,
                    "foodCategory": "fruit",
                    "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
                    "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
                }
            ],
            "calories": 4530.417199000251,
            "totalWeight": 2724.6613828830414,
            "totalTime": 60,
            "cuisineType": [
                "mediterranean"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "main course"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 4530.417199000251,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 211.05611112949651,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 60.99126028964045,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 0.8275,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 97.2975737728062,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 36.735982037985366,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 412.11253020528596,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 396.334080205296,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 15.778449999989963,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 31.43540044256385,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 210.64098298240071,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 885.3244653237439,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 4961.564974036256,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 345.56309381193813,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 447.36370764074735,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 4455.773855514114,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 20.223561427301355,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 21.630786761616672,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 2176.2554448900632,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 463.95315510777726,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 170.65483102152695,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 2.3307527223814866,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 2.99547756498614,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 76.7095996123569,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 5.80454039762818,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 297.4382342604363,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 297.4382342604363,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 0,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 9.375,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 6.550000000000001,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 10.391169653227031,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 572.9422145099334,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 1854.6563637973056,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 226.52085995001252,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 324.70170942999465,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 304.9563014482022,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 137.370843401762,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 63.11379999995986,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 421.28196596480143,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 295.1081551079146,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 206.7318739181773,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 34.55630938119381,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 106.51516848589223,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 94.8036990534918,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 112.35311904056309,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 196.64351601469704,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 310.89363498429475,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 51.550350567530806,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 189.61647891280774,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 194.22939353179058,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 230.42135115277998,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 479.4349975772306,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 446.50310750986006,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 74.35955856510907,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 390.625,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 43.66666666666667,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 69.27446435484688,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 477.4518454249445,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 211.05611112949651,
                    "hasRDI": true,
                    "daily": 324.70170942999465,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 60.99126028964045,
                            "hasRDI": true,
                            "daily": 304.9563014482022,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.8275,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 97.2975737728062,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 36.735982037985366,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Carbs",
                    "tag": "CHOCDF",
                    "schemaOrgTag": "carbohydrateContent",
                    "total": 412.11253020528596,
                    "hasRDI": true,
                    "daily": 137.370843401762,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 396.334080205296,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 15.778449999989963,
                            "hasRDI": true,
                            "daily": 63.11379999995986,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 31.43540044256385,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Protein",
                    "tag": "PROCNT",
                    "schemaOrgTag": "proteinContent",
                    "total": 210.64098298240071,
                    "hasRDI": true,
                    "daily": 421.28196596480143,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 885.3244653237439,
                    "hasRDI": true,
                    "daily": 295.1081551079146,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 4961.564974036256,
                    "hasRDI": true,
                    "daily": 206.7318739181773,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 345.56309381193813,
                    "hasRDI": true,
                    "daily": 34.55630938119381,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 447.36370764074735,
                    "hasRDI": true,
                    "daily": 106.51516848589223,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 4455.773855514114,
                    "hasRDI": true,
                    "daily": 94.8036990534918,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 20.223561427301355,
                    "hasRDI": true,
                    "daily": 112.35311904056309,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 21.630786761616672,
                    "hasRDI": true,
                    "daily": 196.64351601469704,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 2176.2554448900632,
                    "hasRDI": true,
                    "daily": 310.89363498429475,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 463.95315510777726,
                    "hasRDI": true,
                    "daily": 51.550350567530806,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 170.65483102152695,
                    "hasRDI": true,
                    "daily": 189.61647891280774,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 2.3307527223814866,
                    "hasRDI": true,
                    "daily": 194.22939353179058,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 2.99547756498614,
                    "hasRDI": true,
                    "daily": 230.42135115277998,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 76.7095996123569,
                    "hasRDI": true,
                    "daily": 479.4349975772306,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 5.80454039762818,
                    "hasRDI": true,
                    "daily": 446.50310750986006,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 297.4382342604363,
                    "hasRDI": true,
                    "daily": 74.35955856510907,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 297.4382342604363,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 9.375,
                    "hasRDI": true,
                    "daily": 390.625,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 6.550000000000001,
                    "hasRDI": true,
                    "daily": 43.66666666666667,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 10.391169653227031,
                    "hasRDI": true,
                    "daily": 69.27446435484688,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 572.9422145099334,
                    "hasRDI": true,
                    "daily": 477.4518454249445,
                    "unit": "µg"
                },
                {
                    "label": "Sugar alcohols",
                    "tag": "Sugar.alcohol",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Water",
                    "tag": "WATER",
                    "schemaOrgTag": null,
                    "total": 1854.6563637973056,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ],
            "tags": [
                "Chicken",
                "Dairy-free",
                "Spanish",
                "Jamie Magazine"
            ]
        }
    }
]

const tandooriChicken = [
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_dfb79911cc95439e8164dc811d2f756c",
            "label": "Tandoori chicken",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c40/c40e55771a739b15b72031e2cf2a505b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAvan4F3ZKVLM3B3NgUqTrMp%2FQaD%2FhuGSWXLRF3xJbBMAiAKSjkRryw2yP8xMQxIPBmVwYCQ21ELI%2FwEs7F2i8NsJSq4BQhHEAAaDDE4NzAxNzE1MDk4NiIMfYu4IlkmZ6F9%2BFP5KpUFYciC14uLz3RwDPWc3qu1kkatBAGRXr%2FFHfnOkRU17pE4NzK9zYxYWnjGdoBiK0JIjIEAWZO%2F3kNpvuRPNQguAABv9F2Nw01%2BpR8BIph7o%2BDh3NhihiTpoj2lYg9vn6EzpZKbzFukfXanEa%2BbSoCNpxRKkQ1JkTpF5575FjeK7ydPlDT0c2Uc884KiyTSTRRhfDAJcfcr45Wxki9fvFmD6iVVJRa8Pda84vT4MqO55%2FAL%2BgePdFqR64NTQupBA1aJBPXWy9O%2BEU84XYN341tzjEXX16UBD9rn%2FQIH7jEiDflKbkkIMaNM6i11m2r6skWzpMfuA19ArA%2BZZJOE5C2jLiYpc5Nqt6rQTYX5eErAbGuTOhJrjLemf6RO0ZHdbqqezsqls4OrtIqvcjNC%2F5OEXTR6ufr3NE1ZaeUNAYnUqLBqQ3TnCkbOfjmBWDCkUxS7TSqGCEqV6fGERzLHQ72gBQ7npS4p4%2FjTcRhJh9ENueTwxZzjA6SPriZhNPd7mjHWMK5jOQEioC3Nk8YRt2r3pFCgZZxdVIiHD9Xm%2Ffq3T8%2FOfj8na2jXmzZvWSz2nBeQXyL6W20fGu1d1TXsRmVthRd5yknlQ7s4SyXebGX1mOB3I3hMJ93Owi%2BplCve5zhMciYVKtnjXz6po6lfgd6P%2BlVxZeunzT%2Fweo5EKzXpzQH3pUVMbcgEnuQsytrcOiOCIpObIba6QmNTDDPwxToiT78tzaTrQkBD1qOetoro5dTozDnR%2BHZG5LTP0PnTYF0Yiz%2FMSOR9aFXAMa2gB6X24YkYt4DtV790Eh0Wh9lyKXhSFg2D%2FkZGaZ1aeiM7HqMuRWOe2ZSHUz%2F6v3Kl7nEK26NbSvbDjlNSdmRUg6LXl2l3LCPzKjCz3tCzBjqyAc%2B2bqpLpde87K4yU31scdzFsdzgkz9I%2F1Os42cTL8FFNZFbQJkGFazP1JcHNd8oGqab8ADP5HL4C84BTvdK4VHUBabAtymNKPuCc%2F66GOIM4vkg4A%2BSs2vtc4FG1Pex0FAo2JKPJY4PdFlmCeCL5N%2BufrWol6LS9W7d7Aeu2KNgahopY46Mf2ciKjhKSvZZyDzxWVD79ousMZODS04GEWV%2FkyFvSv%2B93b2FMEVpwsjwVDs%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240620T143526Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEG7TDP6T%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=831686b2f13bd4c59fbc2226137ec86716c181218e570bdbaf9d9764c08b2921",
            "source": "BBC Good Food",
            "url": "https://www.bbcgoodfood.com/recipes/tandoori-chicken",
            "shareAs": "http://www.edamam.com/recipe/tandoori-chicken-dfb79911cc95439e8164dc811d2f756c/tandoori+chicken",
            "yield": 8,
            "dietLabels": [
                "High-Protein",
                "Low-Carb"
            ],
            "healthLabels": [
                "Sugar-Conscious",
                "Keto-Friendly",
                "Mediterranean",
                "Dairy-Free",
                "Gluten-Free",
                "Wheat-Free",
                "Egg-Free",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Soy-Free",
                "Fish-Free",
                "Shellfish-Free",
                "Pork-Free",
                "Red-Meat-Free",
                "Crustacean-Free",
                "Celery-Free",
                "Mustard-Free",
                "Sesame-Free",
                "Lupine-Free",
                "Mollusk-Free",
                "Alcohol-Free",
                "Sulfite-Free",
                "Kosher"
            ],
            "cautions": [
                "Sulfites"
            ],
            "ingredientLines": [
                "juice 2 lemons",
                "4 tsp paprika",
                "2 red onions, finely chopped",
                "16 skinless chicken thighs",
                "vegetable oil, for brushing"
            ],
            "ingredients": [
                {
                    "text": "juice 2 lemons",
                    "quantity": 2,
                    "measure": "<unit>",
                    "food": "lemons",
                    "weight": 168,
                    "foodCategory": "fruit",
                    "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
                    "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
                },
                {
                    "text": "4 tsp paprika",
                    "quantity": 4,
                    "measure": "teaspoon",
                    "food": "paprika",
                    "weight": 9.2,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
                    "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
                },
                {
                    "text": "2 red onions, finely chopped",
                    "quantity": 2,
                    "measure": "<unit>",
                    "food": "red onions",
                    "weight": 250,
                    "foodCategory": "vegetables",
                    "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                    "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                },
                {
                    "text": "16 skinless chicken thighs",
                    "quantity": 16,
                    "measure": "<unit>",
                    "food": "skinless chicken thighs",
                    "weight": 2288,
                    "foodCategory": "Poultry",
                    "foodId": "food_aop3mn0aizq8j5a5tyyxxafsdigk",
                    "image": "https://www.edamam.com/food-img/7f6/7f63ca77277a0b949d43f7b661ef87e7.jpg"
                },
                {
                    "text": "vegetable oil, for brushing",
                    "quantity": 0,
                    "measure": null,
                    "food": "vegetable oil",
                    "weight": 36.926719999999996,
                    "foodCategory": "Oils",
                    "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                    "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                }
            ],
            "calories": 3269.5762048,
            "totalWeight": 2752.1267199999998,
            "totalTime": 15,
            "cuisineType": [
                "indian"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "main course"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 3269.5762048,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 133.13312,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 27.939329471999997,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 0.7408279423999999,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 61.1146184,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 28.728529119999997,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 43.9756,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 31.8108,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 12.1648,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 15.747600000000002,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 456.6312,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 2150.72,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 2193.216,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 282.408,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 581.056,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 6343.56,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 22.007,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 37.07456,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 4361.068,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 388.15999999999997,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 107.6228,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 2.2259999999999995,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 4.69874,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 128.6,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 10.95016,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 162.00799999999998,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 162.00799999999998,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 0,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 13.9568,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 0,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 15.147624959999998,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 74.7396,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 2116.7563999999998,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 163.47881024000003,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 204.82018461538462,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 139.69664736,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 14.658533333333335,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 48.6592,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 913.2624,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 716.9066666666665,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 91.38399999999999,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 28.240800000000004,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 138.3466666666667,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 134.96936170212766,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 122.26111111111112,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 337.04145454545454,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 623.0097142857144,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 43.12888888888889,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 119.5808888888889,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 185.49999999999997,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 361.4415384615384,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 803.75,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 842.32,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 40.501999999999995,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 581.5333333333333,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 0,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 100.98416639999999,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 62.282999999999994,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 133.13312,
                    "hasRDI": true,
                    "daily": 204.82018461538462,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 27.939329471999997,
                            "hasRDI": true,
                            "daily": 139.69664736,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.7408279423999999,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 61.1146184,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 28.728529119999997,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Carbs",
                    "tag": "CHOCDF",
                    "schemaOrgTag": "carbohydrateContent",
                    "total": 43.9756,
                    "hasRDI": true,
                    "daily": 14.658533333333335,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 31.8108,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 12.1648,
                            "hasRDI": true,
                            "daily": 48.6592,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 15.747600000000002,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Protein",
                    "tag": "PROCNT",
                    "schemaOrgTag": "proteinContent",
                    "total": 456.6312,
                    "hasRDI": true,
                    "daily": 913.2624,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 2150.72,
                    "hasRDI": true,
                    "daily": 716.9066666666665,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 2193.216,
                    "hasRDI": true,
                    "daily": 91.38399999999999,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 282.408,
                    "hasRDI": true,
                    "daily": 28.240800000000004,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 581.056,
                    "hasRDI": true,
                    "daily": 138.3466666666667,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 6343.56,
                    "hasRDI": true,
                    "daily": 134.96936170212766,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 22.007,
                    "hasRDI": true,
                    "daily": 122.26111111111112,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 37.07456,
                    "hasRDI": true,
                    "daily": 337.04145454545454,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 4361.068,
                    "hasRDI": true,
                    "daily": 623.0097142857144,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 388.15999999999997,
                    "hasRDI": true,
                    "daily": 43.12888888888889,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 107.6228,
                    "hasRDI": true,
                    "daily": 119.5808888888889,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 2.2259999999999995,
                    "hasRDI": true,
                    "daily": 185.49999999999997,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 4.69874,
                    "hasRDI": true,
                    "daily": 361.4415384615384,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 128.6,
                    "hasRDI": true,
                    "daily": 803.75,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 10.95016,
                    "hasRDI": true,
                    "daily": 842.32,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 162.00799999999998,
                    "hasRDI": true,
                    "daily": 40.501999999999995,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 162.00799999999998,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 13.9568,
                    "hasRDI": true,
                    "daily": 581.5333333333333,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": true,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 15.147624959999998,
                    "hasRDI": true,
                    "daily": 100.98416639999999,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 74.7396,
                    "hasRDI": true,
                    "daily": 62.282999999999994,
                    "unit": "µg"
                },
                {
                    "label": "Sugar alcohols",
                    "tag": "Sugar.alcohol",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Water",
                    "tag": "WATER",
                    "schemaOrgTag": null,
                    "total": 2116.7563999999998,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        }
    }
]

const sauerbraten = [
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_ada5d224bc4c71e9e2013d2813deffa1",
            "label": "Classic Sauerbraten",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d76/d76643270b204a5dbab08c5e85d34d1d.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQC0sxUPoDJAVru7XP1eNcoFYFFWtt0Fzp5KOLAk%2FrUd%2BwIhAKyt939Gvf2lJsuC9%2F%2FwrduJWgSIW6szajVs60WtFsjwKrkFCEYQABoMMTg3MDE3MTUwOTg2Igz02udOHtPMWneWJA0qlgWwIyqzhGl7PKXcBkGWqObTG0aXDaKYVv7MIGzrJyku5j56YWA%2BUvJkWNVdKtZFFxVQZxxImpdRLMPU4EeoaHI%2F2E%2BhlKhKx%2FV3WoJGvE0jBx%2BiHFH9XmDMX5lkA2f3aoSfNh65oVYSLZTnLmdtkR71Rs4lozoK1q%2Bf3PmQqV4nH68M1kPnn%2FNqaN8M4sZTwDw43CWIug7EDx1%2BXkn6nmRrNehYmDbwNAD8126HW8q1v%2Fpk2q2twGCDGLlRp%2B9SDULAGE22936X2m51P2eVMWOeWEKcyD2Ma6DCn1k4YLQxm4%2BVW%2BV3o%2F69CkAUUTzYsqkUFO%2BFU6LWzumUg1cuTO0h56FVzzlQTX8i6XdRe%2BhGuL1LsUy1FsJia7F5WOX2AaSs1sMP6amsnso4EmPWIaSS6wRWMjik6q0cjssOL6ud%2FBJ%2BJTWb1je5JP8t9BcUt8c3XE9%2FMGVPwa687x7qVWYNFKeyFZW83SqP2UDMtq31a0DFVMQF9W2Ew0VQ4PZK2G92aeNt5C4ryZKXkZKAkTiiC5tEiyxHg5KFAsQgg1S6JtpiHjkrnNCppGNgojGAyprKYgzSP4pslGmE8I3uF6nM0EyqDC41zrPZDHa8zSA%2FTy9HSStcq7PDtkPU%2FJbTwaWuCB6NZ0T2FmDDxZ6si8tnC8J1p0HAzWHa0Vdrzf099kOfXW5rWCoO8VndZhJL7TKISm%2BHro%2BB8frZMz15UVyHFTWZ960xxbDZnIyY5k5wCiMQyLhXj0bVw5jaIFc9R8dLAj1FRLj4wDnTTC1Yee4GsMpm9B7iB7orZc1Mz%2Bb7ZTrzKGsQs5eiGmQoGOwK4nrN6Ln3O8KTw%2FBW2P8iid7IozNy71fNqowspqG7grb9lATVlpfVhjCNz9CzBjqwASFWHiY8Rg131eIJzIFbw75%2FBHr8ipkGqR%2FHCXU16blsF1edTj37aRIlSru3d6PXSl3MaoSGgdp6aPJq6ve6d%2Bw55Bp3fvy5UOLzqKkRNxzyBrAspIAkF5IEXQjEAsNgc2z8mhoZDBT2S20MwYP3bU5rHDSAhbhLsy%2FsI%2FnHTin4%2FJf3DUztR4h6nBXduoxWMEElHsoxLMoEK5zIFTWLVuH7i1%2B9cCbFYP28zXQatx0s&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240620T143631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKS5Z3CBH%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=11cbd06945f8e633b222dd7e0d84ba280c5dd664b65bb5a81f49baf0dca20425",
            "source": "Epicurious",
            "url": "https://www.epicurious.com/recipes/food/views/classic-sauerbraten-863",
            "shareAs": "http://www.edamam.com/recipe/classic-sauerbraten-ada5d224bc4c71e9e2013d2813deffa1/sauerbraten",
            "yield": 8,
            "dietLabels": [
                "Low-Carb"
            ],
            "healthLabels": [
                "Peanut-Free",
                "Tree-Nut-Free",
                "Soy-Free",
                "Fish-Free",
                "Shellfish-Free",
                "Pork-Free",
                "Crustacean-Free",
                "Celery-Free",
                "Mustard-Free",
                "Sesame-Free",
                "Lupine-Free",
                "Mollusk-Free",
                "Alcohol-Free"
            ],
            "cautions": [
                "Gluten",
                "Wheat",
                "Sulfites"
            ],
            "ingredientLines": [
                "2 1/4 cups water",
                "1 cup cider vinegar",
                "1 medium onion, coarsely chopped",
                "1 lemon, cut into 8 wedges",
                "2 bay leaves",
                "1 1/2 teaspoons salt",
                "1/2 teaspoon whole black peppercorns",
                "1/2 teaspoon whole cloves",
                "1 4 1/2-pound top round roast",
                "1/4 cup vegetable oil",
                "1/4 cup all purpose flour",
                "1 cup canned beef broth",
                "1/3 cup (packed) dark brown sugar",
                "1/3 cup gingersnap cookie crumbs"
            ],
            "ingredients": [
                {
                    "text": "2 1/4 cups water",
                    "quantity": 2.25,
                    "measure": "cup",
                    "food": "water",
                    "weight": 532.3235321249999,
                    "foodCategory": "water",
                    "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                    "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                },
                {
                    "text": "1 cup cider vinegar",
                    "quantity": 1,
                    "measure": "cup",
                    "food": "cider vinegar",
                    "weight": 239,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_ar8m7esapmfvf8bnhfzdlabndh6v",
                    "image": "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg"
                },
                {
                    "text": "1 medium onion, coarsely chopped",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "onion",
                    "weight": 110,
                    "foodCategory": "vegetables",
                    "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                    "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                },
                {
                    "text": "1 lemon, cut into 8 wedges",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "lemon",
                    "weight": 84,
                    "foodCategory": "fruit",
                    "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
                    "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
                },
                {
                    "text": "2 bay leaves",
                    "quantity": 2,
                    "measure": "<unit>",
                    "food": "bay leaves",
                    "weight": 1.2,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_asx39x4ayja4jab6ivj6zayvkblo",
                    "image": "https://www.edamam.com/food-img/0f9/0f9f5f95df173e9ffaaff2977bef88f3.jpg"
                },
                {
                    "text": "1 1/2 teaspoons salt",
                    "quantity": 1.5,
                    "measure": "teaspoon",
                    "food": "salt",
                    "weight": 9,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                    "text": "1/2 teaspoon whole black peppercorns",
                    "quantity": 0.5,
                    "measure": "teaspoon",
                    "food": "black peppercorns",
                    "weight": 1.45,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                    "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                },
                {
                    "text": "1/2 teaspoon whole cloves",
                    "quantity": 0.5,
                    "measure": "teaspoon",
                    "food": "cloves",
                    "weight": 1.05,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_abb00nxbw761ggavcuto7b3mw1s0",
                    "image": "https://www.edamam.com/food-img/8bc/8bc63f9742815a245d37e5f346674ca4.jpg"
                },
                {
                    "text": "1 4 1/2-pound top round roast",
                    "quantity": 4.5,
                    "measure": "pound",
                    "food": "top round roast",
                    "weight": 2041.165665,
                    "foodCategory": "meats",
                    "foodId": "food_b7cf8o4aicxm3iajpfjm4b6vcmnx",
                    "image": "https://www.edamam.com/food-img/841/841b64894944db7d9c4a5472cc439eea.jpg"
                },
                {
                    "text": "1/4 cup vegetable oil",
                    "quantity": 0.25,
                    "measure": "cup",
                    "food": "vegetable oil",
                    "weight": 56.00000000094679,
                    "foodCategory": "Oils",
                    "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                    "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                },
                {
                    "text": "1/4 cup all purpose flour",
                    "quantity": 0.25,
                    "measure": "cup",
                    "food": "all purpose flour",
                    "weight": 31.25,
                    "foodCategory": "grains",
                    "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                    "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                },
                {
                    "text": "1 cup canned beef broth",
                    "quantity": 1,
                    "measure": "cup",
                    "food": "canned beef broth",
                    "weight": 240,
                    "foodCategory": "canned soup",
                    "foodId": "food_a4blma9bmbzb9aa6dt0qmbzeb1o1",
                    "image": "https://www.edamam.com/food-img/6f7/6f71425571cb38887c2287f9860d33bd.jpg"
                },
                {
                    "text": "1/3 cup (packed) dark brown sugar",
                    "quantity": 0.3333333333333333,
                    "measure": "cup",
                    "food": "dark brown sugar",
                    "weight": 73.33333333333333,
                    "foodCategory": "sugars",
                    "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                    "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                },
                {
                    "text": "1/3 cup gingersnap cookie crumbs",
                    "quantity": 0.3333333333333333,
                    "measure": "cup",
                    "food": "cookie crumbs",
                    "weight": 75.33333333333333,
                    "foodCategory": "quick breads and pastries",
                    "foodId": "food_a9rbl2bb3f5sj6afu5qksbsvqvhy",
                    "image": null
                }
            ],
            "calories": 4820.824150541704,
            "totalWeight": 3495.1058637926135,
            "totalTime": 0,
            "cuisineType": [
                "french"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "salad"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 4820.824150541704,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 240.84847463111342,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 72.97032191306164,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 0.4321870000072619,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 115.27704920834833,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 16.908960364945237,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 171.60500000000002,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 163.09018333333336,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 8.514816666666666,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 106.09197833333332,
                    "unit": "g"
                },
                "SUGAR.added": {
                    "label": "Sugars, added",
                    "quantity": 71.13333333333333,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 459.09776896833336,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 1408.40430885,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 6009.980203668334,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 550.0995356804167,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 586.03699492125,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 7855.145417650001,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 48.3043586005,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 84.51992335221249,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 4521.5352198166665,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 5.701499999999999,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 53.220099999999995,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 2.1441313252666667,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 3.4677071541499993,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 141.59680985550003,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 13.547081842533334,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 374.2197131333334,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 314.94471313333344,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 48.125,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 38.14874803566667,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 0,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 19.2714116947064,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 30.937903645,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 2573.5575011128753,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 241.0412075270852,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 370.5361148170976,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 364.8516095653082,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 57.20166666666667,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 34.059266666666666,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 918.1955379366667,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 469.46810295,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 250.41584181951393,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 55.00995356804167,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 139.53261783839287,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 167.1307535670213,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 268.35754778055554,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 768.362939565568,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 645.9336028309524,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 0.6335,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 59.133444444444436,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 178.6776104388889,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 266.74670416538453,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 884.9800615968752,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 1042.0832186564103,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 93.55492828333335,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 1589.531168152778,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 0,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 128.47607796470933,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 25.78158637083333,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 240.84847463111342,
                    "hasRDI": true,
                    "daily": 370.5361148170976,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 72.97032191306164,
                            "hasRDI": true,
                            "daily": 364.8516095653082,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.4321870000072619,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 115.27704920834833,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 16.908960364945237,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Carbs",
                    "tag": "CHOCDF",
                    "schemaOrgTag": "carbohydrateContent",
                    "total": 171.60500000000002,
                    "hasRDI": true,
                    "daily": 57.20166666666667,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 163.09018333333336,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 8.514816666666666,
                            "hasRDI": true,
                            "daily": 34.059266666666666,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 106.09197833333332,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 71.13333333333333,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Protein",
                    "tag": "PROCNT",
                    "schemaOrgTag": "proteinContent",
                    "total": 459.09776896833336,
                    "hasRDI": true,
                    "daily": 918.1955379366667,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 1408.40430885,
                    "hasRDI": true,
                    "daily": 469.46810295,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 6009.980203668334,
                    "hasRDI": true,
                    "daily": 250.41584181951393,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 550.0995356804167,
                    "hasRDI": true,
                    "daily": 55.00995356804167,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 586.03699492125,
                    "hasRDI": true,
                    "daily": 139.53261783839287,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 7855.145417650001,
                    "hasRDI": true,
                    "daily": 167.1307535670213,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 48.3043586005,
                    "hasRDI": true,
                    "daily": 268.35754778055554,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 84.51992335221249,
                    "hasRDI": true,
                    "daily": 768.362939565568,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 4521.5352198166665,
                    "hasRDI": true,
                    "daily": 645.9336028309524,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 5.701499999999999,
                    "hasRDI": true,
                    "daily": 0.6335,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 53.220099999999995,
                    "hasRDI": true,
                    "daily": 59.133444444444436,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 2.1441313252666667,
                    "hasRDI": true,
                    "daily": 178.6776104388889,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 3.4677071541499993,
                    "hasRDI": true,
                    "daily": 266.74670416538453,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 141.59680985550003,
                    "hasRDI": true,
                    "daily": 884.9800615968752,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 13.547081842533334,
                    "hasRDI": true,
                    "daily": 1042.0832186564103,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 374.2197131333334,
                    "hasRDI": true,
                    "daily": 93.55492828333335,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 314.94471313333344,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 48.125,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 38.14874803566667,
                    "hasRDI": true,
                    "daily": 1589.531168152778,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": true,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 19.2714116947064,
                    "hasRDI": true,
                    "daily": 128.47607796470933,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 30.937903645,
                    "hasRDI": true,
                    "daily": 25.78158637083333,
                    "unit": "µg"
                },
                {
                    "label": "Sugar alcohols",
                    "tag": "Sugar.alcohol",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Water",
                    "tag": "WATER",
                    "schemaOrgTag": null,
                    "total": 2573.5575011128753,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ],
            "tags": [
                "Beef",
                "Roast",
                "Chill",
                "Marinate",
                "German",
                "Oktoberfest",
                "Bon Appétit"
            ]
        }
    }
]

const blackBeanStew = [
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c4a055d2d5d47edd6fba32cbbf20ea98",
            "label": "Cuban Black-Bean Stew with Rice",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/efd/efd9c5c085d93cac40f29efc7c9e9a8f?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQC0sxUPoDJAVru7XP1eNcoFYFFWtt0Fzp5KOLAk%2FrUd%2BwIhAKyt939Gvf2lJsuC9%2F%2FwrduJWgSIW6szajVs60WtFsjwKrkFCEYQABoMMTg3MDE3MTUwOTg2Igz02udOHtPMWneWJA0qlgWwIyqzhGl7PKXcBkGWqObTG0aXDaKYVv7MIGzrJyku5j56YWA%2BUvJkWNVdKtZFFxVQZxxImpdRLMPU4EeoaHI%2F2E%2BhlKhKx%2FV3WoJGvE0jBx%2BiHFH9XmDMX5lkA2f3aoSfNh65oVYSLZTnLmdtkR71Rs4lozoK1q%2Bf3PmQqV4nH68M1kPnn%2FNqaN8M4sZTwDw43CWIug7EDx1%2BXkn6nmRrNehYmDbwNAD8126HW8q1v%2Fpk2q2twGCDGLlRp%2B9SDULAGE22936X2m51P2eVMWOeWEKcyD2Ma6DCn1k4YLQxm4%2BVW%2BV3o%2F69CkAUUTzYsqkUFO%2BFU6LWzumUg1cuTO0h56FVzzlQTX8i6XdRe%2BhGuL1LsUy1FsJia7F5WOX2AaSs1sMP6amsnso4EmPWIaSS6wRWMjik6q0cjssOL6ud%2FBJ%2BJTWb1je5JP8t9BcUt8c3XE9%2FMGVPwa687x7qVWYNFKeyFZW83SqP2UDMtq31a0DFVMQF9W2Ew0VQ4PZK2G92aeNt5C4ryZKXkZKAkTiiC5tEiyxHg5KFAsQgg1S6JtpiHjkrnNCppGNgojGAyprKYgzSP4pslGmE8I3uF6nM0EyqDC41zrPZDHa8zSA%2FTy9HSStcq7PDtkPU%2FJbTwaWuCB6NZ0T2FmDDxZ6si8tnC8J1p0HAzWHa0Vdrzf099kOfXW5rWCoO8VndZhJL7TKISm%2BHro%2BB8frZMz15UVyHFTWZ960xxbDZnIyY5k5wCiMQyLhXj0bVw5jaIFc9R8dLAj1FRLj4wDnTTC1Yee4GsMpm9B7iB7orZc1Mz%2Bb7ZTrzKGsQs5eiGmQoGOwK4nrN6Ln3O8KTw%2FBW2P8iid7IozNy71fNqowspqG7grb9lATVlpfVhjCNz9CzBjqwASFWHiY8Rg131eIJzIFbw75%2FBHr8ipkGqR%2FHCXU16blsF1edTj37aRIlSru3d6PXSl3MaoSGgdp6aPJq6ve6d%2Bw55Bp3fvy5UOLzqKkRNxzyBrAspIAkF5IEXQjEAsNgc2z8mhoZDBT2S20MwYP3bU5rHDSAhbhLsy%2FsI%2FnHTin4%2FJf3DUztR4h6nBXduoxWMEElHsoxLMoEK5zIFTWLVuH7i1%2B9cCbFYP28zXQatx0s&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240620T143726Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKS5Z3CBH%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=11bc8e45151896e615e69e0b4118891b09d9b267dc6dd8f3fd18d0e09e8d60e9",
            "source": "Martha Stewart",
            "url": "https://www.marthastewart.com/337366/cuban-black-bean-stew-with-rice",
            "shareAs": "http://www.edamam.com/recipe/cuban-black-bean-stew-with-rice-c4a055d2d5d47edd6fba32cbbf20ea98/black+bean+stew",
            "yield": 4,
            "dietLabels": [
                "High-Fiber",
                "Low-Fat"
            ],
            "healthLabels": [
                "Dairy-Free",
                "Gluten-Free",
                "Wheat-Free",
                "Egg-Free",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Soy-Free",
                "Fish-Free",
                "Shellfish-Free",
                "Crustacean-Free",
                "Celery-Free",
                "Mustard-Free",
                "Sesame-Free",
                "Lupine-Free",
                "Mollusk-Free",
                "Alcohol-Free",
                "Sulfite-Free",
                "Kosher"
            ],
            "cautions": [
                "Sulfites"
            ],
            "ingredientLines": [
                "1 1/2 cups long-grain white rice",
                "1 tablespoon olive oil",
                "1 medium red onion, chopped",
                "1 garlic clove, minced",
                "1 red bell pepper (ribs and seeds removed), chopped",
                "2 cans (19 ounces each) black beans, rinsed and drained",
                "1 can (14.5 ounces) vegetable broth",
                "1 tablespoon cider vinegar",
                "1/2 teaspoon dried oregano",
                "Coarse salt and ground pepper",
                "Garnishes (optional): lime wedges, fresh cilantro, and sliced radishes"
            ],
            "ingredients": [
                {
                    "text": "1 1/2 cups long-grain white rice",
                    "quantity": 1.5,
                    "measure": "cup",
                    "food": "white rice",
                    "weight": 292.5,
                    "foodCategory": "grains",
                    "foodId": "food_bpumdjzb5rtqaeabb0kbgbcgr4t9",
                    "image": "https://www.edamam.com/food-img/0fc/0fc9fa8a3e0276198d75b2e259068f8a.jpg"
                },
                {
                    "text": "1 tablespoon olive oil",
                    "quantity": 1,
                    "measure": "tablespoon",
                    "food": "olive oil",
                    "weight": 13.5,
                    "foodCategory": "Oils",
                    "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                    "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                },
                {
                    "text": "1 medium red onion, chopped",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "red onion",
                    "weight": 110,
                    "foodCategory": "vegetables",
                    "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                    "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                },
                {
                    "text": "1 garlic clove, minced",
                    "quantity": 1,
                    "measure": "clove",
                    "food": "garlic",
                    "weight": 3,
                    "foodCategory": "vegetables",
                    "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                    "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                },
                {
                    "text": "1 red bell pepper (ribs and seeds removed), chopped",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "red bell pepper",
                    "weight": 119,
                    "foodCategory": "vegetables",
                    "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
                    "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
                },
                {
                    "text": "2 cans (19 ounces each) black beans, rinsed and drained",
                    "quantity": 38,
                    "measure": "ounce",
                    "food": "black beans",
                    "weight": 1077.28187875,
                    "foodCategory": "plant-based protein",
                    "foodId": "food_bazzo85azdbkmsb56nu4ra5rphoe",
                    "image": "https://www.edamam.com/food-img/850/8505bc3d47bbc820b69d532202f61ce1.jpg"
                },
                {
                    "text": "1 can (14.5 ounces) vegetable broth",
                    "quantity": 14.5,
                    "measure": "ounce",
                    "food": "vegetable broth",
                    "weight": 411.0680853125,
                    "foodCategory": "canned soup",
                    "foodId": "food_axnge37bb3pfgua5u0iz9agn86ay",
                    "image": null
                },
                {
                    "text": "1 tablespoon cider vinegar",
                    "quantity": 1,
                    "measure": "tablespoon",
                    "food": "cider vinegar",
                    "weight": 14.9,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_ar8m7esapmfvf8bnhfzdlabndh6v",
                    "image": "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg"
                },
                {
                    "text": "1/2 teaspoon dried oregano",
                    "quantity": 0.5,
                    "measure": "teaspoon",
                    "food": "dried oregano",
                    "weight": 0.5,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
                    "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
                },
                {
                    "text": "Coarse salt and ground pepper",
                    "quantity": 0,
                    "measure": null,
                    "food": "Coarse salt",
                    "weight": 12.250499784375,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                    "text": "Coarse salt and ground pepper",
                    "quantity": 0,
                    "measure": null,
                    "food": "ground pepper",
                    "weight": 6.1252498921875,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                    "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                },
                {
                    "text": "Garnishes (optional): lime wedges, fresh cilantro, and sliced radishes",
                    "quantity": 0,
                    "measure": null,
                    "food": "lime",
                    "weight": 136.79724759218752,
                    "foodCategory": "fruit",
                    "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
                    "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
                },
                {
                    "text": "Garnishes (optional): lime wedges, fresh cilantro, and sliced radishes",
                    "quantity": 0,
                    "measure": null,
                    "food": "cilantro",
                    "weight": 20.417499640625003,
                    "foodCategory": "vegetables",
                    "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                    "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
                },
                {
                    "text": "Garnishes (optional): lime wedges, fresh cilantro, and sliced radishes",
                    "quantity": 0,
                    "measure": null,
                    "food": "radishes",
                    "weight": 0,
                    "foodCategory": "vegetables",
                    "foodId": "food_bs6xkukbtd85e7b2lh5zfazpe45y",
                    "image": "https://www.edamam.com/food-img/ad7/ad78f4315cdba1dc26ccef0d7dba464b.jpg"
                }
            ],
            "calories": 2322.3041712056406,
            "totalWeight": 2211.1946500199883,
            "totalTime": 30,
            "cuisineType": [
                "caribbean"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "main course"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 2322.3041712056406,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 19.69121374789469,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 3.50546733343075,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 0,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 10.83235475256375,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 3.5971155518059845,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 452.9331495076782,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 368.00449872868603,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 84.92865077899219,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 17.121593737897655,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 89.89320334912188,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 0,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 5127.892602942308,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 551.3664989287034,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 535.7109473816843,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 4420.6863679568805,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 26.017390631370805,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 10.203912203947802,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 1605.160270833125,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 318.0012681553906,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 237.4591070197953,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 1.9782374162329381,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 1.7030497160390625,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 13.71818913206,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 1.6731641673998126,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 785.0258681037344,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 785.0258681037344,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 0,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 0,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 0,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 11.494341682847185,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 116.49692540592812,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 1618.4998757626836,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 116.11520856028203,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 30.29417499676106,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 17.52733666715375,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 150.9777165025594,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 339.71460311596877,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 179.78640669824372,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 0,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 213.66219178926283,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 55.136649892870345,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 127.55022556706767,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 94.05715676504002,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 144.54105906317113,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 92.76283821770728,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 229.30861011901789,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 35.33347423948784,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 263.843452244217,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 164.8531180194115,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 131.0038243106971,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 85.738682075375,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 128.70493595383175,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 196.2564670259336,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 0,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 0,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 76.62894455231456,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 97.08077117160677,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 19.69121374789469,
                    "hasRDI": true,
                    "daily": 30.29417499676106,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 3.50546733343075,
                            "hasRDI": true,
                            "daily": 17.52733666715375,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 10.83235475256375,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 3.5971155518059845,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Carbs",
                    "tag": "CHOCDF",
                    "schemaOrgTag": "carbohydrateContent",
                    "total": 452.9331495076782,
                    "hasRDI": true,
                    "daily": 150.9777165025594,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 368.00449872868603,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 84.92865077899219,
                            "hasRDI": true,
                            "daily": 339.71460311596877,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 17.121593737897655,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Protein",
                    "tag": "PROCNT",
                    "schemaOrgTag": "proteinContent",
                    "total": 89.89320334912188,
                    "hasRDI": true,
                    "daily": 179.78640669824372,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 0,
                    "hasRDI": true,
                    "daily": 0,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 5127.892602942308,
                    "hasRDI": true,
                    "daily": 213.66219178926283,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 551.3664989287034,
                    "hasRDI": true,
                    "daily": 55.136649892870345,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 535.7109473816843,
                    "hasRDI": true,
                    "daily": 127.55022556706767,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 4420.6863679568805,
                    "hasRDI": true,
                    "daily": 94.05715676504002,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 26.017390631370805,
                    "hasRDI": true,
                    "daily": 144.54105906317113,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 10.203912203947802,
                    "hasRDI": true,
                    "daily": 92.76283821770728,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 1605.160270833125,
                    "hasRDI": true,
                    "daily": 229.30861011901789,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 318.0012681553906,
                    "hasRDI": true,
                    "daily": 35.33347423948784,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 237.4591070197953,
                    "hasRDI": true,
                    "daily": 263.843452244217,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 1.9782374162329381,
                    "hasRDI": true,
                    "daily": 164.8531180194115,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 1.7030497160390625,
                    "hasRDI": true,
                    "daily": 131.0038243106971,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 13.71818913206,
                    "hasRDI": true,
                    "daily": 85.738682075375,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 1.6731641673998126,
                    "hasRDI": true,
                    "daily": 128.70493595383175,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 785.0258681037344,
                    "hasRDI": true,
                    "daily": 196.2564670259336,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 785.0258681037344,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": true,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": true,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 11.494341682847185,
                    "hasRDI": true,
                    "daily": 76.62894455231456,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 116.49692540592812,
                    "hasRDI": true,
                    "daily": 97.08077117160677,
                    "unit": "µg"
                },
                {
                    "label": "Sugar alcohols",
                    "tag": "Sugar.alcohol",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Water",
                    "tag": "WATER",
                    "schemaOrgTag": null,
                    "total": 1618.4998757626836,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        }
    }
]
const handleClick = (e) => {
    const catTitle = e.target.closest('div').querySelector('h2').textContent;
    setCategoryTitle(catTitle)
    console.log(categoryTitle)
    navigate("/recipes", { state: { categoryTitle: catTitle } })

}
    return (
        <div className="categories">
            <div className="mole-poblano" onClick={handleClick} >
                <img src={molePoblano[0].recipe.image} alt="mole poblano" ></img>
                <h2>{molePoblano[0].recipe.label}</h2>
            </div>
            <div className="sushi" onClick={handleClick}>
                <img src={sushi[0].recipe.image} alt="sushi" />
                <h2>{sushi[0].recipe.label}</h2>
            </div>
            <div className="peking-duck" onClick={handleClick} >
                <img src={pekingDuck[0].recipe.image} alt="pekingDuck" />
                <h2>{pekingDuck[0].recipe.label}</h2>
            </div>
            <div className="pizza" onClick={handleClick}>           
            <img src={pizza[0].recipe.image} alt="pizza image" />
            <h2>Pizza</h2>
            </div>
            <div className="cheeseburger" onClick={handleClick}>
                <img src={cheeseburger[0].recipe.image} alt="cheeseburger" />
                <h2>{cheeseburger[0].recipe.label}</h2>
            </div>
            <div className="coq-au-vin" onClick={handleClick}>
                <img src={coqAuVin[0].recipe.image} alt="coqAuVin" />
                <h2>{coqAuVin[0].recipe.label}</h2>
            </div>
            <div className="paella" onClick={handleClick}>
                <img src={paella[0].recipe.image} alt="paella" />
                <h2>{paella[0].recipe.label}</h2>
            </div>
            <div className="tandoori-Chicken" onClick={handleClick}>
                <img src={tandooriChicken[0].recipe.image} alt="tandooriChicken" />
                <h2>{tandooriChicken[0].recipe.label}</h2>
            </div>
            <div className="sauerbraten" onClick={handleClick}>
                <img src={sauerbraten[0].recipe.image} alt="sauerbraten" />
                <h2>{sauerbraten[0].recipe.label}</h2>
            </div>
            <div className="black-bean-stew" onClick={handleClick}>
                <img src={blackBeanStew[0].recipe.image} alt="black-bean-stew" />
                <h2>{blackBeanStew[0].recipe.label}</h2>
            </div>
        </div>
    )
}

export default BestRecipes;