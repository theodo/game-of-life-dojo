<template>
  <p>{{ message }}</p>
</template>

<script lang="ts" setup>
defineProps<{ message: string }>();
</script>
