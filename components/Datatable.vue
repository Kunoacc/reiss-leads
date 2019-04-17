<template>
    <div>
        <filter-bar v-if="isSearchable"></filter-bar>
        <div v-if="!isSearchable && title" class="col-12 ml-auto px-4 py-4 d-flex flex-row justify-content-between align-items-center">
            <div>
                <span class="badge badge-primary py-1 px-3 rounded-xl">{{title}}</span>
            </div>
            <button class="btn btn-primary rounded-xl">
                export csv
            </button>
        </div>
        <vuetable ref="vuetable"
        :api-url="apiUrl"
        :fields="fields"
        :per-page="PerPage"
        :first-page="1"
        pagination-path=""
	    @vuetable:pagination-data="onPaginationData"
        :css="css.table"
        :append-params="moreParams"
		>
            <div slot="actions" slot-scope="props">
				<button
					class="btn btn-primary"
					@click="onActionClicked('view-item', props.rowData)"
				>
					<fa icon="search-plus" class="text-sm"></fa>
				</button>
				<button
					class="btn btn-warning"
					@click="onActionClicked('edit-item', props.rowData)"
				>
					<fa icon="edit" class="text-sm"></fa>
				</button>
				<button
					class="btn-danger btn"
					@click="onActionClicked('delete-item', props.rowData)"
				>
					<fa icon="trash" class="text-sm"></fa>
				</button>
			</div>
        </vuetable>
        <div style="padding-top:10px">
        <vuetable-pagination ref="pagination"
            @vuetable-pagination:change-page="onChangePage"
            :css="css.pagination"
            class="py-3 bg-white"
        ></vuetable-pagination>
        </div>
    </div>
</template>

<script>
import Vuetable from "vuetable-2"
import VuetablePagination from "vuetable-2/src/components/VuetablePagination"
import _ from "lodash"
// import axios from "axios"

import { css } from "./Datatable/CssClass.js"
import FilterBar from "./Datatable/FilterBar";

export default {
    name: 'data-table',
    props: {
        fields: Array,
        PerPage: Number,
        data: Object,
        apiUrl: String,
        isSearchable: {
            type: Boolean,
            default: true
        },
        title: String
    },
    data() {
        return {
            moreParams: {}
        }
    },
    components: {
        Vuetable, VuetablePagination, FilterBar
    },
    methods: {
        onPaginationData(paginationData) {
            this.$refs.pagination.setPaginationData(paginationData);
        },
        onChangePage(page) {
            this.$refs.vuetable.changePage(page);
        },
        onActionClicked(action, data) {
            console.log("slot actions: on-click", data.name);
        },
        onFilterSet (filterText) {
            this.moreParams = {
                'filter': filterText
            }
            this.$nextTick( () => this.$refs.vuetable.refresh())
        },
        onFilterReset () {
            this.moreParams = {}
            this.$nextTick( () => this.$refs.vuetable.refresh())
        }
    },
    computed: {
        css(){
            return css
        }
    },
    watch: {
        data(newVal, oldVal){
            if (newVal.length > 0) {
                console.log(newVal)
                this.$nextTick(() => this.$refs.vuetable.refresh())
            }
        }
    },
    mounted(){
        this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
        this.$events.$on('filter-reset', e => this.onFilterReset())
    }
}
</script>

<style>
.table-striped tbody tr:nth-of-type(odd) {
    background-color: white;
}
</style>
