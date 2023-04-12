import axios from "../service/axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const userOrderStore = defineStore("userorder", () => {
  let orderId = ref(null);
  let order = ref(null);
  let message = ref("");
  let isExists = ref(false);

  async function getOrderByUniqueId() {
    try {
      const response = await axios.get(`order/unique/${orderId.value}`);
      console.log(response);
      if (response.data.id) {
        order.value = response.data;
        orderId.value = "";
        message.value = "";
        isExists.value = true;
      } else {
        isExists.value = false;
        order.value = "";
        message.value = "Buyurtma topilmadi!";
      }
    } catch (error) {
      isExists.value = false;
      message.value = "Buyurtma topilmadi!";
      order.value = "";
      console.log(error);
    }
  }

  return { orderId, order, message, getOrderByUniqueId, isExists };
});
