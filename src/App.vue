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
    getApiUser() {
      axios.get(`${this.baseUrl}/api/user`)
        .then((res) => {
          this.doctors = res.data.user
        })
    }
  }
}
</script>

<template>
  <h1>Ciao mondo</h1>
  <ul>
    <li v-for="(elem, index) in doctors" :key="index">{{ elem.description }}</li>
  </ul>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
