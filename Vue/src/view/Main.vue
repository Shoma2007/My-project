<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import axios from "axios";
import Button from "@/view/Button.vue";
import Input from "@/view/Input.vue"

const router = useRouter();
const email = ref("");
const password = ref("");
const error = ref("");

const goToLogin = async () => {
  if (email.value === "" || password.value === "") {
    error.value = "Заполните поля";
    return;
  }
  if (!email.value.includes("@gmail") && !email.value.includes("@mail")) {
    error.value = "Email должен содержать символ @ и иметь почту (mail, gmail)";
    return;
  }
  try {
    const response = await axios.post(
      "https://ced1828f6bda4d0a.mokky.dev/Authorization",
      {
        email: email.value,
        password: password.value,
      }
    );
    if (response.status === 200 || response.status === 201) {
      router.push("/dashboard");
    }
  } catch (error) {
    console.error("Ошибка при добавление:", error);
  }
};
</script>

<template>
  <v-form class="main">
      <v-container class="conteiner">
        <h1>Авторизация</h1>
        <label for="">Введите свою почту:</label>
        <Input type="email" v-model="email" />
        <label for="">Введите свой пароль:</label>
        <Input type="password" v-model="password" />
        <p v-if="error" style="color: red">{{ error }}</p>
        <Button @click="goToLogin">Войти</Button>
      </v-container>
      <img src="@/assets/zamok.jpg" alt="" width="200px" />
  </v-form>
</template>

<style scoped>
.main {
  display: flex;
  align-items: center;
  margin-top: 10%;
  color: black;
}
.conteiner {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid blue;
}
</style>
