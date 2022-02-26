<template>
  <header>
    <img alt="Theodo" class="logo" src="./assets/theodo.svg" />
    <img alt="Vue" class="logo" src="./assets/vue.svg" />
  </header>
  <main><CellGrid column-count="30" row-count="10" /></main>
</template>

<script lang="ts" setup>
import CellGrid from "@/components/CellGrid.vue";
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
