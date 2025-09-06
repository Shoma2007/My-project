<script setup>
defineProps({
    name: String,
    age: Number,
    status: String,
    number: Number
})
</script>

<template>
    <v-table>
      <thead>
        <tr>
            <th><b>Номер:</b></th>
            <th><b>Имя:</b></th>
            <th><b>Возраст:</b></th>
            <th><b>Статус:</b></th>
        </tr>
    </thead>
     <tbody>
        <tr>
           <td>{{ number }}</td>
        <td>{{ name }}</td>
        <td>{{ age }}</td>
        <td>{{ status }}</td> 
        </tr>
     </tbody>
     </v-table>
</template>

<style>
thead {
    background-color: #2773a5;
}
th {
    width: 20%;
    text-transform: uppercase;
}

</style>