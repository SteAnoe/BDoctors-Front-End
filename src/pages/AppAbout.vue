<script>
import AppFooterVue from '../components/AppFooter.vue';

export default {
    name: 'AppAbout',
    components: {
        AppFooterVue
    },
    data() {

    },
}
</script>

<template>
    <div class="wrapper" style="padding-top: 100px;">
        <div class="container">
            <h1 class="titolo-sanita">Rendiamo l'esperienza sanitaria più umana</h1>
            <div class="row">
                <div class="content-img">
                    <div class="div-img col-12 col-md-6">
                        <img src="https://d1wh1xip64lue1.cloudfront.net/wp-content/uploads/2020/02/digital-healthcare.jpg" alt="foto" class="img-fluid"
                        >
                    </div>
                    <div class="summary row-col-12 col-md-6">
                        <h3>BDoctors</h3>
                        <p class=""><em>BDoctors nasce dall’idea di cinque professionisti e amici uniti dalla comune
                                passione per il
                                proprio lavoro e dal forte interesse per le moderne tecnologie che permettono di risolvere i
                                problemi di salute delle persone. BDoctors assiste con grande professionalità, preparazione
                                ed
                                umanità le persone che hanno un problema di salute riducendo, nel contempo, i tempi e le
                                difficoltà di spostamento dal proprio ambiente domestico.</em></p>
                    </div>
                </div>
                <div class="body-text page py-5">
                    <h3>La nostra missione</h3>
                    <p>Come medici, conosciamo bene, le necessità e le priorità di salute degli utenti che si rivolgono a
                        noi, perché viviamo tutti i giorni, in prima persona, l’esperienza del contatto diretto con i
                        pazienti. La nostra missione è quella di risolvere le loro problematiche di salute “riportando”,
                        come avveniva un tempo, il medico dal paziente grazie alle nuove tecnologie.</p>
                    <p>BDoctors è una piattaforma di telemedicina all’avanguardia ricca di servizi altamente innovativi,
                        dedicati alla salute e al benessere dell’utente, che spaziano dalla televisita o videoconsulto, alla
                        possibilità di monitorare i propri indici di salute.</p>
                    <h3>Connessione</h3>
                    <p>Con un solo click puoi richiedere una televisita in qualità HD qualsiasi sia il dispositivo desktop o
                        mobile di cui disponi. Tutto ciò che occorre per accedere al teleconsulto è una connessione
                        internet.</p>
                    <h3>Ultime tecnologie</h3>
                    <p>Con BDoctors puoi inoltre accedere ai servizi di telemonitoraggio e teleassistenza sanitaria, che ti
                        consentono di monitorare i tuoi parametri vitali e di condividerli con gli specialisti durante il
                        consulto, semplicemente mediante strumenti e dispositivi domiciliari per la telemedicina.</p>

                </div>
            </div>


        </div>
        <section class="fondatori-section">
            <div class="container">
                <h1>I fondatori di BDoctors</h1>
            </div>
            <div class="container d-flex flex-wrap justify-content-center">
                <div class="">
                    <div class="container-container">
                        <img class="container-animation"
                            src="https://scontent-mxp1-1.xx.fbcdn.net/v/t39.30808-6/332881851_3613070772312857_655919849961643030_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_ohc=fYn__TLa_u0AX9vuVNX&_nc_ht=scontent-mxp1-1.xx&oh=00_AfAEHzTTucSwlyHhTnOsIfBChqWV5XsmuYS8-_wwsPiMfw&oe=64C8B551"
                            alt="<Giorgio Prizzi>">
                    </div>
                    <p class="text-center"><em>Giorgio Prizzi</em></p>
                </div>
                <div class="">
                    <div class="container-container">
                        <img class="container-animation"
                            src="https://scontent-mxp1-1.xx.fbcdn.net/v/t39.30808-6/363362992_3205712689573412_8064374258386775224_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DS0qDV843P4AX_tEmev&_nc_ht=scontent-mxp1-1.xx&oh=00_AfD_BHPOb3aAAdDW9Aqy_-ac81fhZ8lhFR-eFDneqZg1HA&oe=64C7F01F"
                            alt="Elisabetta Scagione">
                    </div>
                    <p class="text-center"><em>Elisabetta Scagione</em></p>
                </div>
                <div class="">
                    <div class="container-container">
                        <img class="container-animation"
                            src="https://media.licdn.com/dms/image/C4D03AQFGwxJrN4Ah5Q/profile-displayphoto-shrink_800_800/0/1562232159183?e=1695859200&v=beta&t=93qRthFZuxVVnSkifbPe5TEe7cOxftudZLQjiLnv7k0"
                            alt="Stefano Anoè">
                    </div>
                    <p class="text-center"><em>Stefano Anoè</em></p>
                </div>
                <div class="">
                    <div class="container-container">
                        <img class="container-animation"
                            src="https://media.licdn.com/dms/image/D4E03AQESm9zP4G5QOw/profile-displayphoto-shrink_200_200/0/1688913064514?e=1695859200&v=beta&t=2V8SQGivH23F2IjP38lT-lygDO9bhrdS_EcRO-tB-gk"
                            alt="Oksana Karpyn">
                    </div>
                    <p class="text-center"><em>Oksana Karpyn</em></p>
                </div>
                <div class="">
                    <div class="container-container">
                        <img class="container-animation"
                            src="https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/358140706_2421603324688040_954895442534135134_n.jpg?stp=dst-jpg_s640x640&_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=KJ4kgrXr0PEAX_ROaOu&_nc_ht=scontent-mxp2-1.xx&oh=00_AfBoRrrVSTP-zyKKusg-XErfGH0eWcdrvQcROO6qQhBaEg&oe=64C87EE3"
                            alt="Simone Scordato">
                    </div>
                    <p class="text-center"><em>Simone Scordato</em></p>
                </div>

            </div>
        </section>
        <!-- <section class="section-carousell pb-5">
            <h1 class="fondatori">I fondatori di BDoctors</h1>
            <div class="container-carousel">
                <div id="carousel">
                    <figure><img
                            src="https://scontent-mxp1-1.xx.fbcdn.net/v/t39.30808-6/363362992_3205712689573412_8064374258386775224_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DS0qDV843P4AX_tEmev&_nc_ht=scontent-mxp1-1.xx&oh=00_AfD_BHPOb3aAAdDW9Aqy_-ac81fhZ8lhFR-eFDneqZg1HA&oe=64C7F01F"
                            alt=""><span class="text-white"><em>Elisabetta Scagione</em></span></figure>
                    <figure><img
                            src="https://scontent-mxp2-1.xx.fbcdn.net/v/t1.6435-9/86788746_1432132553635127_9012665120316194816_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rXzf_2yiC-kAX934S3I&_nc_ht=scontent-mxp2-1.xx&oh=00_AfDK69VDaSAwrH4c8aN9Ba0GptnAhEb3Ybpgv8pHP9H9lA&oe=64EA44AA"
                            alt=""><span class="text-white"><em>Simone Scordato</em></span></figure>
                    <figure><img
                            src="https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/252469570_4476696872409000_7036118507145826713_n.jpg?stp=c0.17.206.206a_dst-jpg_p206x206&_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=da31f3&_nc_ohc=9KTMoTXvALcAX_msk_i&_nc_ht=scontent-mxp2-1.xx&oh=00_AfAkAxVCRHIa8OsOWzWeVEgWjFCHlVf3JGbrayEyHXGK1A&oe=64C92173"
                            alt=""><span class="text-white"><em>Oksana Karpyn1</em></span></figure>

                   
                    <figure><img
                            src="https://media.licdn.com/dms/image/C4D03AQFGwxJrN4Ah5Q/profile-displayphoto-shrink_800_800/0/1562232159183?e=1695859200&v=beta&t=93qRthFZuxVVnSkifbPe5TEe7cOxftudZLQjiLnv7k0"
                            alt=""><span class="text-white"><em>Stefano Anoè</em></span></figure>
                    <figure><img
                            src="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/81880429_1995629420581751_4454215393321418752_n.jpg?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OkKjMV75XQYAX--d8ck&_nc_ht=scontent-mxp1-1.xx&oh=00_AfCJ8WIEDKpyKIi_it-p0URyVlIYaW8gHt4GmaBuqUDH4A&oe=64EA3CEF"
                            alt=""><span class="text-white"><em>Elisabetta Scagione</em></span></figure>
                    <figure><img
                            src="https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/358140706_2421603324688040_954895442534135134_n.jpg?stp=dst-jpg_s640x640&_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=KJ4kgrXr0PEAX_ROaOu&_nc_ht=scontent-mxp2-1.xx&oh=00_AfBoRrrVSTP-zyKKusg-XErfGH0eWcdrvQcROO6qQhBaEg&oe=64C87EE3"
                            alt=""><span class="text-white"><em>Simone Scordato</em></span></figure>
                    <figure><img
                            src="https://media.licdn.com/dms/image/D4E03AQESm9zP4G5QOw/profile-displayphoto-shrink_200_200/0/1688913064514?e=1695859200&v=beta&t=2V8SQGivH23F2IjP38lT-lygDO9bhrdS_EcRO-tB-gk"
                            alt=""><span class="text-white"><em>Oksana Karpyn</em></span></figure>
                  

                </div>
            </div>
        </section> -->
        <div class="mt-5">
            <AppFooterVue></AppFooterVue>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    background-color: #E9F2FA;


    .titolo-sanita {
        text-align: center;
        font-weight: 600;
        padding: 50px;
        letter-spacing: 5px;
        //
        display: table;
        //margin: 5% auto 0;
        //text-transform: uppercase;
        font-family: 'Anaheim', sans-serif;
        font-weight: 400;
        text-shadow: 0 1px white, 0 2px black;
    }

    h3 {
        font-weight: 500;
        letter-spacing: 2px;
    }

    .content-img {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        word-spacing: 2px;

        .summary {
            max-width: 400px;
            padding: 30px;
            line-height: 30px;
        }
    }

    .page {

        //columns: 2 200px;
        column-gap: 30px;
        column-rule: 2px dotted #3EA8BD;

        h3 {
            padding: 10px;
            margin: 10px 0;
            column-span: all;
            background-color: #3EA8BD;
        }

        .page p {
            break-inside: avoid;
        }
    }

    .fondatori-section {
        background-color: #fff;
        font-size: rem;
        padding: 50px 0px;

        h1 {
            text-align: center;
            font-size: 3rem;
        }

        img {
            width: 100%;
        }

        .container-container {
            max-width: 200px;
            max-height: 200px;
            overflow: hidden;
            border-radius: 25px;
            margin: 1.5em;
        }

        .container-animation {
            transition: ease-in-out 1.5s;
        }

        .container-animation:hover {
            transform: scale(1.4) translateY(15px);
        }
    }

}
</style>