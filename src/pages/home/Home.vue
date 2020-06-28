<template>
    <div>
        <h1>salem alem {{msg}}</h1>
    </div>
</template>

<script>
    import api from '@/api'

    export default {
        data() {
            return {
                msg: "eldarbai"
            }
        },
        mounted() {
            api.getAllEmployes()
                .then(() => {
                    this.msg = "eee"
                })
        }
    }
</script>