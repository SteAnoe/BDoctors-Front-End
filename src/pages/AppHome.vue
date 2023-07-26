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
            specializations: null,
        }
    },
    created() {
    },
    computed: {
    },
    mounted() {
        this.getApiSpecializations();
    },
    watch: {
    },
    methods: {
        getApiSpecializations() {
            axios.get(`${this.baseUrl}/api/specializations`)
            .then(res => {
                this.specializations = res.data.specializations
            })
        },

        selectSpecialization(slug) {
            this.selectedSpecializationSlug = slug;
        },
    }
}
</script>
<template>
    <div class="sfondo">
        <div class="jumbotron">
            <div class="container ">
                <div class="d-lg-flex jumbo-container">
                    <div class="testo-jumbo col-sm-12 col-md-6 col-lg-6">
                        <h1>BDoctors, soddisfatti e in salute</h1>
                        <p class="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel incidunt nihil et tempora quae, autem doloremque eaque necessitatibus molestiae. At odit expedita vitae sed ex quam ut ad ipsa minima.</p>
                        <a href="#ancor-spec" class="btn btn-primary text-uppercase">Inizia ricerca</a>
                    </div>
                    <div class="img-jumbo col-sm-12 col-md-6 col-lg-6">
                        <img class="" src="https://th.bing.com/th/id/R.18e073d15ff7a4b3356c575e945b938a?rik=J00q%2btrg070fTQ&pid=ImgRaw&r=0" alt="">
                    </div>
                </div>
            </div>
        </div>
        <main class="container">
            <div class="mb-3 ">
                <h2 id="ancor-spec" class="text-center p-5">Specializzazioni</h2>  
                <div class="md-3 content-card">
                    <div class=" col-lg-3 col-md-4 col-sm-6 col-12 " v-for="(elem, index) in specializations"
                        :key="index">
                            <router-link class="custom-link"
                                :to="{ name: 'AdvancedResearch',  query: { slug: elem.slug } }"
                                @click="selectSpecialization(specializations.slug)"
                            > 
                                <div class="div-img card specializazioni">
                                    <img :src="elem.img" alt="">
                                    <p>
                                        {{ elem.name }} 
                                    </p>
                                </div>
                            </router-link>  
                        </div>
                    </div>
                </div>  
        </main>
    </div>
</template>
<style lang="scss" scoped>
.sfondo{
    background-color: #e7f0ff;
    .jumbotron{
    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(3,150,166,1) 65%);
    color: white;
    

    .jumbo-container{
        align-items: center;
        justify-content: center;
  
        
        .testo-jumbo{
            width: 45%;
            padding: 100px 0;
            h1{
                font-size: 4rem;
            }
            p{
                font-size: 1.50rem;
            }
            .btn{
                font-size: 1.50rem;
                padding: 1rem 1.5rem;
                border-radius: 25px;
                border: 0;
                background-color: rgb(0, 144, 160);
            }

        }
        .img-jumbo{
            width: 45%;
            
            
            img{
                width: 100%;

            }

        }
    }
}
    h2{
        color: #E3B14E;
    }
    .content-card {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        text-align: center; 

        .custom-link{
            text-decoration: none;
        
        }
    }
    
    .specializazioni {
        aspect-ratio: 1;
        margin: 40px;
        box-shadow: 1px 3px 5px 3px lightgrey;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 70%;
        }

        p{
            color: #007e8c;
        }
    
        &:hover {
            box-shadow: 1px 3px 5px 3px #E3B14E;
            p{
                color: #E3B14E;
            }
        }
    }
}
</style>