<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { onMounted, onUnmounted } from "vue";
const isDark = useDark();
const toggleDark = useToggle(isDark);
let inter = setInterval(() => {
  let moon = document.querySelector(".darkmode");
  moon.classList.toggle(`rotate-90`);
}, 2000);

onUnmounted(() => {
  clearInterval(inter);
});
</script>

<template>
  <div class="border border-slate-500 dark:border-slate-300">
    <div
      class="flex border-y px-2 border-green-500 dark:border-slate-400 justify-between w-full items-center"
    >
      <h1 class="text-black dark:text-white">Theme</h1>

      <div
        @click="
          {
            toggleDark();
          }
        "
        class="bg-[#0b8df8] dark:bg-[#424242] cursor-pointer flex p-1 h-10 w-20 rounded-full overflow-hidden"
      >
        <div
          :class="[isDark ? 'translate-x-32' : '']"
          class="lightmode duration-300 w-full flex justify-start"
        >
          <i
            class="bx bxs-sun text-2xl bg-white rounded-full px-1 text-yellow-500"
          ></i>
        </div>
        <div
          :class="[!isDark ? '-translate-x-32' : '']"
          class="darkmode duration-300 w-full flex justify-end"
        >
          <i
            class="bx bxs-moon text-2xl bg-blue-800 rounded-full px-1 text-white -rotate-90"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
