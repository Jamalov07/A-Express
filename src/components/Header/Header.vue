<script setup>
import { ref } from "vue";
import logOutAdmin from "../../helper/logout";
import { adminLoginStore } from "../../store/AdminLogin";
import { useRouter } from "vue-router";
const adminLogin = adminLoginStore();
const router = useRouter();

function logout() {
  logOutAdmin();
  adminLogin.isLogged = false;
  router.push("/login");
}

let isMenuOpen = ref(false);

function toogleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <div class="w-full flex justify-between items-center">
    <div
      class="flex w-[85%] sm:w-[55%] h-[49px] justify-start items-center px-4 border border-[#ADA7A7] dark:text-white bg-white dark:bg-[#262626] rounded-[6px]"
    >
      <i class="bx bx-search text-2xl text-[#ADA7A7] dark:text-white"></i>
      <input
        type="text"
        class="outline-none border-0 w-full focus:ring-0 ring-0 bg-white dark:bg-[#262626] text-black dark:text-white placeholder:text-[#ADA7A7] dark:placeholder:text-white placeholder:text-base"
        placeholder="Qidirish"
      />
    </div>

    <div class="hidden sm:flex gap-1 md:gap-4 items-center">
      <div class="hidden md:flex items-end gap-2">
        <h1 class="text-end dark:text-white">
          {{ adminLogin.admin.full_name || "Anonymous" }}
        </h1>
      </div>
      <div
        class="border cursor-pointer rounded-[6px] bg-white dark:bg-[#262626] flex justify-center items-center px-2 py-1"
      >
        <i
          class="bx bxs-user text-2xl text-[#ADA7A7] hover:text-black dark:hover:text-white"
        ></i>
      </div>
      <div
        class="relative cursor-pointer border dark:bg-[#262626] rounded-[6px] bg-white flex justify-center items-center px-2 py-1"
      >
        <i
          class="bx bxs-bell-ring text-2xl text-[#ADA7A7] hover:text-black dark:hover:text-white"
        ></i>
        <div
          class="w-2 h-2 rounded-full bg-[#FFBC0F] absolute -right-1 -top-1"
        ></div>
      </div>
      <div
        class="ml-0 md:ml-4 dark:bg-[#262626] cursor-pointer border rounded-[6px] bg-white flex justify-center items-center px-2 py-1"
      >
        <i
          @click="logout()"
          class="bx bxs-log-in text-2xl text-[#ADA7A7] hover:text-black dark:hover:text-white"
        ></i>
      </div>
    </div>
    <!--  -->
    <div class="sm:hidden relative cursor-pointer">
      <div>
        <i
          v-if="!isMenuOpen"
          @click="toogleMenu"
          class="bx bx-menu text-3xl dark:text-white"
        ></i>
        <i
          v-if="isMenuOpen"
          @click="toogleMenu"
          class="bx bx-x text-3xl dark:text-white"
        ></i>
      </div>

      <div
        v-if="isMenuOpen"
        class="absolute z-20 -right-2 py-2 px-1 rounded-md sm:flex bg-slate-500 dark:bg-slate-400 gap-1 h-[200px] md:gap-4 items-center"
      >
        <div
          class="border rounded-[6px] bg-white dark:bg-[#262626] flex justify-center items-center px-2 py-1"
        >
          <i
            class="bx bxs-user text-2xl text-[#ADA7A7] dark:hover:text-white hover:text-black"
          ></i>
        </div>
        <div
          class="relative border my-2 dark:bg-[#262626] rounded-[6px] bg-white flex justify-center items-center px-2 py-1"
        >
          <i
            class="bx bxs-bell-ring text-2xl text-[#ADA7A7] dark:hover:text-white hover:text-black"
          ></i>
          <div
            class="w-2 h-2 rounded-full bg-[#FFBC0F] absolute -right-1 -top-1"
          ></div>
        </div>

        <div
          class="ml-0 md:ml-4 border dark:bg-[#262626] rounded-[6px] bg-white flex justify-center items-center px-2 py-1"
        >
          <i
            @click="logout()"
            class="bx bxs-log-in text-2xl dark:hover:text-white text-[#ADA7A7] hover:text-black"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
