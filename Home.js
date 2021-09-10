//class Home extends Phaser.Scene{
export default class Home extends Phaser.Scene {
  constructor (){
      super('Home');
  }

  //var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

   preload() {

      //game.load.bitmapFont('carrier_command', 'assets/fonts/bitmapFonts/carrier_command.png', 'assets/fonts/bitmapFonts/carrier_command.xml');

      this.load.image("teste", "assets/player.png");

  }

//var bpmText;

   create() {

      // bmpText = game.add.bitmapText(10, 100, 'carrier_command','Drag me around !',34);

      // bmpText.inputEnabled = true;

      // bmpText.input.enableDrag();

      this.add.imagem(0,0,"teste").setOrigins(0,0);

  }

}