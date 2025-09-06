<script setup>
defineProps({
    name: String,
    age: Number,
    status: String,
    number: Number
})
</script>

<template>
   <table>
    <thead>
        <tr>
            <th>Номер:</th>
            <th>Имя:</th>
            <th>Возраст:</th>
            <th>Статус:</th>
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
   </table>
</template>

<style>
table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0px;
    border-radius: 8px;
}
thead {
    background-color: #2773a5;
    color: black;
}
th {
    width: 10%;
    padding: 16px 15px;
    text-align: start;
    text-transform: uppercase;
}
td { 
    padding: 14px 15px;
    text-align: start;
}
</style>