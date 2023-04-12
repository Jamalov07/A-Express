<script setup>
import { userOrderStore } from "../../store/getUserOrder";
const userOrder = userOrderStore();
console.log(userOrder.order.operations);
function out() {
  userOrder.isExists = false;
}
</script>

<template>
  <div class="lg:flex block">
    <div class="lg:h-screen relative z-20 max-md:hidden">
      <img
        class="md:h-[400px] md:w-full object-cover absolute md:static lg:h-full"
        src="../../assets/images/image.png"
        alt="image"
      />
    </div>
    <div
      class="absolute back lg:h-full right-0 border-1 border-red-400 dark:bg-[#232323] w-full"
    >
      <img
        src="../../assets/images/Hero.png"
        class="object-cover object-left h-full w-full"
        alt="image"
      />
    </div>

    <div class="p-10 text-[24px] w-full">
      <div class="flex justify-between">
        <div class="md:flex text-center relative z-20 max-sm:pb-16">
          <h1 class="font-bold mr-5 mb-3 dark:text-white">
            ID: {{ userOrder.orderId }}
          </h1>
          <p class="dark:text-white">Buyurtma holati</p>
        </div>
        <div class="relative z-20">
          <router-link
            to="/signin"
            @click="out()"
            class="hover:underline hover:text-blue-500 dark:text-white"
            >Chiqish</router-link
          >
        </div>
      </div>

      <div class="sm:flex">
        <div
          class="w-full md:pt-32 lg:pt-64 max-sm:items-center max-sm:justify-center p-5 max-sm:flex"
        >
          <!-- up -->
          <div class="flex justify-center">
            <ul
              class="flex max-sm:flex-col md:w-[80%] md:pr-4 lg:w-[80%] lg:pr-[15px] xl:w-[80%] xl:justify-start xl:pr-[60px]"
            >
              <li class="relative w-full mb-6">
                <div class="flex items-center">
                  <div
                    class="z-10 flex items-center justify-center text-[60px] shrink-0"
                  >
                    <i class="bx bxs-box text-[#d19a22]"></i>
                  </div>
                </div>
              </li>

              <li class="relative w-full mb-6">
                <div class="flex items-center">
                  <div
                    class="z-10 flex items-center text-[60px] justify-center shrink-0"
                  >
                    <i class="bx bxs-plane-take-off text-[#1e78b9]"></i>
                  </div>
                </div>
              </li>

              <li class="relative w-full mb-6">
                <div class="flex items-center">
                  <div
                    class="z-10 flex items-center text-[60px] justify-center shrink-0"
                  >
                    <i class="bx bxs-plane-land text-[#1e78b9]"></i>
                  </div>
                </div>
              </li>

              <li class="relative w-full mb-6">
                <div class="flex items-center">
                  <div
                    class="z-10 flex items-center text-[60px] justify-center shrink-0"
                  >
                    <i class="bx bxs-truck text-[#f64e20]"></i>
                  </div>
                </div>
              </li>

              <li class="relative mb-6">
                <div class="flex items-center">
                  <div
                    class="z-10 flex items-center text-[60px] justify-center shrink-0"
                  >
                    <i class="bx bxs-check-circle text-[#13cf1a]"></i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- down -->

          <div class="flex items-center">
            <div class="w-full items-center flex justify-end">
              <ol
                class="flex max-sm:flex-col max-sm:h-[380px] max-sm:justify-between w-[90%] justify-end items-end pl-6"
              >
                <li class="relative w-full mb-6">
                  <div class="flex items-center">
                    <div
                      class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-blue-600 sm:ring-8 shrink-0"
                      :class="[
                        userOrder.order.operations[0]
                          ? 'bg-blue-600'
                          : 'bg-white',
                      ]"
                    >
                      <svg
                        v-if="userOrder.order.operations[0]"
                        aria-hidden="true"
                        class="w-4 h-4 text-blue-100"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <!-- line -->
                    <div class="flex w-full bg-blue-600 h-1"></div>
                  </div>
                </li>
                <!--  -->
                <li class="relative w-full mb-6">
                  <div class="flex items-center">
                    <div
                      class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 sm:ring-8 shrink-0"
                      :class="[
                        !userOrder.order.operations[1] &&
                        userOrder.order.operations.length === 1
                          ? 'bg-white border-4 border-blue-600'
                          : 'bg-blue-600 ring-blue-600',
                      ]"
                    >
                      <svg
                        v-if="userOrder.order.operations[1]"
                        aria-hidden="true"
                        class="w-4 h-4 text-blue-100"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div
                      class="hidden sm:flex w-full h-1"
                      :class="[
                        userOrder.order.operations[1]
                          ? 'bg-blue-600'
                          : 'bg-gray-200',
                      ]"
                    ></div>
                    <div
                      class="hidden max-sm:flex w-1 bottom-1 left-[10px] translate-x-1/2 absolute bg-blue-600 h-[100px]"
                    ></div>
                  </div>
                </li>
                <!--  -->
                <li class="relative w-full mb-6">
                  <div class="flex items-center">
                    <div
                      class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 sm:ring-8 shrink-0"
                      :class="[
                        userOrder.order.operations[1] &&
                        userOrder.order.operations.length > 1
                          ? 'bg-blue-600 ring-blue-600 border-blue-600'
                          : 'bg-white border-4 ring-gray-200 border-gray-200',
                      ]"
                    >
                      <svg
                        v-if="userOrder.order.operations[1]"
                        aria-hidden="true"
                        class="w-4 h-4 text-blue-100 dark:text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div
                      class="hidden sm:flex w-full h-1"
                      :class="[
                        userOrder.order.operations[1]
                          ? 'bg-blue-600'
                          : 'bg-gray-200',
                      ]"
                    ></div>
                    <div
                      class="hidden max-sm:flex w-1 bottom-1 left-[10px] translate-x-1/2 absolute h-[100px]"
                      :class="[
                        userOrder.order.operations.length > 1
                          ? 'bg-blue-600'
                          : 'bg-gray-200',
                      ]"
                    ></div>
                  </div>
                </li>
                <!--  -->
                <li class="relative w-full mb-6">
                  <div class="flex items-center">
                    <div
                      class="z-10 flex items-center justify-center w-6 h-6 border-4 rounded-full ring-0 sm:ring-8 shrink-0"
                      :class="[
                        !userOrder.order.operations[2] &&
                        userOrder.order.operations.length !== 2
                          ? 'bg-white border-4 ring-gray-200 border-gray-200'
                          : userOrder.order.operations[2] &&
                            userOrder.order.operations.length === 3
                          ? 'bg-blue-600 ring-blue-600 border-blue-600'
                          : 'bg-white border-4 border-blue-600',
                      ]"
                    >
                      <svg
                        v-if="userOrder.order.operations[2]"
                        aria-hidden="true"
                        class="w-4 h-4 text-blue-100 dark:text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div
                      class="hidden sm:flex w-full h-1"
                      :class="[
                        userOrder.order.operations.length > 2
                          ? 'bg-blue-600'
                          : 'bg-gray-200',
                      ]"
                    ></div>
                    <div
                      class="hidden max-sm:flex w-1 bottom-1 left-[10px] translate-x-1/2 absolute h-[100px]"
                      :class="[
                        userOrder.order.operations.length > 1
                          ? 'bg-blue-600'
                          : 'bg-gray-200',
                      ]"
                    ></div>
                  </div>
                </li>
                <!--  -->
                <li class="relative w-full mb-6">
                  <div class="flex items-center">
                    <div
                      class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 sm:ring-8 shrink-0"
                      :class="[
                        userOrder.order.operations.length === 3
                          ? 'ring-blue-600 bg-blue-600'
                          : 'ring-gray-200 bg-gray-200',
                      ]"
                    >
                      <svg
                        v-if="userOrder.order.operations[2]"
                        aria-hidden="true"
                        class="w-4 h-4 text-blue-100"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div
                      class="hidden max-sm:flex w-full bg-gray-200 h-1"
                    ></div>
                    <div
                      class="hidden max-sm:flex w-1 bottom-1 left-[10px] translate-x-1/2 absolute h-[100px]"
                      :class="[
                        userOrder.order.operations.length > 2
                          ? 'bg-blue-600'
                          : 'bg-gray-200',
                      ]"
                    ></div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1024px) {
  .back {
    height: calc(100vh - 50%);
  }
}

@media (max-width: 767px) {
  .back {
    height: 100vh;
  }
}
</style>
