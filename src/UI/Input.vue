<script setup>
const props = defineProps({
  labelId: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  inputType: {
    type: String,
  },
  dynamicClass: {
    type: String,
  },
  send: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
});
</script>
<template>
  <label :for="props.labelId" class="w-[270px] block">
    <p class="text-black dark:text-white mb-4" :id="props.placeholder">{{ props.labelId }}</p>
    <input
      :disabled="props.disabled || false"
      @input="(e) => $emit('accept', e.target.value)"
      :type="props.inputType"
      :value="props.send"
      :id="props.labelId"
      class="rounded-[3px] h-[49px] px-3 py-2 w-full border border-[#ADA7A7] focus:outline-none placeholder:text-[#19191960] ring-0 focus:ring-0"
      :placeholder="props.placeholder"
      :class="dynamicClass"
    />
  </label>
</template>
<style scoped></style>
