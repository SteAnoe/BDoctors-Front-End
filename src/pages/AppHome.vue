<script>
import axios from 'axios';
import {store} from '../store';
export default {
    name: 'app',
    components: {

    },
    data() {
        return {
            store,
            baseUrl: 'http://127.0.0.1:8000',
            // doctors: [],
            specializations: null,
            // selectedSpecializations: [],
            // minVoteFilter: 0,
            // currentPage: 1,
            // lastPage: null,
            // sortingOption: 'null',
            // sortBy: null,
        }
    },
    created() {

    },
    computed: {
  
       
    },
    mounted() {
        // this.getApiDoctor();
        this.getApiSpecializations();
    },
    watch: {
        // selectedSpecializations: {
        //     handler: 'getApiDoctor',
        //     deep: true
        // },
        // sortingOption: {
        //     handler: 'applyFilter',
        //     immediate: true,
        // },
    },
    methods: {

        // getApiDoctor(doctorApiPage, minVoteFilter = this.minVoteFilter, sortBy = this.sortBy) {
        //     if (this.selectedSpecializations.length > 0) {
        //         const params = {
        //             page: doctorApiPage,
        //             specializations_ids: this.selectedSpecializations.join(','),
        //             minVoteFilter: minVoteFilter,
        //             sortBy: sortBy,
        //         };
            
        //         axios.get(`${this.baseUrl}/api/doctors`, { params })
        //             .then((res) => {
        //                 this.doctors = res.data.doctors.data;
        //                 this.currentPage = res.data.doctors.current_page;
        //                 this.lastPage = res.data.doctors.last_page;
        //             })
        //             .catch((error) => {
        //                 console.error('Error fetching doctors:', error);
        //             });
        //     } else {
        //         this.doctors = [];
        //     }
        // },

        getApiSpecializations() {
            axios.get(`${this.baseUrl}/api/specializations`)
                .then(res => {
                    this.specializations = res.data.specializations
                })
        },

        // applyFilter() {
        //     this.getApiDoctor();
            
        // },

        selectSpecialization(slug) {
            this.selectedSpecializationSlug = slug;
        },

    }
}
</script>
<template>
    <main class="container">

        <div class="mb-3">
            <h2>Specializations Filter</h2>
                <router-link  
                v-for="(elem, index) in specializations" :key="index"
                :to="{ name: 'AdvancedResearch',  query: { slug: elem.slug } }"
                @click="selectSpecialization(specializations.slug)"> 
                {{ elem.name }} 
                </router-link>    
        </div>  
    </main>
</template>
<style lang="scss" scoped></style>