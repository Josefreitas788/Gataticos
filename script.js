import Main from '/Main.js';
import Home from '/Home.js';
import Home1 from '/Home1.js';
import GameOver from '/GameOver.js';

const config = {
  width: 700,
  height: 400,
  type: Phaser.AUTO, 
  autoCenter:Phaser.Scale.CENTER_BOTH,
  physics:{
    default: "arcade", 
    arcade: {
        fds: 60,
        gravity: {y:0}
    }
  },
  scene: [Home1, Home, Main, GameOver]
};

const game = new Phaser.Game(config);