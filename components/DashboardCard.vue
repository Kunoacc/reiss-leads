<template>
    <b-col cols="12" class="mb-5">
        <b-card class="card-body bg-secondary rounded-lg border-0">
            <h5 class="text-capitalize dashboard-card-title">{{title}}</h5>
            <b-col cols="12" class="py-4 px-0">
                <b-row>
                    <slot></slot>
                </b-row>
            </b-col>
        </b-card>
    </b-col>
</template>

<script>
export default {
    name: 'dashboard-card',
    props: ['title']
}
</script>

<style>
.dark-mode .dashboard-card-title{
    color: white;
}
</style>
