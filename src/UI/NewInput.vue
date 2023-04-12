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
  model: {
    type: Object,
  },
});
</script>
<template>
  <input
    v-model="props.model"
    :type="props.inputType"
    :id="props.labelId"
    class="rounded-[3px] px-3 py-2 w-full border border-[#ADA7A7] focus:outline-none placeholder:text-[#19191960] ring-0 focus:ring-0"
    :placeholder="props.placeholder"
  />
</template>
<style></style>
