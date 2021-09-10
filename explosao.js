class Explosion extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y){
        super(scene,x,y,"explode");
        scene.add..existing(this);
        this.play("kaboom");
    }
}