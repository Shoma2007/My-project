<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import axios from "axios";
import Button from "@/components/UI/Button.vue";
import Input from "@/components/UI/Input.vue";

const router = useRouter();
const email = ref("");
const password = ref("");
const error = ref("");
const isEnabled = ref(false)
const isAdmin = ref(true)

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
<v-checkbox v-model="isEnabled" label="Включить формы" />
  <v-form class="main" :disabled="!isEnabled">
    <v-container class="conteiner">
      <Input type="email" v-model="email" label="Введите свою почту:" />
      <Input type="password" v-model="password" label="Введите свой пароль:" />
      <p v-if="error" style="color: red">{{ error }}</p>
      <v-checkbox v-model="isAdmin" label="Пользователь-администратор"/>
      <v-select 
      :disabled="!isAdmin || !isEnabled"
      :items="['Зритель', 'Редактор']"
      />
      <v-btn @click="goToLogin" text="Войти" prepend-icon="$vuetify"/>
    </v-container>
  </v-form>
</template>

<style scoped>
.main {
  display: flex;
  align-items: center;
  color: black;
}
.conteiner {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}
</style>

