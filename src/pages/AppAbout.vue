<script>


export default{
    name: 'AppAbout',
    data(){

    },
}
</script>

<template>
    <h2>about us</h2>
    <div class="wrapper">
        <div class="container">
            <h2>Rendiamo l'esperienza sanitaria più umana</h2>
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
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    background-color: #E9F2FA;

    h2 {
        text-align: center;
        font-weight: 200;
        padding: 50px;
    }

    .content-img {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

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



}
</style>