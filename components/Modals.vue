<template>
    <div>
        <b-modal id="accessModal" :centered="true" :hide-footer="true" :hide-header="true" dialog-class="mt-5">
            <table class="table rounded table-bordered border-0 mb-0">
                <tbody class="border-0">
                    <tr v-for="(item, index) in items" :key="index">
                        <td scope="row">{{item}}</td>
                        <td>
                            <b-form-checkbox></b-form-checkbox>
                        </td>
                    </tr>
                </tbody>
            </table>
        </b-modal>
    </div>
</template>

<script>
export default {
 name: 'modals',
 data(){
     return {
         items: ['home', 'admin', 'total leads generated', 'total calls', 'total web enquiries', 'pipeline', 'total converted leads',
                    'conversion rate', 'amount converted', 'leads with no follow-up', 'total scheduled calls', 'total calls held vs not held',
                    'lead time', 'incentives', 'user management']
     }
 }
}
</script>

<style lang="scss">
#accessModal{
    .modal-backdrop .btn{
       z-index: 1060;
    }
    .modal-dialog{
        max-width: 768px;
    }
    .modal-body{
        padding: 0;
    }
}
</style>
