import { defineStore } from "pinia";
import axios from "../service/axios";
import { ref } from "vue";

export const addOperationStore = defineStore("addoperation", () => {
  let operation = ref(null);
  let message = ref("");
  let operationstatus = ref(null);
  let description = ref("");
  let orderId = ref(null);
  async function addOrderperation() {
    try {
      const options = {
        order_id: orderId.value,
        status_id: operationstatus.value,
        description: description.value,
      };
      const response = await axios.post("operation", options, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      });
      operation.value = response.data;
      console.log(response);
      description.value = "";
    } catch (error) {
      operation.value = "";
      description.value = "";
      console.log(error);
    }
  }

  return {
    operation,
    message,
    operationstatus,
    description,
    orderId,
    addOrderperation,
  };
});
