//Create variables here



 var dog, happyDog, database, foodS, foodStock;
var database;
var position ; 

function preload()
{
dog=loadImage("images/dogImg.png");
happyDog=loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
dog = createSprite(250,250,50,50);
dog.addImage("images/dogImg.png");

foodStock = database.ref('Food');
foodStock.on("value",readStock);





}


function draw() {  
  background(46, 139, 87) ;
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
    }


  drawSprites();
  //add styles here
textSize(24);
fill ("red");
stroke(4);
text("Note: Press Up arrow key to feed your dog milk !",250,300)
}


function readStock(data){
foodS = data.val();
}

function writeStock(x){ 
  if(x<=0){ x=0; }else{ x=x-1; } 
  database.ref('/').update({ Food:x }) 
}