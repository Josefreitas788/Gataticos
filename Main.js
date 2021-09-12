//https://www.youtube.com/watch?v=3kkHssPRahc

//https://www.youtube.com/watch?v=JZ5e4JR5wEs

//https://www.youtube.com/watch?v=MnAlfNX4oWA

//https://www.youtube.com/watch?v=cPYOkzQPKvM

import GameOver from '/GameOver.js';
import Laser from '/Laser.js';
import Meteoro from '/Meteoro.js';
import Explosao from '/Explosao.js';
import Home1 from '/Home1.js';

var fundo_teste;
var scene_width = 700; //tamanho do cenario 640
var scene_height = 400; //tamanho do cenario 360
var scene_width_2 = scene_width / 2;
var scene_height_2 = scene_height / 2;
var player;
var meteoro_inimiga;
var tempoMeteoro = 0;
var lastFired = 0;
var text;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


export default class Main extends Phaser.Scene {

  constructor() {
    super({ key: 'Main' });

  }


  preload() {

    //fundo de tela
    this.load.image('fundo', 'assets/fundo.png');

    //player
    this.load.image('player', 'assets/player.png');

    //meteoro inimiga
    this.load.image('meteoro-inimiga', 'assets/meteoro-inimiga.png');

    //laser
    this.load.image('Laser', 'assets/laserRed01.png');

    //explosão
    this.load.spritesheet('explode', 'assets/explode.png', {
      frameWidth: 128,
      frameHeight: 128
    });

    //meteoro
    this.load.image('meteoroBrown-6', 'assets/meteoros/meteoroBrown-6.png');
  }

  create() {


    //fundo
    fundo_teste = this.add.tileSprite(scene_width_2, scene_height_2, scene_width, scene_height, 'fundo');

    //Textos Do jogo



    //player/meteoro
    player = this.physics.add.image(400, 300, 'player').setScale(0.5, 0.5);
    //velocidade maxima do player/meteoro
    player.setMaxVelocity(200);
    //colisão do player/meteoro com as "bordas"
    player.setCollideWorldBounds(true);
    //
    player.setDrag(0.99);

    //teclas
    this.cursors = this.input.keyboard.createCursorKeys();

    //Laser
    //criando o group
    this.laserGroup = this.physics.add.group({
      //definindo o objeto
      classType: Laser,
      runChildUpdate: true

    });
    this.meteoroGroup = this.physics.add.group({
      //definindo o objeto
      classType: Meteoro,
      runChildUpdate: true

    });
    
    //this.explosaoGroup = this.physics.add.group//({ 
    //  //definindo o objeto
    //  classType: Explosao,
    //  //maxSize: 20000, 
    //  runChildUpdate: true
    //
    //})

    //this.ship = this physics
    //Teclas
    this.r = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
    this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    this.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    this.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
  }

  update() {
    fundo_teste.tilePositionY -= 1;//fica rodando a imagem de fundo

    //Colisão
    this.physics.add.collider(player, this.meteoroGroup, null, null, this);
    this.physics.add.collider(this.meteoroGroup, this.laserGroup, null, null, this);

    this.physics.overlap(this.laserGroup, this.meteoroGroup, poscolisao, null, this);
    this.physics.overlap(player, this.meteoroGroup, gameOver, null, this);

    //Game Over
    function gameOver(player, meteoro) {
      meteoro.destroy();

      //meteoro.anims.generateFrameNumbers('explode', { start: 0, end: 3 });

      player.disableBody(true, true);
      this.scene.launch('GameOver');
      this.scene.pause();
    }
    
    if(this.r.isDown){     
    }
    
    //Colisão laser com meteoro
    function poscolisao(shoot, meteoro) {

      //let explosao = new Explosao(this, meteoro.x, meteoro.y);
      let explosao = new Explosao();

      meteoro.destroy();
      shoot.destroy();
      //this.scene.start("Explosao");

      //this.anims.generateFrameNumbers('explode', { start: 0, end: 3 });

    }
    //cria meteoros
    if (tempoMeteoro < this.time.now) {
      let meteoro = this.meteoroGroup.get();
      meteoro.cria(getRandomInt(0, 700), 0);
      setTimeout(function () {
        meteoro.destroy();
      }, 2800);

      tempoMeteoro = this.time.now + 300;

    }




    //setas
    if ((this.cursors.left.isDown || this.a.isDown) || (this.cursors.right.isDown || this.d.isDown)) {
      player.setVelocityX(this.cursors.left.isDown || this.a.isDown ? -250 : 250);
    }
    else { player.setVelocityX(0); }

    if ((this.cursors.up.isDown || this.w.isDown) || (this.cursors.down.isDown || this.s.isDown)) player.setVelocityY(this.cursors.up.isDown || this.w.isDown ? -250 : 250);

    else player.setVelocityY(0);



    if (this.space.isDown && this.time.now > lastFired) {
      let shoot = this.laserGroup.get();

      if (shoot) {
        shoot.fire(player.x, player.y);
        setTimeout(function () {
          shoot.destroy();
        }, 700);

        lastFired = this.time.now + 300;
      }
    }


  }
}