<script setup>
import { ref } from 'vue';

const search = ref('')
const dialog = ref(false)
const editDialog = ref(false)
const currentItem = ref(null)

defineProps({
    items: Array
})

const emit = defineEmits(['add-item', 'delete-item', 'edit-item'])

const newItem = ref({
  number: '',
  name: '',
  age: '',
  status: ''
})

const openAddDialog = () => {
  newItem.value = { number: '', name: '', age: '', status: '' }
  dialog.value = true
}

const openEditDialog = (item) => {
  currentItem.value = { ...item }
  editDialog.value = true
}

const saveItem = () => {
  emit('add-item', { ...newItem.value })
  dialog.value = false
}

const updateItem = () => {
  emit('edit-item', currentItem.value)
  editDialog.value = false
}

const deleteItem = (id) => {
  if (confirm('Вы уверены, что хотите удалить эту запись?')) {
    emit('delete-item', id)
  }
}
</script>

<template>
  <div class="table-container">
    <div class="table-header">
      <v-text-field
        v-model="search"
        label="Поиск"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        class="search-field"
      ></v-text-field>
      
      <v-btn 
        color="primary" 
        @click="openAddDialog"
        class="add-btn"
      >
        <v-icon>mdi-plus</v-icon>
        Добавить
      </v-btn>
    </div>
     
    <!-- Таблица -->
    <v-data-table 
      :items="items" 
      :search="search"
      :headers="[
        {title: 'Номер', key: 'number'},
        {title: 'Имя', key: 'name'},
        {title: 'Возраст', key: 'age'},
        {title: 'Статус', key: 'status'},
        {title: 'Действия', key: 'actions', sortable: false}
      ]"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn 
          icon="mdi-pencil" 
          size="small" 
          color="warning"
          @click="openEditDialog(item)"
          class="mr-2"
        >Р</v-btn>
        <v-btn 
          icon="mdi-delete" 
          size="small" 
          color="error"
          @click="deleteItem(item.id)"
        >Х</v-btn>
      </template>
    </v-data-table>

    <!-- Диалог добавления -->
    <v-dialog v-model="dialog" max-width="500px" persistent>
      <v-card>
        <v-card-title>Добавить новую запись</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="newItem.number"
            label="Номер"
            type="number"
            class="mb-2"
          ></v-text-field>
          <v-text-field
            v-model="newItem.name"
            label="Имя"
            class="mb-2"
          ></v-text-field>
          <v-text-field
            v-model="newItem.age"
            label="Возраст"
            type="number"
            class="mb-2"
          ></v-text-field>
          <v-text-field
            v-model="newItem.status"
            label="Статус"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" @click="dialog = false">Отмена</v-btn>
          <v-btn color="primary" @click="saveItem">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Диалог редактирования -->
    <v-dialog v-model="editDialog" max-width="500px" persistent>
      <v-card>
        <v-card-title>Редактировать запись</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="currentItem.number"
            label="Номер"
            type="number"
            class="mb-2"
          ></v-text-field>
          <v-text-field
            v-model="currentItem.name"
            label="Имя"
            class="mb-2"
          ></v-text-field>
          <v-text-field
            v-model="currentItem.age"
            label="Возраст"
            type="number"
            class="mb-2"
          ></v-text-field>
          <v-text-field
            v-model="currentItem.status"
            label="Статус"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" @click="editDialog = false">Отмена</v-btn>
          <v-btn color="primary" @click="updateItem">Обновить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.table-container {
  padding: 20px;
}

.table-header {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  align-items: center;
}

.search-field {
  flex: 1;
  background-color: #968686;
}

.add-btn {
  height: 56px;
}

thead {
  background-color: #2773a5;
}

th {
  width: 20%;
  text-transform: uppercase;
}

.v-data-table {
  margin-top: 20px;
}
</style>