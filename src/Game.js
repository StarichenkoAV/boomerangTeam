// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const runInteractiveConsole = require('./keyboard');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor(obj) {
    this.trackLength = obj.trackLength;
    this.hero = new Hero({ position: 0, weapon: new Boomerang() }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
    this.boomerang = new Boomerang();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.hero.weapon.position] = this.hero.weapon.skin;
  }

  check() {
    if (this.hero.position >= this.enemy.position) {
      this.hero.die();
    }
    if (this.hero.position >= this.hero.weapon.position) {
      this.hero.weapon.position = this.hero.position + 1;
    }
    if (this.hero.weapon.position >= this.enemy.position) {
      this.enemy.die();
      this.hero.weapon.position = this.hero.position + 1;
    }
    if (this.hero.weapon.position < this.enemy.position) {
      this.hero.weapon.fly();
    }
  }

  play() {
    runInteractiveConsole(this.hero.weapon);
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
      this.enemy.moveLeft();
    }, 1000);
  }
}

module.exports = Game;
