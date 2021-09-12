export default class GameOver extends Phaser.Scene {
  constructor (){
      super('GameOver');
  }
   preload() {
      //game over
      this.load.image("gameover", "telas/gameover.png");
  }

   create() {
      this.add.image(0,0,"gameover").setOrigin(0,0);
  }
}