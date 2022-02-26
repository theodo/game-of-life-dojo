<template>
  <div class="cell" :class="{ alive: isAlive }"></div>
</template>

<script lang="ts" setup>
defineProps<{ isAlive?: boolean }>();
</script>

<style scoped>
.cell {
  border: 1px solid var(--color-border);
  height: 16px;
  width: 16px;
}

.alive {
  background-color: var(--color-accent);
}
</style>
