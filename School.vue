<template>
    <div class="demo">
        <h2>School:{{ schoolName }}</h2>
        <h2>Address:{{ address }}</h2>
        <button @click="show">Click</button>
    </div>
</template>

// <script>
// const school = Vue.extend({
//     data() {
//         return {
//             schoolName: "QQQQQQQQ",
//             address: "ASDFGGHHJA",
//         };
//     },
//     methods: {
//         show(){
//             alert(this.schoolName)
//         }
//     },
// });
// </script>

<script>
export default {
    name:'School',
        data() {
        return {
            schoolName: "QQQQQQQQ",
            address: "ASDFGGHHJA",
        };
    },
    methods: {
        show(){
            alert(this.schoolName)
        }
    },

}
</script>

<style lang="scss">
.demo {
    background-color: orange;
}
</style>
