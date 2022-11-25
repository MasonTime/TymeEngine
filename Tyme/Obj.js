class Obj {
	constructor (NAME = "n/a") {
		this.Tags = [];
		
		this.Children = [];

		this.Scenes = [];

		this.activeScene=0;
		this.name = NAME;
	}

	InitChildren() {
		for (let i in this.Children) {
			this.Children[i].Init();
		}
	}

	UpdateChildren() {
		for (let i in this.Children) {
			this.Children[i].Update();
		}
	}

	DrawChildren() {
		for (let i in this.Children) {
			this.Children[i].Draw();
		}
	}

	Init() {
		this.InitChildren();
		
		if (this.Scenes[this.activeScene] != undefined) {
			this.Scenes[this.activeScene].Init();
		}
	}
	
	Update() {
		this.UpdateChildren();

		if (this.Scenes[this.activeScene] != undefined) {
			this.Scenes[this.activeScene].Update();
		}
	}
	
	Draw() {
		this.DrawChildren();
		
		if (this.Scenes[this.activeScene] != undefined) {
			this.Scenes[this.activeScene].Draw();
		}
	}

	AddChild(OBJ) {
		this.Children.push(OBJ);
	}

	AddTag(TAG) {
		this.Tags.push(TAG);
	}

	AddScene(SCENE) {
		this.Scenes.push(SCENE);
	}

	GetMemberByName(ARRAY,NAME) {
		for (let i = 0; i < ARRAY.length; i++) {
			if (ARRAY[i].name === NAME) {
				return i;
			}
		}
	}

	GetSceneByName(NAME) {
		return this.Scenes[this.GetMemberByName(this.Scenes, NAME)];
	}

	GetChildByName(NAME) {
		return this.Children[this.GetMemberByName(this.Children, NAME)];
	}
}

export {Obj};