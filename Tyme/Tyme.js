import {Obj} from "/Tyme/Obj.js";

class Game extends Obj {
	constructor() {
		super("Game");

		this.Cnv;
		this.Ctx2D;
	}
}

function SetUpGame(W,H) {
	let Tyme = new Game();
	Tyme.Cnv = document.getElementById("game");
	Tyme.Ctx2D = Tyme.Cnv.getContext("2d")

	Tyme.Cnv.width = W;
	Tyme.Cnv.height = H;
	
	Tyme.Init();
	
	setInterval(
		() => {
			Tyme.Ctx2D.beginPath();
			Tyme.Ctx2D.clearRect(0,0,Tyme.Cnv.width, Tyme.Cnv.height);
			
			Tyme.Ctx2D.beginPath();
			Tyme.Ctx2D.fillStyle = "lightgray"
			Tyme.Ctx2D.rect(0,0,Tyme.Cnv.width,Tyme.Cnv.height);
			Tyme.Ctx2D.fill();
			
			Tyme.Update();
			Tyme.Draw();
		}, (1000/60)
	);
	
	return Tyme;
}

var Tyme = SetUpGame(320,200);

export {Tyme};