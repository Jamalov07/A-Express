<script setup>
import Button from "../../UI/Button.vue";
import Orders from "../../components/Tables/Orders.vue";
import { orderStore } from "../../store/MakeOrder.js";
import Label from "../../UI/Label.vue";
import { toast } from "vue3-toastify";
import { allOrdersStore } from "../../store/getOrders";
const order = orderStore();
const allOrder = allOrdersStore();
async function createOrder() {
  console.log(order.buyer);
  if (!order.buyer) {
    order.message = "Buyurtmachi ismini kiriting!";
    order.num = 1;
  } else if (!order.phone) {
    order.message = "Buyurtmachi raqamini kiriting!";
    order.num = 2;
  } else if (!order.product_link) {
    order.message = `Mahsulot linkini kiriting!`;
    order.num = 3;
  } else if (!order.price) {
    order.message = `Mahsulot narxini kiriting!`;
    order.num = 4;
  } else if (!order.payed) {
    order.message = `Oldindan to'lov qiymatini kiriting!`;
    order.num = 5;
  } else {
    order.num = 0;
    const res = await order.makeOrder();
    if (res) {
      toast.success(order.message);
      allOrder.getAllOrders();
      allOrder.getpaginate();
    } else {
      console.log(order.message);
      toast.error(order.message);
    }
  }
}
</script>

<template>
  <h1 class="mb-6 text-2xl font-medium">Yangi Buyurtma qo'shish</h1>

  <form action="" @submit.prevent="createOrder">
    <div class="flex justify-between items-end gap-[20px] flex-wrap">
      <div>
        <Label label-id="Buyurtmachi">
          <input
            type="text"
            id="fullname"
            class="rounded-[3px] px-3 py-2 w-full border border-[#ADA7A7] focus:outline-none bg-white dark:bg-[#262626] text-black dark:text-white placeholder:text-[#ADA7A7] ring-0 focus:ring-0"
            placeholder="Enter customer name"
            v-model="order.buyer"
          />
        </Label>
        <div class="">
          <p
            v-if="order.message && !order.buyer && order.num === 1"
            class="pt-2 text-[12px] text-red-600"
          >
            {{ order.message }}
          </p>
        </div>
      </div>

      <div>
        <Label label-id="Telefon raqami">
          <input
            type="text"
            id="phone"
            class="rounded-[3px] px-3 py-2 w-full border border-[#ADA7A7] focus:outline-none bg-white dark:bg-[#262626] text-black dark:text-white placeholder:text-[#ADA7A7] ring-0 focus:ring-0"
            placeholder="Enter phone number"
            v-model="order.phone"
          />
        </Label>
        <div class="">
          <p
            v-if="order.message && !order.phone && order.num === 2"
            class="pt-2 text-[12px] text-red-600"
          >
            {{ order.message }}
          </p>
        </div>
      </div>

      <div>
        <Label label-id="Mahsulot linki">
          <input
            type="text"
            id="produckt_link"
            class="rounded-[3px] px-3 py-2 w-full border border-[#ADA7A7] focus:outline-none bg-white dark:bg-[#262626] text-black dark:text-white placeholder:text-[#ADA7A7] ring-0 focus:ring-0"
            placeholder="https://"
            v-model="order.product_link"
          />
        </Label>
        <div class="">
          <p
            v-if="order.message && !order.product_link && order.num === 3"
            class="pt-2 text-[12px] text-red-600"
          >
            {{ order.message }}
          </p>
        </div>
      </div>

      <div>
        <Label label-id="Mahsulot narxi">
          <input
            type="text"
            id="price"
            class="rounded-[3px] px-3 py-2 w-full border border-[#ADA7A7] focus:outline-none bg-white dark:bg-[#262626] text-black dark:text-white placeholder:text-[#ADA7A7] ring-0 focus:ring-0"
            placeholder="Enter product price"
            v-model="order.price"
          />
        </Label>
        <div class="">
          <p
            v-if="order.message && !order.price && order.num === 4"
            class="pt-2 text-[12px] text-red-600"
          >
            {{ order.message }}
          </p>
        </div>
      </div>

      <div>
        <Label label-id="Oldindan to'lov">
          <input
            type="text"
            id="advence_pay"
            class="rounded-[3px] px-3 py-2 w-full border border-[#ADA7A7] focus:outline-none bg-white dark:bg-[#262626] text-black dark:text-white placeholder:text-[#ADA7A7] ring-0 focus:ring-0"
            placeholder="Enter payment amount"
            v-model="order.payed"
          />
        </Label>
        <div class="">
          <p
            v-if="order.message && !order.price && order.num === 5"
            class="pt-2 text-[12px] text-red-600"
          >
            {{ order.message }}
          </p>
        </div>
      </div>
      <Button
        text-content="Qo'shish"
        dynamic-class="font-bold lg:ml-24 2xl:ml-0 text-white bg-blue-600 dark:bg-blue-800 py-1 px-6"
      />
    </div>
  </form>
  <Orders class="mt-6" />
</template>

<style scoped></style>
