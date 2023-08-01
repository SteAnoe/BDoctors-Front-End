<script>
import axios from 'axios';
import { store } from '../store';
import AppFooter from '../components/AppFooter.vue';
export default {
    name: 'app',
    components: {
        AppFooter,
    },
    data() {
        return {
            store,
            baseUrl: 'http://127.0.0.1:8000',
            specializations: null,
            doctors: [],
        }
    },
    created() {
        this.fetchDoctorsWithSponsorship();
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
        fetchDoctorsWithSponsorship() {
            axios.get(`${this.baseUrl}/api/doctors-with-sponsorship`)
                .then((response) => {
                    this.doctors = response.data.doctors;
                    console.log(this.doctors)
                })
                .catch((error) => {
                    console.error('Error fetching doctors with sponsorship:', error);
                });
        }
    }
}
</script>
<template>
    <div class="wrapper">
        <section class="jumbotron">
            <div class="container h-100 d-flex jumbo-container align-items-center justify-content-center">
                <div class="testo-jumbo text-center">
                    <h1 class="">BDoctors</h1>
                    <p class="fs-5"><b>Portale per la ricerca di medici specializzati</b></p>
                    <a href="#ancor-spec" class="btn px-5 text-white text-uppercase">Inizia ricerca</a>
                </div>
            </div>
        </section>
        <!-- <div>
            <h1>Doctors with Active Sponsorship</h1>
            <ul>
                <li v-for="doctor in doctors" :key="doctor.id">
                    <h2>{{ doctor.name }}</h2>
                </li>
            </ul>
        </div> -->
        <div class="jumbotron-sponsor">
            <section class="sponsorship-section">
                <h2 class="py-5">Dottori in evidenza</h2>
                <div class=" sponsorship container border">
                    <div class="s-content">
                        <div class="t-row">
    
                            <div v-for="doctor in doctors" :key="doctor.id" class="b-card card " style="width: 18rem;">
                                <router-link class="sponsorship-link"
                                    :to="{ name: 'SingleDoctor', params: { slug: doctor.slug } }">
    
                                    <!-- <img src="https://static.vecteezy.com/system/resources/thumbnails/001/363/116/small/female-doctor-cute-character-vector.jpg"
                                        class="" alt="foto"> -->
                                    <!-- <img :src="doctor.photo" alt="foto"> -->
    
                                    <img id="min-height" width="100%" class="img-fluid card-img-top "
                                        :src="`${baseUrl}/storage/${doctor.photo}` != `${baseUrl}/storage/null` ? `${baseUrl}/storage/${doctor.photo}` : `https://static.vecteezy.com/system/resources/thumbnails/001/363/116/small/female-doctor-cute-character-vector.jpg`"
                                        alt="foto">
                                    <div class="card-body">
                                        <h5 class="card-title">Dott. {{ doctor.name }} {{ doctor.lastname }}</h5>
                                        <p class="card-text" v-for="elem in doctor.specializations">{{ elem.name }}</p>
                                    </div>
                                </router-link>
                            </div>
    
                        </div>
                    </div>
                </div>
            </section>
        </div>

        
        <section id="ancor-spec" class="specializzazioni-sfondo">
            <main class="container">
                <div class="pb-3 ">
                    <h2 id="titolo-spec" class="text-center">Specializzazioni</h2>
                    <div class="md-3 content-card">
                        <div class=" col-lg-3 col-md-4 col-sm-6 col-12 " v-for="(elem, index) in specializations"
                            :key="index">
                            <router-link class="custom-link" :to="{ name: 'AdvancedResearch', query: { slug: elem.slug } }"
                                @click="selectSpecialization(specializations.slug)">
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
        </section>
        <section class="piattaforma">
            <div class="container">
                <h2>Una piattaforma di telemedicina a misura di utente!</h2>
                <div class="d-md-flex d-lg-flex teleconsulto">
                    <div class="teleconsulto-text col-12 col-sm-12 col-md-6 col-lg-5">
                        <h3>Contatta il medico specialista!</h3>
                        <p>
                            <b>Hai bisogno di un consulto in tempi rapidi?</b>
                            BDoctors è la piattaforma di telemedicina che ti permette di mandare un messaggio in
                            brevissimo tempo, al medico più utile per te. 
                            Lo specialista sarà disponibile a risponderti il prima possibile, 
                            per un semplice consulto medico o per fissare un appuntamento.
                        </p>
                    </div>
                    <div class="teleconsulto-img col-12 col-sm-12 col-md-6 col-lg-5">
                        <img src="https://s0.esanum.it/backend/media/images/2022/8/24/3cbbb1ba-f991-4865-b56d-4c7f36f9fb71/renders/detailed_v4.jpg"
                            alt="foto" >
                    </div>
                </div>
                <div class="d-md-flex d-lg-flex  telemontaggio">

                    <div class="telemontaggio-img col-12 col-sm-12 col-md-6 col-lg-5">
                        <img src="https://www.axa-im.it/sites/italy/files/styles/standard_banner_xs/public/header/innovation-and-medical-technology-concept-surgeons-team-using-hitech-picture-id1300936565-2.jpeg?h=7d90fc91&itok=0bZWRILl"
                            alt="foto" >
                    </div>
                    <div class="telemontaggio-text col-12 col-sm-12 col-md-6 col-lg-5">
                        <h3>Ricerca avanzata e veloce!</h3>
                        <p>
                            <b>Trova il tuo medico tra le tante specializzazioni.</b>
                            Grazie alla nostra ricerca per specializzazioni, 
                            potrai trovare in tempi brevissimi il medico che fa per te.
                            In maniera facile e intuitiva potrai anche filtrare gli specialisti
                            in base alle recensioni e al voto che hanno dato gli altri utenti.
                        </p>
                    </div>
                </div>
                <div class="d-md-flex d-lg-flex  documenti">
                    <div class="documenti-text col-12 col-sm-12 col-md-6 col-lg-5">
                        <h3>La tua opinione vale!</h3>
                        <p>
                            <b>Facci sapere cosa ne pensi dei dottori.</b>
                            Potrai lasciare una tua personale recensione sotto al profilo di ogni medico.
                            Le tue recensioni aiuteranno lo specialista a migliorarsi 
                            e allo stesso tempo aiuterai il prossimo utente nella sua ricerca.
                        </p>
                    </div>
                    <div class="documenti-img col-12 col-sm-12 col-md-6 col-lg-5">
                        <img src="https://www.aslcn2.it/media/2020/07/medicina-interna-1024x368.jpg"
                            alt="foto" width="100%">
                    </div>
                </div>
                <div class="d-md-flex d-lg-flex ricette">
                    <div class="ricette-img col-12 col-sm-12 col-md-6 col-lg-5">
                        <img src="https://www.pmosanfrancesco.it/wp-content/uploads/2022/07/telemedicina-pinerolo-600x401.jpg"
                            alt="foto">
                    </div>
                    <div class="ricette-text col-12 col-sm-12 col-md-6 col-lg-5">
                        <h3>Un sito per dottori!</h3>
                        <p><b>9 dottori su 10 ci hanno scelto.</b>
                            Se sei un dottore, iscriviti in modo semplice e sicuro.
                            Potrai accedere a servizi esclusivi, mettendoti in mostra sulla nostra piattaforma.
                            Potrai sponsorizzare il tuo profilo così da ampliare la tua rete di pazienti,
                            comunicare con loro e ricevere delle recensioni che ti aiuteranno
                            a migliorare.
                        </p>
                    </div>

                </div>
            </div>
        </section>
        
        <AppFooter></AppFooter>
    </div>
</template>
<style lang="scss" scoped>
#min-height{
    min-height: 284px;
}
#titolo-spec{
    padding-top: 150px;
}
svg {
    margin-top: -2px;
    margin-bottom: -2px;
}


.jumbotron {
    background-image: url(https://assets-global.website-files.com/5d0b99352ab90c616bf47b31/6151b92e53e2c6a8ea8fe4e5_902-p-800.jpeg);
    //background: rgb(34, 193, 195);
    //background: linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(3, 150, 166, 1) 65%);
    //color: white;
    margin-top: 56px;
    background-size: cover;
    //background-repeat: no-repeat;
    background-position: center;
    margin-top: 90px;
    height: calc(100vh - 90px);




        .testo-jumbo {
            
            

            h1{
                font-size: 4rem;
                letter-spacing: 4px;
                color: #ffffff;
                text-shadow: 4px 3px 0px #000, 9px 8px 0px rgba(0, 0, 0, 0.35);
            }

            .double-shadow {
                // background: #aaaaaa;
                
            }
            p{
                text-shadow: 1px 1px 10px white;
                -webkit-text-stroke-width: 0.5px;
                -webkit-text-stroke-color: rgb(0, 0, 0); 
            }

            .btn {
                font-size: 20px;
                padding: 12px;
                border-radius: 25px;
                border: 0;
                background-color: #FF4500;

            }

        }

        
    
}
 
//
.jumbotron-sponsor{
    margin-bottom: 100px;
    .sponsorship-section {
        h2 {
            text-align: center;
            font-size: 2.6rem;
            color: #19516C;
            //letter-spacing: 8px;
    
        }
    
    
        @keyframes scroll {
            to {
                transform: translateX(-60%);
            }
    
        }
    
        .sponsorship-link {
            text-decoration: none;
            color: black;
    
        }
    
        .b-card {
            //background-color: #000;
            //color: #fff;
            //width: 200px;
            max-height: 450px;
            text-align: center;
            margin-right: 150px;
            border-radius: 8px;
            border: 2px solid#0396A6;
            box-shadow: 0 1px 30px #49CCCD;
    
            &:hover {
                border: 2px solid rgb(216, 208, 208);
                box-shadow: 0 1px 30px #E3B14E;
            }
    
        }
    
        .s-content {
            width: 1000vw;
            display: flex;
        }
    
        .sponsorship {
            //border-style: solid;
            // border-color: blue;
            //border-width: 1px 0;
            padding: 34px 0;
            overflow: hidden;
            //max-width: 900px;
        }
    
        .t-row {
            display: flex;
            animation: scroll 40s infinite linear;
        }
    
        .t-row:hover {
            animation-play-state: paused;
        }
    }
    
}

.specializzazioni-sfondo {
    background-color: #e7f0ff;
    padding-bottom: 50px;

    h2 {
        color: #E3B14E;
        text-align: center;
        font-size: 2.5rem;
        //letter-spacing: 8px;
    }

    .content-card {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        text-align: center;

        .custom-link {
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

        img {
            width: 70%;
        }

        p {
            color: #007e8c;
        }

        &:hover {
            box-shadow: 1px 3px 5px 3px #E3B14E;

            p {
                color: #E3B14E;
            }
        }
    }

}

.piattaforma {
    margin-top: 100px;

    h2 {
        text-align: center;
        font-size: 2.2rem;
        letter-spacing: 8px;
    }

    .teleconsulto {
        align-items: center;
        justify-content: space-around;
        padding-top: 20px;

        .teleconsulto-img {
            margin: 20px;
            
            img {
                border-radius: 50%;
                aspect-ratio: 1;
                width: 100%;
                object-fit: cover;
            }
        }

        .teleconsulto-text {
            line-height: 34px;
            font-size: 1rem;

            h3 {
                letter-spacing: 8px;
                font-weight: 200;
            }

            b {
                color: #007e8c;
            }
        }
    }

    .telemontaggio {
        align-items: center;
        justify-content: space-around;
        padding-top: 20px;

        .telemontaggio-img {
            margin: 20px;



            img {
                border-radius: 50%;
                // display: block;

                width: 100%;

            }
        }

        .telemontaggio-text {
            line-height: 34px;
            font-size: 1rem;

            h3 {
                letter-spacing: 8px;
                font-weight: 200;
            }

            b {
                color: #007e8c;
            }
        }
    }

    .documenti {
        align-items: center;
        justify-content: space-around;
        padding-top: 20px;

        .documenti-img {
            margin: 20px;

            img {

                border-radius: 50%;
                aspect-ratio: 1;
                width: 100%;
                object-fit: cover;

            }
        }

        .documenti-text {
            line-height: 34px;
            font-size: 1rem;

            h3 {
                letter-spacing: 8px;
                font-weight: 200;
            }

            b {
                color: #007e8c;
            }
        }
    }

    .ricette {
        align-items: center;
        justify-content: space-around;
        padding-top: 20px;

        .ricette-img {
            margin: 20px;



            img {
                border-radius: 50%;
                aspect-ratio: 1;
                width: 100%;
                object-fit: cover;
            }
        }

        .ricette-text {
            line-height: 34px;
            font-size: 1rem;

            h3 {
                letter-spacing: 8px;
                font-weight: 200;
            }

            b {
                color: #007e8c;
            }
        }
    }

}
</style>