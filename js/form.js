class form {
    constructor (){
        this.input = createInput("Enter Name Here")
        this.button = createButton("Start")
        this.reset = createButton("RESET")
        this.greeting = createElement('h2')
        this.title = createElement('h2')
    }
    hide(){
        this.button.hide();
        this.input.hide()
        //this.reset.hide()
        this.title.hide();
        this.greeting.hide();
    }
    display(){
        //var title = createElement('h2')
        
        this.title.html("Car Racer")
        this.title.position(windowWidth/2,100)
        
        this.input.position(windowWidth/2-30,300)
        
        this.button.position(windowWidth/2+20,350)
        
        this.reset.position(windowWidth/2+600,50)

        this.button.mousePressed(()=>{
    
            

        players.name = this.input.value();
        playerCount = playerCount+1
        players.index = playerCount
        players.updateCount(playerCount)   
        players.update()   
     this.input.hide()
     this.button.hide()
        this.greeting.html("Welcome")
        this.greeting.position(windowWidth/2,130)
        
        })
        this.reset.mousePressed(()=>{
            players.updateCount(0)
            game.update(0)
           /* database.ref('/').reset({
                gameState: 0,
                playerCount: 0,
                players : {}
            })*/

        })
    }   
}