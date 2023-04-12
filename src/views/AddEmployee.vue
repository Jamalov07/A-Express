<script setup>
import Input from "../UI/Input.vue";
import Button from "../UI/Button.vue";
import Label from "../UI/Label.vue";
import Employees from "../components/Tables/Employees.vue";
import { createAdminStore } from "../store/AddEmployee";
import { toast } from "vue3-toastify";
import { allAdminsStore } from "../store/GetAdmins";
import { adminLoginStore } from "../store/AdminLogin";
const adminStore = createAdminStore();
const allAdmins = allAdminsStore();
const adminLogin = adminLoginStore();

async function createAdmin() {
  if (!adminStore.fullName) {
    adminStore.message = "To'liq ismni kiriting!";
    adminStore.num = 1;
  } else if (!adminStore.username) {
    adminStore.message = "Tahallusni kiriting!";
    adminStore.num = 2;
  } else if (!adminStore.password) {
    adminStore.message = `Mahfiy kalit so'zni kiriting!`;
    adminStore.num = 3;
  } else {
    adminStore.num = 0;
    const res = await adminStore.createAdmin();
    if (res) {
      toast.success(adminStore.message);
      allAdmins.getAllAdmins();
    } else {
      toast.error(adminStore.message);
    }
  }
}
</script>

<template>
  <div v-if="adminLogin.admin.is_creator">
    <h1 class="mb-3 text-2xl font-medium text-black dark:text-white">Xodim qo'shish</h1>
    <form action="" @submit.prevent="createAdmin">
      <div class="flex mb-6 justify-between items-end flex-wrap">
        <div>
          <Label label-id="Ism familiya">
            <input
              type="text"
              id="Ism familiya"
              class="rounded-[3px] px-3 py-2 w-full border border-[#ADA7A7] focus:outline-none bg-white dark:bg-[#262626] text-black dark:text-white placeholder:text-[#ADA7A7] ring-0 focus:ring-0"
              placeholder="Enter admin name"
              v-model="adminStore.fullName"
            />
          </Label>
          <div class="">
            <p
              v-if="
                adminStore.message &&
                !adminStore.fullName &&
                adminStore.num === 1
              "
              class="pt-2 text-[12px] text-red-600"
            >
              {{ adminStore.message }}
            </p>
          </div>
        </div>
        <div>
          <Label label-id="@username">
            <input
              autocomplete="off"
              id="@username"
              placeholder="Enter username"
              type="text"
              v-model="adminStore.username"
              class="rounded-[3px] px-3 py-2 w-full border border-[#ADA7A7] focus:outline-none bg-white dark:bg-[#262626] text-black dark:text-white placeholder:text-[#ADA7A7] ring-0 focus:ring-0"
            />
          </Label>
          <div class="">
            <p
              v-if="
                adminStore.message &&
                !adminStore.username &&
                adminStore.num === 2
              "
              class="pt-2 text-[12px] text-red-600"
            >
              {{ adminStore.message }}
            </p>
          </div>
        </div>
        <div>
          <Label label-id="password">
            <input
              autocomplete="off"
              id="password"
              placeholder="**********"
              type="password"
              class="rounded-[3px] px-3 py-2 w-full border border-[#ADA7A7] focus:outline-none bg-white dark:bg-[#262626] text-black dark:text-white placeholder:text-[#ADA7A7] ring-0 focus:ring-0"
              v-model="adminStore.password"
            />
          </Label>
          <div class="">
            <p
              v-if="
                adminStore.message &&
                !adminStore.password &&
                adminStore.num === 3
              "
              class="pt-2 text-[12px] text-red-600"
            >
              {{ adminStore.message }}
            </p>
          </div>
        </div>
        <Button
          text-content="Qo'shish"
          type="submit"
          dynamic-class="text-white font-bold bg-blue-600 dark:bg-blue-800 py-1 px-6"
        />
      </div>
    </form>
    <Employees class="mt-2" />
  </div>
  <div v-else class="text-red-600">Not Found</div>
</template>

<style scoped></style>
