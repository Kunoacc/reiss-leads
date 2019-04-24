<template>
    <aside class="sidebar bg-secondary">
        <div class="sidebar-header navbar">
        </div>
        <ul class="list-unstyled pt-3">
            <li :class="['sidebar-item pl-5', {'active': $route.path == transformToUrl(item)}]" v-for="(item,index) in items" :key="index">
                <nuxt-link :to="transformToUrl(item)" class="text-capitalize d-flex flex-fill py-1">{{item}}</nuxt-link>
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
                    'lead time', 'incentives', 'user management']
        }
    },
    methods: {
        transformToUrl(string){
            const prefix = '/dashboard'
            return `${prefix}/${string.replace(/ /gi, '-')}`

        }
    },
    computed: {
        logoDark(){
            return require('@/assets/img/logo-dark.svg')
        },
        logoLight(){
            return require('@/assets/img/logo-light.svg')
        }
    }
}
</script>

<style lang="scss">
.dark-mode .sidebar-item a{
    color: #7882A2 !important;
}

.dark-mode .sidebar-item.active > a{
    color: white !important;
}
@media (max-width: 575px){
    .sidebar{
        margin-left: -350px
    }
}

@media (min-width: 576px){
    .sidebar{
        margin-left: -350px
    }
}

@media (min-width: 1200px){
    .sidebar{
        margin-left: 0
    }
}
</style>
