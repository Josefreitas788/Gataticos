export default class Home extends Phaser.Scene {
  constructor (){
      super('Home');
  }

   preload() {

      //tela2
      this.load.image("tela2", "telas/tela2.png");
      //botão
      this.load.image("play", "telas/play.png");
  }

   create() {

      this.add.image(0,0,"tela2").setOrigin(0,0);

      //botão
      let btnPlay = this.add.image(350,250,"play").setScale(0.4, 0.4);
      btnPlay.setInteractive();
      btnPlay.on("pointerdown", () => this.scene.start("Main"));
  }
}