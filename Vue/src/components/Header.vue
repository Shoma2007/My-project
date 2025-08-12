<script>
import Modal from '@/view/Modal.vue';
import Main from '@/view/Main.vue';

export default {
  components: {
    Modal,
    Main
  },
  data() {
    return {
      isModalOpen: false
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
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
      <li><button class="btn" @click="openModal">Start your project</button></li>
      <li>Sign in</li>
    </ul>

    <Modal :isOpen="isModalOpen" @close="closeModal">
      <Main />
    </Modal>
  </header>
</template>

<style scoped>
/* Ваши существующие стили остаются без изменений */
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
  background-color:  rgb(40, 150, 40);
  padding: 7px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: -5px;
}
</style>