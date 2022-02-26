<template>
  <div
    class="grid"
    :style="`
    grid-template-columns: repeat(${columnCount}, 1fr);
    grid-template-rows: repeat(${rowCount}, 1fr);
    `"
  >
    <CellSquare v-for="i in cellCount" :key="i" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

import CellSquare from "@/components/CellSquare.vue";

const props = defineProps<{ columnCount: number; rowCount: number }>();
const cellCount = computed(() => props.columnCount * props.rowCount);
</script>

<style scoped>
.grid {
  background-color: var(--color-accent);
  border: 1px solid var(--color-border);
  display: grid;
  grid-gap: 1px;
  height: 30vw;
  margin: 64px auto 32px;
  width: 90vw;
}
</style>
