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
        this.cameras.main.backgroundColor.setTo(255,235,152)
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
    preload(){
        this.load.path = './assets/';
        this.load.image('background1', 'background1.png')
        this.load.image('item2', 'item2.png')
        this.load.audio('audio2', '2.wav')
    }
    create(){
        let bang = this.sound.add('audio2')
        bang.setVolume(0.1)

        bang.play()

        this.imageObject3 = this.add.image(
            400,
            300,
            'background1'
        )
        this.imageObject3.setScale(0.2)

        this.imageObject4 = this.add.image(
            500,
            500,
            'item2'
        )
        this.imageObject4.setScale(0.09)
        this.tweens.add({
            targets: this.imageObject4,
            x: {from: 0, to: 500},
            duration: 2000,
        })

        this.textObject1 = this.add.text(
            50,
            50,
            "CITY SPEEDSTER",
            {
                font: "60px Impact",
                color: "#FFFFFF",
            }
        )

        this.textObject2 = this.add.text(
            50,
            150,
            "CLICK TO START"
        )
        this.textObject3 = this.add.text(
            50,
            200,
            "OPTIONS"
        )
        this.textObject4 = this.add.text(
            50,
            250,
            "CREDIT"
        )


        this.input.on('pointerdown', () => {
            bang.stop()
            this.scene.start('cin3')
        })
    }
}


class three extends Phaser.Scene {
    constructor(){
        super('cin3');
    }
    create(){
        this.cameras.main.backgroundColor.setTo(33,33,33)
        
        
        this.textObject5 = this.add.text(
            250,
            200,
            "To drive faster, try collecting\nall fuel power ups.\nThe more fuel you have\nthe longer you can boost for speed."
        )
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xff7700, 1);
        this.graphics.fillRect(250, 300, 300, 50);

        this.graphics1 = this.add.graphics();
        this.graphics.fillStyle(0x98adff, 1);
        this.graphics.fillCircle(520, 325, 20);
    }
}


let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [three],
}

let game = new Phaser.Game(config)