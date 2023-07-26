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
      text: '',
      successMessage: '',
      reviewName: '',
      reviewText: '',
      reviewStars: 0,
      modalVisible: false,
      isReviewModal: false,
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
           
            if(response.data.success) {
                this.doctor = response.data.doctor;
                if (this.doctor.reviews && this.doctor.reviews.length > 0) {
          this.doctor.reviews.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        }
            }
            else {
                this.$router.push({name: 'NotFound'})
            }
		
		})
        
	},
    submitMessage() {
        const paramData = {
    doctor_id: this.doctor.id, // Add the doctor's id to the form data
    name: this.name,
    email: this.email,
    lastname: this.lastname,
    text: this.text
  };
      // Make an API call to send the message to the backend
      // using Axios or other HTTP library
      axios.post(`${this.baseUrl}/api/message`, paramData)
        .then(() => {
          // Show a success message or perform other actions after successful submission
          this.isReviewModal = false;
          this.successMessage = 'Message sent successfully!';
          this.showModal();
          // Clear the form data after successful submission
          
            this.name = "",
            this.email = "",
            this.lastname = "",
            this.text = ""
          
        });
        
    },
    showModal() {
      this.$refs.modal.classList.add('show');
      this.$refs.modal.style.display = 'block';
    },

    closeModal() {
      this.$refs.modal.classList.remove('show');
      this.$refs.modal.style.display = 'none';
      if (this.isReviewModal) {
        window.location.reload();
      }
    },
    submitMessageAndCloseModal() {
      this.submitMessage();
      this.closeModal();
    },

    submitReviewAndCloseModal() {
      this.submitReview();
      this.closeModal();
    },
  

  beforeDestroy() {
    // If the review modal is being closed, reload the page
    if (this.isReviewModal) {
      window.location.reload();
    }
  },

    submitReview() {
      const reviewData = {
        doctor_id: this.doctor.id,
        name: this.reviewName,
        text: this.reviewText,
        stars: this.reviewStars,
      };

      // Make an API call to send the review to the backend
      axios.post(`${this.baseUrl}/api/review`, reviewData)
        .then(() => {
          // Show a success message or perform other actions after successful submission
          this.isReviewModal = true;
          this.successMessage = 'Review sent successfully!';
          this.showModal();
          // Clear the review form data after successful submission
          this.reviewName = '';
          this.reviewText = '';
          this.reviewStars = null;
        })
        
    },
    formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    return new Date(date).toLocaleDateString(undefined, options);
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
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Text</th>
      <th scope="col">Stars</th>
      <th scope="col">Created At</th> <!-- Add the Created At column header -->
    </tr>
  </thead>
  <tbody>
    <tr v-for="(review, index) in doctor.reviews" :key="index">
      <td>{{ review.name }} {{ review.lastname }}</td>
      <td>{{ review.text }}</td>
      <td>{{ review.stars }}</td>
      <td>{{ formatDate(review.created_at) }}</td> <!-- Display the formatted created_at value -->
    </tr>
  </tbody>
</table>
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
                                <label for="last_name" class="form-label p-2">Last Name</label>
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
    <div class="wrapper">
        <div class="container container_form">
            <h2>Add Review for Dr. {{ doctor.name }} {{ doctor.lastname }}</h2>
            <div class="row h-100">
                <div class="card_img"></div>
                <div class="form p-3">
                    <form class="w-100" @submit.prevent="submitReview()">
                        <div class="mb-3">
                          <label for="reviewName" class="form-label p-2">Name</label>
                          <input v-model="reviewName" type="text" name="reviewName" class="form-control p-2" id="reviewName" placeholder="Enter your Name">
                        </div>
                        <div class="mb-3">
                          <label for="reviewText" class="form-label p-2">Review</label>
                          <textarea v-model="reviewText" class="form-control p-2" name="reviewText" id="reviewText" rows="5" placeholder="Enter your Review"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="reviewStars" class="form-label p-2">Stars</label>
                            <div class="stars">
                                <span class="star" v-for="star in 5" :key="star" @click="reviewStars = star">
                                    <i class="star-icon fa fa-star" :style="{ color: star <= reviewStars ? 'gold' : 'gray' }"></i>
                                </span>
                            </div>
                        </div>
                        <div class="mb-3">
                          <button type="submit" class="btn btn-primary">Submit Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" tabindex="-1" role="dialog" ref="modal">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Success</h5>
            <button type="button" class="close" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>{{ successMessage }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="closeModal">Close</button>
          </div>
        </div>
      </div>
    </div>
  
</template>

<style lang="scss" scoped>
.star-icon {
  font-size: 24px; /* Adjust the font size to change the size of the stars */
}
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
