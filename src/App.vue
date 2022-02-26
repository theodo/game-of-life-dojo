<template>
  <header>
    <img alt="Theodo" class="logo" src="./assets/theodo.svg" />
    <img alt="Vue" class="logo" src="./assets/vue.svg" />
  </header>
  <main><CellGrid :column-count="columnCount" :row-count="rowCount" /></main>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

import CellGrid from "@/components/CellGrid.vue";

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
