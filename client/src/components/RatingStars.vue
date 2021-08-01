<template>
  <div class="p-2">
    <b-icon v-for="star in stars" :key="star" icon="star-fill" aria-hidden="true" class="pink"></b-icon>
  </div>
</template>
<script>
export default {
  name: 'RatingStars',
  props: {
    rating: Array,
  },
  data: function (){
    return {
      stars: this.rating,
    }
  },
};
</script>
<style lang="css" scoped>
.pink {
  color: #fcabc9;
}
</style>
