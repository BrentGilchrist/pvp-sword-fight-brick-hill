



let mode = "Fighter"
let tool = new Tool("Katana")
tool.model = 3441

assign_int = 0
var i
var bricks = [];

Game.on("playerJoin", (player) => {
  player.num = assign_int++
  bricks.push([new Brick(),player.netid])

  player.on("initialSpawn", () => {
      player.equipTool(tool)
   })
  player.mouseclick(() => {
    tool.on("activated", () =>{
      bricks[player.num][0].setPosition(player.position)
    },100)

  })

})
//bricks.touching(debounce((p) => { p.ki }, 500))