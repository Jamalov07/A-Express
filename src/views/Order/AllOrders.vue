<script setup>
import Orders from "../../components/Tables/Orders.vue";
import OrderStatus from "../Order/OrderStatus.vue";
import Input from "../../UI/Input.vue";
import { allOrdersStore } from "../../store/getOrders";
import { searchOrderStore } from "../../store/SearchOrder";
const searchOrder = searchOrderStore();
const allOrders = allOrdersStore();

async function searchorders() {
  const res = await searchOrder.searchOrders();

  if (!res) {
    allOrders.getAllOrders();
  }
  if (searchOrder.orders) {
    allOrders.orders = searchOrder.orders;
  }
}
allOrders.getAllOrders();
</script>

<template>
  <div class="mb-5">
    <h1 class="mb-3 text-2xl font-medium text-black dark:text-white">Buyurtmalar ro'yxati</h1>
    <div class="flex justify-between items-end gap-[20px] flex-wrap">
      <Input
        :send="searchOrder.full_name"
        @accept="
          (newValue) => {
            searchOrder.full_name = newValue;
            searchorders();
          }
        "
        label-id="Buyurtmachi"
        placeholder="Enter customer name"
        input-type="text"
        dynamic-class="bg-white dark:bg-[#262626] text-black dark:text-white placeholder:text-[#ADA7A7]"
      />
      <Input
        :send="searchOrder.order_unique_id"
        @accept="
          (newValue) => {
            searchOrder.order_unique_id = newValue;
            searchorders();
          }
        "
        label-id="Buyurtma ID"
        placeholder="Enter invoice ID"
        input-type="text"
        dynamic-class="bg-white dark:bg-[#262626] text-black dark:text-white placeholder:text-[#ADA7A7]"
      />
      <Input
        :send="searchOrder.start_date"
        @accept="
          (newValue) => {
            searchOrder.start_date = newValue;
            searchorders();
          }
        "
        label-id="Boshlangan kuni"
        input-type="date"
        dynamic-class="bg-white dark:bg-[#262626] text-black dark:text-white placeholder:text-[#ADA7A7]"
      />
      <Input
        :send="searchOrder.end_date"
        @accept="
          (newValue) => {
            searchOrder.end_date = newValue;
            searchorders();
          }
        "
        label-id="Tugallangan kuni"
        input-type="date"
        dynamic-class="bg-white dark:bg-[#262626] text-black dark:text-white placeholder:text-[#ADA7A7]"
      />
    </div>
  </div>
  <div v-if="allOrders.orders.length" class="w-full">
    <Orders />
  </div>
  <div v-else class="bg-yellow-400 p-2 text-red-600 font-semibold">
    <h1 class="">Orderlar topilmadi!</h1>
  </div>
</template>

<style scoped></style>
