


let tool = new Tool("Katana")
tool.model = 3441
assign_int = 0
var i
var bricks = [];
var target_team = [];

function return_team(item_returning){
  if (target_team.length >= assign_int){
    target_team = []
  }
  target_team.push(item_returning)
}
function sleep(duration) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve()
		}, duration * 1000)
	})
}
Game.on("playerJoin", (player) => {
  player.num = assign_int++
  bricks.push([new Brick(new Vector3(0,0,0), new Vector3(4,4,4))])
  player.on("initialSpawn", () => {
      player.equipTool(tool)
   })

  player.mouseclick(() => {
    tool.on("activated", () =>{
      bricks[player.num][0].setPosition(new Vector3(player.position.x,player.position.y,player.position.z+2))
    },100)

  })
  player.on("moved",()=>{
    if (player.health <=0){
      player.kill()
    }
    //if (player.team.name == target_team?.name){
      //try{
        //target_team.name = undefined
      //}
      //catch(TypeError){

      //}}
    for(i=0; i < bricks.length; i++){
  
        bricks[i][0].touching(debounce((p) => {return_team(p.team) }, 1))

        if (target_team[i]?.name != undefined && target_team[i]?.name != player.team.name ){
            bricks[i][0].touching(debounce((p) => { p.health -= 25
            }, 1))
            
        }
        bricks[i][0].setPosition(new Vector3(0,10000+i*2,0))
        target_team[i] = undefined
      }
  })

})
//bricks.touching(debounce((p) => { p.ki }, 500))