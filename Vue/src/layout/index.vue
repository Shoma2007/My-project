<script>
import Header from "@/components/Header.vue";
import Storage from '@/components/storage.vue';
import SleekDashboard from '@/components/SleekDashboard.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { 
    Header, 
    Storage,
    SleekDashboard,
    Footer
    },
}
</script>

<template>
  <Header />
   <Storage />
   <sleek-dashboard />
   <Footer />
</template>

<style scoped>

</style>
