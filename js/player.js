class Player {
    constructor (){
this.name = null
this.distance = 0
this.index = null
    }

    update(){
        var playerIndex = "players/player"+this.index//playerCount
        //player1
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }
    updateCount(count) {
database.ref('/').update({
    playerCount : count
})
    }
    getCount(){
        var playerCountRef = database.ref('playerCount').on("value", (data)=>{
playerCount : data.val()
        })
    }
    getPlayerInfo(){
     var playerInfoRef = database.ref('players').on("value",(data)=>{
         allPlayers = data.val()
     })
    }
}