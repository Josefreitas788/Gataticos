export default class Asteroides extends Phaser.Physics.Arcade.Sprite {
//Phaser.Physics.Arcade.Sprite 

  constructor (scene, x, y){
    super (scene, x, y, 'asteroides');

    this.speed = Phaser.Math.GetSpeed(100,1);
    this.orbiting = false;
    this.direction = 0;
  }

 isOrbiting(){
    return this.orbiting;
  }
 
  movi(shipX, shipY){
    this.orbiting = true;
    this.setActive(true);
    this.setVisible(true);
    
    let xOrigem = Phaser.Math.RND.between(0,800);
    let yOrigem = 0; //cima
    this.setPosition(xOrigem, yOrigem);

    let m = (shipY - yOrigem) / (shipX - xOrigem);
    this.direction = Math.atan(m);

    //ângulo de rotação 
    this.angleRotation = Phaser.Math.RND.between(0.2, 0.9);
  }

    update(time, delta) {
      this.x += Math.cos(this.direction) * this.speed * delta;

      this.y += Math.sin(this.direction) * this.speed * delta;

      this.angle += this.angleRotation;

      if (this.x < -50 || this.y < -50 || this.x > 800 || this.y > 600) {
        this.setActive(false);
        this.setVisible(false);
      }
    }
}
