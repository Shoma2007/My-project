<template>
  <v-dialog 
    :model-value="isOpen" 
    persistent
    max-width="500px"
  >
    <v-card title="Авторизация">
      <v-card-text>
        <slot></slot>
      </v-card-text>
      <button @click="closeModal" class="close-btn">×</button>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<style scoped>
.modal-content {
  position: relative;
}

.close-btn {
  position: absolute;
  top: 0px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  color: #000;
}
</style>