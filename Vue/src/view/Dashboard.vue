<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'
import Table from '@/view/Table.vue'
import { ref, onMounted,computed } from 'vue'

const router = useRouter()
const lists = ref([])
const tables = ref(false)
const searchQuery = ref('')

const filteredLists = computed(() => {
  if (!searchQuery.value) {
    return lists.value
  }
  
  const query = searchQuery.value.toLowerCase()
  return lists.value.filter(item => 
    item.number?.toString().includes(query) ||
    item.name?.toLowerCase().includes(query) ||
    item.age?.toString().includes(query) ||
    item.status?.toLowerCase().includes(query)
  )
})

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
  tables.value = true
}

const loadData = async () => {
  try {
    const { data } = await axios.get('https://ced1828f6bda4d0a.mokky.dev/list');
    lists.value = data
  } catch (error) {
    console.error("Не удалось загрузить данные:", error);
  }
}

const handleItemUpdated = () => {
  loadData() 
}

onMounted(() => {
  loadData()
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
      <div v-if="tables">
        <Table 
        :search-query="searchQuery"
        :lists="filteredLists" 
        @update:search-query="searchQuery = $event"
        @item-updated="handleItemUpdated" />
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