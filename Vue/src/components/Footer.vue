<script></script>

<template>
       <div class="conteiner">
    <div class="conteiner_text">
        <p style="font-size: 40px;">Integrates natively <br> with Supabase Auth</p>
    <p>Using Postgres Row Level Security to create Object access rules.</p>
    <p style="margin: 40px 0px 20px 0px;">Storage Authorization is built around Postgres so that you can use <br>
     any combination of SQL, Postgres functions, and even your own <br>
     metadata to write policies.</p>
     <p><img src="@/assets/export_documentation.png" alt=""></p>
    </div>
     <img src="@/assets/public_file.png" alt="">
   </div>
   <div class="content">
    <p style="font-size: 40px;">Build in a weekend,scale to millions</p>
    <button class="btn">Start your project</button>
   </div>
   <div class="superbase">
    <div class="superbase_img">
        <p><img src="@/assets/supabase.png" alt=""></p>
        <p><img src="@/assets/twitter.png" alt="" style="margin: 0px 20px 0px 0px ;">
        <img src="@/assets/cat.png" alt=""></p>
    </div>
        <div class="superbase_text">
            <ul>
                <li style="color: #666666;">Product</li>
                <li><p>Database</p></li>
                <li><p>Authentication</p></li>
                <li><p>Storage</p></li>
                <li><p>Functions<br>Coming soon</p> </li>
                <li><p>Pricing</p></li>
            </ul>
            <ul>
                <li style="color: #666666;">Resources</li>
                <li><p>Support</p></li>
                <li><p>Case Studies</p></li>
                <li><p>System Status</p></li>
                <li><p>Terms of service</p></li>
            </ul>
            <ul>
                <li style="color: #666666;">Developers</li>
                <li><p>Documentation</p></li>
                <li><p>API Reference</p></li>
                <li><p>Guides</p></li>
            </ul>
            <ul>
                <li style="color: #666666;">Company</li>
                <li><p>Blog</p></li>
                <li><p>Open Source</p></li>
                <li><p>Humans.txt</p></li>
                <li><p>Lawyers.txt</p></li>
            </ul>
        </div>
   </div>
   <footer class="footer">
    <p style="color: #666666;">© Supabase Inc</p>
    <div>
        <img src="@/assets/suns.png" alt="">
        <img src="@/assets/switch.png" alt="" style="margin: 0px 20px;">
        <img src="@/assets/crescent.png" alt="">
    </div>
   </footer>
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
  cursor: pointer;
}
ul{
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