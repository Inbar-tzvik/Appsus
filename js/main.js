import { router } from './router.js';
import appHeader from './cmps/app-header.cmp.js';

const options = {
  template: `
        <section>
        <app-header/>
        <router-view/>
        </section>
    `,
  components: {
    appHeader,
  },
};

const app = Vue.createApp(options);
app.use(router);
app.mount('#app');

{
  /* <app-header />
<user-msg />
<router-view />
<app-footer /> */
}
