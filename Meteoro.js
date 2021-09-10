export default class Meteoro extends Phaser.Physics.Arcade.Sprite{

  constructor (cena, x, y){
    super(cena, x, y, 'meteoroBrown-6');

    this.speed = Phaser.Math.GetSpeed(200,0.5);

  }
  
    cria(x,y)
    {
      this.setPosition(x, y);
      this.setActive(true);
      this.setVisible(true);
    }
   


    update(time, delta) {

      this.y +=2.5;
    }
} 
    

