<script>


export default {
    name: "AppHeader",
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>
<template>
    <nav class="navbar navbar-expand-md py-2" style="height: 60px;">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="http://localhost:5173/">
                
                BDoctors
                
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="#">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:5173/"></a>
                    </li>
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                    <li class="nav-item">
                        <a class="nav-link" href="/about-us">CHI SIAMO</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link bottonemedico" href="http://127.0.0.1:8000/login">SEI UN DOTTORE?</a>
                    </li>
                  
                </ul>
            </div>
        </div>
    </nav>
</template>
<style lang="scss" scoped >
.navbar{
    
    background-color: #00aabd;
    box-shadow: 0 1px 30px #49CCCD;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    li, a{
        color: white;
    }
    .bottonemedico{
        border-radius: 2px solid white;
        border-radius: 10px;
        background-color: white;
        color: #00aabd;
        &:hover{
            background-color: rgb(255, 255, 255);
            color: #E3B14E;
            border-radius: 2px solid #E3B14E;
        }
    }
}
</style>