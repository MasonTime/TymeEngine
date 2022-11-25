import {Entity} from "/Tyme/Entity.js";
import {Tyme} from "/Tyme/Tyme.js";

class RectObj extends Entity {
	constructor(X,Y,W,H) {
		super(X,Y,W,H, "Phil");
	}

	Draw() {
		super.Draw();
		Tyme.Ctx2D.beginPath();
		Tyme.Ctx2D.rect(this.x,this.y,this.w,this.h);
		Tyme.Ctx2D.stroke();
		
	}

	Update() {
		super.Update();
		this.x += 1;
	}
	
}

export {RectObj};