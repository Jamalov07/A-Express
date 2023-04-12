import { defineStore } from "pinia";
import axios from "../service/axios";
import { ref } from "vue";

export const createAdminStore = defineStore("createAdmin", () => {
  let fullName = ref("");
  let username = ref("");
  let password = ref("");
  let num = ref(0);
  let message = ref(null);

  async function createAdmin() {
    try {
      const data = {
        full_name: fullName.value,
        user_name: username.value,
        hashed_password: password.value,
      };

      const response = await axios.post("/admin", data, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      });
      if (response.data) {
        message.value = "Xodim muvaffaqiyatli qo'shildi";
      }
      fullName.value = "";
      username.value = "";
      password.value = "";
      return true;
    } catch (error) {
      console.log(error);
      message.value = "Bunday xodim mavjud";
      return false;
    }
  }

  return { fullName, username, password, message, createAdmin, num };
});
