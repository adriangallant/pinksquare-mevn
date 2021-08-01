<template>
  <b-container>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <br />
      <div class="w-75 rounded mx-auto d-block">
        <b-carousel
          id="carousel-1"
          :interval="3000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=58"
          ></b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
      <br />
      <b-row class="bg-block-lightpink">
        <b-col>
          <h3 class=" fw-bold pb-4">
            We have worked with some of the most successful businesses,
            organizations, clubs and schools in Waterbury, CT as well as many
            privately owned brands.
            <br /><br />
            We would love to help you too.
          </h3>
        </b-col>
      </b-row>
      <br />
      <b-row class="pb-5 mb-2">
        <b-col cols="7" class="content-left-border">
          <h3>
            <br /><br />
            We provide the personal service you need to get exactly what you
            want…
            <br /><br /><br />
            Whether that means adding your logo to apparel you already have or
            finding the perfect item for you.
          </h3>
          <br />
          <h3 class="fw-bold">
            Call now for a quote: <a href="tel:2035989645">{{ phoneNumber }}</a>
          </h3>
        </b-col>
        <b-col cols="5">
          <b-list-group class="border-0">
            <b-list-group-item
              class="border-0 fw-bold"
              v-for="item in items"
              :key="item"
              >{{ item }}</b-list-group-item
            >
          </b-list-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <h3>Business Hours</h3>
          <br />
          <b-list-group>
            <b-list-group-item
              class="border-0"
              v-for="day in schedule"
              :key="day"
              >{{ day }}</b-list-group-item
            >
          </b-list-group>
        </b-col>
        <b-col cols="6">
          <div
            id="map-container-google-1"
            class="z-depth-1-half map-container"
            style="height: 500px"
          >
            <iframe
              src="https://maps.google.com/maps?q=pink%20square%20embroidery&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <div
          class="bg-bottom-border-lightpink w-75 rounded mx-auto d-block pt-5"
        ></div>
      </b-row>
      <b-row class="pb-5">
        <b-col>
          <h3>Happy Customers!</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          cols="4"
          v-for="review in reviews"
          :key="review.name"
          class="d-flex align-items-stretch"
        >
          <b-card class="mb-4 border-2 border-pink">
            <b-card-text class="h5 mb-3">
              {{ review.message }}
            </b-card-text>
            <b-icon icon="star-fill" aria-hidden="true" class="pink"></b-icon>
            <p class="mt-2">{{ review.name }}</p>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function() {
    return {
      items: [
        "Polo Shirts",
        "Tee Shirts",
        "Button Down Shirts",
        "Uniform Shirts",
        "Scrubs",
        "Hats",
        "Fleece Jackets",
        "Pullovers",
        "Sports Bags",
        "Duffel Bags",
        "Employee Recognition Gifts",
        "Employee Appreciation Gifts",
        "More"
      ],
      phoneNumber: "(203) 598-9645",
      schedule: [
        "Mon: 9:00 AM – 7:00 PM",
        "Tues: 9:00 AM – 7:00 PM",
        "Wed: 9:00 AM – 7:00 PM",
        "Thur: 9:00 AM – 7:00 PM",
        "Fri: 9:00 AM – 7:00 PM",
        "Sat: 10:00 AM – 3:00 PM",
        "Sun: Closed"
      ],
      reviews: [
        {
          name: "Anira Cuadrado",
          message:
            '"They do an excellent work. Always meet my expectations and always on time with my orders. I recommend them highly."',
          stars: 5
        },
        {
          name: "Anonymous",
          message:
            '"Needed masks made short notice for me and my son. Pink Square Embroidery provided quality and reliable masks made at a reasonable price! Thank you to the family owned PQ Embroidery!!"',
          stars: 5
        },
        {
          name: "Suerette Bailey",
          message:
            '"What excellent service with such awesome customer service; rep was very pleasant and cordial. Received my item before time....would definitely use them again; anytime....SPLENDID"',
          stars: 5
        },
        {
          name: "Wendy Mendez",
          message:
            '"They do great work. Items are beautifully made. Definitely worth it. Will definitely be purchasing more. Handmade and embroidered."',
          stars: 5
        },
        {
          name: "Kariana Prentice",
          message:
            '"Great customer service, fast service, amazing embroidery!"',
          stars: 5
        },
        {
          name: "Lizbeth R",
          message:
            '"Nice work !! Just what I was looking for. And they speak Spanish, great job!"',
          stars: 5
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-left-border {
  border-right: 3px solid #fcabc9;
}
.bg-bottom-border-lightpink {
  border-bottom: 3px solid #fcabc9;
}
.bg-block-lightpink {
  background-color: #ffe3ed;
}
.border-pink {
  border-color: #fcabc9;
}
.pink {
  color: #fcabc9;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.map-container {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}
.map-container iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
