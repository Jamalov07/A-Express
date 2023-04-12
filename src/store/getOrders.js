import { defineStore } from "pinia";
import axios from "../service/axios";
import { ref } from "vue";

export const allOrdersStore = defineStore("allorders", () => {
  let orders = ref([]);
  let message = ref("");
  let orderlength = ref(0);

  async function getAllOrders() {
    try {
      const response = await axios.get("order", {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      });
      orders.value = response.data;
    } catch (error) {
      orders.value = null;
      message.value = "Buyurtmalar topilmadi";
      console.log(error);
    }
  }

  async function getpaginate(page) {
    try {
      await getAllOrders();
      orderlength.value = orders.value.length;
      const response = await axios.get(`/order/page/${page}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      });
      orders.value = response.data;
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return { orders, message, getAllOrders, getpaginate,orderlength };
});
