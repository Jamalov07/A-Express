<script setup>
import { adminLoginStore } from "../../store/AdminLogin";
const adminLogin = adminLoginStore();
</script>

<template>
  <div
    class="h-screen sticky top-0 bg-white dark:bg-[#262626] flex justify-center flex-col items-center font-[Poppins]"
  >
    <h1
      class="hidden md:block text-[#013CC6] dark:text-blue-500 text-[16px] font-medium lg:text-[24px] xl:text-[28px] text-center py-10"
    >
      <a href="/">A-EXPRESS.UZ</a>
    </h1>
    <h1
      class="md:hidden text-[#013CC6] dark:text-blue-500  text-[16px] font-medium lg:text-[24px] xl:text-[28px] text-center py-10"
    >
      A-EX.UZ
    </h1>
    <div
      class="sidebar flex flex-col w-full justify-between text-[#131313] dark:text-white text-base"
    >
      <ul class="flex flex-col gap-8">
        <li id="1">
          <router-link
            to="/"
            class="flex gap-3 justify-center md:justify-start md:flex-wrap lg:flex-nowrap items-center :pl-0 md:pl-2 xl:pl-8"
          >
            <i class="bx bxs-dashboard text-2xl"></i>
            <h1 class="hidden md:block md:text-[14px] xl:text-base">
              Dashboard
            </h1>
          </router-link>
        </li>
        <li id="2" v-if="adminLogin.admin.is_creator">
          <router-link
            to="/employee/add"
            class="flex gap-3 justify-center md:justify-start md:flex-wrap lg:flex-nowrap items-center :pl-0 md:pl-2 xl:pl-8"
          >
            <i class="bx bxs-user-plus text-2xl"></i>
            <h1 class="hidden md:block md:text-[14px] xl:text-base">
              Hodim qo'shish
            </h1>
          </router-link>
        </li>
        <li id="3">
          <router-link
            to="/order/add"
            class="flex gap-3 justify-center md:justify-start md:flex-wrap lg:flex-nowrap items-center :pl-0 md:pl-2 xl:pl-8"
          >
            <i class="bx bxs-calendar-plus text-2xl"></i>
            <h1 class="hidden md:block md:text-[14px] xl:text-base">
              Yangi buyurtma
            </h1>
          </router-link>
        </li>
        <li id="4">
          <router-link
            to="/order/all"
            class="flex gap-3 justify-center md:justify-start md:flex-wrap lg:flex-nowrap items-center :pl-0 md:pl-2 xl:pl-8"
          >
            <i class="bx bxs-spreadsheet text-2xl"></i>
            <h1 class="hidden md:block md:text-[14px] xl:text-base">
              Buyurtmalar
            </h1>
          </router-link>
        </li>
        <li id="4">
          <router-link
            to="/settings"
            class="flex gap-3 justify-center md:justify-start md:flex-wrap lg:flex-nowrap items-center :pl-0 md:pl-2 xl:pl-8"
          >
            <i class="bx bxs-cog text-2xl"></i>
            <h1 class="hidden md:block md:text-[14px] xl:text-base">
              Sozlamalar
            </h1>
          </router-link>
        </li>
      </ul>
      <div>
        <router-link
          to="/help"
          class="flex gap-3 justify-center md:justify-start md:flex-wrap lg:flex-nowrap items-center :pl-0 md:pl-2 xl:pl-8 mb-6"
        >
          <i class="bx bxs-help-circle text-2xl"></i>
          <h1 class="hidden md:block md:text-[14px] xl:text-base">Yordam</h1>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  height: calc(100vh - 160px);
}

.router-link-active {
  color: #0b8df8 !important;
  border-left: 6px solid #0b8df8;
}
</style>
