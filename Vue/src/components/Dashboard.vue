<script>
import axios from 'axios'

export default {
  methods: {
    async goToLDashboard() {
      try {
        const response = await axios.delete('https://ced1828f6bda4d0a.mokky.dev/Authorization/1')
        if (response.status === 200 || response.status === 204) {
          console.log('Данные успешно удалены')
        }
      } catch (error) {
        console.error('Ошибка при удалении:', error)
      } finally {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<template>
<div class="conteiner">
        <div class="conte">
        <h1>Поздравляю, вы зарегистрировались</h1>
        <button class="btn" @click="goToLDashboard">Назад</button>
        </div>
    </div>
</template>

<style scoped>
.conteiner{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.conte{
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
</style>