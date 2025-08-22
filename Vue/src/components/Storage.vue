<script setup>
import Button from '@/view/Button.vue';
</script>

<template>
<div class="conteiner">
    <div class="conteiner-flex">
    <p style="font-size: 25px;">Storage</p>
    <h2 style="font-size: 50px; margin: 0px 0px 40px 0px;">Store and serve <br>any type of digital content</h2>
    <p>An open source Object store service with unlimited scalability, for<br> any file type.</p>
    <p>With custom policies and permissions that are familiar and easy to<br> implement.</p>
    <Button>Start a project</Button>
    </div>
        <img src="@/assets/acmegram.png" alt="" width="500px">
   </div>
    <ul class="content">
        <li>
            <p>Interoperable</p>
            <p>Integrates well with the rest of <br> Supabase ecosystem, including<br> Auth and Postgres.</p>
        </li>
        <li>
            <p>Lightning fast</p>
            <p>Thin API server layer that<br> leverages Postgres' permissions<br> and performance.</p>
        </li>
        <li>
            <p>Dependable</p>
            <p>Enterprise-level scalability and durability.</p>
        </li>
    </ul>
</template>

<style scoped>
.conteiner{
    display: flex;
    color: white;
    justify-content: space-evenly;
    margin-top: 10%;
}
.conteiner-flex{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.btn{
  color: white;
}
.content{
    display: flex;
    margin-top: 10%;
    justify-content: space-evenly;
    list-style: none;
    color: white;
}
</style>