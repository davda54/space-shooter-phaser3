export class Boot extends Phaser.Scene {

  constructor() {
    super("Boot");
  }

  preload() {
    console.log("Boot.preload()");
    this.load.setBaseURL("https://cdn.jsdelivr.net/gh/kefik/kenney/Shooter/");
    this.load.image("playership", "playerShip1_blue.png");

    this.load.image("blue_bullet", "lasers/laserBlue12.png");
    this.load.image("red_bullet", "lasers/laserRed05.png");

    this.load.image("enemy_1", "enemies/enemyRed1.png");
    this.load.image("enemy_2", "enemies/enemyRed3.png");
    this.load.image("enemy_3", "enemies/enemyRed5.png");
    this.load.image("meteor_1", "meteors/meteorGrey_med1.png");
    this.load.image("meteor_2", "meteors/meteorGrey_small1.png");
    this.load.image("meteor_3", "meteors/meteorGrey_tiny1.png");

    this.load.image("heart_powerup", "powerups/pill_yellow.png");
    this.load.image("weapon_powerup", "powerups/bolt_gold.png");
    this.load.image("shield_powerup", "powerups/shield_gold.png");

    this.load.image("life", "ui/playerLife1_blue.png");
    this.load.image("shield", "effects/shield3.png");

    this.load.image('fire_forward', "effects/fire01.png");
    this.load.image('fire_backward', "effects/fire03.png");

    this.load.image("damage_1", "damage/playerShip1_damage1.png");
    this.load.image("damage_2", "damage/playerShip1_damage2.png");
    this.load.image("damage_3", "damage/playerShip1_damage3.png");

    this.load.image("explosion_1", "effects/star1.png");
    this.load.image("explosion_2", "effects/star2.png");
  }

  create() {
    console.log("Boot.create()");
    this.scene.start("Play");
  }

}