import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    this.load.image('banana', '/src/assets/fruit/banana.png');
  }

  create() {
    this.scene.start('StartMenuScene');
  }
}
