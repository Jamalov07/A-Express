import { defineStore } from "pinia";
import axios from "../service/axios";
import { ref } from "vue";

export const checkTokenStore = defineStore("checktoken", () => {
  let isValid = ref(false);
  let token = window.localStorage.getItem("token");
  let admindata = ref(null);

  async function checktoken() {
    try {
      const response = await axios.post("/admin/check", {
        token:window.localStorage.getItem("token"),
      });
      if (response.data.isValid) {
        window.localStorage.setItem(
          "is_creator",
          response.data.admin.is_creator
        );
        window.localStorage.setItem("is_active", response.data.admin.is_active);
        window.localStorage.setItem("id", response.data.admin.id);
        isValid.value = true;
        admindata.value = response.data.admin;
      } else {
        window.localStorage.removeItem("is_creator");
        window.localStorage.removeItem("is_active");
        window.localStorage.removeItem("id");
        isValid.value = false;
        admindata.value = null;
      }
    } catch (error) {
      console.log(error);
      admindata.value = null;
      isValid.value = false;
    }
  }
  return { isValid, token, admindata, checktoken };
});
