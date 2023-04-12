<script setup>
const props = defineProps({
  btnTitle: {
    type: String,
  },
  textContent: {
    type: String,
  },
  dynamicClass: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
});
</script>
<template>
  <div>
    <p class="text-2xl mb-4 text-black dark:text-white">{{ props.btnTitle }}</p>
    <button
      @click="(e) => $emit('send',1)"
      :disabled="props.disabled"
      type="submit"
      :class="[dynamicClass, props.disabled ? '' : 'shadow-md']"
      class="focus:ring-sky-500 focus:ring-2 rounded-[3px] font-medium h-[49px] text-black dark:text-white"
    >
      {{ props.textContent }}
    </button>
  </div>
</template>
<style></style>
