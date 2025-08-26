<script setup>
</script>

<template>
    <v-container class="conteiner">
    <p style="font-size: 40px;">Sleek dashboard for managing your media</p>
    <p>A complete Object Explorer so that any of your team can use.</p>
    <p>Drag and drop uploading, moving objects, and multiple object selection. As easy as working on your desktop.</p>
    <div class="conteiner-vue-img">
        <img src="@/assets/vue-file.png" alt="">
        <div>
            <p>File previews</p>
            <p style="margin: 35px 0px;">Preview any media type, including video and <br> audio.</p>
            <p>Check out our example app</p>
            <v-container style="padding: 20px; background-color: rgb(39, 35, 35);">
                <p>Profile management example</p>
                <p>Update a user account with public profile <br> information, including uploading a profile image.</p>
                <p>Created by: supabase</p>
            </v-container>
            <p>nextjs-ts-user-management</p>
            <p><img src="@/assets/deploy.png" alt=""></p>
        </div>
    </div>
   </v-container>
   <div class="content">
    <div style="width: 30%;">
    <p style="font-size: 40px;">Simple and convenient <br> APIs</p>
    <p>Built from the ground-up for interoperable authentication.</p>
    <p>Fast and easy to implement using our powerful library clients. <br>
         Asset optimization and image transformation coming soon!</p>
         <v-list class="content-CDN">
            <v-list-item>
                <p style="font-size: 22px;">CDN integration</p>
                <p>Serve from the edge to <br> reduce latency.</p>
                <p style="color: #4299E1;width: 100px;padding: 5px;box-sizing: border-box; border-radius: 10px; background-color: #3182CE1A;">Coming soon</p>
            </v-list-item>
            <v-list-item>
                <p>Auto transformation & <br> optimisation</p>
                <p>Resize and compress your <br> media before you serve it.</p>
                <p style="color: #4299E1;width: 100px;padding: 5px;box-sizing: border-box; border-radius: 10px; background-color: #3182CE1A;">Coming soon</p>
            </v-list-item>
         </v-list>
        </div>
        <p><img src="@/assets/upload-file.png" alt=""></p>
   </div>
</template>

<style scoped>
.conteiner{
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    margin-left: 200px;
}
.conteiner-vue-img{
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
}
.content{
    display: flex;
    justify-content: space-evenly;
    margin-top: 10%;
}
.content-CDN{
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0px;
    margin-top: 60px;
}
</style>