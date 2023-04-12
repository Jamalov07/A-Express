<script setup>
import { useRoute } from "vue-router";
import { orderOperationsStore } from "../../store/getOrderOperations";
import fixedDate from "../../helper/fixedDate";
const orderOperations = orderOperationsStore();

const route = useRoute();
console.log(route.params.id);
orderOperations.orderId = route.params.id;

async function getOrderById() {
  await orderOperations.getOrder();
}

getOrderById();

function setStatus(status) {
  if (status === 1) {
    return "Yangi";
  } else if (status === 2) {
    return "Kutilmoqda";
  } else if (status == 3) {
    return "Yakunlangan";
  }
}
</script>

<template>
  <div class="text-[28px] font-medium pb-4 tracking-[2px] text-black dark:text-white">O'zgartirishlar</div>
  <div
    class="table_wraper shadow-md flex overflow-x-scroll bg-white dark:bg-slate-600 text-black dark:text-white rounded-md overflow-y-scroll"
  >
    <table class="text-sm flex-grow text-left h-full">
      <thead class="font-normal text-[16px] leading-[24px] md:text-sm">
        <tr class="text-[16px] font-medium border-b">
          <th scope="col" class="px-[15px] py-3">
            <div class="flex items-center">No</div>
          </th>
          <th scope="col" class="px-[15px] py-3">
            <div class="flex items-center">Buyurtma ID</div>
          </th>
          <th scope="col" class="px-[15px] py-3">
            <div class="flex items-center">O'zgartirilgan vaqti</div>
          </th>
          <th scope="col" class="px-[15px] py-3">
            <div class="flex items-center w-[150px]">Admin</div>
          </th>
          <th scope="col" class="px-[15px] py-3">
            <div class="flex items-center">Buyurtma Status</div>
          </th>
          <th scope="col" class="px-[15px] py-3">
            <div class="flex items-center">Oz'zgartirish haqida</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(op, index) in orderOperations.operations"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-400 font-normal text-[16px] leading-[24px]"
        >
          <th
            scope="row"
            class="px-[15px] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ index+1 }}
          </th>
          <td class="px-[15px] py-4 text-[#0B63F8]">
            #{{ orderOperations.order.order_unique_id }}
          </td>
          <td class="px-[15px] py-4">
            {{ fixedDate(op.createdAt) }}
          </td>
          <td class="px-[15px] py-4">{{ op.admin.full_name }}</td>
          <td class="px-[15px] py-4">{{ setStatus(op.status_id) }}</td>
          <td class="px-[15px] py-4">
            {{ op.description  || "Yangi qo'shilgan" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table_wraper {
  min-height: calc(100vh - 770px);
}

@media (max-width: 768px) {
  .table_wraper {
    max-height: calc(100vh - 280px);
  }
}
</style>
