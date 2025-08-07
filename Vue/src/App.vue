<script>
 import Header from './components/Header.vue'
 import Main from './components/Main.vue'
 import Dashboard from './components/Dashboard.vue'

export default{
   components: {Header, Main, Dashboard}
 }
</script>

<template>
<div>
<Header />
<router-view></router-view>
</div>
</template>

<style scoped>

</style>
