<template>
    <div class="wrapper d-flex w-100 align-content-stretch">
        <sidebar></sidebar>
        <main>
            <navbar></navbar>
        </main>
    </div>
</template>

<script>
import sidebar from "@/components/sidebar.vue"
import navbar from "@/components/navbar.vue"
export default {
    name: 'dashboard-wrapper',
    components: {
        sidebar, navbar
    }
}
</script>

<style lang="scss">
main {
    min-height: 100vh;
    transition: all .25s ease;
    width: 100%;
}
</style>
