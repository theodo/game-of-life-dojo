<template>
  <header>
    <img alt="Theodo" class="logo" src="./assets/theodo.svg" />
    <img alt="Vue" class="logo" src="./assets/vue.svg" />
  </header>
  <main>
    <CellGrid
      :alive-cell-map="aliveCellMap"
      :column-count="columnCount"
      :row-count="rowCount"
    />
  </main>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

import CellGrid from "@/components/CellGrid.vue";
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
</script>

<style>
@import "./assets/base.css";

.logo {
  height: 40px;
}

main {
  margin: 16px 0;
}
</style>
