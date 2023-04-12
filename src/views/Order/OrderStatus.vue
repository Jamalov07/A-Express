<script setup>
import Input from "../../UI/Input.vue";
import Button from "../../UI/Button.vue";
import StatusTable from "../../components/Tables/StatusTable.vue";
import { addOperationStore } from "../../store/AddOperation";
import { useRoute } from "vue-router";
import { orderOperationsStore } from "../../store/getOrderOperations";
import { toast } from "vue3-toastify";
import { restartOrderStore } from "../../store/restartOrder";
const orderOperations = orderOperationsStore();
const addOperation = addOperationStore();
const restartOrder = restartOrderStore();
function onStart() {
  const route = useRoute();
  console.log(route.params.id);
  orderOperations.orderId = route.params.id;
}

onStart();

async function getOrderById() {
  await orderOperations.getOrder();
  console.log(orderOperations.order, "buuu");
  addOperation.orderId = orderOperations.order.id;
}

function getOperationslevel(num) {
  return orderOperations.operations.length + 1 !== num;
}

async function addoperation(num) {
  if (num === 2 || num === 3) {
    if (addOperation.description) {
      addOperation.operationstatus = num;
      await addOperation.addOrderperation();
      if (addOperation.operation) {
        toast.success("O'zgartirish muvaffaqiyatli qo'shildi");
        addOperation.description = "";
        getOrderById();
      } else {
        toast.error("O'zgartirish qo'shishda muammo yuzaga keldi");
      }
    }
  }
}

async function restartorder(orderid) {
  restartOrder.orderId = orderid;
  await restartOrder.restartOr();
  if (restartOrder.orderStarter) {
    toast.success("Buyurtmaning o'zgarishlari muvaffaqiyatli tozalandi");
  } else {
    toast.error("Buyurtmani qaytalashda hatolik yuzaga keldi");
  }
  getOrderById();
}

getOrderById();
</script>
<template>
  <div class="mb-10">
    <h1 class="mb-6 text-2xl font-medium text-black dark:text-white">Buyurtma holati</h1>
    <div class="flex justify-between items-end gap-[20px] flex-wrap">
      <Button
        :disabled="getOperationslevel(1)"
        @send="addoperation(1)"
        btn-title="STEP-1"
        text-content="Yangi"
        :dynamic-class="`font-bold  text-[#13131399] uppercase py-[5px] px-6 ${
          getOperationslevel(1)
            ? 'bg-green-300 dark:bg-green-800'
            : 'bg-[#8DF8FF] dark:bg-[#21afb9] border border-white'
        }`"
      />
      <Button
        :disabled="getOperationslevel(2)"
        @send="addoperation(2)"
        btn-title="STEP-2"
        text-content="Kutilmoqda"
        :dynamic-class="`font-bold  text-[#13131399] uppercase py-[5px] px-6 ${
          getOperationslevel(2)
            ? 'bg-green-300 dark:bg-green-800'
            : 'bg-[#8DF8FF] dark:bg-[#21afb9] border border-white'
        }`"
      />
      <Button
        :disabled="getOperationslevel(3)"
        @send="addoperation(3)"
        btn-title="STEP-3"
        text-content="Yakunlangan"
        :dynamic-class="`font-bold  text-[#13131399] uppercase py-[5px] px-6 ${
          getOperationslevel(3)
            ? 'bg-green-300 dark:bg-green-800'
            : 'bg-[#8DF8FF] dark:bg-[#21afb9] border border-white'
        }`"
      />
      <Input
        :send="addOperation.description"
        @accept="
          (newValue) => {
            addOperation.description = newValue;
          }
        "
        :disabled="orderOperations.operations.length == 3 ? true : false"
        dynamic-class="bg-white dark:bg-[#262626] text-black dark:text-white placeholder:text-[#ADA7A7]"
        label-id="Force & major"
        placeholder="Enter customer name"
        input-type="text"
      />
      <Button
        @send="restartorder(addOperation.orderId)"
        :disabled="
          orderOperations.operations.length == 1
            ? true
            : orderOperations.operations.length == 3
            ? true
            : false
        "
        btn-title="RESTART"
        text-content="Restart"
        :dynamic-class="`uppercase font-bold  text-[#13131399] py-[5px] px-6 ${
          orderOperations.operations.length == 1 ||
          orderOperations.operations.length == 3
            ? 'bg-green-300 dark:bg-green-800'
            : 'bg-[#8DF8FF] dark:bg-[#21afb9] border border-white'
        }`"
      />
    </div>
  </div>
  <div>
    <StatusTable />
  </div>
</template>
<style></style>
