<script setup>
import { userOrderStore } from "../../store/getUserOrder";
import { useRouter } from "vue-router";
const userOrder = userOrderStore();
const router = useRouter();
async function getOrder() {
  await userOrder.getOrderByUniqueId();
  if (userOrder.order) {
    router.push("/myorder");
  }
}
</script>

<template>
  <div>
    <section v-if="!userOrder.isExists" class="bg-white dark:bg-[#121212] w-screen h-screen">
      <div class="absolute top-5 right-5">
        <router-link to="/login" class="hover:underline text-sky-500"
          >Adminlar uchun
        </router-link>
      </div>
      <div class="flex w-1/2 items-center justify-center mx-auto h-screen">
        <div class="bg-white p-2 dark:bg-[#262626] w-full max-w-[600px] min-w-[300px]">
          <div class="">
            <h1
              class="text-[22px] text-[#4763E4] font-bold text-center leading-tight tracking-tight md:text-2xl"
            >
              A-EXPRESS
            </h1>
            <div class="h-2">
              <h1
              v-if="userOrder.message"
                class="text-[16px] w-full text-center text-red-600 font-semibold"
              >
                {{ userOrder.message }}
              </h1>
            </div>
            <form class="mt-[20px]" action="#" @submit.prevent="getOrder">
              <div>
                <label for="uniqueid" class="block">
                  <p class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Enter order ID
                  </p>
                  <input
                    v-model="userOrder.orderId"
                    type="text"
                    name="uniqueid"
                    id="uniqueid"
                    class="bg-gray-50 border border-gray-300 dark:bg-[#3a3a3a] dark:text-white text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2 w-full"
                    placeholder="Enter order ID :"
                  />
                </label>
              </div>

              <button
                type="submit"
                class="mt-[20px] w-full text-white bg-[#4763E4] hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-[18px] px-5 py-2 text-center"
              >
                Tekshirish
              </button>
              <p class="text-center w-full mt-[10px]">
                <a href="#" class="font-medium hover:underline text-[#5C73DB]"
                  >Muammo bo’yicha murojaat</a
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div v-if="userOrder.isExists">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
