<template>
    <b-col cols="12" md="6" lg="3" class="d-flex flex-column pt-3 pt-lg-0 figure-card">
        <b-card :class="['p-0 h-100 shadow-sm', {'bg-secondary border-0': isSecondary && !$store.state.isThemeDark || false}]" body-class=" d-flex flex-column justify-content-center py-3">
            <b-row class="text-center mx-auto justify-content-center py-1">
                <h5 class="text-primary font-weight-medium text-center col-12 figure-title">{{title}}</h5>
                <p class="text-center text-capitalize text-xs mb-0">
                    <slot></slot>
                </p>
            </b-row>
        </b-card>
    </b-col>
</template>

<script>
export default {
 name: 'figure-card',
 props: ['title', 'isSecondary']
}
</script>

<style>
.dark-mode .figure-card .card-body{
    background: #1E3558
}
.dark-mode .figure-card .card{
    background: #1E3558
}
.figure-title{
    color: #3498DB !important;
}
.dark-mode .figure-title{
    color: #3498DB !important;
}
</style>
