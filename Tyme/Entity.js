import {Obj} from "/Tyme/Obj.js";

class Entity extends Obj {
	constructor (X, Y, W, H, NAME="n/a") {
		super(NAME);
		
		this.x = X;
		this.y = Y;
		this.w = W;
		this.h = H;
	}
}

export {Entity};