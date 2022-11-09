const ingredientJson =[
    {   
        id: 1,
        name: 'Onion',
        Image:'onion.jpg',
        calories:39.7

        
    },
    {
        id: 2,
        name: 'Pepper',
        Image:'pepper.jpg',
        calories:58
    },
    {
        id: 3,
        name: 'Black Pepper',
        Image:'blackpepper.jpg',
        calories:255
    },
    {
        id: 4,
        name: 'Cabbage',
        Image:'cabbage.jpg',
        calories:24.6
    },
    {
        id: 5,
        name: 'Carrot',
        Image:'Carrot.jpg',
        calories:41.3
    },
    {
        id: 6,
        name: 'Salt',
        Image:'Salt.jpg',
        calories:0
    },
    {
        id: 7,
        name: 'Teriyaki',
        Image:'teriyaki.jpg',
        calories:88.7
    },
    {
        id: 8,
        name: 'Olive oil',
        Image:'olive-oil.jpg',
        calories:884.1
    }
]

let ingredientsArr = [];
let ingredientsArrLength = ingredientsArr.length;
class Ingredient{
    

    constructor(name, Image, calories){
    this.id = ++ingredientsArrLength;
    this.name =name;
    this.Image =Image;
    this.calories = calories;
    }

  
    // get id(){return this.id;}
   
    // get name(){return this.name;}
    // set name(value){
    //     if(value < a || value > Z){
    //         alert("The name should contain only letters")
    //         return;
    //     }
    //     this.id = value;
    // }


    
}

ingredientsArr = ingredientJson.map(a => a = new Ingredient(a.name,a.Image,a.calories));


function AddIngredient(name, image, calories){
    let iName = document.getElementById("name").value;
    let iImage = document.getElementById("image").value;
    let iCalories = document.getElementById("calories").value;
    newIngredient = new Ingredient(iName,iImage,parseInt(iCalories));
    ingredientsArr.push(newIngredient);
    document.getElementById("Details").innerHTML = "";
}

function RenderI(){
    str = "";
    str += '<h2>Ingredient name:</h2>';
    str += '<input type="text" id="name" value="Write here"/>';
    str += '<h2>Ingredient image (url):</h2>';
    str += '<input type="text" id="image" value="Write here"/>';
    str += '<h2>Ingredient calories:</h2>';
    str += '<input type="text" id="calories" value="Write here"/>';
    str += '<br/>';
    str += '<br/>';
    str += '<input class="btn" type="button" value="Create Ingredient" onClick ="AddIngredient()"/>';
    str += '<input class="btn" onclick="f1()" type="button" value="Close"/>';
    document.getElementById("Details").innerHTML = str;
    document.getElementById("Details").style.display = "block";
}

let counter =0;

function RenderR(){
    document.getElementById("Details").style.height="";
    document.getElementById("Details").style.visibility="visible";
    f1();
    str = "";
    str += '<h2>Recipe name:</h2>';
    str += '<input id="name" type="text" value="Write here"/>';
    str += '<h2>Recipe cooking method:</h2>';
    str += '<input id="method" type="text" value="Write here"/>';
    str += '<h2>Recipe cooking time:</h2>';
    str += '<input id="time" type="text" value="Write here"/>';
    str += '<h2>Recipe image (url):</h2>';
    str += '<input id="image" type="text" value="Write here"/>';
    str += '<h2>Choose Ingredients</h2>';
    str += '<div id="row1" class="row">'
    for (let index = 0; index < ingredientsArr.length; index++) {
        str += '<div class="tag col-4">';
        str += '<p>add <input id="'+ingredientsArr[index].id +'" class="add" type="radio"/></p>';
        str += '<p>ingredient details:</p>';
        str += '<img src="'+ingredientsArr[index].Image+'" style="width:80%;"/>';
        str += '<p>'+ingredientsArr[index].name+'</p>';
        str += '<p>'+ingredientsArr[index].calories+' calories</p>';
        str += '</div>';
    }
    str += '</div>'
    str += '<div class="row">'
    str += '<input class="btn btn-primary" onclick="CreateRec('+counter+')" type="button" value="Create recipe"/>';
    str += '<input class="btn" onclick="f1()" type="button" value="Close"/>';
    str += '</div>'
    document.getElementById("Details").innerHTML = str;
    document.getElementById("Details").style.display = "block";
    counter++;
}

function CreateRec(counter1){
    str ="";
    str += '<div class="FirstD">';
    str += '<h3>Dish Recipe details: </h3>';
    recImage = document.getElementById("image").value
    str += '<img src="'+recImage+'" alt="" class="'+counter1+'">';
    recName = document.getElementById("name").value
    str += '<p class="'+counter1+'">Dish name:"'+recName+'"</p>';
    recMethod = document.getElementById("method").value
    str += '<p class="'+counter1+'">Cooking method:"'+recMethod+'"</p>';
    recTime = document.getElementById("time").value
    str += '<p class="'+counter1+'">Total cooking time:"'+recTime+'"</p>';
    str += '<p class="'+counter1+'">Total calories:'+'<span id="recCal'+counter1+'"></span>'+'</p>';
    str += '<button onclick="getIngredients()" id="Pad thai">Show ingredients</button>'
    str += '</div>';
    document.getElementById("D").innerHTML += str
    getTotalCalories(counter1);
    document.getElementById("Details").style.height = "0px";
    document.getElementById("Details").style.visibility = "hidden";
    document.getElementById("titel1").scrollIntoView();

}



function close(){
     document.getElementById("Details").style.display = "none";
     this.parentElement.style.display = 'none';
}

function f1(){
    document.getElementById("Details").innerHTML = "";
}


class DishRecipe{
    constructor(name, ingredients, time, cookingMethod, image){
        this.name = name;
        this.ingredients = ingredients;
        this.time = time;
        this.cookingMethod = cookingMethod;
        this.image = image;
    }
}


function getTotalCalories(counter2){
    let ingredientsCalor = document.querySelectorAll('.add');
    let sum = 0;

    for (let index = 0; index < ingredientsCalor.length; index++) {
        if(ingredientsCalor[index].checked)
        { 
         sum += ingredientsArr[ingredientsCalor[index].id-1].calories;
         console.log(sum);
        }
    }
    document.getElementById('recCal'+counter2).innerHTML = sum;

}

function getIngredients(){
    let str = "";
    let ingredientsNames = document.querySelectorAll('.add')


    for (let index = 0; index < ingredientsNames.length; index++) {
        if(ingredientsNames[index].checked)
        {
         str += '<div class="tag col-4">';
         str += '<p>ingredient details:</p>';
         str += '<img src="'+ingredientsArr[ingredientsNames[index].id-1].Image+'" style="width:80%;"/>';
         str += '<p>'+ingredientsArr[ingredientsNames[index].id-1].name+'</p>';
         str += '<p>'+ingredientsArr[ingredientsNames[index].id-1].calories+' calories</p>';
         str += '</div>';
        }
     
    }
    document.getElementById("newRec").innerHTML = str;
}

function showIngredients(){
    str = "";
    for (let index = 0; index < ingredientsArr.length; index++) { 
        str += '<div class="row11"';
        str += '<p>ingredient details:</p>';
        str += '<img src="'+ingredientsArr[index].Image+'" style="width:80%;"/>';
        str += '<p>'+ingredientsArr[index].name+'</p>';
        str += '<p>'+ingredientsArr[index].calories+' calories</p>';
        str += '</div>';
    }

    document.getElementById("newRec").innerHTML = str;
}

const recJson =[

]
