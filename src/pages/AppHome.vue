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
            selectedStar: null,
            minVoteFilter: 0,
            currentPage: 1,
            lastPage: null,
            sortingOption: 'null',
        }
    },
    created() {

    },
    computed: {

        filteredDoctors() {
            if (this.minVoteFilter === 0) {
              return this.doctors; 
            }
            const filteredDoctors = this.filterDoctorsByVote(this.minVoteFilter);
            if (this.sortingOption === 'reviews') {
              filteredDoctors.sort((a, b) => b.reviews.length - a.reviews.length);
            } else if (this.sortingOption === 'average_vote') {
              filteredDoctors.sort((a, b) => this.calculateAverageVote(b) - this.calculateAverageVote(a));
            }
        
            return filteredDoctors;
        },
       
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
    },
    methods: {

        getApiDoctor(doctorApiPage) {

            if (this.selectedSpecializations.length > 0) {
                const params = {
                    page: doctorApiPage,
                    specializations_ids: this.selectedSpecializations.join(',')
                };

                axios.get(`${this.baseUrl}/api/doctors`, { params })
                    .then((res) => {
                        this.doctors = res.data.doctors
                        this.currentPage = res.data.doctors.current_page
                        this.lastPage = res.data.doctors.last_page
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

        calculateAverageVote(doctor) {
            if (doctor.reviews.length === 0) {
                return 0;
            }
            const totalStars = doctor.reviews.reduce((acc, review) => acc + parseInt(review.stars), 0);
            const averageVote = totalStars / doctor.reviews.length;
            return averageVote;
        },

        filterDoctorsByVote(minVote) {
            return this.doctors.filter((doctor) => {
                const averageVote = this.calculateAverageVote(doctor);
                return averageVote >= minVote;
            });
        },
    }
}
</script>
<template>
    <main class="container">

        <h1>Risultati ottenuti: <span>{{ filteredDoctors.length }}</span></h1>
        <div class="mb-3">
            <h2>Technologies Filter</h2>
            <label for="" v-for="(elem, index) in specializations" :key="index">
                <input type="checkbox" :value="elem.id" v-model="selectedSpecializations">
                {{ elem.name }}
            </label>
        </div>
        <div class="mb-3">
            <h2>Filter By Average Vote</h2>
            <select v-model="minVoteFilter">
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
            <select v-model="sortingOption">
                <option value="reviews">Sort by Reviews</option>
                <option value="average_vote">Sort by Average Vote</option>
            </select>
        </div>
        <div>
            
            <div v-for="(doctor, index) in filteredDoctors" :key="index">
                <h2>{{ doctor.name }}</h2>
                <router-link class="router-link" :to="{name: 'SingleDoctor', params: {slug: doctor.slug}}">
                    <h5 class="card-title">doctor singolo</h5>
                </router-link>
                <p>Average Vote: {{ calculateAverageVote(doctor) }}</p>
                <p>Number of Reviews: {{ doctor.reviews.length }}</p>
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