<script>
import axios from 'axios';

export default{
  name: 'SingleDoctor',
  data(){
    return{
      doctor: null,
      baseUrl: 'http://127.0.0.1:8000',
      name: '',
      lastname: '',
      email: '',
      text: ''
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
    submitMessage() {
        const paramData = {
                name: this.name,
                email: this.email,
                lastname: this.lastname,
                text: this.text
            }
      // Make an API call to send the message to the backend
      // using Axios or other HTTP library
      axios.post(`${this.baseUrl}/api/doctors/${this.$route.params.slug}/message`, paramData)
        .then(() => {
          // Show a success message or perform other actions after successful submission
          alert("Message sent successfully!");
          // Clear the form data after successful submission
          
            this.name = "",
            this.email = "",
            this.lastname = "",
            this.text = ""
          
        });
        
    }
    
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
    <div class="wrapper">
        <div class="container container_form">
            <div class="row h-100">
                <div class="card_img"></div>
                <div class="form p-3">
                    <form class="w-100" action="" method="POST" @submit.prevent="submitMessage()">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label p-2">Email address</label>
                            <input v-model="email" type="email" name="email" class="form-control p-2" id="exampleFormControlInput1"
                                placeholder="Enter a valid emali address">
                        </div>
                        <div class="mb-3 d-flex  justify-content-between">
                            <div class="">
                                <label for="first_name" class="form-label mx-2 p-2">First Name</label>
                                <input v-model="name" type="text" name="name" class="form-control p-2" id="first_name"
                                    placeholder="Enter your First Name ">
                            </div>
                            <div class="">
                                <label for="last_name" class="form-label p-2">last Name</label>
                                <input v-model="lastname" type="text" name="lastname" class="form-control p-2" id="last_name"
                                    placeholder="Enter your Last Name ">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label p-2">Message</label>
                            <textarea v-model="text" class="form-control p-2" name="text" id="exampleFormControlTextarea1" rows="5"
                                placeholder="Enter your Message"></textarea>
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn">manda un messaggio</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    background-image: url(https://assets.nicepagecdn.com/11a8ddce/4072348/images/13808841.jpg);
    background-size: cover;
    .row {
        height: 100%;
        display: flex;
        justify-content: end;

    }

    .container_form {
        padding: 10% 0px 10% 0px;
    }
    .form {

        background-color: #fff;
        max-width: 500px;
        display: flex;
        justify-content: center;
        .form-control {
            background-color: #FCF7EC;
            border: 0px;
        }
        .btn {
            background-color: #E3B14E;
            color: #fff;
            padding: 10px 10px;
            width: 100%;
            border-radius: 20px;
            font-weight: 600;

            &:hover {
                background-color: #fff;
                color: #000;
                box-shadow: 2px 2px lightgray;
            }
        }
    }
}
</style>
