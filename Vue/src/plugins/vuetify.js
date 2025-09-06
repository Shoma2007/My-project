import { createVuetify } from 'vuetify'
import 'vuetify/styles'

import { VApp, VMain, VContainer, VRow, VCol, VCard, 
    VCardTitle, VCardText, VForm, VTextField, VSelect, VCheckbox, VBtn, VAppBar, VAppBarTitle, VSnackbar, VDialog, VTable } from 'vuetify/components'

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
        VSnackbar,
        VDialog,
        VTable
    },
})

export default vuetify