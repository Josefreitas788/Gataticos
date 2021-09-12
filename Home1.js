export default class Home1 extends Phaser.Scene {
  constructor (){
      super('Home1');
  }

  preload() {

      //tela1
      this.load.image("tela1", "telas/tela1.png");
      //botão
      this.load.image("seta", "telas/seta.png");
  }

   create() {

      this.add.image(0,0,"tela1").setOrigin(0,0);

      //botão
      let btnPlay = this.add.image(650,370,"seta").setScale(0.1, 0.1);
      btnPlay.setInteractive();
      btnPlay.on("pointerdown", () => this.scene.start("Home"));
  }
}