<template>
  <div class="cell" :class="{ alive: isAlive }"></div>
</template>

<script lang="ts" setup>
defineProps<{ isAlive?: boolean }>();
</script>

<style scoped>
.cell {
  background-color: var(--color-background);
}

.alive {
  background-color: var(--color-accent);
}
</style>
