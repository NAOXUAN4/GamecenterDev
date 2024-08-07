import { defineComponent, onMounted, onUnmounted, ref, Ref } from 'vue';
import Phaser from 'phaser';
import { PlayScene } from '@/game/DinoGame/playscene';
import { PreloadScene } from '@/game/DinoGame/preload';

export default defineComponent({
  name: 'DinoGame', // 确保组件名称一致
  setup() {
    const gameInstance: Ref<Phaser.Game | null> = ref(null);

    const initGame = () => {
      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: 'game-container',
        scene: [PreloadScene, PlayScene],
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { x: 0, y: 300 },
            debug: false
          }
        }
      };

      gameInstance.value = new Phaser.Game(config);
    };

    onMounted(() => {
      initGame();
    });

    onUnmounted(() => {
      if (gameInstance.value) {
        gameInstance.value.destroy(true);
        gameInstance.value = null;
      }
    });

    return {};
  }
});