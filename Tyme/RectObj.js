import {Entity} from "/Tyme/Entity.js";

class RectObj extends Entity {
	constructor(X,Y,W,H) {
		super(X,Y,W,H, "Phil");
	}

	Draw(p5) {
		super.Draw(p5);

		p5.rect(this.x,this.y,this.w,this.h);
	}

	Update() {
		super.Update();
	}
	
}

export {RectObj};