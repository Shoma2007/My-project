<script>
</script>

<template>
     <header class="header">
      <ul class="navigation_header">
        <li><img src="C:\Users\roma2\OneDrive\Desktop\My-project\Vue\public\supabase.png" alt=""></li>
        <li>Product </li>
        <li class="navigation_header_img"><img src="C:\Users\roma2\OneDrive\Desktop\My-project\Vue\public\buttom.png" alt=""></li>
        <li>Developers </li>
        <li class="navigation_header_img"><img src="C:\Users\roma2\OneDrive\Desktop\My-project\Vue\public\buttom.png" alt=""></li>
        <li>Beta</li>
        <li>Pricing</li>
      </ul>
      <ul class="authorization_header">
        <li><button class="btn">Start your project</button> </li>
        <li>Sign in</li>
      </ul>
  </header>
</template>

<style scoped>
.header{
  display: flex;
  justify-content: space-evenly;
}
.navigation_header,
.authorization_header{
  display: flex;
  gap: 25px;
  color: #fff;
}
.navigation_header_img{
  margin-left: -20px;
  cursor: pointer;
}
ul{
  list-style: none;
}
.btn{
  background-color:  rgb(40, 150, 40);
  padding: 7px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: -5px;
}
</style>