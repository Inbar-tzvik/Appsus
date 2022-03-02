import { emailService } from '../services/email-service.js';

export default {
  template: `
        <section v-if="car" class="car-details app-main">
            <h4>Car details</h4>
            <img :src="carImgUrl">
            <p>Vendor:{{car.vendor}}</p>
            <p>Max speed:{{car.maxSpeed}}</p>
            <router-link to="/car">Back to cars</router-link>
        </section>
        <section v-else class="loading">

        </section>
    `,
  data() {
    return {
      car: null,
    };
  },
  created() {
    const id = this.$route.params.carId;
    carService.get(id).then((car) => (this.car = car));
  },
  computed: {
    carImgUrl() {
      return `img/${this.car.vendor}.png`;
    },
  },
};
