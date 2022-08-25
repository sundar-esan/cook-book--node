//const express = require('express')

import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.MONGO_URL);
const app = express()
const PORT = 4000

const recipes = [{
    "id": "100",
    "poster": "https://www.lekhafoods.com/media/202090/chilli-mutton-fry.jpg",
    "name": "Chilli-Mutton-Fry",
    "rating": 4.5,
    "demo": "https://www.youtube.com/embed/iBtVqA_nBJU",
    "ingredients": [
        "Mutton-500gms",
        " ",
        "Green-chilli-10",
        " ",
        "Big Onion-2",
        " ",
        "Turmeric powder-1/2teaspoon",
        " ",
        "Salt as required",
        " ",
        "Sesame oil-50ml"
    ],
    "preparation": "Pressure cook mutton adding salt and turmeric powder & Chop onoions.Slit green chillies.Heat a heavy bottomed pan with sasame oil.Saute green cilli,onion and fry well.To this add the cooked mutton.Adjust salt.Simmer to the low flame,cook until the onion and green chillies are fried well and blends with the Mutton.Remove from the fire ans server hot."
},
{
    "id": "101",
    "poster": "https://3.bp.blogspot.com/-JcaabYdyiF8/V36BUv-3kbI/AAAAAAAAALo/ppDBTSJg1-wxhb4y97bpo6KnuOmuAtwSgCKgB/s1600/Crab%2BCurry%2BRecipe.JPG",
    "name": "Spicy Crab Masala",
    "rating": 4,
    "demo": "https://www.youtube.com/embed/D1QtnI7UrjI",
    "ingredients": [
        "1/2 kg-crab (king crab)",
        "",
        "2-tbsp	Oil",
        "",
        "2 tsp	cumin seeds",
        "",
        "2 tsp	fennel seeds",
        "",
        "1 tbsp	pepper corns",
        "",
        "2	Green chilies",
        "",
        "1 tbsp	ginger garlic paste",
        "",
        "1(250g)	Large Onion",
        "",
        "2(150g)	Tomato",
        "",
        "1/2 tsp	Turmeric Powder",
        "",
        "1 Tbsp	Coriander Powder",
        "",
        "2-3 tsp	Chilli Powder",
        "",
        "1/2 cup	Grated Coconut",
        "",
        "3	Cardamom",
        "",
        "2	Cloves",
        "",
        "1/2 tsp	Mustard Seeds",
        "",
        "Salt to Taste",
        "",
        "Curry Leaves for Garnishing"
    ],
    "preparation": "Roast 2 tsp cumin seeds,2 tsp fennel,3 tsp pepper corns in 1 tbsp oil for a minute.Add sliced onions(250g) ,required salt and saute for 2 more minutes.Once the onions are golden add 2 green Chillies and 1 tbsp of ginger garlic paste and saute until raw smell is gone.Add the masalas turmeric powder,chilli powder and coriander powder and saute it for a minute and turn off the heat.Grind the onion mixture along with some grated coconut and make it into a smooth paste. Again Heat 1 tbsp oil and add cardamom pods, cloves and mustard seeds and allow the seeds to pop.Add the ground coconut onion masala paste and also add required water and bring the gravy to a boil.Now add the cleaned and scored crab (if you are using big crabs its very important to score the crabs only then masalas will diffuse into the meat more efficiently).Cover and cook for 15-20 minutes (in case of small crabs cook for 10 minutes).To add more flavor add some curry leaves for garnishing and turn off the heat and serve the delicious crab curry over rice .Happy Cooking!!!"
},
{
    "id": "102",
    "poster": "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/amina/Fish_fry_original_1_edit.jpg",
    "name": "Seer Fish Fry Recipe",
    "rating": 4.8,
    "demo": "https://www.youtube.com/embed/EcnHCapZk6o",
    "ingredients": [
        "8 Seer fish",
        "",
        "1 teaspoon Turmeric powder",
        "",
        "3 tablespoon Red Chilli powder",
        "",
        "1 teaspoon Salt",
        "",
        "2 teaspoon Ginger Garlic Paste",
        "",
        "1/2 teaspoon Corn flour",
        "",
        "1/2 Lemon",
        "",
        "1 tablespoon Tomato Ketchup",
        "",
        "Oil , for shallow frying",
        "",
        "Coriander Leaves",
        "",
        "chopped for garnishing"
    ],
    "preparation": "To begin making the Seer Fish Fry Recipe, wash and clean the fish slices with water and turmeric powder and keep ready.Add red chilli powder, salt, tomato sauce, ginger garlic paste, cornflour and lemon juice to a bowl and mix to form a thick paste. If the mix is too thick, then add a few drops of water.Check for taste, add salt or chilli powder if necessary. Take the fish slices one by one and coat both the sides with the masala mix.Allow the fish slices to marinate for 3 to 4 hours. After 3 to 4 hours, heat oil in a tava, and shallow fry the fish slices from both the sides till they are cooked.Serve Seer Fish Fry as a side dish "
},
{
    "id": "103",
    "poster": "http://cdn.shopify.com/s/files/1/0357/3497/8696/articles/King-prawn-recipe.jpg?v=1634631297",
    "name": "Grilled King Prawns",
    "rating": 5,
    "demo": "https://www.youtube.com/embed/624vboqXO_E",
    "ingredients": [
        "12 raw Shell-On King Prawns",
        "",
        "2 green bell peppers",
        "",
        "1 stick of celery",
        "",
        "1 shallot",
        "",
        "2 cloves garlic",
        "",
        "1 green chilli",
        "",
        "30g coriander",
        "",
        "30g arsley",
        "",
        "25ml balsamic vinegar",
        "",
        " 100ml extra virgin oliv oil",
        "",
        " 1 lime (zest and juice)",
        "",
        "1 tsp ground cumin (or cumin seeds)",
        "",
        "Sea salt"
    ],
    "preparation": "Ideally make your mojo verde a day before to allow the flavours to fully develop.Deseed the green peppers. Dice the peppers, shallot and celery into 1cm pieces.Roast at 180c / gas mark 4 for approximately 30 mins until soft.Once ready, leave the roast vegetables until cooled to room temperature.Add to a food processor with the rest of the ingredients and blend until smooth.Transfer to a bowl and cover (ideally leave until next day).Grill (or pan fry) the prawns for about 5 mins, making sure to cook until pink. Serve the prawns with a drizzle of olive oil and the mojo verde on the side."
},
{
    "id": "104",
    "poster": "https://3.bp.blogspot.com/-p1uVrmAbkA0/WfZ3av3ja8I/AAAAAAAAOBw/i-HxC5w3smMti3swJlONbwOC_xkTf80EgCKgBGAs/s1600/IMG_6144.JPG",
    "name": "Chettinad Nattu kozhi varuval",
    "rating": 3.9,
    "demo": "https://www.youtube.com/embed/lFguAgqFfzI",
    "ingredients": [
        "400 gms of chicken pieces",
        "",
        "3 tsp cooking oil",
        "",
        "10-11 shallots",
        "",
        "finely chopped 1 tsp ginger-garlic paste",
        "",
        "2 medium sized tomatoes",
        "",
        "finely chopped",
        "2 tsp coriander seeds",
        "",
        "1 tsp of black pepper powder",
        "",
        "1 tsp cumin seeds",
        "",
        "1 tsp fennel seeds",
        "",
        "2 tsp red chilli powder/paprika/kashmiri red chilli powder",
        "",
        "salt to taste",
        "",
        "1 tsp turmeric powder",
        "",
        "2 tsbp chopped coriander leaves",
        "",
        "1/2 cup of water"
    ],
    "preparation": " In a pan, dry roast cumin, fennel and coriander seeds till they turn aromatic. It might takes about 4 minutes on medium flame.Let the roasted spices cool down. Add it to mixer or food processor and grind it to a smooth powder, without adding water. Keep it ready.Clean the chicken pieces with water for 4-5 times and marinate it with half a tsp turmeric powder and half a tsp of salt.Let the marinated chicken sit for 15 minutes. No need to refrigerate.Heat a heavy bottomed pan/ kadai/wok, add 3 tsp of cooking oil.Add finely chopped shallots (pearl onions), fry till they turn soft.Add ginger-garlic paste, fry till raw smell of the ginger-garlic paste goes off.Add finely chopped tomatoes and cook till they become mushy.Now, it's time to add the marinated chicken pieces. Add the chicken pieces and cook on medium flame for 4 minutes. Then add the roasted ground (cumin + fennel + coriander) powder, half a tsp turmeric powder, red chilli powder/paprika, black pepper powder.Cook for 5 minutes on medium flame. Add half a cup of water and add chopped coriander leaves. cook it covered with a lid for 4 minutes.See if it is still watery, then cook until the curry thickens. After few more minutes of cooking on medium flame, the curry has thickened. Now switch off the flame."
}
]

// app.use--->middleware -->intercept the all request -->converting body to json

 app.use(express.json());

//const MONGO_URL = "mongodb://localhost";
const MONGO_URL = process.env.MONGO_URL ;

async function createConnection(){
    const client = new MongoClient(MONGO_URL);
   await client.connect();
   console.log("Mongo is connected");
   return client 
  
}
const client = await createConnection();

app.get('/', (request, response) => {
  response.send('Welcome to my Cook book world 😘🌍🧡')
})

app.get('/recipes', async function (request, response) {
  //db.recipes.find({})
  const recipes = await client.db("b30wd").collection("recipes").find({}).toArray();

    response.send(recipes);
  })


  app.get('/recipes/:id', async function (request, response) {
    console.log(request.params);
    const {id} = request.params;
    //const recipe = recipes.find((ele)=> ele.id === id);

    const recipe =  await client.db("b30wd").collection("recipes").findOne({id:id});
    console.log(recipe);
    recipe ?  response.send(recipe) : response.status(404).send({message:"No such recipe found"});
   
  })

  app.post('/recipes',async function (request, response){
    //db.movies.insertMnay(data)
    const data = request.body;

    const result  =  await client.db("b30wd").collection("recipes").insertMany(data);
    response.send(result);
  })

  app.delete('/recipes/:id', async function (request, response) {
    console.log(request.params);
    //db.recipes.deleteOne({})
    const {id} = request.params;
    const result= await client.db("b30wd").collection("recipes").deleteOne({id:id});
  
      response.send(result);
    })


    app.put('/recipes/:id', async function (request, response) {
        console.log(request.params);
        //db.recipes.updateOne({id:}, {$Set:updateData})
        const {id} = request.params;
        const updateData = request.body;
        const result= await client.db("b30wd").collection("recipes").updateOne({id:id},{$set:updateData});
        response.send(result);
        })
    

  

app.listen(PORT, () => {
  console.log(`Server started in ${PORT}`)
})