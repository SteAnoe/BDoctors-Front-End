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
        hasActiveSponsorship(doctor) {
            if (!doctor.sponsorships || doctor.sponsorships.length === 0) {
                return false; // Doctor has no sponsorships
            }

            const now = new Date();
            for (const sponsorship of doctor.sponsorships) {
                const expireDate = new Date(sponsorship.pivot.expire);
                if (expireDate > now) {
                    return true; // Doctor has an active sponsorship
                }
            }

            return false; // Doctor has sponsorships, but they are all expired
        },
        formatAvgStars(avgStars){
          return Math.round(avgStars);
        },
        generateStars(avgStars, color) {
      const fullStars = Math.floor(avgStars); // Number of full stars
      const halfStar = avgStars - fullStars >= 0.5; // Whether to show a half star
      const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Number of empty stars

      let starsHTML = '';
      for (let i = 0; i < fullStars; i++) {
        starsHTML += `<span class="star filled fs-5" style="color: #EDB05A">&#9733;</span>`;
      }

      if (halfStar) {
        starsHTML += `<span class="star half-filled fs-5" style="color: #EDB05A">&#9733;</span>`;
      }

      for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<span class="star fs-5">&#9734;</span>';
      }

      return starsHTML;
    },

    getFullImageUrl(photo) {
      if (photo) {
        return `${this.baseUrl}/storage/${photo}`;
      } else {
        // Return a default image URL if 'photo' is not available
        return 'https://t4.ftcdn.net/jpg/01/22/08/35/360_F_122083515_l2NbdWla7e38dCtAq8aXHgNLLE7AwrzX.jpg';
      }
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

                <div class="filtri d-flex flex-column flex-md-row justify-content-around">
                    <div class="mt-4">
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
                    <div class="mt-4">
                        <h3>Ordina</h3>
                        <select v-model="sortBy" @change="applyFilter">
                            <option :value="null">Ordina per</option>
                            <option value="reviews">Numero di Recensioni</option>
                            <option value="average_vote">Voto medio</option>
                        </select>
                    </div>

                </div>
            </div>

            <div class="contenitore d-flex flex-wrap">
                <div class="card col-lg-5 position relative " 
                v-for="(doctor, index) in doctors" :key="index">

                    <div v-if="hasActiveSponsorship(doctor)">
                        <router-link class="router-link" :to="{ name: 'SingleDoctor', params: { slug: doctor.slug } }">
                        <div class="sponsorizzato d-lg-flex align-items-center justify-content-center">
    
                            <div class="img-dott col-6 col-lg-2 m-auto">
                                <img :src="getFullImageUrl(doctor.photo)" class="rounded-circle">
                            </div>
                            <h2 class="text-center">{{ doctor.name }} <br> {{ doctor.lastname }}</h2>
                                    
                            <div class="info-dott col-lg-6 align-items-center align-items-lg-start">
                                <span><strong>N° Recensioni:</strong> {{ doctor.reviews_count }}</span>
                                <!-- <p>Avg-stars: {{ formatAvgStars(doctor.avg_stars) }}</p> -->
                                <div v-html="generateStars(doctor.avg_stars)" class="mb-2"></div>
                                <p class="my-0"><strong>Specializzato in</strong></p>
                                <ul class="my-0">
                                    <li v-for="(specialization, index) in doctor.specializations" :key="index">
                                        {{specialization.name }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="corona">
                            <i class="fa-solid fa-crown fa-beat fa-xl" style="color: #fccd25;"></i>
                        </div>
                    </router-link>
                    </div>

                    <div v-else>
                        <router-link class="router-link" :to="{ name: 'SingleDoctor', params: { slug: doctor.slug } }">
                            <div class="d-lg-flex align-items-center justify-content-center">
                                <div class="img-dott col-6 col-lg-2 m-auto">
                                    <img :src="getFullImageUrl(doctor.photo)" class="rounded-circle">
                                </div>
                                <h2 class="text-center">{{ doctor.name }} <br> {{ doctor.lastname }}</h2>
                                
                                <div class="info-dott col-lg-6 align-items-center align-items-lg-start">
                                    <span><strong>N° Recensioni:</strong> {{ doctor.reviews_count }}</span>
                                    <!-- <p>Avg-stars: {{ formatAvgStars(doctor.avg_stars) }}</p> -->
                                    <div v-html="generateStars(doctor.avg_stars)" class="mb-2"></div>
                                    <p class="my-0"><strong>Specializzato in</strong></p>
                                    <ul class="my-0">
                                        <li v-for="(specialization, index) in doctor.specializations" :key="index">
                                            {{specialization.name }}</li>
                                    </ul>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div> 
            </div>

        </div>

    </main>
</template>
<style lang="scss" scoped>

.img-dott {
    position: relative;
    overflow: hidden;
    border-radius: 50%;
  }

  .img-dott::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  .img-dott img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%;
    object-fit: cover; 
    transition: transform 0.2s ease-in-out;
  }

  .img-dott:hover img {
    transform: scale(1.1);
  }
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
        transition: transform 0.2s ease-in-out;

        &:hover{
            transform: scale(1.05);
        }

        .sponsorizzato{
            box-shadow: 0 0 5px #fccd25;
            border-radius: 5px;
        }


        .img-dott {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            img {
                display: block;
                width: 100%;
            }
            h2 {
                font-size: 20px;
            }
        }

        .info-dott {
            display: flex;
            flex-direction: column;
        }

        .router-link {

            text-decoration: none;
            color: black;

            &:hover{

            }
        }

        .corona{
            position: absolute;
            right: 10px;
            top: 8px;
        }


    }
}
.star {
    color: black;
}

.filled,
.half-filled {
    color: yellow;
}
</style>