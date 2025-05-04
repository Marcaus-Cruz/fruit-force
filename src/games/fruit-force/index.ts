import Phaser from 'phaser';
import StartMenuScene from './scenes/StartMenuScene';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import config from './game.config';

export const createPhaserGame = (parent: HTMLElement) => {
  const gameConfig: Phaser.Types.Core.GameConfig = {
    ...config,
    parent,
    scene: [BootScene, StartMenuScene, GameScene],
  };
  return new Phaser.Game(gameConfig);
};
