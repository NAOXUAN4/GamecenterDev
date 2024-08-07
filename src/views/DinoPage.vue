<template>
  <div class="dino-page">
    <div class="game-container">
      <DinoGame />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DinoGame from '@/game/DinoGame/Dinogame';

export default defineComponent({
  name: 'DinoPage',
  components: {
    DinoGame
  }
});
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dino-page {
  display: flex;
  flex-direction: column;
}
</style>