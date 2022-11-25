import {RectObj} from "/Tyme/RectObj.js"
import {Obj} from "/Tyme/Obj.js"
import {Tyme} from "/Tyme/Tyme.js"

Tyme.AddScene(new Obj("Main"));

Tyme.GetSceneByName("Main").AddChild(new RectObj(0,0,32,32));