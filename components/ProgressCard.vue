<template>
    <b-col cols="12" lg="3" class="d-flex flex-column mt-3 mt-lg-0 progress-card">
        <b-card :class="cardClass" class="border-0">
            <b-card-body>
                <b-row>
                    <b-col cols="12" md="4" class="position-relative">
                        <progress-bar color="#3498db" width=60 :font-size="fontSize" :pv="pv" bold=8 text-bg-color='#f0f0f0'></progress-bar>
                    </b-col>
                    <b-col cols="12" md="8" class="d-flex justify-content-center flex-column">
                        <h4 class="text-primary font-weight-bold">{{title}}</h4>
                        <p class="text-sm">
                            <slot></slot>
                        </p>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>
    </b-col>
</template>

<script>
import Progress from "./Progress";

export default {
    name: 'pie-card',
    components: {
        'ProgressBar': Progress
    },
    props: ['width', 'options', 'title', 'cardClass', 'progress'],
    data(){
        return {
            fontSize: 14
        }
    },
    computed: {
        pv(){
            return this.progress
        }
    }
}
</script>

<style>
.dark-mode .progress-card .card-body{
    background: #1E3558;
    border: none;
}
</style>
