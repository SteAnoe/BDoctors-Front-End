<script>
import axios from 'axios';
import { store } from '../store';
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
        fetchDoctors(pageNumber) {
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

        if (specializationSlug) {
          axios.get(`${this.baseUrl}/api/specializations/${specializationSlug}`, { params })
            .then((res) => {
              console.log(res.data.doctors);
              this.doctors = res.data.doctors;

            })
            .catch((error) => {
              console.error('Error fetching doctors:', error);
            });
        } else {
          axios.get(`${this.baseUrl}/api/doctors`)
            .then((res) => {
              console.log(res);
              this.doctors = res.data.doctors;

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
    <main class="sfondo">
        <div class="container w-75">
            <div class="text-center">

                <div>
                    <h1 class="pt-4">Cerca il medico che fa per te</h1>
                </div>

                <div class="filtri d-flex justify-content-around">
                    <div class="">
                        <h3>Filtra per voto</h3>
                        <select v-model="minVoteFilter" @change="applyFilter">
                            <option :value="0">Tutti</option>
                            <option :value="1"><span>&#9733;</span></option>
                            <option :value="2">&#9733;&#9733;</option>
                            <option :value="3">&#9733;&#9733;&#9733;</option>
                            <option :value="4">&#9733;&#9733;&#9733;&#9733;</option>
                            <option :value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                        </select>
                    </div>
                    <div class="">
                        <h3>Ordina</h3>
                        <select v-model="sortBy" @change="applyFilter">
                            <option :value="null">Ordina per</option>
                            <option value="reviews">Numero di Recensioni</option>
                            <option value="average_vote">Voto medio</option>
                        </select>
                    </div>

                </div>
            </div>

            <div>
                <div class="card w-75" v-for="(doctor, index) in doctors" :key="index">
                    <div class="d-lg-flex align-items-center justify-content-center">

                        <div class="img-dott col-lg-6">
                            <img
                            :src="`photo/${this.doctors.photo}` != `photo/undefined` ? `photo/${this.doctors.photo}` : `https://t4.ftcdn.net/jpg/01/22/08/35/360_F_122083515_l2NbdWla7e38dCtAq8aXHgNLLE7AwrzX.jpg`" 
                                alt="" class="rounded-circle">
                        </div>

                        <div class="info-dott col-lg-6">
                            <h2 class="text-center">{{ doctor.name }} {{ doctor.lastname }}</h2>
                            <router-link class="router-link" :to="{ name: 'SingleDoctor', params: { slug: doctor.slug } }">
                                <h5 class="card-title">Visita profilo</h5>
                            </router-link>
                            <p><strong>N° Recensioni:</strong> {{ doctor.reviews_count }}</p>
                            <p>Avg-stars: {{ doctor.avg_stars }}</p>
                            <span><strong>Specializzato in</strong></span>
                            <ul>
                                <li v-for="(specialization, index) in doctor.specializations" :key="index">{{
                                    specialization.name }}</li>
                            </ul>
                            <div v-if="doctor.active_sponsorship">
                                <p><strong>Sponsored</strong></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            

        </div>


    </main>
</template>
<style lang="scss" scoped>
.sfondo {
    background-color: #e7f0ff;
    margin-top: 56px;

    h1,
    h3 {
        color: #007e8c;
        text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    }

    .filtri {
        margin-top: 40px;
        margin-bottom: 30px;

    }

    .card {
        border: 0;
        margin: auto;
        margin-bottom: 20px;


        .img-dott {
            // width: 40%;

            img {
                display: block;
                width: 100%;
            }
        }

        .info-dott {
            // width: 60%;
            // margin-left: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;

            h2 {
                color: #007e8c;
                font-size: 45px;
            }

        }

        .router-link {

            color: #ffb41d;

            &:hover {
                color: #e89a00;
            }
        }


    }
}
</style>