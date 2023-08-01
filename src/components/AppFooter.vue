<script>
export default {
    components: {

    },
    data() {

    },
}
</script>
<template>
    <footer>
        <div class="container w-75">
            <div class="footer-row  d-md-flex  d-sm-flex">
                <div class="footer-body d-flex flex-wrap ">
                    <div class="footer-title pe-3">
                        <h3 class="font-weight-bold">BDoctors</h3>
                        <p>BDoctors srl</p>
                        <p>P.Iva 0345129833</p>
                    </div>
                    <div class="downloand-app">
                        <h3 class="text-white font-weight-bold">Download</h3>
                        <div>
                            <img src="https://wi-fi.hk/Images/google_play_n.png" alt="" width="100px">
                        </div>
                        <div class="py-2">
                            <img src="https://uwm.edu/police/wp-content/uploads/sites/58/2022/04/apple.png" alt=""
                                width="100px">
                        </div>
                    </div>

                </div>
                <div class="div d-flex flex-wrap justify-content-between">
                    <div class="footer-text">
                        <ul>
                                <h4 class="text-white">Sito</h4>
                            <li><a href="#">Home</a></li>
                            <li><a href="/about-us">Chi siamo</a></li>
                            <li><a href="#ancor-spec">Specializzazioni</a></li>
                            
                        </ul>
                    </div>
                    <div class="footer-text">
                        <ul>
                                <h4 class="text-white">Per i professionisti sanitari</h4>
                            
                            <li><a href="#">Informazioni per i Professionisti Sanitari</a></li>
                            <li><a href="#">Formazione e Corsi</a></li>
                            <li><a href="#">Informazioni sull'Azienda o la Struttura Sanitaria</a></li>
                            <li><a href="#">Aggiornamenti o Novità</a></li>
                            <li><a href="#">Partnerships o Collaborazioni</a></li>
                        </ul>
                    </div>
                    <div class="footer-text">
                        <ul>
                            
                            <h4 class="text-white">Termini e condizioni</h4>
                        
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">Condizioni di Servizio</a></li>
                            <li><a href="#">Informativa e consenso informativo</a></li>
                            <li><a href="#">Servizi Telemedicina</a></li>
                        </ul>
                    </div>
                </div>



            </div>
            <hr class="text-white">
            <div class="social">
                <div class="footer-certificazione ">
                    <h5 class="">Certificazione e sicurezza</h5>
                    <div class="row-certificazione">
                        <ul class="p-0">
                            <li><img src="https://crdms.images.consumerreports.org/f_auto,w_600/prod/products/cr/models/399914-security-suites-norton-360-deluxe-10009006.png"
                                    alt="foto"></li>
                            <li><img src="https://www.doctorium.it/wp-content/uploads/2022/01/nuovo-logo5.png" alt="foto">
                            </li>

                        </ul>
                    </div>

                </div>

                <div class="footer-social">
                    <div class="social-title">
                        <h4>Trovaci anche su</h4>
                    </div>
                    <div class="footer-icon icon">
                        <div>
                            <i class="fa-brands fa-square-twitter text-white"></i>
                        </div>
                        <div>
                            <i class="fa-brands fa-facebook text-white"></i>
                        </div>
                        <div>
                            <i class="fa-brands fa-instagram text-white"></i>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
footer {
    background-color: #333333;
    padding: 40px 10px;

    .footer-body {
         padding-left: 2rem;
    }
}

.footer-row {
    //display: flex;
    justify-content: space-between;
    padding: 20px 0;

    .footer-title {
        color: #fff;

        p {
            font-weight: 100;
        }
    }

    .downloand-app {
        h5 {
            color: #fff;
        }
    }

    .footer-text {
        font-size: 14px;

        h4{
            font-weight: bold;
        }
        ul {
            li {
                list-style: none;
                color: #fff;
                font-weight: 100;
            }
        }
        li:hover{
            background-color: #ffffff;
        }

        a {
            text-decoration: none;
            font-size: 1rem;
            color: #fff;
        }
        a:hover{
            color:black;
            font-weight: bold;
        }
    }

}






.social {
    padding-right: 2rem;
    padding-left: 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .footer-certificazione {
        h5 {
            color: #fff;
        }

        .row-certificazione {


            ul {
                display: flex;
                align-items: center;
                justify-content: space-around;

                li {
                    font-weight: 100;
                    list-style-type: none;


                    img {
                        display: block;
                        width: 100px;
                    }
                }
            }
        }


    }

    

    .social-title h4 {
        color: #fff;
        font-size: 14px;
        padding: 10px 0;
    }

    .footer-icon {
        display: flex;

    }

    .footer-icon div {
        margin-right: 10px;
        font-size: 20px;
    }


}
</style>