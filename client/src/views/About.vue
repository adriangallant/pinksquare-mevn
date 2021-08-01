<template>
  <b-container>
    <div>
      <ul>
        <li :key="user._id" v-for="user in users">
          <span>{{user.name}}</span>
        </li>
      </ul>
    </div>
  </b-container>
</template>
<script>
  import homeAPI from '@/services/homeAPI.js';
  export default {
    name: 'about',
    props: [],
    data: function() {
      return{
       users: [],
      }
    },
    mounted () {
      this.loadUsers();
    },
    computed: {
      
    },
    watch: {

    },
    methods: {
      async loadUsers () {
        const response = await homeAPI.getUsers();
        this.users = response.data;
      }
    },
  };
  
</script>
