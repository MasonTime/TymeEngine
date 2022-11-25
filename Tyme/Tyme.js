import {Entity} from "/Tyme/Entity.js";

var Tyme = new Entity();

var sketch = new p5 ( (p5) => {
	
	p5.setup = function() {
		
		p5.createCanvas(320, 200);
	
		console.log("STARTED");
		p5.background(200);
		
		Tyme.Init();
		
	}
	
	p5.draw = function() {
		Tyme.Update();
		Tyme.Draw(p5);
	}
	
});

export {Tyme};