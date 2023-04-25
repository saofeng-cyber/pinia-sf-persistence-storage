<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/store/app';
const useApp = useAppStore();
const add = () => {
  useApp.increment();
};
const count = computed(() => useApp.count);
</script>

<template>
  <div class="card">
    <button type="button" @click="add">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
