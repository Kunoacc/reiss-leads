<template>
    <b-col cols="12" md="6" lg="3" class="d-flex flex-column pt-3 pt-lg-0">
        <b-card class="card-body shadow">
            <b-row class="text-center mx-auto justify-content-center">
                <h4 class="text-primary font-weight-bold text-center col-12">{{title}}</h4>
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
 props: ['title']
}
</script>

<style>

</style>
