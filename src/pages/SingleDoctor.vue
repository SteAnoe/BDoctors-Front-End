<script>
import axios from 'axios';

export default {
  name: 'SingleDoctor',
  data() {
    return {
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
      remainingCharacters: 255,
      maxLength: 255,
      errorMessages: {
      email: '',
      name: '',
      lastname: '',
      text: '',
      
      },
      reviewMaxLength: 255,
    reviewRemainingCharacters: 255,
    reviewErrorMessages: {
      reviewName: '',
      reviewText: '',
      reviewStars: '',
    },
    }
  },
  created() {
    this.getSingleDoctor();
    
  },
  mounted(){
    this.addActiveClassToFirstChild()
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    getSingleDoctor() {
      axios.get(`${this.baseUrl}/api/doctors/${this.$route.params.slug}`)
        .then((response) => {

          if (response.data.success) {
            this.doctor = response.data.doctor;
            if (this.doctor.reviews && this.doctor.reviews.length > 0) {
              this.doctor.reviews.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            }
          }
          else {
            this.$router.push({ name: 'NotFound' })
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
      this.errorMessages = {
    email: '',
    name: '',
    lastname: '',
    text: '',
  };

  // Add validation checks for each field
  if (!this.email) {
    this.errorMessages.email = 'Inserisci una mail valida';
  }

  if (!this.name) {
    this.errorMessages.name = 'Inserisci il tuo nome';
  }

  if (!this.lastname) {
    this.errorMessages.lastname = 'Inserisci il tuo cognome';
  }

  if (!this.text) {
    this.errorMessages.text = 'Inserisci un messaggio';
  }

  // Check if there are any error messages; if yes, don't submit the form
  if (Object.values(this.errorMessages).some(msg => msg !== '')) {
    return;
  }
      // Make an API call to send the message to the backend
      // using Axios or other HTTP library
      axios.post(`${this.baseUrl}/api/message`, paramData)
        .then(() => {
          // Show a success message or perform other actions after successful submission
          this.isReviewModal = false;
          this.successMessage = 'Messaggio inviato con successo!';
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
      this.updateReviewCounter();
      this.reviewErrorMessages = {
    reviewName: '',
    reviewText: '',
    reviewStars: '',
  };

  // Add validation checks for each field in the review form
  if (!this.reviewName) {
    this.reviewErrorMessages.reviewName = 'Inserisci il tuo nome';
  }

  if (!this.reviewText) {
    this.reviewErrorMessages.reviewText = 'Inserisci una recensione';
  }

  if (this.reviewStars === 0) {
    this.reviewErrorMessages.reviewStars = 'Inserisci una stella';
  }

  // Check if there are any error messages; if yes, don't submit the review
  if (Object.values(this.reviewErrorMessages).some(msg => msg !== '')) {
    return;
  }
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
          this.successMessage = 'Recensione inviata con successo!';
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
    },
    addActiveClassToFirstChild(){
      let parentDiv = document.querySelector('.carousel-inner');
      let firstChild = parentDiv.firstElementChild;
      let allChildren = parentDiv.children;
      for (let i = 0; i < allChildren.length; i++) {
        allChildren[i].classList.remove('active');
      }
      if (firstChild) {
        firstChild.classList.add('active');
      }
    },
    updateCounter() {
      const description = this.text;

      if (description.length > this.maxLength) {
        this.text = description.slice(0, this.maxLength); // Truncate the text to the max length
      }

      this.remainingCharacters = this.maxLength - this.text.length;
    },

    updateReviewCounter() {
    const reviewDescription = this.reviewText;

    if (reviewDescription.length > this.reviewMaxLength) {
      this.reviewText = reviewDescription.slice(0, this.reviewMaxLength); // Truncate the text to the max length
    }

    this.reviewRemainingCharacters = this.reviewMaxLength - this.reviewText.length;
  },
    
  }
}
</script>

<template>
  <section class="doctor py-5">
    <div class="container my-5 h-40">
      <h3 class="fs-2 p-4 text-center card d-inline-block testo-centrale">Dr.  {{ doctor.name }} {{ doctor.lastname }}</h3>
      <div class="row justify-content-center align-items-start">
        <div class="col-12 col-md-6 my-2">
            <div class="card card-img p-3">
              <img class="img-medico my-3 h-75 d-inline-block rounded"
                :src="`${baseUrl}/storage/${this.doctor.photo}` != `${baseUrl}/storage/null` ? `${baseUrl}/storage/${this.doctor.photo}` : `https://static.vecteezy.com/system/resources/thumbnails/001/363/116/small/female-doctor-cute-character-vector.jpg`"
                alt="foto">
            </div>
            <div class="spec-dottore card p-3">
                <ul class="card-text">
                  <h5 class="text-bold">Medico specializzato in:</h5>
                  <li v-for="(elem, index) in doctor.specializations" :key="index">{{ elem.name }}</li>
                </ul>
                <div><strong>Numero di telefono:</strong> {{ doctor.phone }}</div>
                <div><strong>Email:</strong> {{ doctor.email }}</div>
                <div><strong>Indirizzo:</strong> {{ doctor.address }}</div>
            </div>
        </div>
        <div class="col-12 col-md-6 my-2">
          <div class="p-3 card desc-dottore">
            <h5 class="text-bold">Descrizione:</h5>
            <p>{{ doctor.description }}</p>
          </div>
        </div>
      </div>
    </div>

  </section>
  <section class="container carousel-container">
    <h3 class="text-center pb-5" style="letter-spacing: 10px; font-weight: 600;">Le recensioni del Dott. {{ doctor.lastname }}</h3>
    <div id="carouselExampleRide" class="carousel slide " data-bs-ride="true">
      <div class="carousel-inner py-2">
        <!-- <div class="carousel-item card p-3 active col-12 col-md-4" >
          Guarda cosa ne pensano i nostri clienti di {{ doctor.name }} {{ doctor.lastname }}
        </div> -->
        <div class="carousel-item card p-3 col-12 col-md-4 "   v-for="(review, index) in doctor.reviews" :key="index">
          <p class="fw-bold">{{ review.name }} {{ review.lastname }}</p>
          <p>{{ review.text }}</p>
          <div>
            <i v-for="n in 5" class="fa-star empty"
              :class="(n <= review.stars) ? 'fa-solid text-warning' : 'fa-regular'"></i>
          </div>
          <p>{{ formatDate(review.created_at) }}</p>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>

  <!-- <div class="card-dottore">
  <div v-if="doctor" class="container  h-100 d-flex justify-content-center align-items-center">
      <div class="m-3">
          <div class="row g-0  d-flex justify-content-between">
              <h3 class="fs-2 text-center ">{{ doctor.name }} {{ doctor.lastname }}</h3>
              <div class="col-md-4  col-12 d-flex justify-content-center">
                  <img :src="`${baseUrl}/storage/${project.img}`" class="card-img" alt="..."> 
                  <img class="img-medico img-fluid rounded-circle" :src=" `${baseUrl}/storage/${this.doctor.photo}` != 'null' ? `${baseUrl}/storage/${this.doctor.photo}` : `https://static.vecteezy.com/system/resources/thumbnails/001/363/116/small/female-doctor-cute-character-vector.jpg`" alt="foto">
                  <img :src="https://static.vecteezy.com/system/resources/thumbnails/001/363/116/small/female-doctor-cute-character-vector.jpg" class="img-fluid rounded-circle " alt="..."> 
              </div>
              <div class="col-md-8 align-self-center">
                  <div class="card-body d-flex justify-content-around ">
                      <div >
                          <ul class="card-text"> 
                              <h4 class="text-bold">Medico specializzato in:</h4> 
                                  <li v-for="(elem, index) in doctor.specializations" :key="index">{{ elem.name }}</li>
                          </ul>

                          <a href=""></a>

                      </div>
                      <div class="card-text w-50" id="desc">
                          <h5>Descrizione:</h5> 
                          <p>{{ doctor.description }}</p>

                          <div><strong>numero di telefono:</strong> {{ doctor.phone }}</div>
                          
                      </div> 
                  </div>
              </div>
          </div>
      </div>
  </div>
</div> -->
  <!-- <a href="" class="btn btn-warning" @click.prevent="goBack">Go Back</a> -->
  <!-- <div class="container">
      <h2>Reviews per il dottor {{ doctor.name }} {{ doctor.lastname }}</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Text</th>
            <th scope="col">Stars</th>
            <th scope="col">Created At</th> 
          </tr>
        </thead>
        <tbody>
          <tr v-for="(review, index) in doctor.reviews" :key="index">
            <td>{{ review.name }} {{ review.lastname }}</td>
            <td>{{ review.text }}</td>
            <td>{{ review.stars }}</td>
            <td>{{ formatDate(review.created_at) }}</td> 
          </tr>
        </tbody>
      </table>
    </div> -->
  <div class="wrapper py-2">
    <div class="container container_form">
      <div class="row h-100">
        <div class="card_img"></div>
        <h2 class="text-center py-5" style="letter-spacing: 10px; font-weight: 600; ">Lascia un messaggio al Dott. {{ doctor.lastname }}</h2>
        <div class="form p-3">
          <form class="w-100" action="" method="POST" @submit.prevent="submitMessage()">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label p-2">Email</label>
              <input v-model="email" type="email" name="email" class="form-control p-2" id="exampleFormControlInput1"
                placeholder="Inserisci la tua mail">
              <p class="text-danger">{{ errorMessages.email }}</p>
            </div>
            <div class="mb-3 d-flex justify-content-between">
              <div class="">
                <label for="first_name" class="form-label mx-2 p-2">Nome</label>
                <input v-model="name" type="text" name="name" class="form-control p-2" id="first_name"
                  placeholder="Inserisci il tuo nome">
                <p class="text-danger">{{ errorMessages.name }}</p>
              </div>
              <div class="">
                <label for="last_name" class="form-label p-2">Cognome</label>
                <input v-model="lastname" type="text" name="lastname" class="form-control p-2" id="last_name"
                  placeholder="Inserisci il tuo cognome">
                <p class="text-danger">{{ errorMessages.lastname }}</p>
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label p-2">Messaggio</label>
              <textarea v-model="text" class="form-control p-2" name="text" id="exampleFormControlTextarea1" rows="5"
                placeholder="Inserisci il tuo messaggio" @input="updateCounter"></textarea>
              <span id="counter">{{ remainingCharacters }}/{{ maxLength }}</span>
              <p class="text-danger">{{ errorMessages.text }}</p>
            </div>
            <div class="mb-3">
              <button type="submit" class="btn">manda un messaggio</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="wrapper">
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
    </div> -->
 
  <!-- <div class="container">
      <h2>Reviews per il dottor {{ doctor.name }} {{ doctor.lastname }}</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Text</th>
            <th scope="col">Stars</th>
            <th scope="col">Created At</th> 
          </tr>
        </thead>
        <tbody>
          <tr v-for="(review, index) in doctor.reviews" :key="index">
            <td>{{ review.name }} {{ review.lastname }}</td>
            <td>{{ review.text }}</td>
            <td>{{ review.stars }}</td>
            <td>{{ formatDate(review.created_at) }}</td> 
          </tr>
        </tbody>
      </table>
    </div> -->

  <section class="review pt-5">
    <!-- <div class="read-review"></div> -->
    <div class=" container write-review">
      
      <div class="review-form row h-100 justify-content-center">
      <h2  class="text-center py-5" style="letter-spacing: 10px; font-weight: 600;">Scrivi una recensione al Dott. {{ doctor.lastname }}</h2>  
        <div class="form p-3">
          <form class="w-100 pb-5" @submit.prevent="submitReview()">
          <div class="mb-3">
            <label for="reviewName" class="form-label p-2">Nome</label>
            <input v-model="reviewName" type="text" name="reviewName" class="form-control p-2" id="reviewName"
              placeholder="Inserisci il tuo nome">
            <p class="text-danger">{{ reviewErrorMessages.reviewName }}</p>
          </div>
          <div class="mb-3">
            <label for="reviewText" class="form-label p-2">Recensione</label>
            <textarea v-model="reviewText" class="form-control p-2" name="reviewText" id="reviewText" rows="5"
              placeholder="Inserisci la recensione" @input="updateReviewCounter"></textarea>
              <span id="reviewCounter">{{ reviewRemainingCharacters }}/{{ reviewMaxLength }}</span>
            <p class="text-danger">{{ reviewErrorMessages.reviewText }}</p>
          </div>
          <div class="mb-3">
  <label for="reviewStars" class="form-label p-2">Voto</label>
  <div class="stars">
    <span class="star" v-for="star in 5" :key="star" @click="reviewStars = star">
      <i class="star-icon fa fa-star" :style="{ color: star <= reviewStars ? 'gold' : 'gray' }"></i>
    </span>
  </div>
  <p class="text-danger">{{ reviewErrorMessages.reviewStars }}</p>
</div>
          <div class="mb-3">
            <button type="submit" class="btn btn-primary">Submit Review</button>
          </div>
        </form>
        </div>
      </div>
      <!-- <div class="review-img ms-4">
        <img src="https://assets.nicepagecdn.com/11a8ddce/4072348/images/13808840_5361025.png" alt="foto">
      </div> -->
    </div>
  </section>
  <div class="modal fade" tabindex="-1" role="dialog" ref="modal">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"></h5>
          <button type="button" class="close" @click="closeModal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>{{successMessage}}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="closeModal">Chiudi</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel-container {
  padding: 50px 0;

  .carousel-item {
    min-height: 200px;
    text-align: center;
  }

  .coloreStella {
    color: gold;
  }
}

ul {
  list-style-type: none;
  padding-left: 0;
}
.doctor{
  //background-color: #E7F0FF;
  .testo-centrale{
    border-bottom: 1px solid lightgray;
  }


  .card-img{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-medico {
    max-width: 80%;
    max-height: 400px;
    padding: 0;
  }
  .spec-dottore{
    margin-top: 10px;
  }
}
.review{
  background: rgb(0,170,189);
  background: linear-gradient(180deg, rgba(0,170,189,1) 0%, rgba(255,255,255,1) 87%);
}
.write-review {
  // display: flex;
  // align-items: center;
  // justify-content: center;

  h2 {
    font-weight: 300;
    letter-spacing: 8px;
  }

  p {
    font-style: oblique;
    max-width: 400px;
    padding-top: 20px;
  }
}
.close{
  border: none;
  background-color: white;
}
.form {

  background-color: #fff;
  max-width: 500px;
  display: flex;
  justify-content: center;

  .form-control {
    background-color: #E9F2FA;
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

.star-icon {
  font-size: 24px;
  /* Adjust the font size to change the size of the stars */
}

.wrapper {
  // background-image: url(https://assets-global.website-files.com/5d0b99352ab90c616bf47b31/6151b92e53e2c6a8ea8fe4e5_902.jpg);
  // background-size: cover;
  background: rgb(0,170,189);
  background: linear-gradient(0deg, rgba(0,170,189,1) 0%, rgba(255,255,255,1) 87%);


  .row {
    height: 100%;
    display: flex;
    justify-content: center;

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
}</style>
