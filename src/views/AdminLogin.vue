<script setup>
import Header from "../components/Header/Header.vue";
import Sidebar from "../components/SIdebar/Sidebar.vue";
import { adminLoginStore } from "../store/AdminLogin";
import { checkTokenStore } from "../store/checkToken";

import { useRouter } from "vue-router";
const router = useRouter();

const adminLogin = adminLoginStore();
const checkToken = checkTokenStore();

async function login() {
  if (!adminLogin.username) {
    adminLogin.message = "Usernameni kiriting";
  } else if (!adminLogin.password) {
    adminLogin.message = "Passwordni kiriting";
  } else {
    const response = await adminLogin.adminLogin();
    if (response) {
      router.push("/");
      checkAdminToken();
    } else {
      router.push("/login");
    }
  }
}

async function checkAdminToken() {
  await checkToken.checktoken();
  if (checkToken.isValid) {
    adminLogin.isLogged = true;
    adminLogin.admin = checkToken.admindata;
  }
}

checkAdminToken();
</script>

<template>
  <div
    v-if="!adminLogin.isLogged"
    class="bg-white dark:bg-[#121212] w-screen h-screen"
  >
    <section class="">
      <div class="absolute top-5 right-5">
        <router-link to="/signin" class="hover:underline text-sky-500"
          >Buyurtmachilar uchun
        </router-link>
      </div>
      <div
        class="flex w-1/2 items-center justify-center mx-auto h-screen lg:py-0"
      >
        <div
          class="bg-white p-2 dark:bg-[#262626] rounded-md w-full max-w-[600px] min-w-[300px]"
        >
          <div class="">
            <h1
              class="text-[22px] text-[#4763E4] font-bold text-center leading-tight tracking-tight md:text-2xl"
            >
              ADMIN DASHBOARD
            </h1>
            <div class="h-[40px] w-full">
              <h1
                v-if="adminLogin.message"
                class="text-center text-red-600 font-medium"
              >
                {{ adminLogin.message }}
              </h1>
            </div>
            <form class="w-full" action="#" @submit.prevent="login">
              <div>
                <label for="username" class="block">
                  <p
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter username
                  </p>
                  <input
                    v-model="adminLogin.username"
                    type="text"
                    name="username"
                    id="username"
                    class="bg-gray-50 dark:bg-[#3a3a3a] border dark:border-gray-500 dark:text-white border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2"
                    placeholder="Enter username"
                  />
                </label>
              </div>
              <div class="mt-[20px]">
                <label for="password" class="block">
                  <p
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter user password
                  </p>
                  <input
                    v-model="adminLogin.password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter user password"
                    class="bg-gray-50 dark:bg-[#3a3a3a] border dark:border-gray-500 dark:text-white border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2"
                  />
                </label>
              </div>
              <button
                type="submit"
                class="w-full mt-[20px] text-white bg-[#4763E4] hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-[18px] px-5 py-2 text-center"
              >
                Kirish
              </button>
              <p class="text-center mt-[10px]">
                <a href="#" class="font-medium hover:underline text-[#5C73DB]"
                  >Muammo bo’yicha murojat</a
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div
    v-if="adminLogin.isLogged"
    class="max-w-screen bg-[#E5E5E5] dark:bg-[#121212]"
  >
    <div class="flex">
      <div class="w-[16%]">
        <Sidebar />
      </div>
      <div class="px-4 md:px-10 py-4 md:py-12 font-[Poppins] w-[84%]">
        <Header class="mb-10" />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
