export class BulletEnemy extends Phaser.Physics.Arcade.Sprite {

  speed: number;

  constructor(scene: Phaser.Scene) {
    super(scene, 0, 0, "red_bullet");
    this.setActive(false);
  }

  fire(x: number, y: number) {
    Phaser.Physics.Arcade.Sprite.call(this, this.scene, 0, 0, 'red_bullet');
    this.setScale(0.5, 0.5);

    this.speed = Phaser.Math.GetSpeed(-300, 1);

    this.scene.physics.add.existing(this);

    this.body.reset(x, y);
    this.body.height *= 0.5;
    this.body.width *= 0.5;

    this.setPosition(x, y);

    this.setActive(true);
    this.setVisible(true);
  }

  update(time: number, delta: number) {
    this.y -= this.speed * delta;

    if (this.y > 700) {
      this.setActive(false);
      this.setVisible(false);
    }
  }

}
