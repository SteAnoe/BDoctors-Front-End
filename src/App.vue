<script >

import axios from 'axios';
export default {
  name: 'app',
  components: {

  },
  data() {
    return {

      baseUrl: 'http://127.0.0.1:8000',
      doctors: [],
      
    }
  },
  created() {

  },
  mounted() {
    this.getApiDoctor();
  },
  methods: {
    getApiDoctor() {
      axios.get(`${this.baseUrl}/api/doctors`)
        .then((res) => {
          this.doctors = res.data.doctors
        })
    },
    
  }
}
</script>

<template>
  <h1>Ciao mondo</h1>
  <div>
    <div v-for="(doctor, index) in doctors" :key="index">
      <h2>{{ doctor.name }}</h2>
      <p>{{ doctor.description }}</p>
      <ul> 
        <span class="text-bold">Specializations:</span> 
        <li v-for="(specialization,index) in doctor.specializations" :key="index">{{specialization.name}}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
