<template>
  <b-container fluid>
    <div class="content pb-5">
      <div class="home">
        <HelloWorld msg="Pink Square Embroidery LLC" />
        <!--<img alt="Vue logo" src="../assets/mevn.jpg" width="350" />-->
      </div>
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data: function(){
    return{
    }
  },
  methods: {
  }
};
</script>
<style scoped>

.content {
  background: rgb(255, 255, 255);
  box-shadow: 0px 0px 4px 1px #b3b3b3;
  border-radius: 5px;
  margin-left: 3.8%;
  margin-right: 3.8%;
  padding-top: 1em;
  padding-bottom: 1em;
  margin-top: 2%;
  margin-bottom: 2%;
}

</style>
