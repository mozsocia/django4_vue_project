<template>
    <h1>Hello dei {{ name }} sikder one</h1>

</template>

<script>
export default {
    data() {
        return {
            name:"mozdalif",
            products: []
        }
    },
    methods: {
        getProducts() {
            axios.get('/api/products')
                .then((response) => {
                    this.products = response.data.data
                })
        }
    },
    mounted() {
        // this.getProducts()
    }
}
</script>
<style>
</style>
