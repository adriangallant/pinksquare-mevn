<template>
  <b-container fluid>
    <div class="content pb-5">
      <b-container fluid>
      <div class="about">
        <h1>About Us</h1>
        <hr class="pink-separator mx-auto d-block">
        <b-row class="offset-1">
          <b-col cols="3">
          </b-col>
          <b-col cols="5">
            <p>
              Our success is built on providing highly experienced personalized service that delivers the 
              quality products and innovative results our customers desire. We employ the latest technologies 
              in custom apparel with the biggest brand selection in Waterbury.
            </p>
            <br>
            <p>
              In 2020, Pink Square Embroidery LLC. opened its doors in Waterbury, CT  and began servicing the 
              embroidery needs of local businesses and organizations in Waterbury and throughout Central Connecticut. 
              Since opening, our services have expanded to include heat press screen-printing, and embroidery for 
              local and statewide organizations.
            </p>
            <br>
            <p>
              Whether it’s corporate apparel for your business, school or event, we will provide the personalized service 
              and expertise to help you achieve the results you desire. Our team has many years of combined experience in 
              the decorated apparel industry. At Pink Square Embroidery in Waterbury, we’re committed to our customers and 
              we’re committed to excellence.
            </p>
          </b-col>
          <b-col cols="3">
          </b-col>
        </b-row>
        <b-row class="bg-block-lightpink pt-4 pb-4">
          <b-col cols="6">
            <h3>Providing You Customized Items</h3>
            <br>
            <p>
              We started Pink Square Embroidery in January of 2020. We both work very hard to provide you with 
              adorable new styles for you and your family, at an affordable price point. We are a small but 
              motivated company. We believe passionately in great pricing and excellent service, which is why we 
              commit ourselves to giving you the best of both. 
            </p>
            <br>
            <b-button variant="outline-primary">Request A Quote</b-button>
          </b-col>
          <b-col cols="3">
            <i class="fas fa-head-side-mask"></i>
            <h4>Facemasks</h4>
            <p>We can print or embroider anything you'd like on a custom cloth face mask.</p>
            <br>
            <i class="fas fa-tshirt"></i>
            <h4>Shirts &amp; Jackets</h4>
            <p>We can print or embroider on sweatshirts, jackets, shirts, and more.</p>
          </b-col>
          <b-col cols="3">
            <i class="fab fa-redhat"></i>
            <h4>Headwear</h4>
            <p>We can print or embroider caps, beanies, and more.</p>
            <br>
            <i class="fas fa-clock"></i>
            <h4>Timely Delivery</h4>
            <p>We ensure that we deliver your products in a timely manner!</p>
          </b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col cols="6">
            <h3>Best Quality Printed T-Shirts &amp; Face Masks At Affordable Price!</h3>
          </b-col>
          <b-col cols="6">
          </b-col>
        </b-row>
        <!--<ul>
          <li :key="user._id" v-for="user in users">
            <span>{{ user.name }}</span>
          </li>
        </ul>-->
      </div>
      </b-container>
    </div>
  </b-container>
</template>
<script>
// import homeAPI from "@/services/homeAPI.js";
export default {
  name: "about",
  props: [],
  data: function() {
    return {
      users: []
    };
  },
  mounted() {
    //this.loadUsers();
  },
  computed: {},
  watch: {},
  methods: {
    /*async loadUsers() {
      const response = await homeAPI.getUsers();
      this.users = response.data;
    }*/
  }
};
</script>
<style scoped lang="css">
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
.pink-separator {
  width: 40%;
  height: 0.4em;
  background-color: #fcabc9;
}
.bg-block-lightpink {
  background-color: #ffe3ed;
}
</style>
