import Main from '/Main.js';
import Home from '/Home.js';

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
  scene: [Home, Main]
};

const game = new Phaser.Game(config);