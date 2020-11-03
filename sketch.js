var gameState = "start";
var score = 0;

function preload(){
ki = loadImage("soilder.png");
bul= loadImage("bullet.jpg");
ene = loadImage("paddsa.png");

}

function setup() {
  createCanvas(500,300);

  killg = createGroup();

  invi = createSprite(250,295,500,10);
  invi.visible = false;
  invi2 = createSprite(250,5,500,10);
  invi2.visible = false;

  base = createSprite(5,150,10,300);

  killer = createSprite(100,260);
  killer.addImage(ki);
  killer.scale = 0.1;
  killg.add(killer);

  eneg = createGroup();
   bug = createGroup();
}

function draw() {
 
  background("white");

  killer.bounceOff(invi);
  killer.bounceOff(invi2);
  
  fill("aquamarine");
  textSize(20);
  text("score: "+score,350,50);
  
  if (gameState === "start") {
        background("red");
    
        fill("blue");
        textSize(17);
        text("Welcome to RUBY the Warrior",130,40);
        
        fill("yellow");
        textSize(16);
        text("STORY: "+"there was a man named Ruby who was a army major and he ",10,80);

        fill("yellow");
        textSize(16);
        text(" was on holiday resting at home. At the 2nd day of holiday at 2:00pm ",10,120);

        fill("yellow");
        textSize(16);
        text(" suddenly terrorist attacked his house . Help him to fight  ",10,160);

        fill("yellow");
        textSize(16);
        text(" controls are w,s,d ",10,200);

        fill("yellow");
        textSize(16);
        text(" press p to fight  ",10,220);

    if(keyDown("p") && gameState === "start"){
        gameState = "play";

    }
  }

  if(gameState === "play"){
      enemyy();

    if(keyDown("w")){
        killer.velocityY = -6;    
      }
    
      if(keyDown("s")){
          killer.velocityY = 6;
  
      }
    
    if(keyDown("d")){
        bullet(); 
       
       }

       killer.visible = true;
  
    if(eneg.isTouching(base)){
        eneg.destroyEach();
        bug.destroyEach();

       gameState = "end";

    }
    
    if(bug.isTouching(eneg)){
        eneg.destroyEach();
        bug.destroyEach();
      
      score = score+1;
    }
  }

  if(gameState === "end"){
      background("yellow");
     
    
      textSize(20);
      fill("white");
      text("game Over",200,100);

      textSize(20);
      fill("white");
      text("you lose",200,150);
      
      textSize(20);
      fill("white");
      text("press z to restart",200,200);

      killer.visible = false;
     
     if(keyDown("z")){
         gameState = "play";
     }

  }

drawSprites();

}

function bullet(){
  bu = createSprite(50,50,10,10);
  bu.addImage(bul);
  bu.scale = 0.1;
  bu.velocityX= 6;
  bu.lifeTime = 500;
  bu.x = killer.x;
  bu.y = killer.y;
  bug.add(bu);

}

function enemyy() {
  if(frameCount%100 === 0){
      enem = createSprite(520,random(20,280));
      enem.addImage(ene);
      enem.scale = 0.1;
      enem.velocityX = -8;
      enem.lifetime = 520;
      eneg.add(enem);
  }
}
