<script setup>
import { onMounted, ref } from "vue";
import fixedDate from "../../helper/fixedDate";
import { allOrdersStore } from "../../store/getOrders";
import Paginate from "vuejs-paginate-next";
const allOrders = allOrdersStore();
let thisPage = ref(1);
async function getOrders() {
  await allOrders.getAllOrders();
}
onMounted(() => {
  // getOrders();
  allOrders.getpaginate(thisPage.value);
});

async function paginate(newPage) {
  console.log(newPage);
  console.log(thisPage.value);
  await allOrders.getpaginate(newPage);
}
</script>

<template>
  <div class="wrapperorder flex flex-col justify-between">
    <div
      class="table_wraper shadow-md flex overflow-x-scroll bg-white rounded-md overflow-y-scroll"
    >
      <table class="text-sm flex-grow text-left h-full">
        <thead class="font-normal text-[16px] leading-[24px] md:text-sm">
          <tr class="bg-blue-400 text-[16px] font-medium border-b">
            <th scope="col" class="px-[15px] py-1">
              <div class="flex items-center">No</div>
            </th>
            <th scope="col" class="px-[15px] py-1">
              <div class="flex items-center">Buyurtma ID</div>
            </th>
            <th scope="col" class="px-[15px] py-1">
              <div class="flex items-center">Qabul sanasi</div>
            </th>
            <th scope="col" class="px-[15px] py-1">
              <div class="flex items-center w-[150px]">Buyurtmachi ismi</div>
            </th>
            <th scope="col" class="px-[15px] py-1">
              <div class="flex items-center">To'liq narxi</div>
            </th>
            <th scope="col" class="px-[15px] py-1">
              <div class="flex items-center">Oldindan to'lov</div>
            </th>
            <th scope="col" class="px-[15px] py-1">
              <div class="flex items-center">Tel</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(order, index) in allOrders.orders"
            class="border-b dark:bg-gray-800 dark:border-gray-500 font-normal text-[16px] leading-[24px]"
            :class="[
              order.operations.length == 3
                ? 'bg-green-400 dark:bg-[#20e006]'
                : order.operations.length == 2
                ? 'bg-sky-300 dark:bg-sky-300'
                : 'bg-yellow-300 dark:bg-yellow-200',
            ]"
          >
            <th
              scope="row"
              class="px-[15px] py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ index + 1 }}
            </th>
            <td class="px-[15px] py-2 text-[#0B63F8]">
              <router-link :to="`/order/${order.order_unique_id}`"
                >#{{ order.order_unique_id }}
              </router-link>
            </td>
            <td class="px-[15px] py-2">{{ fixedDate(order.createdAt) }}</td>
            <td class="px-[15px] py-2">{{ order.full_name }}</td>
            <td class="px-[15px] py-2">${{ order.summa }}</td>
            <td class="px-[15px] py-2">${{ order.advance_payment }}</td>
            <td class="px-[15px] py-2">+{{ order.phone_number }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-full mt-4 flex justify-center items-center">
      <Paginate
        :page-count="Math.ceil(allOrders.orderlength) / 10"
        :page-range="5"
        :margin-pages="3"
        :click-handler="paginate"
        :prev-text="'<<'"
        :next-text="'>>'"
        :container-class="'pagination'"
        :page-class="'page-item'"
        v-model="thisPage"
      >
      </Paginate>
    </div>
  </div>
</template>

<style>
.table_wraper {
  min-height: calc(100vh - 780px);
  max-height: calc(100vh - 450px);
}

.wrapperorder {
  min-height: 540px;
  height: 540px !important;
}
.page-item:first-child {
  border-radius: 7px 0px 0px 7px !important;
}
.page-item:last-child {
  border-radius: 0px 7px 7px 0px !important;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}
.page-item {
  color: rgb(0, 119, 255);
  outline: 1px solid green;
  box-shadow: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 30px;
  border: 1px solid #0eff1a;
  cursor: pointer;
}
.page-item:hover {
  background-color: #e8e8e8;
}
.page-item > a {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagination > .active {
  border: 2px solid #9462eb;
  color: #9f79e0;
}
</style>
