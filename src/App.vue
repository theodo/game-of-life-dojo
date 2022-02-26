<template>
  <header>
    <img alt="Theodo" class="logo" src="./assets/theodo.svg" />
    <img alt="Vue" class="logo" src="./assets/vue.svg" />
  </header>
  <main>
    <CellGrid
      :alive-cell-map="aliveCellMap"
      :column-count="columnCount"
      :on-cell-click="toggleCell"
      :row-count="rowCount"
    />
    <div class="button-container">
      <button @click="randomizeMap()">Randomize</button>
      <button @click="updateAliveCellMap()">Next</button>
      <button @click="clearMap()">Clear</button>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

import CellGrid from "@/components/CellGrid.vue";
import getNextMap from "@/helpers/getNextMap";
import getRandomizedMap from "@/helpers/getRandomizedMap";
import type { CellMap } from "@/types";

const aliveCellMap = ref<CellMap>({
  R6C15: true,
  R9C13: true,
  R8C18: true,
  R1C25: true,
  R5C24: true,
});
const rowCount = ref(10);
const columnCount = computed(() => 3 * rowCount.value);

const clearMap = () => {
  aliveCellMap.value = {};
};
const randomizeMap = () => {
  aliveCellMap.value = getRandomizedMap(rowCount.value, columnCount.value);
};
const toggleCell = (id: string) => {
  const newAliveCellMap = { ...aliveCellMap.value };
  newAliveCellMap[id] = !newAliveCellMap[id];
  aliveCellMap.value = newAliveCellMap;
};
const updateAliveCellMap = () => {
  aliveCellMap.value = getNextMap(
    rowCount.value,
    columnCount.value,
    aliveCellMap.value
  );
};

let intervalId: number;
onMounted(() => {
  intervalId = setInterval(updateAliveCellMap, 1000);
});
onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style>
@import "./assets/base.css";

.logo {
  height: 40px;
}

main {
  margin: 16px 0;
}

.button-container {
  border: 1px solid var(--color-border);
  border-radius: 4px;
  margin: auto;
  padding: 8px 16px;
  width: 90vw;
}

button {
  margin-right: 8px;
  padding: 8px 16px;
}
</style>
