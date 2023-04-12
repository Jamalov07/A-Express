import { defineStore } from "pinia";
import axios from "../service/axios";
import { ref } from "vue";

export const orderOperationsStore = defineStore("orderoperations", () => {
  let operations = ref([]);
  let message = ref("");
  let order = ref(null);
  let orderId = ref(null);

  async function getOrder() {
    try {
      const response = await axios.get(`/order/unique/${orderId.value}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      });
      console.log(response);
      order.value = response.data;
      operations.value = response.data.operations;
    } catch (error) {
      console.log(error);
      order.value = "";
      operations.value = "";
    }
  }

  return {
    operations,
    message,
    order,
    orderId,
    getOrder,
  };
});
