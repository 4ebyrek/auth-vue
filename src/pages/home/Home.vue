<template>
    <div>
        <h1>salem alem {{msg}}</h1>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                msg: "eldarbai"
            }
        },
        mounted() {
            axios.get('http://localhost:8081/api/v1/employees')
                .then(() => {
                    this.msg = "eee"
                })
        }
    }
</script>