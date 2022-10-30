// Наш герой.

class Hero {
  constructor(obj) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = obj.position;

  }

  moveLeft() {
    // Идём влево.
    if (this.position > 0) {
      this.position -= 1;
    }
  }

  moveRight() {
    // Идём вправо. ПОДКЛЮЧИТЬ ДЛИНУ ТРЕКА!!!!
    if (this.position <= 30) {
      this.position += 1;
    }
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
