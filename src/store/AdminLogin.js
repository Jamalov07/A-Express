import { defineStore } from "pinia";
import axios from "../service/axios";
import { ref } from "vue";

export const adminLoginStore = defineStore("adminlogin", () => {
  let username = ref("");
  let password = ref("");
  let isLogged = ref(false);
  let admin = ref(null);
  let message = ref(null);

  async function adminLogin() {
    try {
      const data = {
        user_name: username.value,
        password: password.value,
      };

      const response = await axios.post("/admin/login", data);
      admin.value = response.data.admin;
      window.localStorage.setItem("token", response.data.tokens.access_token);
      window.localStorage.setItem("is_active", response.data.admin.is_active);
      window.localStorage.setItem("is_creator", response.data.admin.is_creator);
      window.localStorage.setItem("id", response.data.admin.id);
      isLogged.value = true;
      message.value = "";
      return true;
    } catch (error) {
      console.log(error);
      isLogged.value = false;
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("is_active");
      window.localStorage.removeItem("is_creator");
      window.localStorage.removeItem("id");
      admin.value = null;
      message.value = "Username yoki Password xato";
      return false;
    }
  }
  return { admin, message, adminLogin, username, password, isLogged };
});
