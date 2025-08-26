<script setup>
import { ref } from "vue";
import Modal from "@/components/UI/Modal.vue";
import Main from "@/components/UI/Main.vue";
import Button from "@/components/UI/Button.vue";

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <v-container class="header">
    <v-list class="navigation_header">
      <v-list-item><img src="@/assets/supabase.png" alt="" /></v-list-item>
      <v-list-item>Product </v-list-item>
      <v-list-item class="navigation_header_img"
        ><img src="@/assets/buttom.png" alt=""
      /></v-list-item>
      <v-list-item>Developers </v-list-item>
      <v-list-item class="navigation_header_img"
        ><img src="@/assets/buttom.png" alt=""
      /></v-list-item>
      <v-list-item>Beta</v-list-item>
      <v-list-item>Pricing</v-list-item>
    </v-list>
    <v-list class="authorization_header">
      <v-list-item
        ><Button @click="openModal">Start your project</Button></v-list-item
      >
      <v-list-item>Sign in</v-list-item>
    </v-list>

    <Modal :isOpen="isModalOpen" @close="closeModal">
      <Main />
    </Modal>
  </v-container>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
}
.navigation_header,
.authorization_header {
  display: flex;
  gap: 25px;
  color: #fff;
}
.navigation_header_img {
  margin-left: -20px;
  cursor: pointer;
}
v-list {
  list-style: none;
}
.btn {
  margin-top: -5px;
}
</style>
