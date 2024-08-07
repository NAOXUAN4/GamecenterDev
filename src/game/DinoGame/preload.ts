export class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }


Preload(){
    this.load.setBaseURL('assets/');


    this.load.image('ground','assets\\DinoAssets\\Dinoground.png')


    this.load.aseprite('dino-run', 'assets\\DinoAssets\\NUINUIRUN-Sheet.aseprite');
    this.load.aseprite('dino-jump', 'assets\\DinoAssets\\SpriteNUINUIJump-Sheet.aseprite');
    this.load.image('dino-down', 'assets\\DinoAssets\\NIUNIUDOWN.png');
}
}