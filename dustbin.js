class Box {
		constructor(x,y,width,height) {
			var options = {
				isStatic:true,
				restitution:0
			}
			this.body = Bodies.rectangle(x,y,width,height,options);
			this.width = width;
			this.height = height;
			this.image = loadImage("dustbingreen.png");
			World.add(world,this.body);
		}
		display() {
			var pos = this.body.position;
			rectMode(CENTER);
			imageMode(CENTER);
        	image(this.image,(width)/2+200,height-125,220,220);
			rect(pos.x,pos.y,this.width,this.height);
		}
	}