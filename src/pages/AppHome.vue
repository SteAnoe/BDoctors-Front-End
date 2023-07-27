<script>
import axios from 'axios';
import { store } from '../store';
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
                        <p class="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel incidunt nihil et
                            tempora quae, autem doloremque eaque necessitatibus molestiae. At odit expedita vitae sed ex
                            quam ut ad ipsa minima.</p>
                        <a href="#ancor-spec" class="btn btn-primary text-uppercase">Inizia ricerca</a>
                    </div>
                    <div class="img-jumbo col-sm-12 col-md-6 col-lg-6">
                        <img class=""
                            src="https://th.bing.com/th/id/R.18e073d15ff7a4b3356c575e945b938a?rik=J00q%2btrg070fTQ&pid=ImgRaw&r=0"
                            alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>


    <section class="piattaforma">
        <div class="container">
            <h2>Una piattaforma di telemedicina a misura di utente!</h2>
            <div class="d-md-flex d-lg-flex teleconsulto">
                <div class="teleconsulto-text">
                    <h3>Teleconsulto prioritario</h3>
                    <p>
                        <b>Hai bisogno di un consulto in tempi rapidi?</b>
                        Doctorium è la piattaforma di telemedicina che ti permette di effettuare un teleconsulto in
                        brevissimo
                        tempo. Non trovi l’appuntamento più adatto a te? Richiedine uno prioritario! I nostri specialisti lo
                        creeranno appositamente per te e potrai effettuarlo anche oggi stesso. Inoltre, se lo specialista è
                        disponibile, potrai richiedere un consulto immediato.
                    </p>
                </div>
                <div class="teleconsulto-img">
                    <img src="https://img.freepik.com/free-vector/online-doctor-concept_23-2148506884.jpg?w=2000" alt="foto"
                        width="100%">
                </div>
            </div>
            <div class="d-md-flex d-lg-flex  telemontaggio">

                <div class="telemontaggio-img">
                    <img src="https://img.freepik.com/free-vector/online-doctor-talking-patient_23-2148509191.jpg"
                        alt="foto" width="100%">
                </div>
                <div class="telemontaggio-text">
                    <h3>Telemonitoraggio</h3>
                    <p>
                        <b>Misura i tuoi parametri vitali e condividili con uno specialista.</b>
                        Abbonati al servizio di Telemedicina, riceverai al tuo domicilio un kit con strumenti e dispositivi
                        per
                        il telemonitoraggio dei tuoi parametri vitali. Dopo ogni misurazione i dati verranno caricati
                        automaticamente sulla piattaforma ed elaborati sotto forma di un grafico. Inoltre, potrai
                        condividerli
                        con lo specialista durante la tua televisita.
                    </p>
                </div>
            </div>
            <div class="d-md-flex d-lg-flex  documenti">
                <div class="documenti-text">
                    <h3>Referti online e documenti clinici</h3>
                    <p>
                        <b>Carica i tuoi referti online.</b>
                        Con Doctorium puoi caricare i tuoi documenti clinici sulla piattaforma e mostrali allo specialista.
                        Hai
                        a disposizione un ampio spazio dove caricare documenti clinici o immagini radiologiche come TC, RM,
                        RX
                        ecc. Lo specialista, durante il videoconsulto potrà vederli e commentarli con te.
                    </p>
                </div>
                <div class="documenti-img">
                    <img src="https://img.freepik.com/free-vector/medical-professionals-watching-webinar-online-platform-people-having-virtual-class-flat-illustration_74855-16906.jpg?t=st=1690445211~exp=1690445811~hmac=598d127874c5fe00c28e5d2b45f9b034fa5fac47d1ffb9e356c627adcc9d05c9"
                        alt="foto" width="100%">
                </div>
            </div>
            <div class="d-md-flex d-lg-flex ricette">
                <div class="ricette-img">
                    <img src="https://t4.ftcdn.net/jpg/04/56/70/85/240_F_456708586_72teUO1RFqXQay9OmztRvEgZDBQMPDyw.jpg"
                        alt="foto">
                </div>
                <div class="ricette-text">
                    <h3>Ricette mediche online</h3>
                    <p><b>Concentrati solo su di te.</b>
                        Durante il teleconsulto concentrati non dovrai preoccuparti di prendere appunti perché alla fine del
                        consulto riceverai un riepilogo scritto, firmato digitalmente dal dottore, che potrai stampare o
                        condividere. Inoltre, qualora lo specialista lo ritenesse necessario, potrà allegare una ricetta
                        medica
                        o una prescrizione per farmaci online.
                    </p>
                </div>

            </div>
        </div>
    </section>


    <div class="sfondo">
        <main class="container">
            <div class="mb-3 ">
                <h2 id="ancor-spec" class="text-center p-5">Specializzazioni</h2>
                <div class="md-3 content-card">
                    <div class=" col-lg-3 col-md-4 col-sm-6 col-12 " v-for="(elem, index) in specializations" :key="index">
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
    </div>
</template>
<style lang="scss" scoped>
.sfondo {
    background-color: #e7f0ff;

    .jumbotron {
        background: rgb(34, 193, 195);
        background: linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(3, 150, 166, 1) 65%);
        color: white;


        .jumbo-container {
            align-items: center;
            justify-content: center;


            .testo-jumbo {
                width: 45%;
                padding: 100px 0;

                h1 {
                    font-size: 4rem;
                }

                p {
                    font-size: 1.50rem;
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
                width: 45%;


                img {
                    width: 100%;

                }

            }
        }
    }

    h2 {
        color: #E3B14E;
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
    .teleconsulto {
        align-items: center;
        justify-content: space-around;

        .teleconsulto-img {
            margin: 20px;
            width: 40%;

            img {
                border-radius: 50%;

                width: 100%;

            }
        }

        .teleconsulto-text {
            width: 60%;
        }
    }

    .telemontaggio {
        align-items: center;
        justify-content: space-around;

        .telemontaggio-img {
            margin: 20px;
            width: 40%;


            img {
                border-radius: 50%;
                // display: block;

                width: 100%;

            }
        }

        .telemontaggio-text {
            width: 60%;

        }
    }

    .documenti {
        align-items: center;
        justify-content: space-around;

        .documenti-img {
            margin: 20px;
            width: 40%;

            img {

                width: 100%;

            }
        }

        .documenti-text {
            width: 60%;
        }
    }

    .ricette {
        align-items: center;
        justify-content: space-around;


        .ricette-img {
            margin: 20px;
            width: 40%;


            img {
                border-radius: 50%;
                // display: block;

                width: 100%;

            }
        }

        .ricette-text {
            width: 60%;

        }
    }

}
</style>