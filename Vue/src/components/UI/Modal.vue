<template>
  <v-dialog class="modal-overlay" v-if="isOpen" @click.self="closeModal">
    <v-container class="modal-content">
      <v-card title="Авторизация">
        <v-card-text>
          <slot></slot>
        </v-card-text>
      </v-card>
      <button @click="closeModal" class="close-btn">x</button>
    </v-container>
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
.modal-overlay {
  position: fixed;
  width: 500px;
  z-index: 1000;
}

.modal-content {
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 20px;
  cursor: pointer;
  color: black;
}
</style>


