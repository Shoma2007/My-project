<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Modal from '@/view/Modal.vue';

const props = defineProps({
    lists: Array,
    searchQuery: String
})

const emit = defineEmits(['item-updated', 'update:searchQuery'])

const isAddModalOpen = ref(false)
const isEditModalOpen = ref(false)
const selectedItem = ref({
    number: '',
    name: '',
    age: '',
    status: 'Programmist'
})

const updateSearchQuery = (value) => {
    emit('update:searchQuery', value)
}

const openAddModal = () => {
  selectedItem.value = {
    number: '',
    name: '',
    age: '',
    status: 'Programmist'
  }
  isAddModalOpen.value = true
}

const openEditModal = (item) => {
  selectedItem.value = { ...item }
  isEditModalOpen.value = true
}

const closeModal = () => {
  isAddModalOpen.value = false
  isEditModalOpen.value = false
}

const saveItem = async (itemData) => {
  try {
    if (itemData.id) {
      await axios.patch(`https://ced1828f6bda4d0a.mokky.dev/list/${itemData.id}`, itemData)
    } else {
      await axios.post('https://ced1828f6bda4d0a.mokky.dev/list', itemData)
    }
    emit('item-updated')
    closeModal()
  } catch (error) {
    console.error("Ошибка при сохранении:", error);
  }
}

const deleteItem = async (id) => {
  if (confirm('Вы уверены, что хотите удалить этот элемент?')) {
    try {
      await axios.delete(`https://ced1828f6bda4d0a.mokky.dev/list/${id}`)
      emit('item-updated')
    } catch (error) {
      console.error("Ошибка при удалении:", error);
    }
  }
}
</script>

<template>
    <div class="controls">
        <input 
        type="text" 
        placeholder="Поиск"
        :value="searchQuery"
        @input="updateSearchQuery($event.target.value)">
        <button @click="openAddModal" class="add-btn">Добавить новый элемент</button>
    </div>
    
    <table>
        <thead>
            <tr>
                <th>Номер:</th>
                <th>Имя:</th>
                <th>Возраст:</th>
                <th>Статус:</th>
                <th>Действия:</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in lists" :key="item.id">
                <td>{{ item.number }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.age }}</td>
                <td>{{ item.status }}</td>
                <td class="actions">
                    <button @click="openEditModal(item)" class="edit-btn">✏️</button>
                    <button @click="deleteItem(item.id)" class="delete-btn">🗑️</button>
                </td>
            </tr>
        </tbody>
    </table>


    <Modal :isOpen="isAddModalOpen || isEditModalOpen" @close="closeModal">
        <h3>{{ selectedItem.id ? 'Редактировать элемент' : 'Добавить новый элемент' }}</h3>
        <form @submit.prevent="saveItem(selectedItem)" class="form">
            <div class="form-group">
                <label class="label">Номер:</label>
                <input type="number" v-model.number="selectedItem.number" required>
            </div>
            <div class="form-group">
                <label class="label">Имя:</label>
                <input type="text" v-model="selectedItem.name" required>
            </div>
            <div class="form-group">
                <label class="label">Возраст:</label>
                <input type="number" v-model.number="selectedItem.age" required>
            </div>
            <div class="form-group">
                <label class="label">Статус:</label>
                <select v-model="selectedItem.status" required>
                    <option value="Programmist">Программист</option>
                    <option value="Football player">Футболист</option>
                    <option value="Volleyball player">Волейболист</option>
                    <option value="basketball player">Баскетболист</option>
                    <option value="Engineer">Инженер</option>
                </select>
            </div>
            <div class="form-actions">
                <button type="button" @click="closeModal" class="cancel-btn">Отмена</button>
                <button type="submit" class="save-btn">Сохранить</button>
            </div>
        </form>
    </Modal>
</template>

<style>
.controls{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 10%;
    gap: 20px;
}

input{
    flex: 1;
    margin-top: 0;
    height: 3em;
    padding-left: 20px;
}

.label{
    color: black;
}

.add-btn{
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.add-btn:hover{
    background-color: #45a049;
}

table{
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0px;
    border-radius: 8px;
}

thead{
    background-color: #2773a5;
    color: black;
}

th{
    width: 10%;
    padding: 16px 15px;
    text-align: start;
    text-transform: uppercase;
}

td { 
    padding: 14px 15px;
    text-align: start;
}

.actions {
    display: flex;
    gap: 10px;
}

.edit-btn, .delete-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 5px;
    border-radius: 3px;
    transition: background-color 0.3s;
}

.edit-btn:hover {
    background-color: #e3f2fd;
}

.delete-btn:hover {
    background-color: #ffebee;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    margin-bottom: 5px;
    font-weight: bold;
}

.form-group input,
.form-group select {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
}

.cancel-btn {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.save-btn {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.cancel-btn:hover {
    background-color: #da190b;
}

.save-btn:hover {
    background-color: #45a049;
}
</style>