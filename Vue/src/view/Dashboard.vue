<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'
import Table from '@/view/Table.vue'
import { ref, onMounted } from 'vue'

const router = useRouter()
const lists = ref([])
const tr = ref(false)

const goToLDashboard = async () => {
      try {
        const response = await axios.delete('https://ced1828f6bda4d0a.mokky.dev/Authorization/1')
        if (response.status === 200 || response.status === 204) {
          console.log('Данные успешно удалены')
        }
      } catch (error) {
        console.error('Ошибка при удалении:', error)
      } finally {
        router.push('/')
      }
}

const table = () => {
  tr.value = true
}

defineProps({
  lists: Array
})

onMounted(async () => {
  try {
    const { data } = await axios.get('https://ced1828f6bda4d0a.mokky.dev/list');

    lists.value = data
  } catch (error) {
    console.error("Не удалось загрузить данные:", error);
  }
})
</script>

<template>
<div class="conteiner">
        <div class="content">
        <h1>Поздравляю, вы зарегистрировались</h1>
        <div class="cont">
          <button class="btn" @click="goToLDashboard">Назад</button>
          <button class="btn" @click="table">Таблица</button>
        </div>
        </div>
    </div>
      <div v-if="tr">
        <Table 
        v-for="list in lists"
        :key="list.id" 
        :name="list.name" 
        :age="list.age" 
        :status="list.status"
        :number="list.number"
        />
    </div>
</template>

<style scoped>
.conteiner{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
}
.content{
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10%;
}
.btn{
  margin-top: 10px;
  padding: 7px;
  background-color: rgb(212, 126, 6);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.7s ease;
}
.btn:hover{
  transform: translateY(-5px);
  box-shadow: 2px 2px 2px rgb(212, 126, 6);
}
.cont{
  display: flex;
  justify-content: space-between;
}
</style>