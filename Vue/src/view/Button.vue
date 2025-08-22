<template>
<button class="btn"><slot></slot></button>
</template>

<style scoped>
.btn{
  background-color:  rgb(40, 150, 40);
  padding: 7px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: -5px;
  transition: all 0.7s ease;
  margin-top: 10px;
}
.btn:hover{
  transform: translateY(-5px);
  box-shadow: 2px 2px 2px rgba(3, 172, 31, 1);
}
</style>
