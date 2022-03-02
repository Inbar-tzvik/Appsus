import carApp from './views/car-app.cmp.js';
import homePage from './views/home-page.cmp.js';
import aboutPage from './views/about-page.cmp.js';
import carDetails from './views/car-details.cmp.js';
import carEdit from './views/car-edit.cmp.js';

const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/about',
    component: aboutPage,
  },
  {
    path: '/car',
    component: carApp,
  },
  {
    path: '/car/:carId',
    component: carDetails,
  },
  {
    path: '/car/edit/:carId?',
    component: carEdit,
  },
];

export const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
});
