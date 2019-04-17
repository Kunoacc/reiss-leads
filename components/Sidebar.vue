<template>
    <aside class="sidebar bg-secondary">
        <div class="sidebar-header navbar">
            <p class="mb-0 navbar-brand py-3">
                <img :src="logo" alt="" srcset="" width="100%">
            </p>
        </div>
        <ul class="list-unstyled">
            <li :class="['sidebar-item', {'active': $route.path == transformToUrl(item)}]" v-for="(item,index) in items" :key="index">
                <nuxt-link :to="transformToUrl(item)" class="text-capitalize">{{item}}</nuxt-link>
            </li>
        </ul>
    </aside>
</template>

<script>
export default {
    name: 'sidebar',
    data(){
        return {
            items: ['home', 'admin', 'total leads generated', 'total calls', 'total web enquiries', 'pipeline', 'total converted leads',
                    'conversion rate', 'amount converted', 'leads with no follow-up', 'total scheduled calls', 'total calls held vs not held',
                    'lead time', 'incentives']
        }
    },
    methods: {
        transformToUrl(string){
            const prefix = '/dashboard'
            return `${prefix}/${string.replace(/ /gi, '-')}`

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
