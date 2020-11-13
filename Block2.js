class Block2{
    constructor(x, y, width, height){
        var options = {
            'isStatic': false,
            'friction': 1.0,
            'density': 0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        if(this.body.speed < 3){
            strokeWeight(1);
            stroke(0);

            fill("#FEBFCA");

            rectMode(CENTER);
            rect(pos.x, pos.y, this.width, this.height);
        } else {
            World.remove(world, this.body);
        }
    }
}