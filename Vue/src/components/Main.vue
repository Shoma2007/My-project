<script>

</script>

<template>
<main class="main">
    <div class="contenet-wrapper">
  <div class="conteiner">
 <h1>Авторизация</h1>
 <label for="">Введите свою почту </label><br>
 <input type="email"><br>
 <label for="">Введите свой пароль</label><br>
 <input type="password"><br>
 <button class="btn">Войти</button>
 </div>
    <img src="C:\Users\roma2\OneDrive\Desktop\My-project\Vue\public\zamok.jpg" alt="" width="250px">
</div>
</main>
</template>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
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