<template>
    <nav class="navbar navbar-expand-md navbar-light col-12 d-flex flex-row justify-content-between py-3 bg-secondary fixed-top shadow-sm">
        <div>
            <button class="btn bg-transparent d-lg-none" @click="openDrawer">
                <span class="navbar-toggler-icon"></span>
            </button>
            <p class="mb-0 navbar-brand border-right border-white ml-n3 d-none d-lg-inline-block text-center py-0" style="width: 280px">
                <img :src="$store.state.isThemeDark ? logoLight : logoDark" alt="" srcset="" height="50">
            </p>
            <a class="navbar-brand" href="index.html">
                <img src="@/assets/img/face.jpg" alt="" class="shadow rounded-circle" height="40" width="40">
                <span class="text-xs">Amar Ali</span>
            </a>
        </div>

        <div class="position-relative col-4 px-0">
            <input type="text" class="form-control pr-5 shadow-sm" name="" id="" aria-describedby="helpId" placeholder="Search">
            <span><fa class="position-absolute text-secondary" style="top: 6; right: 10;" icon="search"></fa></span>
        </div>
        <div>
            <button class="btn bg-transparent" @click="toggleTheme">
                <transition name="fade">
                    <fa icon="sun" v-if="$store.state.isThemeDark"></fa>
                    <fa icon="moon" v-else></fa>
                </transition>
            </button>
            <span class="px-2">
                <fa icon="bell"></fa>
            </span>
            <span class="px-2">
                <fa icon="comments"></fa>
            </span>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    methods: {
        openDrawer(){
            document.querySelector('body').classList.toggle('sidebar-shown')
        },
        toggleTheme(){
            document.querySelector('body').classList.toggle('dark-mode')
            this.$store.dispatch('toggleTheme')
        }
    },
    mounted(){
        window.onresize = val => {
            if (val.target.innerWidth > 1199 && document.querySelector('body').classList.contains('sidebar-shown')){
                document.querySelector('body').classList.toggle('sidebar-shown')
            }
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

<style>
.dark-mode .svg-inline--fa{
    color: #7882A2;
}
.dark-mode .text-sm{
    color: #7882A2;
}
.dark-mode .text-xs{
    color: #7882A2;
}

.navbar .btn:focus{
    outline: none;
    box-shadow: none;
    border: none;
}
</style>
