<script>
import axios from 'axios';

export default{
  name: 'SingleDoctor',
  data(){
    return{
      doctor: null,
      baseUrl: 'http://127.0.0.1:8000'
    }
},
created(){
	this.getSingleDoctor();
},
methods:{
    goBack(){
        this.$router.back();
    },
	getSingleDoctor(){
		axios.get(`${this.baseUrl}/api/doctors/${this.$route.params.slug}`)
		.then((response)=>{
            console.log(response)
            if(response.data.success) {
                this.doctor = response.data.doctor;
                
            }
            else {
                this.$router.push({name: 'NotFound'})
            }
		
		})
        
	},
    
}
}
</script>

<template>
<div v-if="doctor" class="container d-flex justify-content-center align-items-center">
        <div class="card" style="width: 25rem; padding: 10px;">
            <!-- <img :src="`${baseUrl}/storage/${project.img}`" class="card-img" alt="..."> -->
            <div class="card-body">
                <h5 class="card-title">{{ doctor.name }}</h5>
                <div class="d-flex justify-content-between">
                    <div class="right">
                        <ul class="card-text"> 
                            <span class="text-bold">Specializations:</span> 
                            <li v-for="(elem, index) in doctor.specializations" :key="index">{{ elem.name }}</li>
                        </ul>
                    </div>
                </div>
                <p class="card-text" id="desc">
                    <span class="text-bold">Description:</span> 
                    <br>
                    {{ doctor.description }}
                </p>      
            </div>
        </div>
    </div>
    <!-- <a href="" class="btn btn-warning" @click.prevent="goBack">Go Back</a> -->
    <div class="container">
        <h2>Reviews per il dottor {{ doctor.name }} {{ doctor.lastname }}</h2>
        <div class="card" v-for="(elem, index) in doctor.reviews" :key="index">
            <h5>{{ elem.name }} {{ elem.lastname }}</h5>
            <p>{{ elem.text }}</p>
            <p>{{ elem.stars }}</p>

        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
