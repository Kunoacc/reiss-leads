<template>
    <b-col cols="12" md="6" lg="3" class="d-flex flex-column pt-3 pt-lg-0 figure-card">
        <b-card :class="['card-body', 'shadow', {'bg-secondary border-0': isSecondary && !$store.state.isThemeDark || false}]">
            <b-row class="text-center mx-auto justify-content-center">
                <h4 class="text-primary font-weight-bold text-center col-12 figure-title">{{title}}</h4>
                <p class="text-center text-capitalize text-sm">
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

.dark-mode .figure-title{
    color: #3498DB !important;
}
</style>
