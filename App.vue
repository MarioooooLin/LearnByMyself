<template>
    <div>
        <student></student>
        <school></school>
    </div>
</template>

<script>
import School from "./School.vue";
import Student from "./Student.vue";
export default {
    name: "App",
    components: {
        Student,
        School,
    },
};
</script>

<style></style>
