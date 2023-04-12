import { defineStore } from "pinia";
import axios from "../service/axios";
import { ref } from "vue";

export const allAdminsStore = defineStore("alladmins", () => {
  let admins = ref([]);
  let message = ref("");
  let isAllBlocked = ref(false);

  async function getAllAdmins() {
    try {
      const response = await axios.get("/admin", {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      });
      admins.value = response.data;
      console.log(response.data);
    } catch (error) {
      admins.value = null;
      message.value = "Hodimlar topilmadi";
      console.log(error);
    }
  }
  function checkAdmins() {
    let count = 0;
    console.log(admins.value);
    admins.value.forEach((admin) => {
      if (!admin.is_active) {
        count++;
        console.log(count);
      }
    });
    if (count + 1 == admins.value.length) {
      isAllBlocked.value = true;
      return true;
    } else {
      isAllBlocked.value = false;
      return false;
    }
  }

  return { admins, message, getAllAdmins, checkAdmins, isAllBlocked };
});
