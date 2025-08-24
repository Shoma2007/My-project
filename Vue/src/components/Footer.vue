<script setup>
import Button from '@/view/Button.vue';
</script>

<template>
       <v-container class="conteiner">
    <v-container class="conteiner_text">
        <p style="font-size: 40px;">Integrates natively <br> with Supabase Auth</p>
    <p>Using Postgres Row Level Security to create Object access rules.</p>
    <p style="margin: 40px 0px 20px 0px;">Storage Authorization is built around Postgres so that you can use <br>
     any combination of SQL, Postgres functions, and even your own <br>
     metadata to write policies.</p>
     <p><img src="@/assets/export_documentation.png" alt=""></p>
    </v-container>
     <img src="@/assets/public_file.png" alt="">
   </v-container>
   <v-container class="content">
    <p style="font-size: 40px;">Build in a weekend,scale to millions</p>
    <Button>Start your project</Button>
   </v-container>
   <v-container class="superbase">
    <v-container class="superbase_img">
        <p><img src="@/assets/supabase.png" alt=""></p>
        <p><img src="@/assets/twitter.png" alt="" style="margin: 0px 20px 0px 0px ;">
        <img src="@/assets/cat.png" alt=""></p>
    </v-container>
        <v-container class="superbase_text">
            <v-list>
                <v-list-item style="color: #666666;">Product</v-list-item>
                <v-list-item><p>Database</p></v-list-item>
                <v-list-item><p>Authentication</p></v-list-item>
                <v-list-item><p>Storage</p></v-list-item>
                <v-list-item><p>Functions<br>Coming soon</p> </v-list-item>
                <v-list-item><p>Pricing</p></v-list-item>
            </v-list>
            <v-list>
                <v-list-item style="color: #666666;">Resources</v-list-item>
                <v-list-item><p>Support</p></v-list-item>
                <v-list-item><p>Case Studies</p></v-list-item>
                <v-list-item><p>System Status</p></v-list-item>
                <v-list-item><p>Terms of service</p></v-list-item>
            </v-list>
            <v-list>
                <v-list-item style="color: #666666;">Developers</v-list-item>
                <v-list-item><p>Documentation</p></v-list-item>
                <v-list-item><p>API Reference</p></v-list-item>
                <v-list-item><p>Guides</p></v-list-item>
            </v-list>
            <v-list>
                <v-list-item style="color: #666666;">Company</v-list-item>
                <v-list-item><p>Blog</p></v-list-item>
                <v-list-item><p>Open Source</p></v-list-item>
                <v-list-item><p>Humans.txt</p></v-list-item>
                <v-list-item><p>Lawyers.txt</p></v-list-item>
            </v-list>
        </v-container>
   </v-container>
   <v-container class="footer">
    <p style="color: #666666;">© Supabase Inc</p>
    <div>
        <img src="@/assets/suns.png" alt="">
        <img src="@/assets/switch.png" alt="" style="margin: 0px 20px;">
        <img src="@/assets/crescent.png" alt="">
    </div>
   </v-container>
</template>

<style scoped>
.conteiner{
    display: flex;
    margin-top: 5%;
    justify-content: space-evenly;
}
.content{
    text-align: center;
    margin-top: 20%;
}
.btn{
  background-color: #24B47E;
  padding: 12px;
  color: #fff;
}
.btn:hover{
  box-shadow: 2px 2px 2px #24B47E;
}
v-list{
    list-style: none;
}
.superbase{
    margin-top: 15%;
    display: flex;
    justify-content: space-around;
}
.superbase_text{
    display: flex;
    gap: 100px;
}
.footer{
    display: flex;
    justify-content: space-between;
    margin: 10% 10%;
    border-top: 2px solid #2A2A2A;
    padding-top: 20px;
}
</style>