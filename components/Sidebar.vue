<template>
    <aside class="sidebar bg-secondary">
        <div class="sidebar-header navbar">
            <p class="mb-0 navbar-brand py-3">
                <img :src="logo" alt="" srcset="" width="100%">
            </p>
        </div>
        <ul class="list-unstyled">
            <li :class="['sidebar-item', {'active': index == 0}]" v-for="(item,index) in items" :key="index">
                <nuxt-link to="/">{{item}}</nuxt-link>
            </li>
        </ul>
    </aside>
</template>

<script>
export default {
    name: 'sidebar',
    data(){
        return {
            items: ['Home', 'Admin', 'Total Leads Generated', 'Total Calls', 'Total Web Enquiries', 'Pipelines', 'Total Converted Leads',
                    'Conversion Rate', 'Amount Converted', 'Leads with no follow-up', 'Total scheduled calls', 'Total calls held vs not held',
                    'lead time', 'incentives']
        }
    },
    computed: {
        logo(){
            return require('@/assets/img/logo-dark.svg')
        }
    }
}
</script>

<style lang="scss">
@media (max-width: 575px){
    .sidebar{
        margin-left: -240px
    }
}

@media (min-width: 576px){
    .sidebar{
        margin-left: -240px
    }
}

@media (min-width: 1200px){
    .sidebar{
        margin-left: 0
    }
}
</style>
