import { defineStore } from "pinia";
import axios from "../service/axios";
import { ref } from "vue";

export const restartOrderStore = defineStore("restartorder", () => {
  let orderStarter = ref(null);
  let message = ref("");
  let orderId = ref("");

  async function restartOr() {
    try {
      console.log(orderId.value);
      const response = await axios.delete(
        `/operation/restart/${orderId.value}`,
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      orderStarter.value = response.data;
    } catch (error) {
      orderStarter.value = null;
    }
  }
  return { orderId, orderStarter, message, restartOr };
});
