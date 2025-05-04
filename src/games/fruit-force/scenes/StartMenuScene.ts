import Phaser from 'phaser';

export default class StartMenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartMenuScene' });
  }

  create() {
    const { width, height } = this.scale;

    this.add.text(width / 2, height / 2 - 50, 'Fruit Force', {
      fontSize: '32px',
      color: '#fff',
    }).setOrigin(0.5);

    const startButton = this.add.text(width / 2, height / 2 + 10, 'Start Game', {
      fontSize: '24px',
      backgroundColor: '#00ff00',
      color: '#000',
      padding: { x: 10, y: 5 }
    }).setOrigin(0.5).setInteractive();

    const exitButton = this.add.text(width / 2, height / 2 + 60, 'Exit', {
      fontSize: '24px',
      backgroundColor: '#ff0000',
      color: '#000',
      padding: { x: 10, y: 5 }
    }).setOrigin(0.5).setInteractive();

    startButton.on('pointerdown', () => {
      this.scene.start('GameScene');
    });

    exitButton.on('pointerdown', () => {
      // Just reload the page or close scene
      window.close(); // May not work depending on browser security
      this.scene.stop();
    });
  }
}
