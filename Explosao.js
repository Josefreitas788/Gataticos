export default class Explosao extends Phaser.GameObjects.Sprite{
  //constructor(cena,x,y){
    constructor(){

    //super(cena,x,y,"explode");
    super("Explosao");
    //this.scene.add.existing(this);
    //this.play("explode");
  } 
    preload() {

      this.load.spritesheet('explode', 'assets/explode.png', {
      frameWidth: 128,
      frameHeight: 128
    });
      //this.load.image("gameover", "telas/gameover.png");
  }

   create() {
      //this.add.image(0,0,"gameover").setOrigin(0,0);
      this.anims.generateFrameNumbers('explode', { start: 0, end: 3 });
  }
}