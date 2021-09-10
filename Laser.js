export default class Laser extends Phaser.Physics.Arcade.Sprite{

  constructor (cena, x, y){
    super(cena, x, y, 'Laser');

    this.speed = Phaser.Math.GetSpeed(200,0.5);

  }
    fire(x, y)
    {
      this.setPosition(x, y-50);
      this.setActive(true);
      this.setVisible(true);
    }

    update(time, delta)
    {
      //this.x += 1;
      this.y -= 10;

    }

}