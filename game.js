import TileMap from "./TileMap.js";

const canvas= document.getElementById("game");
const ctx= canvas.getContext("2d");
const tilesize=32;
const tileMap= new TileMap(tilesize);

function gameloop()
{
	tileMap.draw(canvas,ctx);
}

setInterval(gameloop,100/60);
