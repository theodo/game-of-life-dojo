<template>
  <header>
    <img alt="Theodo" class="logo" src="./assets/theodo.svg" />
    <img alt="Vue" class="logo" src="./assets/vue.svg" />
  </header>
  <main><CellSquare is-alive /><CellSquare /></main>
</template>

<script lang="ts" setup>
import CellSquare from "@/components/CellSquare.vue";
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
