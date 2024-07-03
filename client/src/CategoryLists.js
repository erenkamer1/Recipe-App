import React from 'react';



function CategoryLists ({handleClick}) {

    

const pizzaList = [
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

const chickenList = [
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8275bb28647abcedef0baaf2dcf34f8b",
            "label": "Chicken Paprikash",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEA6wlOORziAfGjkaZzXIaMHVrFXlnwmSqAzbHKJrn8TAiEAlBahTtKdeNCDvLqIQI52eZDUuzu1g%2BdQDS95FYqsnMkqwgUIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDLSkHD9CSD5kEoZ89CqWBegAnawAUsR88%2F31QV5G9XcXne7HN46j9%2Ffk5aNVkuvtnAvMc71Wz%2BvpmMmVUtCK%2BOydOm6e5llVElvym7LWGzDPkDWpFyFlwdVMH40B0nz3YVK0IbGvJXntRGfKHtkZzLsYxddvByhCwWT0FOlAsEvFzcLVLxPkgZ1RS8Zu2TeMfs3NFOjNGpT6NOfh5StWQAbR%2F6cLOURgr5MQ%2Bd8Y7VuZJEh49Hvk2Jf92geingfYdC%2BKwZtry0lRf2gJPm%2BMsrdpUFEMF7V1jRlP8VxHugVD542iQSXVbYXAfmt73w%2F5FnguNL1nEepZpb9MdnwDkjeal5mA4b8L9PJpdeaF3aXD7RaXSLd7EinNg%2FW3D1PIdqsrSTAyPSMzNitSvMF1VrpdrHv34agl6s9g4bivFZ8azlhYXeQ7usnN4HYd30bobHGIgxk%2FHMnZZNMwYgKhU94YOgcAdXwXqHWFnBHvtjcdQkV%2BWDLZxNMybbJ8YiAYPzhrtG1lWr5xR7lieWKdsz0XDpZZYpUBztaDson%2FPaUGjGxPsRkWAoO2M7uZPK0fOtGPt51kECGVR9%2BPoX7fy1MC%2FhaTc%2Fk5q%2FuVq%2BjMmcOJPmspisSxj4%2FJkcat72dfXngQkpV0gc7%2F2%2FHzSCoESvGYhiO%2Bsi%2FSoGhPeiRw9cUiswRwtN2ONRYGpNiomVAb%2FhYq6RBFPIQPD2K%2B9bJoVBJ4wd2Fn%2B35w4N3EXPleTYQhN1aS3BVEes%2FYJYKxemE951tEmHL%2F1TrJtNJKMj1zzaAIKpugxSRNMAUr0Mgo8T4SgkhqLQxpR%2BXOnpiCpBewXdQJgxwNqb3Jll0sHppcEEt7BC7s8o7GjyEG%2FwRuBp6dXPyIp8RdCH%2FWjzGCJa8xXKqPZIiMImZq7MGOrEB%2FY5TVN6ufmlnvKhfrDPRW%2FRFoRcQ60ZgFZx4OoLWh5LM61SKITpdwktZdZFKMmYG9%2FIfUcDUfIeDJ5C3uV%2BO9n9VdMvkst5IQVsJ3v3Zs7sN8DPqinec2nM46cck0g4V394Br%2BlHFdoJBmQrmQJ6sSS76hQyoWjpQ1bGAEc362%2BXBXFaHbc2fIABfJ5MvpAMBkgn7mK05e1HvQZvpH176qB5zGZdlCkjK%2B0I6I29xSq%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240613T113416Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPRCMWQJG%2F20240613%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0b36c36ebdb92ab76ccb12f903bbd5036a9bfe2bf80ea0883ee671d4a3f3d07d",
            "source": "No Recipes",
            "url": "http://norecipes.com/recipe/chicken-paprikash/",
            "shareAs": "http://www.edamam.com/recipe/chicken-paprikash-8275bb28647abcedef0baaf2dcf34f8b/chicken",
            "yield": 4,
            "dietLabels": [
                "Low-Carb"
            ],
            "healthLabels": [
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
                "Sulfite-Free"
            ],
            "cautions": [
                "Sulfites"
            ],
            "ingredientLines": [
                "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
                "1/2 teaspoon salt",
                "1/4 teaspoon black pepper",
                "1 tablespoon butter – cultured unsalted (or olive oil)",
                "240 grams onion sliced thin (1 large onion)",
                "70 grams Anaheim pepper chopped (1 large pepper)",
                "25 grams paprika (about 1/4 cup)",
                "1 cup chicken stock",
                "1/2 teaspoon salt",
                "1/2 cup sour cream",
                "1 tablespoon flour – all-purpose"
            ],
            "ingredients": [
                {
                    "text": "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
                    "quantity": 640,
                    "measure": "gram",
                    "food": "chicken - drumsticks",
                    "weight": 640,
                    "foodCategory": "Poultry",
                    "foodId": "food_agzvc6lbxg03stab195szars32lx",
                    "image": "https://www.edamam.com/food-img/491/4916353c22bd1ac381ac81d55597ddbe.jpg"
                },
                {
                    "text": "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
                    "quantity": 640,
                    "measure": "gram",
                    "food": "thighs",
                    "weight": 640,
                    "foodCategory": "Poultry",
                    "foodId": "food_bsarl08be0gwarb34bpviafna9d4",
                    "image": "https://www.edamam.com/food-img/007/00792642367e1f55de680762f85cfb3b.jpg"
                },
                {
                    "text": "1/2 teaspoon salt",
                    "quantity": 0.5,
                    "measure": "teaspoon",
                    "food": "salt",
                    "weight": 3,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                    "text": "1/4 teaspoon black pepper",
                    "quantity": 0.25,
                    "measure": "teaspoon",
                    "food": "black pepper",
                    "weight": 0.725,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                    "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                },
                {
                    "text": "1 tablespoon butter – cultured unsalted (or olive oil)",
                    "quantity": 1,
                    "measure": "tablespoon",
                    "food": "olive oil",
                    "weight": 13.5,
                    "foodCategory": "Oils",
                    "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                    "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                },
                {
                    "text": "240 grams onion sliced thin (1 large onion)",
                    "quantity": 1,
                    "measure": "onion",
                    "food": "onion",
                    "weight": 78.125,
                    "foodCategory": "vegetables",
                    "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                    "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                },
                {
                    "text": "70 grams Anaheim pepper chopped (1 large pepper)",
                    "quantity": 1,
                    "measure": "pepper",
                    "food": "Anaheim pepper",
                    "weight": 56.25,
                    "foodCategory": "vegetables",
                    "foodId": "food_bv2gevdbd1orbiarnp1vfaez1r85",
                    "image": "https://www.edamam.com/food-img/73f/73ff2eeb21372fe15b0ec51f9ecf368d.jpeg"
                },
                {
                    "text": "25 grams paprika (about 1/4 cup)",
                    "quantity": 0.25,
                    "measure": "cup",
                    "food": "paprika",
                    "weight": 27.200000000459866,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
                    "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
                },
                {
                    "text": "1 cup chicken stock",
                    "quantity": 1,
                    "measure": "cup",
                    "food": "chicken stock",
                    "weight": 240,
                    "foodCategory": "canned soup",
                    "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
                    "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
                },
                {
                    "text": "1/2 teaspoon salt",
                    "quantity": 0.5,
                    "measure": "teaspoon",
                    "food": "salt",
                    "weight": 3,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                    "text": "1/2 cup sour cream",
                    "quantity": 0.5,
                    "measure": "cup",
                    "food": "sour cream",
                    "weight": 115,
                    "foodCategory": "Dairy",
                    "foodId": "food_adp9fcubzl3lr7bcvzn3rbfiiiwq",
                    "image": "https://www.edamam.com/food-img/f9d/f9d6183267b041b0aff9a10b89c9c15f.jpg"
                },
                {
                    "text": "1 tablespoon flour – all-purpose",
                    "quantity": 1,
                    "measure": "tablespoon",
                    "food": "flour",
                    "weight": 7.8124999998679145,
                    "foodCategory": "grains",
                    "foodId": "food_ahebfs0a985an4aubqaebbipra58",
                    "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
                }
            ],
            "calories": 3038.9512500008163,
            "totalWeight": 1824.6125000003276,
            "totalTime": 0,
            "cuisineType": [
                "central europe"
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
                    "quantity": 3038.9512500008163,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 207.60962250005807,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 59.56929187500963,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 1.7602000000000002,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 85.24519837500769,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 39.828234875035186,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 49.83156250014755,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 37.77252499999062,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 12.059037500156926,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 16.722083750047013,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 236.99366250005127,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 1291.05,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 3929.77975000031,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 315.69037500103326,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 324.8095000007895,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 3995.8393750103432,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 16.315966250095485,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 22.42413750001899,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 2343.7222500013017,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 1084.3032500113127,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 143.66605000000413,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 1.291880500001359,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 2.983908750005604,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 67.92107125004479,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 5.460102250009783,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 100.56375000019099,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 100.56375000019099,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 0,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 7.601500000000001,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 1.2800000000000002,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 13.34417750013374,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 71.18228750036887,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 1317.964337500036,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 151.94756250004082,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 319.39941923085854,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 297.84645937504814,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 16.610520833382516,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 48.2361500006277,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 473.9873250001026,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 430.35,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 163.74082291667958,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 31.569037500103324,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 77.33559523828322,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 85.01785904277327,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 90.64425694497491,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 203.8557954547181,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 334.81746428590026,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 120.47813889014584,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 159.62894444444905,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 107.65670833344657,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 229.5314423081234,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 424.5066953127799,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 420.0078653853679,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 25.140937500047748,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 316.72916666666674,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 8.533333333333335,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 88.96118333422494,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 59.31857291697406,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 207.60962250005807,
                    "hasRDI": true,
                    "daily": 319.39941923085854,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 59.56929187500963,
                            "hasRDI": true,
                            "daily": 297.84645937504814,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 1.7602000000000002,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 85.24519837500769,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 39.828234875035186,
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
                    "total": 49.83156250014755,
                    "hasRDI": true,
                    "daily": 16.610520833382516,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 37.77252499999062,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 12.059037500156926,
                            "hasRDI": true,
                            "daily": 48.2361500006277,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 16.722083750047013,
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
                    "total": 236.99366250005127,
                    "hasRDI": true,
                    "daily": 473.9873250001026,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 1291.05,
                    "hasRDI": true,
                    "daily": 430.35,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 3929.77975000031,
                    "hasRDI": true,
                    "daily": 163.74082291667958,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 315.69037500103326,
                    "hasRDI": true,
                    "daily": 31.569037500103324,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 324.8095000007895,
                    "hasRDI": true,
                    "daily": 77.33559523828322,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 3995.8393750103432,
                    "hasRDI": true,
                    "daily": 85.01785904277327,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 16.315966250095485,
                    "hasRDI": true,
                    "daily": 90.64425694497491,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 22.42413750001899,
                    "hasRDI": true,
                    "daily": 203.8557954547181,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 2343.7222500013017,
                    "hasRDI": true,
                    "daily": 334.81746428590026,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 1084.3032500113127,
                    "hasRDI": true,
                    "daily": 120.47813889014584,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 143.66605000000413,
                    "hasRDI": true,
                    "daily": 159.62894444444905,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 1.291880500001359,
                    "hasRDI": true,
                    "daily": 107.65670833344657,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 2.983908750005604,
                    "hasRDI": true,
                    "daily": 229.5314423081234,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 67.92107125004479,
                    "hasRDI": true,
                    "daily": 424.5066953127799,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 5.460102250009783,
                    "hasRDI": true,
                    "daily": 420.0078653853679,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 100.56375000019099,
                    "hasRDI": true,
                    "daily": 25.140937500047748,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 100.56375000019099,
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
                    "total": 7.601500000000001,
                    "hasRDI": true,
                    "daily": 316.72916666666674,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 1.2800000000000002,
                    "hasRDI": true,
                    "daily": 8.533333333333335,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 13.34417750013374,
                    "hasRDI": true,
                    "daily": 88.96118333422494,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 71.18228750036887,
                    "hasRDI": true,
                    "daily": 59.31857291697406,
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
                    "total": 1317.964337500036,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        }
    }
]

const breakfastList = [
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_63ccc00c3c1051750933c9ad8fb9e987",
            "label": "Breakfast Sausage Puffs",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/a7e/a7ea4fa9dddaa7d054ead3450a1de7d1?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQC3D9Tb47Tz1OaOTLbtLS%2FKE7X8m7HgtgBrlixtQfhDvAIgf8lbWkpjs%2FEMHna3K59zqozPs9LyLmodyO8FPXCYmM4qwQUIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDNt5qVnDut6t7bVBvyqVBV14jSzGJKQyLNVsdXFCrS3nJxBsfDfiT3NCflbTzGBWObF7H5iq3x7Wk8iShO83G90JwDi1%2B5vc9ibxBrJS1JUhmF%2BUqrYF9BiFp038e7Xkr95idqCT28VW%2FaI%2F1MHHrDl9EWzBt9e2CKVlxYuJWwdumwL4yF4uhDhyj95mDvjR%2B2kjpNYPZOCQkhecbURefbEkXHNLOl4Al2c8y3Pizben0qfcQmyvyJBJe%2F3WN4eZEKuh42KiND6n%2BtSXDtTlFlkXssPj9g2FViVcKvvkFBwdyOu7%2F42Dt0y87ZcuLKZhX85l4Z1kcFmINg5TGue0niwksyxCk8MywBDO1DVQDCqxNWlqd34Ue3srw7Zte4NxX0Iw%2Fk2hzjmp%2FY84czfFpOhYuo1fg2S6M61EAcd7xPrIZ86QEuiSbjZnoQy%2FQkffkIxmg86jUBn%2FGBceT52ywi92KsyGzcVSaEQSI5b0Px%2BOnQKeHC%2B%2Bz4Wg2wmfH5M5DneZbRfF%2BFJhtyl35FXYq408A6zr0h674yk6cgDWT5AciQlvf2dRuTh0FevNpCtG%2Bxkl5FTfAFk2A%2FDqZkCea5c5RwKnAsmkB9BEXz3ndAgUt6StG2TaCAHYQx6OUIGIMtcrPkMzAHQfDdC3G%2Fw2tabR8niRjLDvwD8mAqS73u7OQIEmTfGCkesnVr8%2FwIPQPlnAHQNksGNH%2FCPxRRMRB0reeqOnO2xSOBdeVYub0YoK7lGzdOtllBpKHUkXRXhlLY%2Fb2MlQbcVJgqrvgoCdnpxKpK4WJlYRdVF5n8BZ4mDoFB5PXKqkPrUp6HkOyEGKEFpb7ddehe8c3ev4tYixPEbrgxQUuRVIFooXrLqlldl5RTdbp3rKXA%2BCOiW5Plh6UD3ktTcw%2F5fgswY6sQFwdQBpaH5Ec6I9oQMAUGjuEYSBLQA6OCKhAztnrDnAq3YWOw%2Fh%2FZDziadLrMMQRsOXqxsR8gZ0%2FTkuejw%2F%2B8Ls4cPa7lPVE28JQ77o2Jk6Al5mpSz6OE9OfoM%2FxQOhE3VRkyfNKZy%2Fgq46vJ68%2FE1T6IXvpIdny3aX5zs5FOydOuy61c5cB9EL7hM4X9OHHP3gnjjqfgZqyFdFZiIsAqclKR5H8F2dbMzrFeWoewd%2BRiU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240623T124240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK66HNV55%2F20240623%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2d1539fcc442f557d01409eebb4736cc79cf712a9f71e2c480eadb395c2da45b",
            "source": "Martha Stewart",
            "url": "https://www.marthastewart.com/868891/breakfast-sausage-puffs",
            "shareAs": "http://www.edamam.com/recipe/breakfast-sausage-puffs-63ccc00c3c1051750933c9ad8fb9e987/breakfast",
            "yield": 8,
            "dietLabels": [
                "Low-Carb"
            ],
            "healthLabels": [
                "Kidney-Friendly",
                "Keto-Friendly",
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
                "Alcohol-Free"
            ],
            "cautions": [
                "Sulfites"
            ],
            "ingredientLines": [
                "1 sheet puff pastry, thawed",
                "2 tablespoons maple syrup, plus more for serving",
                "18 cooked breakfast sausages, about 1 pound",
                "1 egg"
            ],
            "ingredients": [
                {
                    "text": "1 sheet puff pastry, thawed",
                    "quantity": 1,
                    "measure": "sheet",
                    "food": "puff pastry",
                    "weight": 25,
                    "foodCategory": "quick breads and pastries",
                    "foodId": "food_bdy019nbzjeni3atliworbbgahrk",
                    "image": "https://www.edamam.com/food-img/bc7/bc7dc9b99ce87d5a6dc136e30d6aadd1.jpg"
                },
                {
                    "text": "2 tablespoons maple syrup, plus more for serving",
                    "quantity": 2,
                    "measure": "tablespoon",
                    "food": "maple syrup",
                    "weight": 40,
                    "foodCategory": "sugars",
                    "foodId": "food_bo37p69bopqshvaul0bn4bv0kqni",
                    "image": "https://www.edamam.com/food-img/ced/ced25c45453a118e531c8aaf33e2ee38.jpg"
                },
                {
                    "text": "18 cooked breakfast sausages, about 1 pound",
                    "quantity": 1,
                    "measure": "pound",
                    "food": "sausages",
                    "weight": 453.59237,
                    "foodCategory": "Cured meats",
                    "foodId": "food_aidvlr4a5hvqixbbd5rbhbb3wiri",
                    "image": "https://www.edamam.com/food-img/2c7/2c73a127447b754a803e3804898a1afd.jpg"
                },
                {
                    "text": "1 egg",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "egg",
                    "weight": 43,
                    "foodCategory": "Eggs",
                    "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                    "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                }
            ],
            "calories": 1609.5860256,
            "totalWeight": 561.5923700000001,
            "totalTime": 0,
            "cuisineType": [
                "american"
            ],
            "mealType": [
                "breakfast"
            ],
            "dishType": [
                "starter"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 1609.5860256,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 126.12920776,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 38.095642409,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 0.4744682937000001,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 51.61168920800001,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 22.144741991,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 42.60300904100001,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 42.22800904100001,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 0.375,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 28.762509041,
                    "unit": "g"
                },
                "SUGAR.added": {
                    "label": "Sugars, added",
                    "quantity": 24.200000000000003,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 77.11222498000001,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 477.4746590000001,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 3480.1576143000007,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 103.6673896,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 85.59885550000001,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 1551.9185759,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 6.063142174000001,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 10.392406637,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 704.2178521,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 191.2699399,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 0,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 1.1546109851000004,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 1.4420407839,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 25.691856454000003,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 0.8684007238,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 60.281847400000004,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 32.531847400000004,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 16.25,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 4.555749804,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 7.210293180000001,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 5.077064463,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 5.514777110000001,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 304.58428142,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 80.47930128,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 194.04493501538462,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 190.47821204500002,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 14.201003013666668,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 1.5,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 154.22444996000002,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 159.1582196666667,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 145.00656726250003,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 10.366738960000001,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 20.380679880952382,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 33.019544168085105,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 33.68412318888889,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 94.47642397272729,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 100.6025503,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 21.252215544444443,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 0,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 96.2175820916667,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 110.92621414615385,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 160.57410283750002,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 66.80005567692307,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 15.070461850000001,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 189.8229085,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 48.06862120000001,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 33.84709642,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 4.595647591666667,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 126.12920776,
                    "hasRDI": true,
                    "daily": 194.04493501538462,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 38.095642409,
                            "hasRDI": true,
                            "daily": 190.47821204500002,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.4744682937000001,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 51.61168920800001,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 22.144741991,
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
                    "total": 42.60300904100001,
                    "hasRDI": true,
                    "daily": 14.201003013666668,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 42.22800904100001,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 0.375,
                            "hasRDI": true,
                            "daily": 1.5,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 28.762509041,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 24.200000000000003,
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
                    "total": 77.11222498000001,
                    "hasRDI": true,
                    "daily": 154.22444996000002,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 477.4746590000001,
                    "hasRDI": true,
                    "daily": 159.1582196666667,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 3480.1576143000007,
                    "hasRDI": true,
                    "daily": 145.00656726250003,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 103.6673896,
                    "hasRDI": true,
                    "daily": 10.366738960000001,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 85.59885550000001,
                    "hasRDI": true,
                    "daily": 20.380679880952382,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 1551.9185759,
                    "hasRDI": true,
                    "daily": 33.019544168085105,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 6.063142174000001,
                    "hasRDI": true,
                    "daily": 33.68412318888889,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 10.392406637,
                    "hasRDI": true,
                    "daily": 94.47642397272729,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 704.2178521,
                    "hasRDI": true,
                    "daily": 100.6025503,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 191.2699399,
                    "hasRDI": true,
                    "daily": 21.252215544444443,
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
                    "total": 1.1546109851000004,
                    "hasRDI": true,
                    "daily": 96.2175820916667,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 1.4420407839,
                    "hasRDI": true,
                    "daily": 110.92621414615385,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 25.691856454000003,
                    "hasRDI": true,
                    "daily": 160.57410283750002,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 0.8684007238,
                    "hasRDI": true,
                    "daily": 66.80005567692307,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 60.281847400000004,
                    "hasRDI": true,
                    "daily": 15.070461850000001,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 32.531847400000004,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 16.25,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 4.555749804,
                    "hasRDI": true,
                    "daily": 189.8229085,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 7.210293180000001,
                    "hasRDI": true,
                    "daily": 48.06862120000001,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 5.077064463,
                    "hasRDI": true,
                    "daily": 33.84709642,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 5.514777110000001,
                    "hasRDI": true,
                    "daily": 4.595647591666667,
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
                    "total": 304.58428142,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        }
    }
    ]

const meatList = [
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_e4fe51116b7d41a791c83b81c67ee026",
            "label": "Hunk-a-Meat",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/fba/fbae5d013100e66b8be10da8faaa570d.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDWV5RMDbRXk0MA3EuWZkf9qybHtyBhtBzAHnxxjZ%2B7uAIhAKUPiHAMGpNeCTEo58xgSlXELFobx6%2BITXdZMJ6T7BpFKrgFCEYQABoMMTg3MDE3MTUwOTg2IgyvWZjNue9Ry7KlKlIqlQUsMKu1wZUizXY1V%2BiLKD1i2Q6SYEe4bDHQL9UCK%2BMyvFYnNIOJllXsvx28jsP1mul9oDPovKZ%2B0eiye5LerYK3v%2B37Ke8WNXHJbPc1C4dltqM0bbaF6fVkc2To%2BhEb0rc0Fr7j1hJQbraPUjWU4jwsYxaVgszrCsfdRtiC8oqWz3tfteR401OneiOZJ%2BiXQs0abwxNuQcWUfXIubTLlsXqigFays%2BT6h6MJ%2F8wa%2F%2BAuaAdpptqQ6pke2Qm78j9Bpn1TobDCVbKgcYy94DhwXJfBK2Om13%2BuAsCnc1%2BPfnip4jZzKfEuIBrMrXiPLR2QX6PO5EVRdE5Sm0TeJGxJNdyMyqz1uvwPQgv2KXnCu9AtMS4Ueu4181WEEh7s9fvZtfLQ%2FOb5fQ%2FQGalrk5Ntt8t%2FGzn8dnxz5XsPdf%2F4EKvLt2ZAlGmQxudM2L2OfOUfL3TT5GTzzToq8iftOQgZNXqG4dhhrR8EE3R1jBFhPhr5i6AzWm3%2BSsQvq9OSqKT8UsXxRJNnchd3b%2BEBaCzLFlPuSlzWsolHk7gwJHISlpl3zJEU5WHOSDvY3h2Kf133LlxY%2Fpoq3mu1Zik3WdPV%2FyywTQJpd%2FHmLEDc6IvtinLxcDnHjASmHx7a59a2SIpPjy4tnCRRpsE5Xg9jXB0asBWmNdU%2FxxNFo78qoxHpLhUI46gbOZOOIgaJlSFRwxsPh7tYP8S8PsMgXzjrV%2FimE2iMj7VvRJOwhSSIkJj1uVU%2FI0deDEUpQTzM4x4tCunwHnsu2cOaU7%2BN0kWZD7eIPeoSYjIdyLTTxBpg2JtzcFR1pqjhNQwMeIHdYynpOKGqs6NcRWHVFs2YLVeZRsQz1ucRdq4vCYdeKbTHb3UC%2Fro6gk3wkAlMJrC0LMGOrABmPbFK%2BMAYWVPd4cH8mUQjieyay%2F3GgPIP4BH5nLZGf3HiAICzRf1BHCRMhZpOrJ6Uyu0yDMPvsskM6GGqclB%2BprD6XC9clyCOlegoOICdxBYhXFrrKp%2BML6UBgA%2BMV9yWTL%2FyquUd1swQCT%2BTcOwUcNgzFz1F2YxZ81f%2FbqNB2FP%2Bv0iXzcnmMSIvBtF6x6LBIRnpU5TfgoNfmoRxJM6WVV8cDXqAuim6YBp4TEtymI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240620T130752Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHPLZHEEG%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=33a8e0f83ed39946b1b805a1f676823fb1298c0e8c42cc14a599852e2205aa4a",
            "source": "Cooking Channel",
            "url": "https://www.cookingchanneltv.com/recipes/hunk-a-meat-2433471",
            "shareAs": "http://www.edamam.com/recipe/hunk-a-meat-e4fe51116b7d41a791c83b81c67ee026/meat",
            "yield": 14,
            "dietLabels": [
                "Low-Carb"
            ],
            "healthLabels": [
                "Sugar-Conscious",
                "Keto-Friendly",
                "Gluten-Free",
                "Wheat-Free",
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
                "4 tablespoons unsalted butter",
                "1 cup minced onion",
                "2 tablespoons minced garlic",
                "2 pounds coarsely ground pork",
                "1 pound coarsely ground chicken thigh meat",
                "1/2 pound chicken thighs, diced",
                "1/2 pound chicken livers, diced",
                "Salt and pepper",
                "Salt and pepper",
                "1 cup dry sherry",
                "1/2 cup whipping cream",
                "4 tablespoons chopped fresh parsley",
                "2 tablespoons minced shallot",
                "3 teaspoons chopped fresh thyme",
                "3 large eggs",
                "15 to 20 slices bacon"
            ],
            "ingredients": [
                {
                    "text": "4 tablespoons unsalted butter",
                    "quantity": 4,
                    "measure": "tablespoon",
                    "food": "unsalted butter",
                    "weight": 56.8,
                    "foodCategory": "Dairy",
                    "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                    "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                },
                {
                    "text": "1 cup minced onion",
                    "quantity": 1,
                    "measure": "cup",
                    "food": "onion",
                    "weight": 160,
                    "foodCategory": "vegetables",
                    "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                    "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                },
                {
                    "text": "2 tablespoons minced garlic",
                    "quantity": 2,
                    "measure": "tablespoon",
                    "food": "garlic",
                    "weight": 16.999999999712582,
                    "foodCategory": "vegetables",
                    "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                    "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                },
                {
                    "text": "2 pounds coarsely ground pork",
                    "quantity": 2,
                    "measure": "pound",
                    "food": "ground pork",
                    "weight": 907.18474,
                    "foodCategory": "meats",
                    "foodId": "food_a9ztr5sboipvteae9jcusblxo9ec",
                    "image": "https://www.edamam.com/food-img/5aa/5aafbc5ff7ea82f835cdb9a7fcd9a02e.jpg"
                },
                {
                    "text": "1 pound coarsely ground chicken thigh meat",
                    "quantity": 1,
                    "measure": "pound",
                    "food": "meat",
                    "weight": 453.59237,
                    "foodCategory": "meats",
                    "foodId": "food_bknby1la98smrsbwnthinbam42nj",
                    "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
                },
                {
                    "text": "1/2 pound chicken thighs, diced",
                    "quantity": 0.5,
                    "measure": "pound",
                    "food": "chicken thighs",
                    "weight": 226.796185,
                    "foodCategory": "Poultry",
                    "foodId": "food_bsarl08be0gwarb34bpviafna9d4",
                    "image": "https://www.edamam.com/food-img/007/00792642367e1f55de680762f85cfb3b.jpg"
                },
                {
                    "text": "1/2 pound chicken livers, diced",
                    "quantity": 0.5,
                    "measure": "pound",
                    "food": "chicken livers",
                    "weight": 226.796185,
                    "foodCategory": "Poultry",
                    "foodId": "food_a9xs7abb632dn3aozv3w4a9351fh",
                    "image": "https://www.edamam.com/food-img/9aa/9aa4760ac12b682555a37a1cdc91150b.jpg"
                },
                {
                    "text": "Salt and pepper",
                    "quantity": 0,
                    "measure": null,
                    "food": "Salt",
                    "weight": 17.794616879998276,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                    "text": "Salt and pepper",
                    "quantity": 0,
                    "measure": null,
                    "food": "pepper",
                    "weight": 8.897308439999138,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                    "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                },
                {
                    "text": "Salt and pepper",
                    "quantity": 0,
                    "measure": null,
                    "food": "Salt",
                    "weight": 17.794616879998276,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                    "text": "Salt and pepper",
                    "quantity": 0,
                    "measure": null,
                    "food": "pepper",
                    "weight": 8.897308439999138,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                    "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                },
                {
                    "text": "1 cup dry sherry",
                    "quantity": 1,
                    "measure": "cup",
                    "food": "sherry",
                    "weight": 103,
                    "foodCategory": "wines",
                    "foodId": "food_bw2ziyiaoqtjc8abha34haszk8b9",
                    "image": "https://www.edamam.com/food-img/ea6/ea6e045b01daf204a1b5b9badcc31af3.jpg"
                },
                {
                    "text": "1/2 cup whipping cream",
                    "quantity": 0.5,
                    "measure": "cup",
                    "food": "whipping cream",
                    "weight": 119.5,
                    "foodCategory": "Dairy",
                    "foodId": "food_blkhxayb2wggv1bqfzuuoazuqwg9",
                    "image": "https://www.edamam.com/food-img/95c/95cc0b05cfb70cbdd2546504855f4bda.jpg"
                },
                {
                    "text": "4 tablespoons chopped fresh parsley",
                    "quantity": 4,
                    "measure": "tablespoon",
                    "food": "parsley",
                    "weight": 15.2,
                    "foodCategory": "vegetables",
                    "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
                    "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
                },
                {
                    "text": "2 tablespoons minced shallot",
                    "quantity": 2,
                    "measure": "tablespoon",
                    "food": "shallot",
                    "weight": 20,
                    "foodCategory": "vegetables",
                    "foodId": "food_bu2ver7a5f52dfap8q9f0bn085qb",
                    "image": "https://www.edamam.com/food-img/d23/d23e3be21df05e9e16c05eadb12341e7.jpeg"
                },
                {
                    "text": "3 teaspoons chopped fresh thyme",
                    "quantity": 3,
                    "measure": "teaspoon",
                    "food": "fresh thyme",
                    "weight": 2.4000000000000004,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
                    "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
                },
                {
                    "text": "3 large eggs",
                    "quantity": 3,
                    "measure": "<unit>",
                    "food": "eggs",
                    "weight": 150,
                    "foodCategory": "Eggs",
                    "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                    "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                },
                {
                    "text": "15 to 20 slices bacon",
                    "quantity": 17.5,
                    "measure": "slice",
                    "food": "bacon",
                    "weight": 507.5,
                    "foodCategory": "cured meats",
                    "foodId": "food_av0awb0bgs18qub01sd9kbx44b61",
                    "image": "https://www.edamam.com/food-img/d42/d426884a125fa39a70d5a5d7217864ec.jpg"
                }
            ],
            "calories": 7024.694464568367,
            "totalWeight": 2987.746254314597,
            "totalTime": 120,
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
                    "quantity": 7024.694464568367,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 549.2866848327865,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 214.96298242363173,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 2.2772002025000004,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 226.13802171324323,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 64.72381880046167,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 56.336508260103756,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 47.27987018947023,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 9.056638070633529,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 15.796315548029114,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 424.52626892550154,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 3091.35830545,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 6938.21863601183,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 624.2691700122449,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 520.6407031890741,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 7435.594163897616,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 48.209065753078065,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 62.59222852130354,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 4960.655912469957,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 8655.903316307602,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 90.46381029491033,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 9.524557958329824,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 8.67675003963368,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 115.69543178892995,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 10.958204770917234,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 1541.235546319591,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 1541.235546319591,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 0,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 59.90920303600001,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 6.427388555,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 9.359585565051752,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 298.7712771181923,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 1903.2247956247015,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 351.2347232284183,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 845.0564382042869,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 1074.8149121181586,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 18.77883608670125,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 36.226552282534115,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 849.0525378510032,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 1030.4527684833333,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 289.0924431671596,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 62.42691700122449,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 123.9620721878748,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 158.2041311467578,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 267.8281430726559,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 569.0202592845776,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 708.6651303528511,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 961.7670351452891,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 100.51534477212259,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 793.713163194152,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 667.4423107410523,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 723.0964486808122,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 842.9388285320949,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 385.30888657989783,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 2496.2167931666672,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 42.84925703333333,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 62.397237100345016,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 248.97606426516026,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 549.2866848327865,
                    "hasRDI": true,
                    "daily": 845.0564382042869,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 214.96298242363173,
                            "hasRDI": true,
                            "daily": 1074.8149121181586,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 2.2772002025000004,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 226.13802171324323,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 64.72381880046167,
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
                    "total": 56.336508260103756,
                    "hasRDI": true,
                    "daily": 18.77883608670125,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 47.27987018947023,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 9.056638070633529,
                            "hasRDI": true,
                            "daily": 36.226552282534115,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 15.796315548029114,
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
                    "total": 424.52626892550154,
                    "hasRDI": true,
                    "daily": 849.0525378510032,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 3091.35830545,
                    "hasRDI": true,
                    "daily": 1030.4527684833333,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 6938.21863601183,
                    "hasRDI": true,
                    "daily": 289.0924431671596,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 624.2691700122449,
                    "hasRDI": true,
                    "daily": 62.42691700122449,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 520.6407031890741,
                    "hasRDI": true,
                    "daily": 123.9620721878748,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 7435.594163897616,
                    "hasRDI": true,
                    "daily": 158.2041311467578,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 48.209065753078065,
                    "hasRDI": true,
                    "daily": 267.8281430726559,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 62.59222852130354,
                    "hasRDI": true,
                    "daily": 569.0202592845776,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 4960.655912469957,
                    "hasRDI": true,
                    "daily": 708.6651303528511,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 8655.903316307602,
                    "hasRDI": true,
                    "daily": 961.7670351452891,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 90.46381029491033,
                    "hasRDI": true,
                    "daily": 100.51534477212259,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 9.524557958329824,
                    "hasRDI": true,
                    "daily": 793.713163194152,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 8.67675003963368,
                    "hasRDI": true,
                    "daily": 667.4423107410523,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 115.69543178892995,
                    "hasRDI": true,
                    "daily": 723.0964486808122,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 10.958204770917234,
                    "hasRDI": true,
                    "daily": 842.9388285320949,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 1541.235546319591,
                    "hasRDI": true,
                    "daily": 385.30888657989783,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 1541.235546319591,
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
                    "total": 59.90920303600001,
                    "hasRDI": true,
                    "daily": 2496.2167931666672,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 6.427388555,
                    "hasRDI": true,
                    "daily": 42.84925703333333,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 9.359585565051752,
                    "hasRDI": true,
                    "daily": 62.397237100345016,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 298.7712771181923,
                    "hasRDI": true,
                    "daily": 248.97606426516026,
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
                    "total": 1903.2247956247015,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        }
    }
]    

const dessertList = [
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_30be3f6a72b846f1bda2bb6ce75a4256",
            "label": "Cherry, almond & lemon mascarpone tart",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/3e9/3e9fdabd160214e67d070dafab622363.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQC0sxUPoDJAVru7XP1eNcoFYFFWtt0Fzp5KOLAk%2FrUd%2BwIhAKyt939Gvf2lJsuC9%2F%2FwrduJWgSIW6szajVs60WtFsjwKrkFCEYQABoMMTg3MDE3MTUwOTg2Igz02udOHtPMWneWJA0qlgWwIyqzhGl7PKXcBkGWqObTG0aXDaKYVv7MIGzrJyku5j56YWA%2BUvJkWNVdKtZFFxVQZxxImpdRLMPU4EeoaHI%2F2E%2BhlKhKx%2FV3WoJGvE0jBx%2BiHFH9XmDMX5lkA2f3aoSfNh65oVYSLZTnLmdtkR71Rs4lozoK1q%2Bf3PmQqV4nH68M1kPnn%2FNqaN8M4sZTwDw43CWIug7EDx1%2BXkn6nmRrNehYmDbwNAD8126HW8q1v%2Fpk2q2twGCDGLlRp%2B9SDULAGE22936X2m51P2eVMWOeWEKcyD2Ma6DCn1k4YLQxm4%2BVW%2BV3o%2F69CkAUUTzYsqkUFO%2BFU6LWzumUg1cuTO0h56FVzzlQTX8i6XdRe%2BhGuL1LsUy1FsJia7F5WOX2AaSs1sMP6amsnso4EmPWIaSS6wRWMjik6q0cjssOL6ud%2FBJ%2BJTWb1je5JP8t9BcUt8c3XE9%2FMGVPwa687x7qVWYNFKeyFZW83SqP2UDMtq31a0DFVMQF9W2Ew0VQ4PZK2G92aeNt5C4ryZKXkZKAkTiiC5tEiyxHg5KFAsQgg1S6JtpiHjkrnNCppGNgojGAyprKYgzSP4pslGmE8I3uF6nM0EyqDC41zrPZDHa8zSA%2FTy9HSStcq7PDtkPU%2FJbTwaWuCB6NZ0T2FmDDxZ6si8tnC8J1p0HAzWHa0Vdrzf099kOfXW5rWCoO8VndZhJL7TKISm%2BHro%2BB8frZMz15UVyHFTWZ960xxbDZnIyY5k5wCiMQyLhXj0bVw5jaIFc9R8dLAj1FRLj4wDnTTC1Yee4GsMpm9B7iB7orZc1Mz%2Bb7ZTrzKGsQs5eiGmQoGOwK4nrN6Ln3O8KTw%2FBW2P8iid7IozNy71fNqowspqG7grb9lATVlpfVhjCNz9CzBjqwASFWHiY8Rg131eIJzIFbw75%2FBHr8ipkGqR%2FHCXU16blsF1edTj37aRIlSru3d6PXSl3MaoSGgdp6aPJq6ve6d%2Bw55Bp3fvy5UOLzqKkRNxzyBrAspIAkF5IEXQjEAsNgc2z8mhoZDBT2S20MwYP3bU5rHDSAhbhLsy%2FsI%2FnHTin4%2FJf3DUztR4h6nBXduoxWMEElHsoxLMoEK5zIFTWLVuH7i1%2B9cCbFYP28zXQatx0s&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240620T131642Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKS5Z3CBH%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=814068eb5dcc471d7dffb652a60f588c2de98bac06c3f04be3a55dea98086356",
            "source": "BBC Good Food",
            "url": "https://www.bbcgoodfood.com/recipes/cherry-almond-lemon-mascarpone-tart",
            "shareAs": "http://www.edamam.com/recipe/cherry-almond-lemon-mascarpone-tart-30be3f6a72b846f1bda2bb6ce75a4256/dessert",
            "yield": 8,
            "dietLabels": [
                "Low-Sodium"
            ],
            "healthLabels": [
                "Kidney-Friendly",
                "Vegetarian",
                "Pescatarian",
                "Mediterranean",
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
                "375g block dessert pastry",
                "about 700g/1lb 9oz cherries , stoned"
            ],
            "ingredients": [
                {
                    "text": "375g block dessert pastry",
                    "quantity": 375,
                    "measure": "gram",
                    "food": "pastry",
                    "weight": 375,
                    "foodCategory": "quick breads and pastries",
                    "foodId": "food_bdy019nbzjeni3atliworbbgahrk",
                    "image": "https://www.edamam.com/food-img/bc7/bc7dc9b99ce87d5a6dc136e30d6aadd1.jpg"
                },
                {
                    "text": "about 700g/1lb 9oz cherries , stoned",
                    "quantity": 700,
                    "measure": "gram",
                    "food": "cherries",
                    "weight": 700,
                    "foodCategory": "fruit",
                    "foodId": "food_bv3hog1bd5qa4oafi7lb3bjz8i92",
                    "image": "https://www.edamam.com/food-img/34b/34b23d901752b022d6ab1ee6f9ed0b74.jpg"
                }
            ],
            "calories": 2507.25,
            "totalWeight": 1075,
            "totalTime": 45,
            "cuisineType": [
                "french"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "desserts"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 2507.25,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 144.275,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 36.416000000000004,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 0,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 81.329,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 18.7015,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 281.125,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 260.8,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 20.325000000000003,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 92.37500000000001,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 34.795,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 0,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 933.75,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 128.5,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 137,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 1782.75,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 12.12,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 2.4775,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 372,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 21,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 49,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 1.6815000000000002,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 1.29225,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 16.7155,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 0.42175,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 493,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 76.75,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 243.75,
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
                    "quantity": 2.5150000000000006,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 75.075,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 607.275,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 125.3625,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 221.96153846153845,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 182.08,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 93.70833333333333,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 81.30000000000001,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 69.59,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 0,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 38.90625,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 12.85,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 32.61904761904762,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 37.930851063829785,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 67.33333333333333,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 22.522727272727273,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 53.142857142857146,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 2.3333333333333335,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 54.44444444444444,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 140.12500000000003,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 99.40384615384615,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 104.471875,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 32.44230769230769,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 123.25,
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
                    "quantity": 16.76666666666667,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 62.5625,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 144.275,
                    "hasRDI": true,
                    "daily": 221.96153846153845,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 36.416000000000004,
                            "hasRDI": true,
                            "daily": 182.08,
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
                            "total": 81.329,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 18.7015,
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
                    "total": 281.125,
                    "hasRDI": true,
                    "daily": 93.70833333333333,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 260.8,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 20.325000000000003,
                            "hasRDI": true,
                            "daily": 81.30000000000001,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 92.37500000000001,
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
                    "total": 34.795,
                    "hasRDI": true,
                    "daily": 69.59,
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
                    "total": 933.75,
                    "hasRDI": true,
                    "daily": 38.90625,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 128.5,
                    "hasRDI": true,
                    "daily": 12.85,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 137,
                    "hasRDI": true,
                    "daily": 32.61904761904762,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 1782.75,
                    "hasRDI": true,
                    "daily": 37.930851063829785,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 12.12,
                    "hasRDI": true,
                    "daily": 67.33333333333333,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 2.4775,
                    "hasRDI": true,
                    "daily": 22.522727272727273,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 372,
                    "hasRDI": true,
                    "daily": 53.142857142857146,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 21,
                    "hasRDI": true,
                    "daily": 2.3333333333333335,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 49,
                    "hasRDI": true,
                    "daily": 54.44444444444444,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 1.6815000000000002,
                    "hasRDI": true,
                    "daily": 140.12500000000003,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 1.29225,
                    "hasRDI": true,
                    "daily": 99.40384615384615,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 16.7155,
                    "hasRDI": true,
                    "daily": 104.471875,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 0.42175,
                    "hasRDI": true,
                    "daily": 32.44230769230769,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 493,
                    "hasRDI": true,
                    "daily": 123.25,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 76.75,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 243.75,
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
                    "total": 2.5150000000000006,
                    "hasRDI": true,
                    "daily": 16.76666666666667,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 75.075,
                    "hasRDI": true,
                    "daily": 62.5625,
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
                    "total": 607.275,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        }
    }
]

const dinnerList = [
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_e3e22590e314df786f3d7489c6806073",
            "label": "Tomato & Dinner Roll Panzanella",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/1c0/1c083fd6f4412a511d7f30e618ae5b5a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDWV5RMDbRXk0MA3EuWZkf9qybHtyBhtBzAHnxxjZ%2B7uAIhAKUPiHAMGpNeCTEo58xgSlXELFobx6%2BITXdZMJ6T7BpFKrgFCEYQABoMMTg3MDE3MTUwOTg2IgyvWZjNue9Ry7KlKlIqlQUsMKu1wZUizXY1V%2BiLKD1i2Q6SYEe4bDHQL9UCK%2BMyvFYnNIOJllXsvx28jsP1mul9oDPovKZ%2B0eiye5LerYK3v%2B37Ke8WNXHJbPc1C4dltqM0bbaF6fVkc2To%2BhEb0rc0Fr7j1hJQbraPUjWU4jwsYxaVgszrCsfdRtiC8oqWz3tfteR401OneiOZJ%2BiXQs0abwxNuQcWUfXIubTLlsXqigFays%2BT6h6MJ%2F8wa%2F%2BAuaAdpptqQ6pke2Qm78j9Bpn1TobDCVbKgcYy94DhwXJfBK2Om13%2BuAsCnc1%2BPfnip4jZzKfEuIBrMrXiPLR2QX6PO5EVRdE5Sm0TeJGxJNdyMyqz1uvwPQgv2KXnCu9AtMS4Ueu4181WEEh7s9fvZtfLQ%2FOb5fQ%2FQGalrk5Ntt8t%2FGzn8dnxz5XsPdf%2F4EKvLt2ZAlGmQxudM2L2OfOUfL3TT5GTzzToq8iftOQgZNXqG4dhhrR8EE3R1jBFhPhr5i6AzWm3%2BSsQvq9OSqKT8UsXxRJNnchd3b%2BEBaCzLFlPuSlzWsolHk7gwJHISlpl3zJEU5WHOSDvY3h2Kf133LlxY%2Fpoq3mu1Zik3WdPV%2FyywTQJpd%2FHmLEDc6IvtinLxcDnHjASmHx7a59a2SIpPjy4tnCRRpsE5Xg9jXB0asBWmNdU%2FxxNFo78qoxHpLhUI46gbOZOOIgaJlSFRwxsPh7tYP8S8PsMgXzjrV%2FimE2iMj7VvRJOwhSSIkJj1uVU%2FI0deDEUpQTzM4x4tCunwHnsu2cOaU7%2BN0kWZD7eIPeoSYjIdyLTTxBpg2JtzcFR1pqjhNQwMeIHdYynpOKGqs6NcRWHVFs2YLVeZRsQz1ucRdq4vCYdeKbTHb3UC%2Fro6gk3wkAlMJrC0LMGOrABmPbFK%2BMAYWVPd4cH8mUQjieyay%2F3GgPIP4BH5nLZGf3HiAICzRf1BHCRMhZpOrJ6Uyu0yDMPvsskM6GGqclB%2BprD6XC9clyCOlegoOICdxBYhXFrrKp%2BML6UBgA%2BMV9yWTL%2FyquUd1swQCT%2BTcOwUcNgzFz1F2YxZ81f%2FbqNB2FP%2Bv0iXzcnmMSIvBtF6x6LBIRnpU5TfgoNfmoRxJM6WVV8cDXqAuim6YBp4TEtymI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240620T131916Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHPLZHEEG%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2496671434be4be164934518efc5aabe1e6893e912fd61d4adb42e9b1c15aeb2",
            "source": "Big Girls Small Kitchen",
            "url": "http://www.biggirlssmallkitchen.com/2010/08/recipe-flash-tomato-dinner-roll.html",
            "shareAs": "http://www.edamam.com/recipe/tomato-dinner-roll-panzanella-e3e22590e314df786f3d7489c6806073/dinner",
            "yield": 1,
            "dietLabels": [
                "Balanced",
                "High-Fiber"
            ],
            "healthLabels": [
                "Vegetarian",
                "Pescatarian",
                "Mediterranean",
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
                "1 1/2 dinner rolls, torn into bite-sized pieces (or about ¾ cup of any torn bread)",
                "2 teaspoons white wine vinegar",
                "1 tablespoon olive oil",
                "¼ teaspoon smoked paprika",
                "¼ teaspoon salt",
                "pinch red pepper flakes",
                "2 tablespoons scallions, white and light green parts, plus more for garnish",
                "about 1 ½ cups halved cherry tomtaoes",
                "2 tablespoons crumbled feta"
            ],
            "ingredients": [
                {
                    "text": "1 1/2 dinner rolls, torn into bite-sized pieces (or about ¾ cup of any torn bread)",
                    "quantity": 1.5,
                    "measure": "<unit>",
                    "food": "dinner rolls",
                    "weight": 129,
                    "foodCategory": "bread, rolls and tortillas",
                    "foodId": "food_brzr92vbg3padwap9ikxoblah2a3",
                    "image": "https://www.edamam.com/food-img/608/6083ff46b1479341352f3fde8d1c9948.jpg"
                },
                {
                    "text": "2 teaspoons white wine vinegar",
                    "quantity": 2,
                    "measure": "teaspoon",
                    "food": "white wine vinegar",
                    "weight": 10,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_ai77igmb8f0rj6blsokr8bxx5n2n",
                    "image": "https://www.edamam.com/food-img/5f6/5f69b84c399d778c4728e9ab4f8065a2.jpg"
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
                    "text": "¼ teaspoon smoked paprika",
                    "quantity": 0.25,
                    "measure": "teaspoon",
                    "food": "smoked paprika",
                    "weight": 0.575,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
                    "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
                },
                {
                    "text": "¼ teaspoon salt",
                    "quantity": 0.25,
                    "measure": "teaspoon",
                    "food": "salt",
                    "weight": 1.5,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                    "text": "pinch red pepper flakes",
                    "quantity": 1,
                    "measure": "pinch",
                    "food": "red pepper flakes",
                    "weight": 0.04817708339442312,
                    "foodCategory": "vegetables",
                    "foodId": "food_bispmxiaijcuxcagex14mbhk2o48",
                    "image": "https://www.edamam.com/food-img/6cb/6cb8e4510251a322178f6e191b3a7b1b.jpeg"
                },
                {
                    "text": "2 tablespoons scallions, white and light green parts, plus more for garnish",
                    "quantity": 2,
                    "measure": "tablespoon",
                    "food": "scallions",
                    "weight": 12,
                    "foodCategory": "vegetables",
                    "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
                    "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
                },
                {
                    "text": "about 1 ½ cups halved cherry tomtaoes",
                    "quantity": 1.5,
                    "measure": "cup",
                    "food": "cherry",
                    "weight": 231,
                    "foodCategory": "fruit",
                    "foodId": "food_bv3hog1bd5qa4oafi7lb3bjz8i92",
                    "image": "https://www.edamam.com/food-img/34b/34b23d901752b022d6ab1ee6f9ed0b74.jpg"
                },
                {
                    "text": "2 tablespoons crumbled feta",
                    "quantity": 2,
                    "measure": "tablespoon",
                    "food": "feta",
                    "weight": 30.6796874994813,
                    "foodCategory": "Cheese",
                    "foodId": "food_biry7gubtkpad3a7qkz6uba5acn9",
                    "image": "https://www.edamam.com/food-img/37e/37ef3e404b1c02bf4707cb82010732b8.jpg"
                }
            ],
            "calories": 753.4887656238234,
            "totalWeight": 426.8995610954793,
            "totalTime": 0,
            "cuisineType": [
                "italian"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "bread"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 753.4887656238234,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 29.004206900933696,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 7.82791511711901,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 0,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 13.819412031226321,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 5.011878307290482,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 106.45934765627258,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 98.50184583333838,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 7.9575018229342,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 37.090125781275106,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 21.171897395766155,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 32.46492187453836,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 992.5215255301857,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 421.6374962229952,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 68.34600342341457,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 758.6250534301624,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 6.2105719630752425,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 2.395660602748288,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 316.0026484358491,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 67.350546875158,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 18.704302604185852,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 0.7966932421867507,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 0.8348771874963552,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 7.712327656250157,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 0.3884171093732956,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 220.54382031236517,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 65.74382031236517,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 91.59,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 0.686186718741234,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 0.1227187499979252,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 2.7569611979176516,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 52.55799062505664,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 263.7772255542016,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 37.67443828119117,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 44.62185677066722,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 39.13957558559505,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 35.48644921875753,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 31.8300072917368,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 42.34379479153231,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 10.821640624846122,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 41.35506356375774,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 42.16374962229952,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 16.27285795795585,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 16.140958583620478,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 34.50317757264023,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 21.778732752257163,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 45.143235490835586,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 7.4833940972397786,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 20.78255844909539,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 66.39110351556256,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 64.22132211510424,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 48.20204785156348,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 29.8782391825612,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 55.13595507809129,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 28.591113280884755,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 0.818124999986168,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 18.37974131945101,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 43.79832552088053,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 29.004206900933696,
                    "hasRDI": true,
                    "daily": 44.62185677066722,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 7.82791511711901,
                            "hasRDI": true,
                            "daily": 39.13957558559505,
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
                            "total": 13.819412031226321,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 5.011878307290482,
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
                    "total": 106.45934765627258,
                    "hasRDI": true,
                    "daily": 35.48644921875753,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 98.50184583333838,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 7.9575018229342,
                            "hasRDI": true,
                            "daily": 31.8300072917368,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 37.090125781275106,
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
                    "total": 21.171897395766155,
                    "hasRDI": true,
                    "daily": 42.34379479153231,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 32.46492187453836,
                    "hasRDI": true,
                    "daily": 10.821640624846122,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 992.5215255301857,
                    "hasRDI": true,
                    "daily": 41.35506356375774,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 421.6374962229952,
                    "hasRDI": true,
                    "daily": 42.16374962229952,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 68.34600342341457,
                    "hasRDI": true,
                    "daily": 16.27285795795585,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 758.6250534301624,
                    "hasRDI": true,
                    "daily": 16.140958583620478,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 6.2105719630752425,
                    "hasRDI": true,
                    "daily": 34.50317757264023,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 2.395660602748288,
                    "hasRDI": true,
                    "daily": 21.778732752257163,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 316.0026484358491,
                    "hasRDI": true,
                    "daily": 45.143235490835586,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 67.350546875158,
                    "hasRDI": true,
                    "daily": 7.4833940972397786,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 18.704302604185852,
                    "hasRDI": true,
                    "daily": 20.78255844909539,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 0.7966932421867507,
                    "hasRDI": true,
                    "daily": 66.39110351556256,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 0.8348771874963552,
                    "hasRDI": true,
                    "daily": 64.22132211510424,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 7.712327656250157,
                    "hasRDI": true,
                    "daily": 48.20204785156348,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 0.3884171093732956,
                    "hasRDI": true,
                    "daily": 29.8782391825612,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 220.54382031236517,
                    "hasRDI": true,
                    "daily": 55.13595507809129,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 65.74382031236517,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 91.59,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 0.686186718741234,
                    "hasRDI": true,
                    "daily": 28.591113280884755,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 0.1227187499979252,
                    "hasRDI": true,
                    "daily": 0.818124999986168,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 2.7569611979176516,
                    "hasRDI": true,
                    "daily": 18.37974131945101,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 52.55799062505664,
                    "hasRDI": true,
                    "daily": 43.79832552088053,
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
                    "total": 263.7772255542016,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        }
    }
]

const lunchList = [
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_3cfba4e01db6e203abda1fa0c0c1da97",
            "label": "Dinner Tonight: Chipped Beef Gravy",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/8eb/8eb4bcfbe8c89c21fcaecdc4e7ac6da5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDWV5RMDbRXk0MA3EuWZkf9qybHtyBhtBzAHnxxjZ%2B7uAIhAKUPiHAMGpNeCTEo58xgSlXELFobx6%2BITXdZMJ6T7BpFKrgFCEYQABoMMTg3MDE3MTUwOTg2IgyvWZjNue9Ry7KlKlIqlQUsMKu1wZUizXY1V%2BiLKD1i2Q6SYEe4bDHQL9UCK%2BMyvFYnNIOJllXsvx28jsP1mul9oDPovKZ%2B0eiye5LerYK3v%2B37Ke8WNXHJbPc1C4dltqM0bbaF6fVkc2To%2BhEb0rc0Fr7j1hJQbraPUjWU4jwsYxaVgszrCsfdRtiC8oqWz3tfteR401OneiOZJ%2BiXQs0abwxNuQcWUfXIubTLlsXqigFays%2BT6h6MJ%2F8wa%2F%2BAuaAdpptqQ6pke2Qm78j9Bpn1TobDCVbKgcYy94DhwXJfBK2Om13%2BuAsCnc1%2BPfnip4jZzKfEuIBrMrXiPLR2QX6PO5EVRdE5Sm0TeJGxJNdyMyqz1uvwPQgv2KXnCu9AtMS4Ueu4181WEEh7s9fvZtfLQ%2FOb5fQ%2FQGalrk5Ntt8t%2FGzn8dnxz5XsPdf%2F4EKvLt2ZAlGmQxudM2L2OfOUfL3TT5GTzzToq8iftOQgZNXqG4dhhrR8EE3R1jBFhPhr5i6AzWm3%2BSsQvq9OSqKT8UsXxRJNnchd3b%2BEBaCzLFlPuSlzWsolHk7gwJHISlpl3zJEU5WHOSDvY3h2Kf133LlxY%2Fpoq3mu1Zik3WdPV%2FyywTQJpd%2FHmLEDc6IvtinLxcDnHjASmHx7a59a2SIpPjy4tnCRRpsE5Xg9jXB0asBWmNdU%2FxxNFo78qoxHpLhUI46gbOZOOIgaJlSFRwxsPh7tYP8S8PsMgXzjrV%2FimE2iMj7VvRJOwhSSIkJj1uVU%2FI0deDEUpQTzM4x4tCunwHnsu2cOaU7%2BN0kWZD7eIPeoSYjIdyLTTxBpg2JtzcFR1pqjhNQwMeIHdYynpOKGqs6NcRWHVFs2YLVeZRsQz1ucRdq4vCYdeKbTHb3UC%2Fro6gk3wkAlMJrC0LMGOrABmPbFK%2BMAYWVPd4cH8mUQjieyay%2F3GgPIP4BH5nLZGf3HiAICzRf1BHCRMhZpOrJ6Uyu0yDMPvsskM6GGqclB%2BprD6XC9clyCOlegoOICdxBYhXFrrKp%2BML6UBgA%2BMV9yWTL%2FyquUd1swQCT%2BTcOwUcNgzFz1F2YxZ81f%2FbqNB2FP%2Bv0iXzcnmMSIvBtF6x6LBIRnpU5TfgoNfmoRxJM6WVV8cDXqAuim6YBp4TEtymI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240620T132239Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHPLZHEEG%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1b9f9e0dda2253b099c3fe305f3a0a43ad358d4a109b1f1c19f30ea9e9ef47a8",
            "source": "Serious Eats",
            "url": "http://www.seriouseats.com/recipes/2010/02/chipped-beef-gravy-on-toast-stew-on-a-shingle-recipe.html",
            "shareAs": "http://www.edamam.com/recipe/dinner-tonight-chipped-beef-gravy-3cfba4e01db6e203abda1fa0c0c1da97/lunch",
            "yield": 2,
            "dietLabels": [],
            "healthLabels": [
                "Egg-Free",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Soy-Free",
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
                "1 tablespoon butter",
                "1 tablespoon flour",
                "1 cup milk",
                "2 ounces dried beef lunch meat (Buddy brand is recommended), sliced into 1/2-inch pieces",
                "Salt and pepper",
                "Pinch grated nutmeg",
                "Dash Worcestershire sauce",
                "2 slices white bread"
            ],
            "ingredients": [
                {
                    "text": "1 tablespoon butter",
                    "quantity": 1,
                    "measure": "tablespoon",
                    "food": "butter",
                    "weight": 14.2,
                    "foodCategory": "Dairy",
                    "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                    "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                },
                {
                    "text": "1 tablespoon flour",
                    "quantity": 1,
                    "measure": "tablespoon",
                    "food": "flour",
                    "weight": 7.8124999998679145,
                    "foodCategory": "grains",
                    "foodId": "food_ahebfs0a985an4aubqaebbipra58",
                    "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
                },
                {
                    "text": "1 cup milk",
                    "quantity": 1,
                    "measure": "cup",
                    "food": "milk",
                    "weight": 244,
                    "foodCategory": "Milk",
                    "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                    "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
                },
                {
                    "text": "2 ounces dried beef lunch meat (Buddy brand is recommended), sliced into 1/2-inch pieces",
                    "quantity": 2,
                    "measure": "ounce",
                    "food": "meat",
                    "weight": 56.69904625,
                    "foodCategory": "meats",
                    "foodId": "food_bknby1la98smrsbwnthinbam42nj",
                    "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
                },
                {
                    "text": "Salt and pepper",
                    "quantity": 0,
                    "measure": null,
                    "food": "Salt",
                    "weight": 2.289441152498806,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                    "text": "Salt and pepper",
                    "quantity": 0,
                    "measure": null,
                    "food": "pepper",
                    "weight": 1.144720576249403,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                    "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                },
                {
                    "text": "Pinch grated nutmeg",
                    "quantity": 1,
                    "measure": "pinch",
                    "food": "grated nutmeg",
                    "weight": 0.14583333352071937,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_aa8vp2kadkkiiubgpp48fazrqiq2",
                    "image": "https://www.edamam.com/food-img/b9e/b9e54f78ae18cf99a6504b472ba25e7b.jpg"
                },
                {
                    "text": "Dash Worcestershire sauce",
                    "quantity": 1,
                    "measure": "dash",
                    "food": "Worcestershire sauce",
                    "weight": 0.7161458330790678,
                    "foodCategory": "canned soup",
                    "foodId": "food_ahb8mscbejo58ubexo0itam1i74g",
                    "image": "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg"
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
                }
            ],
            "calories": 515.9105660633599,
            "totalWeight": 383.890078355797,
            "totalTime": 0,
            "cuisineType": [
                "american"
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
                    "quantity": 515.9105660633599,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 24.967642015477455,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 13.307762844766527,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 0.160887615625,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 7.102138254272735,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 2.062787396392746,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 46.24151335757573,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 43.390628218415884,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 2.850885139159842,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 15.758314961667816,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 27.191949096593948,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 90.65039913749999,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 890.0036266911441,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 366.5577123074769,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 64.41871418013142,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 648.6729310974771,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 3.597864793867656,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 4.660176003098069,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 417.211401373078,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 210.8541544389173,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 0.21347395830590038,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 0.40830642063932787,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 0.6659359902453056,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 6.3555222803599145,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 0.48169855291046076,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 74.14094888555013,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 54.420948885550125,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 11.6,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 2.4092083498750005,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 3.22869904625,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 0.7296637939093777,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 7.326426397129415,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 280.32019157113695,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 25.795528303167995,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 38.41175694688839,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 66.53881422383265,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 15.413837785858574,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 11.403540556639369,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 54.383898193187896,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 30.216799712499995,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 37.083484445464336,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 36.65577123074769,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 15.337789090507481,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 13.801551725478237,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 19.988137743709203,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 42.36523639180063,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 59.60162876758257,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 23.428239382101925,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 0.23719328700655598,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 34.02553505327732,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 51.225845403485046,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 39.722014252249465,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 37.05373483926621,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 18.535237221387533,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 100.38368124479169,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 21.524660308333335,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 4.864425292729185,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 6.10535533094118,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 24.967642015477455,
                    "hasRDI": true,
                    "daily": 38.41175694688839,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 13.307762844766527,
                            "hasRDI": true,
                            "daily": 66.53881422383265,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.160887615625,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 7.102138254272735,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 2.062787396392746,
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
                    "total": 46.24151335757573,
                    "hasRDI": true,
                    "daily": 15.413837785858574,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 43.390628218415884,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 2.850885139159842,
                            "hasRDI": true,
                            "daily": 11.403540556639369,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 15.758314961667816,
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
                    "total": 27.191949096593948,
                    "hasRDI": true,
                    "daily": 54.383898193187896,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 90.65039913749999,
                    "hasRDI": true,
                    "daily": 30.216799712499995,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 890.0036266911441,
                    "hasRDI": true,
                    "daily": 37.083484445464336,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 366.5577123074769,
                    "hasRDI": true,
                    "daily": 36.65577123074769,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 64.41871418013142,
                    "hasRDI": true,
                    "daily": 15.337789090507481,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 648.6729310974771,
                    "hasRDI": true,
                    "daily": 13.801551725478237,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 3.597864793867656,
                    "hasRDI": true,
                    "daily": 19.988137743709203,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 4.660176003098069,
                    "hasRDI": true,
                    "daily": 42.36523639180063,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 417.211401373078,
                    "hasRDI": true,
                    "daily": 59.60162876758257,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 210.8541544389173,
                    "hasRDI": true,
                    "daily": 23.428239382101925,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 0.21347395830590038,
                    "hasRDI": true,
                    "daily": 0.23719328700655598,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 0.40830642063932787,
                    "hasRDI": true,
                    "daily": 34.02553505327732,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 0.6659359902453056,
                    "hasRDI": true,
                    "daily": 51.225845403485046,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 6.3555222803599145,
                    "hasRDI": true,
                    "daily": 39.722014252249465,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 0.48169855291046076,
                    "hasRDI": true,
                    "daily": 37.05373483926621,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 74.14094888555013,
                    "hasRDI": true,
                    "daily": 18.535237221387533,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 54.420948885550125,
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
                    "total": 2.4092083498750005,
                    "hasRDI": true,
                    "daily": 100.38368124479169,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 3.22869904625,
                    "hasRDI": true,
                    "daily": 21.524660308333335,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 0.7296637939093777,
                    "hasRDI": true,
                    "daily": 4.864425292729185,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 7.326426397129415,
                    "hasRDI": true,
                    "daily": 6.10535533094118,
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
                    "total": 280.32019157113695,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        }
    }
]

const snackList = [
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_ff9f9833d66e6446a47d9f2325173243",
            "label": "Salty-Savory-Spicy Snack Mix",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/fd9/fd98fcbe19f1d7a0c3090a1560bb9c51.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQC0sxUPoDJAVru7XP1eNcoFYFFWtt0Fzp5KOLAk%2FrUd%2BwIhAKyt939Gvf2lJsuC9%2F%2FwrduJWgSIW6szajVs60WtFsjwKrkFCEYQABoMMTg3MDE3MTUwOTg2Igz02udOHtPMWneWJA0qlgWwIyqzhGl7PKXcBkGWqObTG0aXDaKYVv7MIGzrJyku5j56YWA%2BUvJkWNVdKtZFFxVQZxxImpdRLMPU4EeoaHI%2F2E%2BhlKhKx%2FV3WoJGvE0jBx%2BiHFH9XmDMX5lkA2f3aoSfNh65oVYSLZTnLmdtkR71Rs4lozoK1q%2Bf3PmQqV4nH68M1kPnn%2FNqaN8M4sZTwDw43CWIug7EDx1%2BXkn6nmRrNehYmDbwNAD8126HW8q1v%2Fpk2q2twGCDGLlRp%2B9SDULAGE22936X2m51P2eVMWOeWEKcyD2Ma6DCn1k4YLQxm4%2BVW%2BV3o%2F69CkAUUTzYsqkUFO%2BFU6LWzumUg1cuTO0h56FVzzlQTX8i6XdRe%2BhGuL1LsUy1FsJia7F5WOX2AaSs1sMP6amsnso4EmPWIaSS6wRWMjik6q0cjssOL6ud%2FBJ%2BJTWb1je5JP8t9BcUt8c3XE9%2FMGVPwa687x7qVWYNFKeyFZW83SqP2UDMtq31a0DFVMQF9W2Ew0VQ4PZK2G92aeNt5C4ryZKXkZKAkTiiC5tEiyxHg5KFAsQgg1S6JtpiHjkrnNCppGNgojGAyprKYgzSP4pslGmE8I3uF6nM0EyqDC41zrPZDHa8zSA%2FTy9HSStcq7PDtkPU%2FJbTwaWuCB6NZ0T2FmDDxZ6si8tnC8J1p0HAzWHa0Vdrzf099kOfXW5rWCoO8VndZhJL7TKISm%2BHro%2BB8frZMz15UVyHFTWZ960xxbDZnIyY5k5wCiMQyLhXj0bVw5jaIFc9R8dLAj1FRLj4wDnTTC1Yee4GsMpm9B7iB7orZc1Mz%2Bb7ZTrzKGsQs5eiGmQoGOwK4nrN6Ln3O8KTw%2FBW2P8iid7IozNy71fNqowspqG7grb9lATVlpfVhjCNz9CzBjqwASFWHiY8Rg131eIJzIFbw75%2FBHr8ipkGqR%2FHCXU16blsF1edTj37aRIlSru3d6PXSl3MaoSGgdp6aPJq6ve6d%2Bw55Bp3fvy5UOLzqKkRNxzyBrAspIAkF5IEXQjEAsNgc2z8mhoZDBT2S20MwYP3bU5rHDSAhbhLsy%2FsI%2FnHTin4%2FJf3DUztR4h6nBXduoxWMEElHsoxLMoEK5zIFTWLVuH7i1%2B9cCbFYP28zXQatx0s&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240620T132514Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKS5Z3CBH%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=08014d98c5262bbee5a852095313d4abe03a251bae21526d3cadba0ed97ca0fc",
            "source": "Epicurious",
            "url": "https://www.epicurious.com/recipes/food/views/asian-flavored-snack-mix-365215",
            "shareAs": "http://www.edamam.com/recipe/salty-savory-spicy-snack-mix-ff9f9833d66e6446a47d9f2325173243/snack",
            "yield": 16,
            "dietLabels": [],
            "healthLabels": [
                "Kidney-Friendly",
                "Vegetarian",
                "Pescatarian",
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
                "Gluten",
                "Wheat",
                "Sulfites"
            ],
            "ingredientLines": [
                "1 stick (1/2 cup) unsalted butter, cut into 8 pieces",
                "2 tablespoons sugar",
                "2 tablespoons soy sauce",
                "2 tablespoons hoisin sauce",
                "1 tablespoon sesame oil",
                "3/4 teaspoon garlic powder",
                "3/4 teaspoon ground ginger",
                "3/4 teaspoon cayenne pepper",
                "8 cups (3 ounces) popped popcorn",
                "6 cups (6 ounces) rice cereal squares",
                "1 (5 ounces) can chow mein noodles",
                "1 (3 oz) package rice cracker snack mix",
                "2 cups salted roasted cashews or dry-roasted peanuts",
                "1 cup wasabi peas or dried peas"
            ],
            "ingredients": [
                {
                    "text": "1 stick (1/2 cup) unsalted butter, cut into 8 pieces",
                    "quantity": 0.5,
                    "measure": "cup",
                    "food": "unsalted butter",
                    "weight": 113.5,
                    "foodCategory": "Dairy",
                    "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                    "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                },
                {
                    "text": "2 tablespoons sugar",
                    "quantity": 2,
                    "measure": "tablespoon",
                    "food": "sugar",
                    "weight": 24.9999999995774,
                    "foodCategory": "sugars",
                    "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                    "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                },
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
                    "text": "2 tablespoons hoisin sauce",
                    "quantity": 2,
                    "measure": "tablespoon",
                    "food": "hoisin sauce",
                    "weight": 32,
                    "foodCategory": "canned soup",
                    "foodId": "food_a50yq9jao6jvt5a4oxygsbmfbeuy",
                    "image": "https://www.edamam.com/food-img/c52/c529c507459e9133ad8689cec193f713.jpg"
                },
                {
                    "text": "1 tablespoon sesame oil",
                    "quantity": 1,
                    "measure": "tablespoon",
                    "food": "sesame oil",
                    "weight": 13.6,
                    "foodCategory": "Oils",
                    "foodId": "food_b2id9opa0l5afvbw2do5xa1fnz4q",
                    "image": "https://www.edamam.com/food-img/b87/b874ddcfb6770adc7a155355a902ffb8.jpg"
                },
                {
                    "text": "3/4 teaspoon garlic powder",
                    "quantity": 0.75,
                    "measure": "teaspoon",
                    "food": "garlic powder",
                    "weight": 2.325,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_boq94r1a036492bdup9u1beyph0l",
                    "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
                },
                {
                    "text": "3/4 teaspoon ground ginger",
                    "quantity": 0.75,
                    "measure": "teaspoon",
                    "food": "ground ginger",
                    "weight": 1.35,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_a8l1yfna3fgp3ha4a5b5labyetgz",
                    "image": "https://www.edamam.com/food-img/ee0/ee08c937de5c45a36bd0ad1eafc67496.jpg"
                },
                {
                    "text": "3/4 teaspoon cayenne pepper",
                    "quantity": 0.75,
                    "measure": "teaspoon",
                    "food": "cayenne pepper",
                    "weight": 1.35,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_a8iooz3aris8gba605l07brngnrx",
                    "image": "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg"
                },
                {
                    "text": "8 cups (3 ounces) popped popcorn",
                    "quantity": 3,
                    "measure": "ounce",
                    "food": "popped popcorn",
                    "weight": 85.048569375,
                    "foodCategory": "savory snacks",
                    "foodId": "food_btstgycbd4sqzma2c239qaeuy5at",
                    "image": "https://www.edamam.com/food-img/dd5/dd51dd3656053985cf1c47ca5c75c4db.jpg"
                },
                {
                    "text": "6 cups (6 ounces) rice cereal squares",
                    "quantity": 6,
                    "measure": "ounce",
                    "food": "rice cereal",
                    "weight": 170.09713875,
                    "foodCategory": "ready-to-eat cereals",
                    "foodId": "food_a3nj4wfbuuwf7ba7723gvahpaboc",
                    "image": "https://www.edamam.com/food-img/07a/07a5a5c6a68be685cb8be43d68504616.jpg"
                },
                {
                    "text": "1 (5 ounces) can chow mein noodles",
                    "quantity": 5,
                    "measure": "ounce",
                    "food": "noodles",
                    "weight": 141.747615625,
                    "foodCategory": "grains",
                    "foodId": "food_aefg3gqa71nrtpbhjfo3yb36kd81",
                    "image": "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg"
                },
                {
                    "text": "1 (3 oz) package rice cracker snack mix",
                    "quantity": 3,
                    "measure": "ounce",
                    "food": "snack mix",
                    "weight": 85.048569375,
                    "foodCategory": "savory snacks",
                    "foodId": "food_bfx99saagz0sqlaj35aegazekzpc",
                    "image": "https://www.edamam.com/food-img/542/5428082dd6425ced41d4a79b9e9b9fe6.jpg"
                },
                {
                    "text": "2 cups salted roasted cashews or dry-roasted peanuts",
                    "quantity": 2,
                    "measure": "cup",
                    "food": "salted roasted cashews",
                    "weight": 274,
                    "foodCategory": "plant-based protein",
                    "foodId": "food_bewkoz6a7kj3m4anocusnbk015ot",
                    "image": "https://www.edamam.com/food-img/3b1/3b1410a8df3d5e1aefb0d345dcdc9e69.jpg"
                },
                {
                    "text": "1 cup wasabi peas or dried peas",
                    "quantity": 1,
                    "measure": "cup",
                    "food": "peas",
                    "weight": 145,
                    "foodCategory": "vegetables",
                    "foodId": "food_bbi35jtbjt7un9bsa2m7eazlsk91",
                    "image": "https://www.edamam.com/food-img/5ed/5ed641d646c028598a90bdb9ece34fc8.jpg"
                }
            ],
            "calories": 4838.800372798364,
            "totalWeight": 1122.0668931245773,
            "totalTime": 90,
            "cuisineType": [
                "american"
            ],
            "mealType": [
                "lunch/dinner",
                "snack"
            ],
            "dishType": [
                "starter"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 4838.800372798364,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 274.48704725937495,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 92.20364820311875,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 0.46323120786249994,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 118.50017555794375,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 48.769157661581254,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 521.473989666265,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 483.679115848765,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 37.794873817500005,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 63.32128556264074,
                    "unit": "g"
                },
                "SUGAR.added": {
                    "label": "Sugars, added",
                    "quantity": 24.949999999578246,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 101.0873710795625,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 364.05299712500005,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 4718.5807695937465,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 310.45261431874576,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 1052.07152011875,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 3075.670925981242,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 84.4100373232498,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 25.416949029874957,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 2459.47216990625,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 890.4479802062501,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 59.451895708125,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 7.392080661512502,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 4.8862230828749205,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 85.21487849420001,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 1.787577883325,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 944.7884249374999,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 389.13777168750005,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 327.43699209374995,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 0.6040180853125,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 0.42524284687499997,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 8.631523913625,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 146.46257656125002,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 197.2768440043124,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 241.9400186399182,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 422.28776501442303,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 461.0182410155938,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 173.82466322208833,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 151.17949527000002,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 202.174742159125,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 121.35099904166668,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 196.6075320664061,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 31.045261431874575,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 250.49321907589282,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 65.4398069357711,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 468.9446517958322,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 231.06317299886325,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 351.35316712946434,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 98.93866446736112,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 66.05766189791667,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 616.0067217927085,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 375.8633140673016,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 532.59299058875,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 137.50599102500001,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 236.19710623437498,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 25.167420221354167,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 2.8349523125,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 57.54349275749999,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 122.05214713437502,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 274.48704725937495,
                    "hasRDI": true,
                    "daily": 422.28776501442303,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 92.20364820311875,
                            "hasRDI": true,
                            "daily": 461.0182410155938,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.46323120786249994,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 118.50017555794375,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 48.769157661581254,
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
                    "total": 521.473989666265,
                    "hasRDI": true,
                    "daily": 173.82466322208833,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 483.679115848765,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 37.794873817500005,
                            "hasRDI": true,
                            "daily": 151.17949527000002,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 63.32128556264074,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 24.949999999578246,
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
                    "total": 101.0873710795625,
                    "hasRDI": true,
                    "daily": 202.174742159125,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 364.05299712500005,
                    "hasRDI": true,
                    "daily": 121.35099904166668,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 4718.5807695937465,
                    "hasRDI": true,
                    "daily": 196.6075320664061,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 310.45261431874576,
                    "hasRDI": true,
                    "daily": 31.045261431874575,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 1052.07152011875,
                    "hasRDI": true,
                    "daily": 250.49321907589282,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 3075.670925981242,
                    "hasRDI": true,
                    "daily": 65.4398069357711,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 84.4100373232498,
                    "hasRDI": true,
                    "daily": 468.9446517958322,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 25.416949029874957,
                    "hasRDI": true,
                    "daily": 231.06317299886325,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 2459.47216990625,
                    "hasRDI": true,
                    "daily": 351.35316712946434,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 890.4479802062501,
                    "hasRDI": true,
                    "daily": 98.93866446736112,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 59.451895708125,
                    "hasRDI": true,
                    "daily": 66.05766189791667,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 7.392080661512502,
                    "hasRDI": true,
                    "daily": 616.0067217927085,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 4.8862230828749205,
                    "hasRDI": true,
                    "daily": 375.8633140673016,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 85.21487849420001,
                    "hasRDI": true,
                    "daily": 532.59299058875,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 1.787577883325,
                    "hasRDI": true,
                    "daily": 137.50599102500001,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 944.7884249374999,
                    "hasRDI": true,
                    "daily": 236.19710623437498,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 389.13777168750005,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 327.43699209374995,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 0.6040180853125,
                    "hasRDI": true,
                    "daily": 25.167420221354167,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 0.42524284687499997,
                    "hasRDI": true,
                    "daily": 2.8349523125,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 8.631523913625,
                    "hasRDI": true,
                    "daily": 57.54349275749999,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 146.46257656125002,
                    "hasRDI": true,
                    "daily": 122.05214713437502,
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
                    "total": 197.2768440043124,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        }
    }
]

const teaTimeList =[
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_25abfe4cabf0a73f20ff7268a57ecdc9",
            "label": "Teatime Perfect Popovers",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/12b/12b86c12902e7b33e5815053cfd4efbc.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDWV5RMDbRXk0MA3EuWZkf9qybHtyBhtBzAHnxxjZ%2B7uAIhAKUPiHAMGpNeCTEo58xgSlXELFobx6%2BITXdZMJ6T7BpFKrgFCEYQABoMMTg3MDE3MTUwOTg2IgyvWZjNue9Ry7KlKlIqlQUsMKu1wZUizXY1V%2BiLKD1i2Q6SYEe4bDHQL9UCK%2BMyvFYnNIOJllXsvx28jsP1mul9oDPovKZ%2B0eiye5LerYK3v%2B37Ke8WNXHJbPc1C4dltqM0bbaF6fVkc2To%2BhEb0rc0Fr7j1hJQbraPUjWU4jwsYxaVgszrCsfdRtiC8oqWz3tfteR401OneiOZJ%2BiXQs0abwxNuQcWUfXIubTLlsXqigFays%2BT6h6MJ%2F8wa%2F%2BAuaAdpptqQ6pke2Qm78j9Bpn1TobDCVbKgcYy94DhwXJfBK2Om13%2BuAsCnc1%2BPfnip4jZzKfEuIBrMrXiPLR2QX6PO5EVRdE5Sm0TeJGxJNdyMyqz1uvwPQgv2KXnCu9AtMS4Ueu4181WEEh7s9fvZtfLQ%2FOb5fQ%2FQGalrk5Ntt8t%2FGzn8dnxz5XsPdf%2F4EKvLt2ZAlGmQxudM2L2OfOUfL3TT5GTzzToq8iftOQgZNXqG4dhhrR8EE3R1jBFhPhr5i6AzWm3%2BSsQvq9OSqKT8UsXxRJNnchd3b%2BEBaCzLFlPuSlzWsolHk7gwJHISlpl3zJEU5WHOSDvY3h2Kf133LlxY%2Fpoq3mu1Zik3WdPV%2FyywTQJpd%2FHmLEDc6IvtinLxcDnHjASmHx7a59a2SIpPjy4tnCRRpsE5Xg9jXB0asBWmNdU%2FxxNFo78qoxHpLhUI46gbOZOOIgaJlSFRwxsPh7tYP8S8PsMgXzjrV%2FimE2iMj7VvRJOwhSSIkJj1uVU%2FI0deDEUpQTzM4x4tCunwHnsu2cOaU7%2BN0kWZD7eIPeoSYjIdyLTTxBpg2JtzcFR1pqjhNQwMeIHdYynpOKGqs6NcRWHVFs2YLVeZRsQz1ucRdq4vCYdeKbTHb3UC%2Fro6gk3wkAlMJrC0LMGOrABmPbFK%2BMAYWVPd4cH8mUQjieyay%2F3GgPIP4BH5nLZGf3HiAICzRf1BHCRMhZpOrJ6Uyu0yDMPvsskM6GGqclB%2BprD6XC9clyCOlegoOICdxBYhXFrrKp%2BML6UBgA%2BMV9yWTL%2FyquUd1swQCT%2BTcOwUcNgzFz1F2YxZ81f%2FbqNB2FP%2Bv0iXzcnmMSIvBtF6x6LBIRnpU5TfgoNfmoRxJM6WVV8cDXqAuim6YBp4TEtymI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240620T132635Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHPLZHEEG%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a9ee94cc8f1a4d6b574408fb2173ad96d60eba3ce3af769de86ffb7caa926b27",
            "source": "Epicurious",
            "url": "https://www.epicurious.com/recipes/food/views/teatime-perfect-popovers-351609",
            "shareAs": "http://www.edamam.com/recipe/teatime-perfect-popovers-25abfe4cabf0a73f20ff7268a57ecdc9/teatime",
            "yield": 6,
            "dietLabels": [
                "Balanced"
            ],
            "healthLabels": [
                "Sugar-Conscious",
                "Low Potassium",
                "Kidney-Friendly",
                "Vegetarian",
                "Pescatarian",
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
            "cautions": [],
            "ingredientLines": [
                "2 tablespoons unsalted butter cut into 6 pieces",
                "2 large eggs, lightly beaten, at room temperature",
                "1 cup whole milk, at room temperature",
                "1 cup all-purpose flour",
                "1/2 teaspoon salt"
            ],
            "ingredients": [
                {
                    "text": "2 tablespoons unsalted butter cut into 6 pieces",
                    "quantity": 2,
                    "measure": "tablespoon",
                    "food": "unsalted butter",
                    "weight": 28.4,
                    "foodCategory": "Dairy",
                    "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                    "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                },
                {
                    "text": "2 large eggs, lightly beaten, at room temperature",
                    "quantity": 2,
                    "measure": "<unit>",
                    "food": "eggs",
                    "weight": 100,
                    "foodCategory": "Eggs",
                    "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                    "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                },
                {
                    "text": "1 cup whole milk, at room temperature",
                    "quantity": 1,
                    "measure": "cup",
                    "food": "whole milk",
                    "weight": 244,
                    "foodCategory": "Milk",
                    "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                    "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
                },
                {
                    "text": "1 cup all-purpose flour",
                    "quantity": 1,
                    "measure": "cup",
                    "food": "all-purpose flour",
                    "weight": 125,
                    "foodCategory": "grains",
                    "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                    "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                },
                {
                    "text": "1/2 teaspoon salt",
                    "quantity": 0.5,
                    "measure": "teaspoon",
                    "food": "salt",
                    "weight": 3,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                }
            ],
            "calories": 950.468,
            "totalWeight": 499.73028286597935,
            "totalTime": 0,
            "cuisineType": [
                "american"
            ],
            "mealType": [
                "breakfast",
                "teatime"
            ],
            "dishType": [
                "desserts"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 950.4679999999998,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 41.697399999999995,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 22.20415,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 0.038,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 12.395629999999997,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 3.7568899999999994,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 107.82404,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 104.44904,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 3.375,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 13.04654,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 33.4024,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 457.4599999999999,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 1156.6937520000001,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 357.845267887835,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 64.49130282865978,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 600.8324226292783,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 7.636569933457732,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 3.0956902828659794,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 544.7760000000001,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 466.496,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 0,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 1.13491,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 1.496516,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 7.679088,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 0.31369199999999997,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 423.802,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 96.30199999999999,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 192.5,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 2.03628,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 5.172000000000001,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 2.16718,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 3.3949999999999996,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 310.64446056573195,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 47.523399999999995,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 64.14984615384616,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 111.02074999999999,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 35.94134666666667,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 13.5,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 66.8048,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 152.48666666666665,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 48.195573,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 35.7845267887835,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 15.355072102061852,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 12.78366856658039,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 42.425388519209626,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 28.142638935145268,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 77.82514285714286,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 51.83288888888889,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 0,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 94.57583333333335,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 115.11661538461539,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 47.9943,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 24.130153846153842,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 105.9505,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 84.84500000000001,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 34.480000000000004,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 14.447866666666668,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 2.829166666666666,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 41.697399999999995,
                    "hasRDI": true,
                    "daily": 64.14984615384616,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 22.20415,
                            "hasRDI": true,
                            "daily": 111.02074999999999,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.038,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 12.395629999999997,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 3.7568899999999994,
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
                    "total": 107.82404,
                    "hasRDI": true,
                    "daily": 35.94134666666667,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 104.44904,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 3.375,
                            "hasRDI": true,
                            "daily": 13.5,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 13.04654,
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
                    "total": 33.4024,
                    "hasRDI": true,
                    "daily": 66.8048,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 457.4599999999999,
                    "hasRDI": true,
                    "daily": 152.48666666666665,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 1156.6937520000001,
                    "hasRDI": true,
                    "daily": 48.195573,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 357.845267887835,
                    "hasRDI": true,
                    "daily": 35.7845267887835,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 64.49130282865978,
                    "hasRDI": true,
                    "daily": 15.355072102061852,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 600.8324226292783,
                    "hasRDI": true,
                    "daily": 12.78366856658039,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 7.636569933457732,
                    "hasRDI": true,
                    "daily": 42.425388519209626,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 3.0956902828659794,
                    "hasRDI": true,
                    "daily": 28.142638935145268,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 544.7760000000001,
                    "hasRDI": true,
                    "daily": 77.82514285714286,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 466.496,
                    "hasRDI": true,
                    "daily": 51.83288888888889,
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
                    "total": 1.13491,
                    "hasRDI": true,
                    "daily": 94.57583333333335,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 1.496516,
                    "hasRDI": true,
                    "daily": 115.11661538461539,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 7.679088,
                    "hasRDI": true,
                    "daily": 47.9943,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 0.31369199999999997,
                    "hasRDI": true,
                    "daily": 24.130153846153842,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 423.802,
                    "hasRDI": true,
                    "daily": 105.9505,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 96.30199999999999,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 192.5,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 2.03628,
                    "hasRDI": true,
                    "daily": 84.84500000000001,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 5.172000000000001,
                    "hasRDI": true,
                    "daily": 34.480000000000004,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 2.16718,
                    "hasRDI": true,
                    "daily": 14.447866666666668,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 3.3949999999999996,
                    "hasRDI": true,
                    "daily": 2.829166666666666,
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
                    "total": 310.64446056573195,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        }
    }
]

const seafoodList = [
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_3c6f5f76114543b1992fb8df332ba40b",
            "label": "Seafood Gumbo",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ceb/ceb46dcd63b4c7b438b7e965f821c9fd.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDWV5RMDbRXk0MA3EuWZkf9qybHtyBhtBzAHnxxjZ%2B7uAIhAKUPiHAMGpNeCTEo58xgSlXELFobx6%2BITXdZMJ6T7BpFKrgFCEYQABoMMTg3MDE3MTUwOTg2IgyvWZjNue9Ry7KlKlIqlQUsMKu1wZUizXY1V%2BiLKD1i2Q6SYEe4bDHQL9UCK%2BMyvFYnNIOJllXsvx28jsP1mul9oDPovKZ%2B0eiye5LerYK3v%2B37Ke8WNXHJbPc1C4dltqM0bbaF6fVkc2To%2BhEb0rc0Fr7j1hJQbraPUjWU4jwsYxaVgszrCsfdRtiC8oqWz3tfteR401OneiOZJ%2BiXQs0abwxNuQcWUfXIubTLlsXqigFays%2BT6h6MJ%2F8wa%2F%2BAuaAdpptqQ6pke2Qm78j9Bpn1TobDCVbKgcYy94DhwXJfBK2Om13%2BuAsCnc1%2BPfnip4jZzKfEuIBrMrXiPLR2QX6PO5EVRdE5Sm0TeJGxJNdyMyqz1uvwPQgv2KXnCu9AtMS4Ueu4181WEEh7s9fvZtfLQ%2FOb5fQ%2FQGalrk5Ntt8t%2FGzn8dnxz5XsPdf%2F4EKvLt2ZAlGmQxudM2L2OfOUfL3TT5GTzzToq8iftOQgZNXqG4dhhrR8EE3R1jBFhPhr5i6AzWm3%2BSsQvq9OSqKT8UsXxRJNnchd3b%2BEBaCzLFlPuSlzWsolHk7gwJHISlpl3zJEU5WHOSDvY3h2Kf133LlxY%2Fpoq3mu1Zik3WdPV%2FyywTQJpd%2FHmLEDc6IvtinLxcDnHjASmHx7a59a2SIpPjy4tnCRRpsE5Xg9jXB0asBWmNdU%2FxxNFo78qoxHpLhUI46gbOZOOIgaJlSFRwxsPh7tYP8S8PsMgXzjrV%2FimE2iMj7VvRJOwhSSIkJj1uVU%2FI0deDEUpQTzM4x4tCunwHnsu2cOaU7%2BN0kWZD7eIPeoSYjIdyLTTxBpg2JtzcFR1pqjhNQwMeIHdYynpOKGqs6NcRWHVFs2YLVeZRsQz1ucRdq4vCYdeKbTHb3UC%2Fro6gk3wkAlMJrC0LMGOrABmPbFK%2BMAYWVPd4cH8mUQjieyay%2F3GgPIP4BH5nLZGf3HiAICzRf1BHCRMhZpOrJ6Uyu0yDMPvsskM6GGqclB%2BprD6XC9clyCOlegoOICdxBYhXFrrKp%2BML6UBgA%2BMV9yWTL%2FyquUd1swQCT%2BTcOwUcNgzFz1F2YxZ81f%2FbqNB2FP%2Bv0iXzcnmMSIvBtF6x6LBIRnpU5TfgoNfmoRxJM6WVV8cDXqAuim6YBp4TEtymI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240620T132846Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHPLZHEEG%2F20240620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3dc168550ff564ff6d311a8865f7369f96443f2def6c7191e36fa33ef1603b9c",
            "source": "Cooking Channel",
            "url": "https://www.cookingchanneltv.com/recipes/seafood-gumbo0-2776812",
            "shareAs": "http://www.edamam.com/recipe/seafood-gumbo-3c6f5f76114543b1992fb8df332ba40b/seafood",
            "yield": 8,
            "dietLabels": [],
            "healthLabels": [
                "Dairy-Free",
                "Egg-Free",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Soy-Free",
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
                "1/4 cup canola or vegetable oil",
                "8 ounces andouille sausage, sliced 1/4-inch thick",
                "1/3 cup flour",
                "1 medium onion, diced",
                "1 green bell pepper, diced",
                "2 ribs celery, diced",
                "3 tablespoons garlic powder",
                "2 tablespoons seafood seasoning, such as Old Bay",
                "1 teaspoon chipotle chile powder",
                "1 teaspoon fresh thyme leaves",
                "One 28-ounce can crushed tomatoes",
                "6 cups chicken stock",
                "Salt and pepper",
                "1 pound lump crabmeat",
                "1 lobster tail, meat removed and diced into 1-inch pieces",
                "1 pound large shrimp, peeled and deveined",
                "Basmati rice, for serving"
            ],
            "ingredients": [
                {
                    "text": "1/4 cup canola or vegetable oil",
                    "quantity": 0.25,
                    "measure": "cup",
                    "food": "vegetable oil",
                    "weight": 56.00000000094679,
                    "foodCategory": "Oils",
                    "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                    "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                },
                {
                    "text": "8 ounces andouille sausage, sliced 1/4-inch thick",
                    "quantity": 8,
                    "measure": "ounce",
                    "food": "andouille sausage",
                    "weight": 226.796185,
                    "foodCategory": "Cured meats",
                    "foodId": "food_a0pv0xeavqlsjpbzcqnokbta8wv9",
                    "image": "https://www.edamam.com/food-img/b42/b423dbb86abcac27234d9a01fac11ea5.jpg"
                },
                {
                    "text": "1/3 cup flour",
                    "quantity": 0.3333333333333333,
                    "measure": "cup",
                    "food": "flour",
                    "weight": 41.666666666666664,
                    "foodCategory": "grains",
                    "foodId": "food_ahebfs0a985an4aubqaebbipra58",
                    "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
                },
                {
                    "text": "1 medium onion, diced",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "onion",
                    "weight": 110,
                    "foodCategory": "vegetables",
                    "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                    "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                },
                {
                    "text": "1 green bell pepper, diced",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "green bell pepper",
                    "weight": 116.28888888888889,
                    "foodCategory": "vegetables",
                    "foodId": "food_bz8rcwobbzm7zhb3wh2n7aznivou",
                    "image": "https://www.edamam.com/food-img/629/629dc9fddc1f8aec27fa337dd6ce2b7c.jpg"
                },
                {
                    "text": "2 ribs celery, diced",
                    "quantity": 2,
                    "measure": "rib",
                    "food": "celery",
                    "weight": 80,
                    "foodCategory": "vegetables",
                    "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
                    "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
                },
                {
                    "text": "3 tablespoons garlic powder",
                    "quantity": 3,
                    "measure": "tablespoon",
                    "food": "garlic powder",
                    "weight": 29.099999999999998,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_boq94r1a036492bdup9u1beyph0l",
                    "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
                },
                {
                    "text": "2 tablespoons seafood seasoning, such as Old Bay",
                    "quantity": 2,
                    "measure": "tablespoon",
                    "food": "Old Bay",
                    "weight": 8.8,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_aj7w3xab0epj7cbgkbkpwadysovd",
                    "image": "https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg"
                },
                {
                    "text": "1 teaspoon chipotle chile powder",
                    "quantity": 1,
                    "measure": "teaspoon",
                    "food": "chile powder",
                    "weight": 2.7,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
                    "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
                },
                {
                    "text": "1 teaspoon fresh thyme leaves",
                    "quantity": 1,
                    "measure": "teaspoon",
                    "food": "fresh thyme",
                    "weight": 0.8,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
                    "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
                },
                {
                    "text": "One 28-ounce can crushed tomatoes",
                    "quantity": 28,
                    "measure": "ounce",
                    "food": "crushed tomatoes",
                    "weight": 793.7866475000001,
                    "foodCategory": "canned vegetables",
                    "foodId": "food_aqqtb83adjyq8ybf51yo8bsjetdh",
                    "image": null
                },
                {
                    "text": "6 cups chicken stock",
                    "quantity": 6,
                    "measure": "cup",
                    "food": "chicken stock",
                    "weight": 1440,
                    "foodCategory": "canned soup",
                    "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
                    "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
                },
                {
                    "text": "Salt and pepper",
                    "quantity": 0,
                    "measure": null,
                    "food": "Salt",
                    "weight": 23.778738768339014,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                    "text": "Salt and pepper",
                    "quantity": 0,
                    "measure": null,
                    "food": "pepper",
                    "weight": 11.889369384169507,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                    "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                },
                {
                    "text": "1 pound lump crabmeat",
                    "quantity": 1,
                    "measure": "pound",
                    "food": "crabmeat",
                    "weight": 453.59237,
                    "foodCategory": "seafood",
                    "foodId": "food_ao6g1pnapm2qazallo96ybafy3ie",
                    "image": "https://www.edamam.com/food-img/ac5/ac53a456f302ed1167f8bdc818161188.jpg"
                },
                {
                    "text": "1 lobster tail, meat removed and diced into 1-inch pieces",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "lobster tail",
                    "weight": 150,
                    "foodCategory": "seafood",
                    "foodId": "food_b51mgtbayikvscbpep4d3b4ut3j6",
                    "image": "https://www.edamam.com/food-img/54f/54fe5ffb9f4ce2d4219459f5dc65be75.jpg"
                },
                {
                    "text": "1 pound large shrimp, peeled and deveined",
                    "quantity": 1,
                    "measure": "pound",
                    "food": "shrimp",
                    "weight": 453.59237,
                    "foodCategory": "seafood",
                    "foodId": "food_bjap0xzbf5x6s3azkpwtfb14i25u",
                    "image": "https://www.edamam.com/food-img/4df/4df0fd62e878ed84b387b9e3ab48f2dc.jpg"
                },
                {
                    "text": "Basmati rice, for serving",
                    "quantity": 0,
                    "measure": null,
                    "food": "Basmati rice",
                    "weight": 0,
                    "foodCategory": "grains",
                    "foodId": "food_a3g7g0kb4xvknbbdl91t8a19a6ci",
                    "image": "https://www.edamam.com/food-img/e35/e35ea1529983a3db51a32a1afa7b3837.jpg"
                }
            ],
            "calories": 3262.4604624070794,
            "totalWeight": 3975.0124974406717,
            "totalTime": 90,
            "cuisineType": [
                "american"
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
                    "quantity": 3262.4604624070794,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 149.90224022031518,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 33.19407901429049,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 0.5276666266072619,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 78.4170649754668,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 25.64478005023536,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 200.0997817967296,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 171.0929139289236,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 29.006867867805997,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 67.45379778739203,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 288.0104893460648,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 1535.5101019,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 9502.254246976836,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 1420.00697111076,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 733.2397934524854,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 8154.8696451233445,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 27.846029968425086,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 37.82417865214385,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 3473.4419100547657,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 232.45808870872582,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 197.69728644666668,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 2.0225910915265697,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 2.5529293373470607,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 56.38170992447953,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 4.462504359352377,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 527.1807115925311,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 527.1807115925311,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 0,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 18.295043794,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 2.4947580350000007,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 34.66501607294065,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 172.23881299531575,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 3291.9031409080217,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 163.12302312035396,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 230.6188311081772,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 165.97039507145243,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 66.69992726557653,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 116.027471471224,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 576.0209786921296,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 511.83670063333335,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 395.9272602907015,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 142.000697111076,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 174.58090320297273,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 173.5078647898584,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 154.70016649125049,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 343.8561695649441,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 496.2059871506808,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 25.828676523191756,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 219.66365160740744,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 168.54925762721416,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 196.37917979592774,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 352.38568702799705,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 343.26956610402897,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 131.79517789813278,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 762.2934914166667,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 16.631720233333336,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 231.10010715293768,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 143.5323441627631,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 149.90224022031518,
                    "hasRDI": true,
                    "daily": 230.6188311081772,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 33.19407901429049,
                            "hasRDI": true,
                            "daily": 165.97039507145243,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.5276666266072619,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 78.4170649754668,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 25.64478005023536,
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
                    "total": 200.0997817967296,
                    "hasRDI": true,
                    "daily": 66.69992726557653,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 171.0929139289236,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 29.006867867805997,
                            "hasRDI": true,
                            "daily": 116.027471471224,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 67.45379778739203,
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
                    "total": 288.0104893460648,
                    "hasRDI": true,
                    "daily": 576.0209786921296,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 1535.5101019,
                    "hasRDI": true,
                    "daily": 511.83670063333335,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 9502.254246976836,
                    "hasRDI": true,
                    "daily": 395.9272602907015,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 1420.00697111076,
                    "hasRDI": true,
                    "daily": 142.000697111076,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 733.2397934524854,
                    "hasRDI": true,
                    "daily": 174.58090320297273,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 8154.8696451233445,
                    "hasRDI": true,
                    "daily": 173.5078647898584,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 27.846029968425086,
                    "hasRDI": true,
                    "daily": 154.70016649125049,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 37.82417865214385,
                    "hasRDI": true,
                    "daily": 343.8561695649441,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 3473.4419100547657,
                    "hasRDI": true,
                    "daily": 496.2059871506808,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 232.45808870872582,
                    "hasRDI": true,
                    "daily": 25.828676523191756,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 197.69728644666668,
                    "hasRDI": true,
                    "daily": 219.66365160740744,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 2.0225910915265697,
                    "hasRDI": true,
                    "daily": 168.54925762721416,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 2.5529293373470607,
                    "hasRDI": true,
                    "daily": 196.37917979592774,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 56.38170992447953,
                    "hasRDI": true,
                    "daily": 352.38568702799705,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 4.462504359352377,
                    "hasRDI": true,
                    "daily": 343.26956610402897,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 527.1807115925311,
                    "hasRDI": true,
                    "daily": 131.79517789813278,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 527.1807115925311,
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
                    "total": 18.295043794,
                    "hasRDI": true,
                    "daily": 762.2934914166667,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 2.4947580350000007,
                    "hasRDI": true,
                    "daily": 16.631720233333336,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 34.66501607294065,
                    "hasRDI": true,
                    "daily": 231.10010715293768,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 172.23881299531575,
                    "hasRDI": true,
                    "daily": 143.5323441627631,
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
                    "total": 3291.9031409080217,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        }
    }
]

        return (
            <div  className='categories' >
         <div className="pizza" >           
            <img src={"/assets/categoryList/pizza.jpg"} alt="pizza " onClick={handleClick}></img>
            <h2 onClick={handleClick}>Pizza</h2>
        </div>
        <div className="chicken" >            
            <img src={"/assets/categoryList/chicken.jpg"} alt="chicken "  onClick={handleClick}/>
            <h2 onClick={handleClick}>Chicken</h2>
        </div>
        <div className="breakfast" >       
            <img src={"/assets/categoryList/breakfast.png"} alt="Breakfast " onClick={handleClick}/>
            <h2 onClick={handleClick}>Breakfast</h2>
        </div>
        <div className="meat" >
            <img src={"/assets/categoryList/meat.jpg"} alt="meat "  onClick={handleClick}/>
            <h2 onClick={handleClick}>Meat</h2>
        </div>
        <div className="dessert" >
            <img src={"/assets/categoryList/dessert.jpg"} alt="meat " onClick={handleClick}/>
            <h2 onClick={handleClick}>Dessert</h2>
        </div>
        <div className="dinner" >
            <img src={"/assets/categoryList/dinner.jpg"} alt="meat "  onClick={handleClick}/>
            <h2 onClick={handleClick}>Dinner</h2>
        </div>
        <div className="lunch" >
            <img src={"/assets/categoryList/luncj.jpg"} alt="meat " onClick={handleClick}/>
            <h2 onClick={handleClick}>Lunch</h2>
        </div>
        <div className="snack" >
            <img src={"/assets/categoryList/snack.jpeg"} alt="meat " onClick={handleClick}/>
            <h2 onClick={handleClick}>Snack</h2>
        </div>
        <div className="tea-time" >
            <img src={"/assets/categoryList/teatime.jpg"} alt="meat " />
            <h2 onClick={handleClick}>Teatime</h2>
        </div>
        <div className="seafood" >
            <img src={"/assets/categoryList/seafood.jpg"} alt="meat " />
            <h2 onClick={handleClick}>Seafood</h2>
        </div>
         </div> 
            
         
         
        )
        
}
export default CategoryLists;                