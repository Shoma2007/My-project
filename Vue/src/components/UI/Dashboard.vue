<script setup>
import { useRouter } from "vue-router";
import axios from "axios";
import Button from "@/components/UI/Button.vue";
import Table from '@/components/UI/Table.vue'
import { ref, onMounted } from "vue";

const router = useRouter();
const lists = ref([])
const tableTrue = ref(false)

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

const table = () => {
  tableTrue.value = true
}

// Загрузка данных
const loadData = async () => {
  try {
    const { data } = await axios.get('https://ced1828f6bda4d0a.mokky.dev/list');
    lists.value = data;
  } catch (error) {
    console.error("Не удалось загрузить данные:", error);
  }
}

// Добавление записи
const addItem = async (item) => {
  try {
    const response = await axios.post('https://ced1828f6bda4d0a.mokky.dev/list', item);
    lists.value.push(response.data);
  } catch (error) {
    console.error("Ошибка при добавлении:", error);
  }
}

// Редактирование записи
const editItem = async (item) => {
  try {
    await axios.patch(`https://ced1828f6bda4d0a.mokky.dev/list/${item.id}`, item);
    const index = lists.value.findIndex(i => i.id === item.id);
    if (index !== -1) {
      lists.value[index] = item;
    }
  } catch (error) {
    console.error("Ошибка при редактировании:", error);
  }
}

// Удаление записи
const deleteItem = async (id) => {
  try {
    await axios.delete(`https://ced1828f6bda4d0a.mokky.dev/list/${id}`);
    lists.value = lists.value.filter(item => item.id !== id);
  } catch (error) {
    console.error("Ошибка при удалении:", error);
  }
}

onMounted(() => {
  loadData();
})
</script>

<template>
  <v-container class="conteiner">
    <div class="content"> 
      <h1>Поздравляю, вы зарегистрировались</h1>
      <div class="cont"> 
        <Button class="btn" @click="goToLDashboard">Назад</Button>
        <Button class="btn" @click="table">Таблица</Button>
      </div>
    </div>
  </v-container>
  
  <v-container v-if="tableTrue">
    <Table 
      :items="lists" 
      @add-item="addItem"
      @edit-item="editItem"
      @delete-item="deleteItem"
    />
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
.cont{
  display: flex;
  justify-content: space-between;
}
</style>