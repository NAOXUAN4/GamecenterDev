<script setup>
import DinoPage from '@/views/DinoPage.vue'
</script>

<template>
  <Suspense>
    <DinoPage />

    <template #fallback>
      <div class="placeholder">
        Downloading ...
      </div>
    </template>
  </Suspense>
</template>
