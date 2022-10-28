// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 12;
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    if (this.position > 0) {
      this.position -= 1;
    }
  }

  die() {
    this.position = 8;
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
