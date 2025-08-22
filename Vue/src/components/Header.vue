<script setup>
import { ref } from 'vue'
import Modal from '@/view/Modal.vue';
import Main from '@/view/Main.vue';
import Button from '@/view/Button.vue'

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true;
}

const closeModal = () => {
  isModalOpen.value = false;
}
</script>

<template>
  <header class="header">
    <ul class="navigation_header">
      <li><img src="@/assets/supabase.png" alt=""></li>
      <li>Product </li>
      <li class="navigation_header_img"><img src="@/assets/buttom.png" alt=""></li>
      <li>Developers </li>
      <li class="navigation_header_img"><img src="@/assets/buttom.png" alt=""></li>
      <li>Beta</li>
      <li>Pricing</li>
    </ul>
    <ul class="authorization_header">
      <li><Button @click="openModal">Start your project</Button></li>
      <li>Sign in</li>
    </ul>

    <Modal :isOpen="isModalOpen" @close="closeModal">
      <Main />
    </Modal>
  </header>
</template>

<style scoped>
.header{
  display: flex;
  justify-content: space-evenly;
}
.navigation_header,
.authorization_header{
  display: flex;
  gap: 25px;
  color: #fff;
}
.navigation_header_img{
  margin-left: -20px;
  cursor: pointer;
}
ul{
  list-style: none;
}
.btn{
  margin-top: -5px
}
</style>