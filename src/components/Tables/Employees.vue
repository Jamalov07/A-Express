<script setup>
import { toast } from "vue3-toastify";
import fixedDate from "../../helper/fixedDate";
import { allAdminsStore } from "../../store/GetAdmins";
import { adminStatusStore } from "../../store/adminStatus";
import { onUpdated } from "vue";
const allAdmins = allAdminsStore();
const adminStatus = adminStatusStore();

async function getadmins() {
  await allAdmins.getAllAdmins();
  allAdmins.checkAdmins(allAdmins.admins);
}
getadmins();

async function setValue(e) {
  const inputs = window.document.querySelectorAll(".oneadmin");
  if (e.target.checked) {
    inputs.forEach(async (input) => {
      input.checked = true;
    });
    allAdmins.admins.forEach(async (admin) => {
      if (!admin.is_creator) {
        adminStatus.adminId = admin.id;
        await adminStatus.deActivate();
        // await tooggleStatustoAdmin(e, admin);
      }
    });
    toast.error("Barcha adminlar bloklandi");
  } else {
    inputs.forEach((input) => {
      input.checked = false;
    });
    allAdmins.admins.forEach(async (admin) => {
      if (!admin.is_creator) {
        adminStatus.adminId = admin.id;
        await adminStatus.activate();
        // await tooggleStatustoAdmin(e, admin);
      }
    });
    toast.success("Barcha adminlar faollashtirildi");
  }
  setBoolean();
  getadmins();
}

async function tooggleStatustoAdmin(e, admin) {
  adminStatus.adminId = admin.id;
  // console.log(e.target.checked, admin.id);
  if (e.target.checked) {
    await adminStatus.deActivate();
    toast.warning(`${admin.full_name} bloklandi`);
  } else {
    await adminStatus.activate();
    toast.success(`${admin.full_name} aktivlashtirildi`);
  }
  setBoolean();
  getadmins();
}

onUpdated(() => {
  setBoolean();
});

function setBoolean() {
  const inputs = window.document.querySelectorAll(".oneadmin");
  let def = true;
  inputs.forEach((input) => {
    if (!input.checked) {
      def = false;
    }
  });
  const inputAll = window.document.querySelector(".all");
  inputAll.checked = def;
}
</script>

<template>
  <div
    class="table_wraper shadow-md flex overflow-x-scroll bg-white rounded-md overflow-y-scroll"
  >
    <table class="text-sm flex-grow bg-white dark:bg-[#262626] text-black  dark:text-white text-left h-full ">
      <thead class="font-normal text-[16px] leading-[24px] md:text-sm">
        <tr class="text-[16px] font-medium border-b">
          <th scope="col" class="px-[15px] py-2">
            <div class="flex items-center">
              <input
                type="checkbox"
                class="rounded all"
                v-model="allAdmins.isAllBlocked"
                @click="(e) => setValue(e)"
              />
            </div>
          </th>
          <th scope="col" class="px-[15px] py-2">
            <div class="flex items-center">Ism familiya</div>
          </th>
          <th scope="col" class="px-[15px] py-2">
            <div class="flex items-center">Qo'shilgan sanasi</div>
          </th>
          <th scope="col" class="px-[15px] py-2">
            <div class="flex items-center w-[150px]">Username</div>
          </th>
          <th scope="col" class="px-[15px] py-2">
            <div class="flex items-center">Holati</div>
          </th>
          <th scope="col" class="px-[15px] py-2">
            <div class="flex items-center">Role</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="admin in allAdmins.admins"
          class="bg-white border-b dark:border-gray-400 font-normal text-[16px] leading-[24px]"
          :class="[admin.is_active ? 'bg-[#1cdd2c] dark:bg-[#097712]':'bg-[#e6d00d] dark:bg-[#bead0c]']"
        >
          <th
            v-if="!admin.is_creator"
            scope="row"
            class="px-[15px] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            <input
              :checked="!admin.is_active ? true : false"
              type="checkbox"
              class="oneadmin rounded"
              @input="(e) => tooggleStatustoAdmin(e, admin)"
            />
          </th>
          <td v-if="!admin.is_creator" class="px-[15px] py-4 text-[#0B63F8] dark:text-[#fffb02]">
            {{ admin.full_name }}
          </td>
          <td v-if="!admin.is_creator" class="px-[15px] py-4">
            {{ fixedDate(admin.createdAt) }}
          </td>
          <td v-if="!admin.is_creator" class="px-[15px] py-4">
            @{{ admin.user_name }}
          </td>
          <td v-if="!admin.is_creator" class="px-[15px] py-4">
            {{ admin.is_active ? "active" : "active emas" }}
          </td>
          <td v-if="!admin.is_creator" class="px-[15px] py-4">Admin</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table_wraper {
  min-height: calc(100vh - 780px);
  max-height: calc(100vh - 430px);
}
</style>
