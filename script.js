class title extends Phaser.Scene {
    constructor(){
        super('cin1');
    }
    create() {
        this.add.text(10,10,"Click to begin.");
        this.input.on('pointerdown', () => this.scene.start('cin2'))
    }

}

class body extends Phaser.Scene {
    constructor(){
        super('cin2');
    }
    create() {
        this.add.text(10,10,"I am scene two.");
    }
}



new Phaser.Game({
    width: 800,
    height: 600,
    scene: [title, body],
})

