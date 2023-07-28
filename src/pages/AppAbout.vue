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
    <div class="wrapper">
        <div class="container">
            <h1 class="titolo-sanita">Rendiamo l'esperienza sanitaria più umana</h1>
            <div class="row">
                <div class="content-img">
                    <div class="div-img col-12 col-md-6">
                        <img src="https://assets.nicepagecdn.com/11a8ddce/4072348/images/13808848_5361046.png" alt="foto"
                            width="100%">
                    </div>
                    <div class="summary row-col-12 col-md-6">
                        <h3>BDoctors</h3>
                        <p class=""><em>BDoctors nasce dall’idea di quattro professionisti e amici uniti dalla comune
                                passione per il
                                proprio lavoro e dal forte interesse per le moderne tecnologie che permettono di risolvere i
                                problemi di salute dele persone. BDoctors assiste con grande professionalità, preparazione
                                ed
                                umanità le persone che hanno un problema di salute riducendo, nel contempo, i tempi e le
                                difficoltà di spostamento dal proprio ambiente domestico.</em></p>
                    </div>
                </div>
                <div class="body-text page py-5">
                    <h3>La nostra mission</h3>
                    <p>Come medici, conosciamo bene, le necessità e le priorità di salute degli utenti che si rivolgono a
                        noi, perché viviamo tutti i giorni, in prima persona, l’esperienza del contatto diretto con i
                        pazienti. La nostra missione è quella di risolvere le loro problematiche di salute “riportando”,
                        come avveniva un tempo, il medico dal paziente grazie alle nuove tecnologie.</p>
                    <p>BDoctors è una piattaforma di telemedicina all’avanguardia ricca di servizi altamente innovativi,
                        dedicati alla salute e al benessere dell’utente, che spaziano dalla televisita o videoconsulto, alla
                        possibilità di monitorare i propri indici di salute.</p>
                    <h3>Connesione</h3>
                    <p>Con un solo click puoi richiedere una televisita in qualità HD qualsiasi sia il dispositivo desktop o
                        mobile di cui disponi. Tutto ciò che occorre per accedere al teleconsulto è una connessione
                        internet.</p>
                    <h3>Ultime tecnologie</h3>
                    <p>Con BDoctors puoi inoltre accedere ai servizi di telemonitoraggio e teleassistenza sanitaria, che ti
                        consentono di monitorare i tuoi parametri vitali e di condividerli con gli specialisti durante il
                        consulto, semplicemente mediante strumenti e dispositivi domiciliari per la telemedicina.</p>

                </div>
            </div>
            <!-- <section class="fondatori">
                <div class="row">
                    <div class="card" style="width: 20rem;">
                        <img src="https://media.licdn.com/dms/image/C4D03AQFGwxJrN4Ah5Q/profile-displayphoto-shrink_800_800/0/1562232159183?e=1695859200&v=beta&t=93qRthFZuxVVnSkifbPe5TEe7cOxftudZLQjiLnv7k0"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Stefano Anoè</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                        </div>
                    </div>
                    <div class="card" style="width: 20rem;">
                        <img src="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/81880429_1995629420581751_4454215393321418752_n.jpg?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OkKjMV75XQYAX--d8ck&_nc_ht=scontent-mxp1-1.xx&oh=00_AfCJ8WIEDKpyKIi_it-p0URyVlIYaW8gHt4GmaBuqUDH4A&oe=64EA3CEF"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Elisabetta Scagione</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                        </div>
                    </div>
                    <div class="card" style="width: 20rem;">
                        <img src="https://media.licdn.com/dms/image/C4D03AQFqCKi_MAUmfA/profile-displayphoto-shrink_200_200/0/1639934137439?e=1695859200&v=beta&t=k0NtVQPhQO5FtQBN2km8mc0-qexxah6DgTwMSdwj-tw"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Simone Antonio Scordato</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                        </div>
                    </div>
                    <div class="card" style="width: 20rem;">
                        <img src="https://media.licdn.com/dms/image/D4E03AQESm9zP4G5QOw/profile-displayphoto-shrink_200_200/0/1688913064514?e=1695859200&v=beta&t=2V8SQGivH23F2IjP38lT-lygDO9bhrdS_EcRO-tB-gk"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Oksana Karpyn</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                        </div>
                    </div>
                    <div class="card" style="width: 20rem;">
                        <img src="https://scontent-mxp1-1.xx.fbcdn.net/v/t39.30808-6/340436295_933628894545770_8702897657685960929_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qWHvSFOtaMoAX_EuuXg&_nc_ht=scontent-mxp1-1.xx&oh=00_AfC4pqTJ5DWC4PT3fT3LigA7uwypbgBAc0dAcXINm0dC2A&oe=64C7E4BC"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Stefano Anoè</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                        </div>
                    </div>
                </div>
            </section> -->

        </div>
        <section class="section-carousell pb-5">
            <h1 class="fondatori">I fondatori di BDoctors</h1>
            <div class="container-carousel">
                <div id="carousel">
                    <figure><img
                            src="https://scontent-mxp2-1.xx.fbcdn.net/v/t1.6435-9/86788746_1432132553635127_9012665120316194816_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rXzf_2yiC-kAX934S3I&_nc_ht=scontent-mxp2-1.xx&oh=00_AfDK69VDaSAwrH4c8aN9Ba0GptnAhEb3Ybpgv8pHP9H9lA&oe=64EA44AA"
                            alt=""></figure>
                    <figure><img src="http://lorempixel.com/186/116/nature/2" alt=""></figure>
                    <figure><img src="http://lorempixel.com/186/116/nature/3" alt=""></figure>
                    <figure><img
                            src="https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/269393117_5291218957561567_1778229476404741265_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_ohc=KrCyBpZ819wAX8IRbkT&_nc_ht=scontent-mxp2-1.xx&oh=00_AfA4k5G_gxxgti0me82lSVfW8p_2WrnK9jNNZb9RA8YqAg&oe=64C76C92"
                            alt=""></figure>
                    <figure><img
                            src="https://media.licdn.com/dms/image/C4D03AQFGwxJrN4Ah5Q/profile-displayphoto-shrink_800_800/0/1562232159183?e=1695859200&v=beta&t=93qRthFZuxVVnSkifbPe5TEe7cOxftudZLQjiLnv7k0"
                            alt=""></figure>
                    <figure><img
                            src="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/81880429_1995629420581751_4454215393321418752_n.jpg?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OkKjMV75XQYAX--d8ck&_nc_ht=scontent-mxp1-1.xx&oh=00_AfCJ8WIEDKpyKIi_it-p0URyVlIYaW8gHt4GmaBuqUDH4A&oe=64EA3CEF"
                            alt=""></figure>
                    <figure><img
                            src="https://media.licdn.com/dms/image/C4D03AQFqCKi_MAUmfA/profile-displayphoto-shrink_200_200/0/1639934137439?e=1695859200&v=beta&t=k0NtVQPhQO5FtQBN2km8mc0-qexxah6DgTwMSdwj-tw"
                            alt=""></figure>
                    <figure><img
                            src="https://media.licdn.com/dms/image/D4E03AQESm9zP4G5QOw/profile-displayphoto-shrink_200_200/0/1688913064514?e=1695859200&v=beta&t=2V8SQGivH23F2IjP38lT-lygDO9bhrdS_EcRO-tB-gk"
                            alt=""></figure>
                    <figure><img
                            src="https://scontent-mxp1-1.xx.fbcdn.net/v/t39.30808-6/332881851_3613070772312857_655919849961643030_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_ohc=fYn__TLa_u0AX9vuVNX&_nc_ht=scontent-mxp1-1.xx&oh=00_AfAEHzTTucSwlyHhTnOsIfBChqWV5XsmuYS8-_wwsPiMfw&oe=64C8B551"
                            alt=""><span class="text-white">Simone Scorsato</span></figure>
                </div>
            </div>
        </section>
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

        columns: 2 200px;
        column-gap: 30px;
        column-rule: 2px dotted #6093B6;

        h3 {
            padding: 10px;
            margin: 10px 0;
            column-span: all;
            background-color: #80bce3;
        }

        .page p {
            break-inside: avoid;
        }
    }

    @import url(https://fonts.googleapis.com/css?family=Anaheim);

    * {
        padding: 0;
        outline: none;
        border: none;
        box-sizing: border-box;
    }

    *:before,
    *:after {
        box-sizing: border-box;
    }

    html,
    body {
        min-height: 100%;
    }

    body {
        background-image: radial-gradient(mintcream 0%, lightgray 100%);
    }

    .fondatori {
        display: table;
        margin: 5% auto 0;
        //text-transform: uppercase;
        font-family: 'Anaheim', sans-serif;
        font-size: 4em;
        font-weight: 400;
        text-shadow: 0 1px white, 0 2px black;
    }

    .container-carousel {
        margin: 4% auto;
        width: 210px;
        height: 160px;
        position: relative;
        perspective: 1000px;
    }

    #carousel {
        width: 100%;
        height: 100%;
        position: absolute;
        transform-style: preserve-3d;
        animation: rotation 20s infinite linear;
    }

    #carousel:hover {
        animation-play-state: paused;
    }

    #carousel figure {
        display: block;
        position: absolute;
        width: 186px;
        height: 116px;
        left: 10px;
        top: 10px;
        background: #333333;
        overflow: hidden;
        border: solid 5px #fff;
    }

    #carousel figure:nth-child(1) {
        transform: rotateY(0deg) translateZ(288px);
        height: 210px;
    }

    #carousel figure:nth-child(2) {
        transform: rotateY(40deg) translateZ(288px);
        height: 210px;
    }

    #carousel figure:nth-child(3) {
        transform: rotateY(80deg) translateZ(288px);
        height: 210px;
    }

    #carousel figure:nth-child(4) {
        transform: rotateY(120deg) translateZ(288px);
        height: 210px;
    }

    #carousel figure:nth-child(5) {
        transform: rotateY(160deg) translateZ(288px);
        height: 210px;
    }

    #carousel figure:nth-child(6) {
        transform: rotateY(200deg) translateZ(288px);
        height: 210px;
    }

    #carousel figure:nth-child(7) {
        transform: rotateY(240deg) translateZ(288px);
        height: 210px;
    }

    #carousel figure:nth-child(8) {
        transform: rotateY(280deg) translateZ(288px);
        height: 210px;
    }

    #carousel figure:nth-child(9) {
        transform: rotateY(320deg) translateZ(288px);
        height: 220px;
    }

    img {
        width: 100%;
    }

    //img:hover {
    //  -webkit-filter: grayscale(0);
    //  transform: scale(1.2, 1.2);
    //  }

    @keyframes rotation {
        from {
            transform: rotateY(0deg);
        }

        to {
            transform: rotateY(360deg);
        }
    }

}
</style>