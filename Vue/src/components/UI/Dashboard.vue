<script setup>
import { useRouter } from "vue-router";
import axios from "axios";
import Button from "@/components/UI/Button.vue";

const router = useRouter();

const goToLDashboard = async () => {
  try {
    const response = await axios.delete(
      "https://ced1828f6bda4d0a.mokky.dev/Authorization/1"
    );
    if (response.status === 200 || response.status === 204) {
      console.log("Данные успешно удалены");
    }
  } catch (error) {
    console.error("Ошибка при удалении:", error);
  } finally {
    router.push("/");
  }
};
</script>

<template>
  <v-container class="conteiner">
    <div class="content">
      <h1>Поздравляю, вы зарегистрировались</h1>
      <Button class="btn" @click="goToLDashboard">Назад</Button>
    </div>
  </v-container>
</template>

<style scoped>
.conteiner {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
}
.content {
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10%;
}
.btn {
  margin-top: 10px;
  padding: 7px;
  background-color: rgb(212, 126, 6);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.7s ease;
}
.btn:hover {
  transform: translateY(-5px);
  box-shadow: 2px 2px 2px rgb(212, 126, 6);
}
</style>
