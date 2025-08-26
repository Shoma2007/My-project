import { createVuetify } from 'vuetify'
import 'vuetify/styles'

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

export default vuetify