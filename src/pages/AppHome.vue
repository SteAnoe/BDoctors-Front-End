<script>
import axios from 'axios';
export default {
    name: 'app',
    components: {

    },
    data() {
        return {

            baseUrl: 'http://127.0.0.1:8000',
            doctors: [],
            specializations: null,
            selectedSpecializations: [],
            minVoteFilter: 0,
            currentPage: 1,
            lastPage: null,
            sortingOption: 'null',
            sortBy: null,
        }
    },
    created() {

    },
    computed: {
  
       
    },
    mounted() {
        this.getApiDoctor();
        this.getApiSpecializations();
    },
    watch: {
        selectedSpecializations: {
            handler: 'getApiDoctor',
            deep: true
        },
        sortingOption: {
            handler: 'applyFilter',
            immediate: true,
        },
    },
    methods: {

        getApiDoctor(doctorApiPage, minVoteFilter = this.minVoteFilter, sortBy = this.sortBy) {
            if (this.selectedSpecializations.length > 0) {
                const params = {
                    page: doctorApiPage,
                    specializations_ids: this.selectedSpecializations.join(','),
                    minVoteFilter: minVoteFilter,
                    sortBy: sortBy,
                };
            
                axios.get(`${this.baseUrl}/api/doctors`, { params })
                    .then((res) => {
                        this.doctors = res.data.doctors.data;
                        this.currentPage = res.data.doctors.current_page;
                        this.lastPage = res.data.doctors.last_page;
                    })
                    .catch((error) => {
                        console.error('Error fetching doctors:', error);
                    });
            } else {
                this.doctors = [];
            }
        },

        getApiSpecializations() {
            axios.get(`${this.baseUrl}/api/specializations`)
                .then(res => {
                    this.specializations = res.data.specializations
                })
        },

        applyFilter() {
            
          
          this.getApiDoctor();
        },


    }
}
</script>
<template>
    <main class="container">

        <div class="mb-3">
            <h2>Specializations Filter</h2>
            <label for="" v-for="(elem, index) in specializations" :key="index">
                <input type="checkbox" :value="elem.id" v-model="selectedSpecializations">
                {{ elem.name }}
            </label>
        </div>
        <div class="mb-3">
            <h2>Filter By Average Vote</h2>
            <select v-model="minVoteFilter" @change="applyFilter">
                <option :value="0">Show All</option>
                <option :value="1">1 Star & Up</option>
                <option :value="2">2 Stars & Up</option>
                <option :value="3">3 Stars & Up</option>
                <option :value="4">4 Stars & Up</option>
                <option :value="5">5 Stars</option>
            </select>
        </div>
        <div class="mb-3">
            <h2>Sort Doctors</h2>
            <select v-model="sortBy" @change="applyFilter">
              <option :value="null">Sort by</option>
              <option value="reviews">Sort by Reviews</option>
              <option value="average_vote">Sort by Average Vote</option>
            </select>
        </div>
        <div>
            
            <div v-for="(doctor, index) in doctors" :key="index">
                <h2>{{ doctor.name }}</h2>
                <router-link class="router-link" :to="{name: 'SingleDoctor', params: {slug: doctor.slug}}">
                    <h5 class="card-title">doctor singolo</h5>
                </router-link>
                <p>Number of Reviews: {{ doctor.reviews_count }}</p>
                <p>Avg-stars: {{ doctor.avg_stars }}</p>
                <ul>
                    <span class="text-bold">Specializations:</span>
                    <li v-for="(specialization, index) in doctor.specializations" :key="index">{{ specialization.name }}</li>
                </ul>
            </div>
        </div>
        <ul class="pagination">
            <li class="page-item">
                <a class="page-link" @click.prevent="getApiDoctor(currentPage - 1)" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item" v-for="(elem, index) in lastPage" :key="index"
                :class="(currentPage === elem) ? 'active' : ''">
                <a class="page-link" href="#" @click.prevent="getApiDoctor(elem)">{{ elem }}</a>
            </li>
            <li class="page-item">
                <a class="page-link" @click.prevent="getApiDoctor(currentPage + 1)" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </main>
</template>
<style lang="scss" scoped></style>