import { defineStore } from "pinia";
import axios from "../service/axios";
import { ref } from "vue";

export const orderStore = defineStore("makeOrder", () => {
  let buyer = ref("");
  let phone = ref("");
  let product_link = ref("");
  let price = ref("");
  let payed = ref("");
  let message = ref(null);
  let num = ref(0);
  async function makeOrder() {
    try {
      const data = {
        full_name: buyer.value,
        phone_number: phone.value,
        product_link: product_link.value,
        summa: Number(price.value),
        advance_payment: Number(payed.value),
      };

      console.log("data: ", data);
      const response = await axios.post("/order", data, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      });
      console.log("response: ", response);
      if (response.data) {
        message.value = "Buyurtma muvaffaqiyatli qo'shildi";
      }
      buyer.value = "";
      phone.value = "";
      product_link.value = "";
      price.value = "";
      payed.value = "";
      return true;
    } catch (error) {
      buyer.value = "";
      phone.value = "";
      product_link.value = "";
      price.value = "";
      payed.value = "";
      console.log(error);
      message.value = "So'rovda jo'natishda xatolik";
      return false;
    }
  }

  return { buyer, phone, product_link, price, payed, message, makeOrder, num };
});
