<script>
import axios from 'axios'

export default{
    data(){
        return{
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async goToLogin(){
          if(this.email === '' || this.password === ''){
            this.error = 'Заполните поля'
            return
          }

          if (!this.email.includes('@gmail') && !this.email.includes('@mail')){
            this.error = 'Email должен содержать символ @ и иметь почту (mail, gmail)'
            return
          }

          try{
            const response = await axios.post('https://ced1828f6bda4d0a.mokky.dev/Authorization', {
              email: this.email,
              password: this.password
            });
            if (response.status === 200 || response.status === 201){
              this.$router.push('/dashboard')
            }
          } catch (error){
            console.error('Ошибка при добавление:', error)
          }       
        }
    }
}
</script>

<template>
<main class="main">
    <div class="contenet-wrapper">
  <div class="conteiner"> 
 <h1>Авторизация</h1>
 <label for="">Введите свою почту </label>
 <input type="email" v-model="email">
 <label for="">Введите свой пароль</label>
 <input type="password" v-model="password">
  <p v-if="error" style="color: red">{{ error }}</p>
 <button class="btn" @click="goToLogin">Войти</button>
 </div>
    <img src="@/assets/zamok.jpg" alt="" width="250px">
</div>
</main>
</template>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  color: black;
}
.contenet-wrapper{
    display: flex;
    width: 500px;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
}
.conteiner{
  padding: 20px;
  border-radius: 10px;
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