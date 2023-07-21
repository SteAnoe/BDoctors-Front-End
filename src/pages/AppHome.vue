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
            //filteredDoctor: [],
            minVoteFilter: 0,
        }
    },
    created() {

    },
    computed: {
        filteredDoctors() {
            if (this.minVoteFilter === 0) {
                return this.doctors; // Show all doctors if minimum vote is 0
            }

            return this.filterDoctorsByVote(this.minVoteFilter);
        }
    },
    mounted() {
        this.getApiDoctor();
        this.getApiSpecializations();
        // this.getFilterStar();
    },
    watch: {
        selectedSpecializations: {
            handler: 'getApiDoctor',
            deep: true
        }
    },
    methods: {

        getApiDoctor(doctorApiPage) {
            // Check if there are selected specializations
            if (this.selectedSpecializations.length > 0) {
                const params = {
                    page: doctorApiPage,
                    specializations_ids: this.selectedSpecializations.join(',')
                };

                axios.get(`${this.baseUrl}/api/doctors`, { params })
                    .then((res) => {
                        this.doctors = res.data.doctors;
                    })
                    .catch((error) => {
                        console.error('Error fetching doctors:', error);
                    });
            } else {
                // If no specializations are selected, you may want to handle this case accordingly
                // For example, you can clear the doctors array or display a message to the user.
                this.doctors = [];
            }
        },
        // getApiDoctor(doctorApiPage) {
        //     const params = {
        //         page: doctorApiPage,

        //     }
        //     if (this.selectedSpecializations.length > 0) {
        //         params.specializations_ids = this.selectedSpecializations.join(',');
        //     }


        //     axios.get(`${this.baseUrl}/api/doctors`, { params })
        //         .then((res) => {
        //             this.doctors = res.data.doctors

        //         })
        // },
        getApiSpecializations() {
            axios.get(`${this.baseUrl}/api/specializations`)
                .then(res => {
                    this.specializations = res.data.specializations
                })
        },

        calculateAverageVote(doctor) {
            if (doctor.reviews.length === 0) {
                return 0; // No reviews, average vote is 0
            }

            // Calculate the sum of all stars in the reviews
            const totalStars = doctor.reviews.reduce((acc, review) => acc + parseInt(review.stars), 0);
            // Calculate the average by dividing the total stars by the number of reviews
            const averageVote = totalStars / doctor.reviews.length;

            return averageVote;
        },

        // Add a method to filter doctors based on the selected minimum average vote
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
    <h1>Ciao mondo</h1>
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
    <div>
        <div v-for="(doctor, index) in filteredDoctors" :key="index">
            <h2>{{ doctor.name }}</h2>
            <p>Average Vote: {{ calculateAverageVote(doctor) }}</p>
            <ul>
                <span class="text-bold">Specializations:</span>
                <li v-for="(specialization, index) in doctor.specializations" :key="index">{{ specialization.name }}</li>
            </ul>
        </div>
    </div>
    <!-- <div>
        <div v-for="(doctor, index) in doctors" :key="index">
            <h2>{{ doctor.name }}</h2>

            <ul>
                <span class="text-bold">Specializations:</span>
                <li v-for="(specialization, index) in doctor.specializations" :key="index">{{ specialization.name }}</li>
            </ul>
        </div>
    </div> -->
</template>
<style lang="scss" scoped></style>