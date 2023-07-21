<script >
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'app',
  components: {
    AppHeader
  },
  data() {
    return {


    }
  },
  created() {

  },
  mounted() {

  },
  methods: {


  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <RouterView></RouterView>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
