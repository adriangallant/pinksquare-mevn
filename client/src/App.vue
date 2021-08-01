<template>
  <div id="app">
    <b-navbar toggleable="lg" variant="light" type="light">
      <b-navbar-brand href="#" class="mb-0"
        >Pink Square Embroidery</b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link
              class="nav-font-size text-decoration-none"
              to="/"
              exact
            >
              Home
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              class="text-decoration-none nav-font-size"
              to="/gallery"
              exact
            >
              Gallery
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              class="text-decoration-none nav-font-size"
              to="/catalog"
              exact
            >
              Catalog
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              class="text-decoration-none nav-font-size"
              to="/about"
              exact
            >
              About Us
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              class="text-decoration-none nav-font-size"
              to="/contact"
              exact
            >
              Contact
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
    <footer class="container-fluid footer footer-bg p-4">
      <b-row>
        <b-col cols="4">
          <h3 class="fw-bold">Pink Square Embroidery</h3>
        </b-col>
        <b-col cols="3">
          <p class="fw-bold">Get in Touch with Us for the Best Quality Custom Prints &amp; Embroideries.</p>
        </b-col>
        <b-col cols="5">

        </b-col>
      </b-row>
      <hr>
    </footer>
  </div>
</template>

<style scoped lang="css">
.footer-bg { 
  background-color: #d3d3d3 ;
}

.nav-font-size {
  font-size: 1.2rem;
  color: black;
}

.bg-primary-pink {
  background-color: #fcabc9;
}

#app {
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fcabc9;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
