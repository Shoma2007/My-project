import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import App from './App.vue'
import router from './router'

import { VApp, VMain, VContainer, VRow, VCol, VCard, 
    VCardTitle, VCardText, VForm, VTextField, VSelect, VCheckbox, VBtn, VAppBar, VAppBarTitle, VSnackbar } from 'vuetify/components'

const vuetify = createVuetify({
    components: {
        VApp, 
        VMain, 
        VContainer, 
        VRow, 
        VCol, 
        VCard, 
        VCardTitle, 
        VCardText, 
        VForm, 
        VTextField, 
        VSelect, 
        VCheckbox, 
        VBtn, 
        VAppBar, 
        VAppBarTitle, 
        VSnackbar
    },
})

const app = createApp(App)

app.use(router)
app.use( vuetify)

app.mount('#app')
