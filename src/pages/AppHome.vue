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
        <section class="jumbotron ">
            <div class="container ">
                <div class=" d-md-flex d-lg-flex jumbo-container">
                    <div class="testo-jumbo col-12 col-sm-12 col-md-6 col-lg-5">
                        <h1>BDoctors</h1>
                        <p class="py-3">Su BDoctors trovi i migliori specialisti in tutti i campi della Medicina. Se
                            desideri effettuare una Televisita o ricevere un secondo parere su una diagnosi già fatta, puoi
                            cercare un dottore online tra i nostri medici di fiducia.</p>
                        <a href="#ancor-spec" class="btn btn-primary px-5 text-uppercase">Inizia ricerca</a>
                    </div>
                    <div class="img-jumbo col-12 col-sm-12 col-md-8 col-lg-6 px-2 ">
                        <!-- <img class=""
                            src="https://www.nicepng.com/png/full/47-478903_transparent-background-doctors-clipart.png"
                            alt=""> -->
                    </div>
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
        <section class="sponsorship-section">
            <h2>Dottori in evidenza</h2>
            <div class=" sponsorship">
                <div class="s-content">
                    <div class="t-row">

                        <div v-for="doctor in doctors" :key="doctor.id" class="b-card card " style="width: 18rem;">
                            <router-link class="sponsorship-link"
                                :to="{ name: 'SingleDoctor', params: { slug: doctor.slug } }">

                                <!-- <img src="https://static.vecteezy.com/system/resources/thumbnails/001/363/116/small/female-doctor-cute-character-vector.jpg"
                                    class="" alt="foto"> -->
                                <!-- <img :src="doctor.photo" alt="foto"> -->

                                <img width="100%" class="img-fluid card-img-top "
                                    :src="`${baseUrl}/storage/${doctor.photo}` != `${baseUrl}/storage/null` ? `${baseUrl}/storage/${doctor.photo}` : `https://static.vecteezy.com/system/resources/thumbnails/001/363/116/small/female-doctor-cute-character-vector.jpg`"
                                    alt="foto">
                                <div class="card-body">
                                    <h5 class="card-title">DR.{{ doctor.name }} {{ doctor.lastname }}</h5>
                                    <p class="card-text" v-for="elem in doctor.specializations">{{ elem.name }}</p>
                                </div>
                            </router-link>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#E7F0FF" fill-opacity="1"
                d="M0,96L30,117.3C60,139,120,181,180,192C240,203,300,181,360,192C420,203,480,245,540,240C600,235,660,181,720,149.3C780,117,840,107,900,122.7C960,139,1020,181,1080,202.7C1140,224,1200,224,1260,208C1320,192,1380,160,1410,144L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
            </path>
        </svg>
        <section class="specializzazioni-sfondo">
            <main class="container">
                <div class="pb-3 ">
                    <h2 id="ancor-spec" class="text-center ">Specializzazioni</h2>
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
                        <h3>Teleconsulto prioritario</h3>
                        <p>
                            <b>Hai bisogno di un consulto in tempi rapidi?</b>
                            Doctorium è la piattaforma di telemedicina che ti permette di effettuare un teleconsulto in
                            brevissimo
                            tempo. Non trovi l’appuntamento più adatto a te? Richiedine uno prioritario! I nostri
                            specialisti lo
                            creeranno appositamente per te e potrai effettuarlo anche oggi stesso. Inoltre, se lo
                            specialista è
                            disponibile, potrai richiedere un consulto immediato.
                        </p>
                    </div>
                    <div class="teleconsulto-img col-12 col-sm-12 col-md-6 col-lg-5">
                        <img src="https://img.freepik.com/free-vector/online-doctor-concept_23-2148506884.jpg?w=2000"
                            alt="foto" width="100%">
                    </div>
                </div>
                <div class="d-md-flex d-lg-flex  telemontaggio">

                    <div class="telemontaggio-img col-12 col-sm-12 col-md-6 col-lg-5">
                        <img src="https://img.freepik.com/free-vector/online-doctor-talking-patient_23-2148509191.jpg"
                            alt="foto" width="100%">
                    </div>
                    <div class="telemontaggio-text col-12 col-sm-12 col-md-6 col-lg-5">
                        <h3>Telemonitoraggio</h3>
                        <p>
                            <b>Misura i tuoi parametri vitali e condividili con uno specialista.</b>
                            Abbonati al servizio di Telemedicina, riceverai al tuo domicilio un kit con strumenti e
                            dispositivi
                            per
                            il telemonitoraggio dei tuoi parametri vitali. Dopo ogni misurazione i dati verranno caricati
                            automaticamente sulla piattaforma ed elaborati sotto forma di un grafico. Inoltre, potrai
                            condividerli
                            con lo specialista durante la tua televisita.
                        </p>
                    </div>
                </div>
                <div class="d-md-flex d-lg-flex  documenti">
                    <div class="documenti-text col-12 col-sm-12 col-md-6 col-lg-5">
                        <h3>Referti online e documenti clinici</h3>
                        <p>
                            <b>Carica i tuoi referti online.</b>
                            Con Doctorium puoi caricare i tuoi documenti clinici sulla piattaforma e mostrali allo
                            specialista.
                            Hai
                            a disposizione un ampio spazio dove caricare documenti clinici o immagini radiologiche come TC,
                            RM,
                            RX
                            ecc. Lo specialista, durante il videoconsulto potrà vederli e commentarli con te.
                        </p>
                    </div>
                    <div class="documenti-img col-12 col-sm-12 col-md-6 col-lg-5">
                        <img src="https://img.freepik.com/free-vector/medical-professionals-watching-webinar-online-platform-people-having-virtual-class-flat-illustration_74855-16906.jpg?t=st=1690445211~exp=1690445811~hmac=598d127874c5fe00c28e5d2b45f9b034fa5fac47d1ffb9e356c627adcc9d05c9"
                            alt="foto" width="100%">
                    </div>
                </div>
                <div class="d-md-flex d-lg-flex ricette">
                    <div class="ricette-img col-12 col-sm-12 col-md-6 col-lg-5">
                        <img src="https://t4.ftcdn.net/jpg/04/56/70/85/240_F_456708586_72teUO1RFqXQay9OmztRvEgZDBQMPDyw.jpg"
                            alt="foto">
                    </div>
                    <div class="ricette-text col-12 col-sm-12 col-md-6 col-lg-5">
                        <h3>Ricette mediche online</h3>
                        <p><b>Concentrati solo su di te.</b>
                            Durante il teleconsulto concentrati non dovrai preoccuparti di prendere appunti perché alla fine
                            del
                            consulto riceverai un riepilogo scritto, firmato digitalmente dal dottore, che potrai stampare o
                            condividere. Inoltre, qualora lo specialista lo ritenesse necessario, potrà allegare una ricetta
                            medica
                            o una prescrizione per farmaci online.
                        </p>
                    </div>

                </div>
            </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#333333" fill-opacity="1"
                d="M0,128L48,154.7C96,181,192,235,288,261.3C384,288,480,288,576,272C672,256,768,224,864,229.3C960,235,1056,277,1152,282.7C1248,288,1344,256,1392,240L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
        <AppFooter></AppFooter>
    </div>
</template>
<style lang="scss" scoped>
svg {
    margin-top: -2px;
    margin-bottom: -2px;
}

.jumbotron {
    background-image: url(https://assets-global.website-files.com/5d0b99352ab90c616bf47b31/6151b92e53e2c6a8ea8fe4e5_902-p-800.jpeg);
    //background: rgb(34, 193, 195);
    //background: linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(3, 150, 166, 1) 65%);
    color: white;
    margin-top: 56px;
    background-size: cover;
    //background-repeat: no-repeat;
    background-position: center;
    padding: 150px 0px 200px 0px;


    .jumbo-container {
        align-items: center;
        justify-content: center;



        .testo-jumbo {
            // width: 50%;

            // background-color: #8284888a;

            h1 {
                font-size: 4rem;
                letter-spacing: 5px;

            }

            p {
                font-size: 1.4rem;
                //font-weight: 400;
                line-height: 48px;
                background-color: #2b457985;
                border-radius: 8px;
                padding: 10px;
                letter-spacing: 1.5px;
            }

            .btn {
                font-size: 1.50rem;
                padding: 1rem 1.5rem;
                border-radius: 25px;
                border: 0;
                background-color: rgb(0, 144, 160);

            }

        }

        .img-jumbo {
            // width: 50%;




            img {
                width: 100%;
                display: block;
                aspect-ratio: 1;
                border-radius: 50%;

            }

        }
    }
}

//
.sponsorship-section {
    h2 {
        text-align: center;
        font-size: 2.6rem;
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

                width: 100%;

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

                width: 100%;

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
                // display: block;
                width: 100%;
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