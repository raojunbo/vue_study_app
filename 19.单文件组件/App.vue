<template>
    <div>
        <School/>
        <Student/>
    </div>
</template>

<script>
import Shool from './School.vue'
import Student from './Student.vue'
export default {
    name:"App",
    components: {
        School,
        Student
    }
};
</script>

<style>
</style>