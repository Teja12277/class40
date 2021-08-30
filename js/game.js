class Game {
    constructor (){

    }
    getState(){
        var gameStateRef = database.ref('gameState').on("value",function (data){
            gameState = data.val()
                    })
    }
    update(state){
        database.ref('/').update({
            gameState : state
        })
    }
   async start(){
        if(gameState === 0){
            players = new Player()
            var  playerCountRef= await database.ref("playerCount").once("value")
            if(playerCountRef.exists()){
             playerCount = playerCountRef.val()
             players.getCount()
            }
                
            
            
            forms = new form()
            forms.display();
        }
        car1 = createSprite(100,200)
        car1.addImage(racer1);
        car2 = createSprite(300,200)
        car2.addImage(racer2);
        car3 = createSprite(500,200)
        car3.addImage(racer3);
        car4 = createSprite(700,200)
        car4.addImage(racer4);
        cars = [car1,car2,car3,car4]
    }

    play(){
        forms.hide();
        //text("game started", 500,500)
        players.getPlayerInfo()
        if(allPlayers!== undefined){
            background("gray")
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index = 0
            var x = 170
            var y;
            for( plr in allPlayers){
                index= index+1
                x= x+250
                y=displayHeight-allPlayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y
                if(index === players.index){
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].y
                    fill ("yellow")
                    ellipse(x,y,70,60)
                   
                }
        }
    }
    if(keyDown(UP_ARROW)&& players.index !== null){
        players.distance+=10
        players.update();
    }
    if(players.distance>4220){
        gameState = 2
    }
       //players.update();
       drawSprites()
    }
    
}