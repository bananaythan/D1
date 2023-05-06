class one extends Phaser.Scene {
    constructor(){
        super('cin1');
    }
    create() {
        this.add.text(10,10,"Click to begin.");
        this.input.on('pointerdown', () => this.scene.start('cin2'))
    }

}

class two extends Phaser.Scene {
    constructor(){
        super('cin2');
    }
    create() {
        this.add.text(10,10,"I am scene two.");
        let circle = this.add.circle(150, 150, 100, 0xff0000);
        circle.scale = 0;
        this.add.tween({
            targets: circle,
            scale: {from: 0, to: 1},
            duration: 2000
        })
        this.time.delayedCall(3000, () => {
            this.cameras.main.fadeOut(2000, 0,0,0);
        })
    }
}



new Phaser.Game({
    width: 800,
    height: 600,
    scene: [one, two],
})

