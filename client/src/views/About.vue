<template>
  <b-container>
    <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
      <p>For more information visit our website</p>
      <b-btn variant="primary" href="https://bootstrap-vue.org/">More Info</b-btn>
    </b-jumbotron>

    <b-form-group
      horizontal
      :label-cols="4"
      description="Let us know your name."
      label="Enter your name"
    >
      <b-form-input v-model.trim="name"></b-form-input>
    </b-form-group>

    <b-alert variant="success" :show="showAlert">Hello {{ name }}</b-alert>
  </b-container>
</template>
<script>
  export default {
    data: function() {
      return{
        name: ''
      }
    },
    computed: {
      showAlert() {
        return this.name.length > 4 ? true : false
      }
    }
  };
  
</script>
