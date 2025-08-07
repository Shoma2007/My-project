<script>
</script>

<template>
<div class="conteiner">
        <div class="conte">
        <h1>Поздравляю вы зарегистрировались</h1>
        <button class="btn"><router-link to="/login" style="color: black; text-decoration: none" > Назад </router-link></button>
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