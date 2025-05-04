<template>
  <div ref="gameContainer" class="game-container"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { createPhaserGame } from '@/games/fruit-force/index';

const gameContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (gameContainer.value) {
    createPhaserGame(gameContainer.value);
  }
});
</script>

<style scoped>
.game-container {
  width: 100%;
  height: 100vh;
  background: black;
}
</style>
