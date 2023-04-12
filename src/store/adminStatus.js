import { defineStore } from "pinia";
import axios from "../service/axios";
import { ref } from "vue";

export const adminStatusStore = defineStore("adminstatus", () => {
  let adminId = ref(0);
  let message = ref("");

  async function deActivate() {
    try {
      const response = await axios.post(
        "/admin/deactivate",
        { adminId: adminId.value },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      adminId.value = 0;
    } catch (error) {
      console.log(error);
    }
  }

  async function activate() {
    try {
      const response = await axios.post(
        "/admin/activate",
        { adminId: adminId.value },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      adminId.value = 0;
    } catch (error) {
      console.log(error);
    }
  }
  return { adminId, message, activate, deActivate };
});
