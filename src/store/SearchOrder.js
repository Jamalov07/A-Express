import { defineStore } from "pinia";
import axios from "../service/axios";
import { ref } from "vue";

export const searchOrderStore = defineStore("searchorder", () => {
  let orders = ref([]);
  let message = ref("");
  let order_unique_id = ref(null);
  let full_name = ref("");
  let start_date = ref(null);
  let end_date = ref(null);

  async function searchOrders() {
    let options = {};
    let isExists = false;
    if (order_unique_id.value) {
      options.order_unique_id = order_unique_id.value;
      isExists = true;
    }
    if (full_name.value) {
      options.full_name = full_name.value;
      isExists = true;
    }
    if (start_date.value) {
      options.start_date = start_date.value;
      isExists = true;
    }
    if (end_date.value) {
      options.end_date = end_date.value;
      isExists = true;
    }

    try {
      if (isExists) {
        const response = await axios.get("/order/search", {
          params: options,
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        });
        console.log(response);
        orders.value = response.data;
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      orders.value = [];
      message.value = "Orderlar topilmadi";
    }
  }
  return {
    orders,
    message,
    order_unique_id,
    full_name,
    start_date,
    end_date,
    searchOrders,
  };
});
