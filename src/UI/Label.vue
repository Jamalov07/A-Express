<script setup>
const props = defineProps({
  labelId: {
    type: String,
  },
  placeholder: {
    type: String,
  },
});
</script>
<template>
  <label :for="props.labelId" class="w-[270px] block">
    <p class="text- mb-4 text-black dark:text-white" :id="props.placeholder">{{ props.labelId }}</p>
    <slot></slot>
  </label>
</template>
<style></style>
