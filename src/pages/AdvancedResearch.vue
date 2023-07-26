<script>
import axios from 'axios';
import {store} from '../store';
export default {
    name: 'AdvancedResearch',
    components: {

    },
    data() {
        return {
            store,
            baseUrl: 'http://127.0.0.1:8000',
            doctors: [],
            specializations: null,
            
            minVoteFilter: 0,
            currentPage: 1,
            lastPage: null,
            sortingOption: 'null',
            sortBy: null,
            
        }
    },
    created() {
        this.fetchDoctors();
    },
    computed: {
    },
    mounted() {
        this.fetchDoctors(); 
    },
    watch: {  
        sortingOption: {
            handler: 'applyFilter',
            immediate: true,
        },
    },
    methods: {
        fetchDoctors(doctorApiPage) {
            const specializationSlug = this.$route.query.slug;
            const minVoteFilter = this.minVoteFilter;
            const sortBy = this.sortBy;

            const params = {};

            if (specializationSlug) {
                params.slug = specializationSlug;
            }
        
            if (minVoteFilter) {
                params.minVoteFilter = minVoteFilter;
            }
        
            if (sortBy) {
                params.sortBy = sortBy;
            }
            if (doctorApiPage) {
              params.page = doctorApiPage;
            }
            if (specializationSlug) {
                axios.get(`${this.baseUrl}/api/specializations/${specializationSlug}`, { params })
                .then((res) => {
                    console.log(res.data)
                    this.doctors = res.data.doctors.data;
                    this.currentPage = res.data.doctors.current_page;
                    this.lastPage = res.data.doctors.last_page;
                })
                .catch((error) => {
                    console.error('Error fetching doctors:', error);
                });
            } else {
                axios.get(`${this.baseUrl}/api/doctors`)
                .then((res) => {
                    console.log(res)
                    this.doctors = res.data.doctors.data;
                    this.currentPage = res.data.doctors.current_page;
                    this.lastPage = res.data.doctors.last_page;
                })
                .catch((error) => {
                    console.error('Error fetching doctors:', error);
                });
            }
        },

        applyFilter() {
            this.fetchDoctors();  
        },
    }
}
</script>
<template>
    <main class="container">

        
        <div class="mb-3">
            <h2>Filter By Average Vote</h2>
            <select v-model="minVoteFilter" @change="applyFilter">
                <option :value="0">Show All</option>
                <option :value="1"><span >&#9733;</span></option>
                <option :value="2">&#9733;&#9733;</option>
                <option :value="3">&#9733;&#9733;&#9733;</option>
                <option :value="4">&#9733;&#9733;&#9733;&#9733;</option>
                <option :value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
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
        <div></div>
            
            <div class="card" v-for="(doctor, index) in doctors" :key="index">
                <h2>{{ doctor.name }}</h2>
                <router-link class="router-link" :to="{name: 'SingleDoctor', params: {slug: doctor.slug}}">
                    <h5 class="card-title">doctor singolo</h5>
                </router-link>
                <p>Number of Reviews: {{ doctor.reviews_count }}</p>
                <p>id: {{ doctor.id }}</p>
                <p>Avg-stars: {{ doctor.avg_stars }}</p>
                <ul>
                    <span class="text-bold">Specializations:</span>
                    <li v-for="(specialization, index) in doctor.specializations" :key="index">{{ specialization.name }}</li>
                </ul>
            </div>
        </div>
        <ul class="pagination">
            <li class="page-item">
                <a class="page-link" @click.prevent="fetchDoctors(currentPage - 1)" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item" v-for="(elem, index) in lastPage" :key="index"
                :class="(currentPage === elem) ? 'active' : ''">
                <a class="page-link" href="#" @click.prevent="fetchDoctors(elem)">{{ elem }}</a>
            </li>
            <li class="page-item">
                <a class="page-link" @click.prevent="fetchDoctors(currentPage + 1)" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </main>
</template>
<style lang="scss" scoped></style>