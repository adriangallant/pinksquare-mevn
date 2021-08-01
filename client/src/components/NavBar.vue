<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Pink Square</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item href="#">Gallery</b-nav-item>
        <b-nav-item href="#">Catalog</b-nav-item>
        <b-nav-item href="#">About Us</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
  export default {
    name: 'navBar',
    props: [],
    data: function() {
      return{
       
      }
    },
    mounted () {
    },
    computed: {
      
    },
    watch: {

    },
    methods: {
    },
  };
  
</script>
