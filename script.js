class one extends Phaser.Scene {
    constructor(){
        super('cin1');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('banana1', 'banana1.png')
        this.load.image('banana2', 'banana2.png')
        this.load.audio('audio1', '1.wav')
    }
    create(){
        let boom = this.sound.add('audio1')
        boom.setVolume(0.7)

        boom.play()


        this.imageObject1 = this.add.image(
            0,
            300,
            'banana2',
        )
        this.imageObject1.setScale(1.0)

        this.tweens.add({
            targets: this.imageObject1,
            x: {from: 0, to: 200},
            alpha: {from: 0, to: 1},
            duration: 550,
            repeat: 1
        })

        this.imageObject2 = this.add.image(
            490,
            300,
            'banana1',
        )
        this.imageObject2.setScale(1.0)    

        this.time.delayedCall(3000, () => {
            this.cameras.main.fadeOut(2000, 0,0,0);
        })

        this.time.delayedCall(5000, () => {
            this.scene.start('cin2'); 
        })
    }
}

class two extends Phaser.Scene {
    constructor(){
        super('cin2');
    }
    
}



let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0xffeb98,
    scene: [one, two],
}

let game = new Phaser.Game(config)