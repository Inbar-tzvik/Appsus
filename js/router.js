import homePage from './pages/home-page.cmp.js';
import emailPage from './apps/email/pages/email-page.cmp.js';
import notePage from './apps/note/pages/note-page.cmp.js';
import bookPage from './apps/book/pages/book-page.cmp.js';
import emailDetails from './apps/email/pages/email-details.cmp.js';
const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/email',
    component: emailPage,
  },
  {
    path: '/email/:emailId',
    component: emailDetails,
  },
  {
    path: '/note',
    component: notePage,
  },
  //   {
  //     path: '/car/:carId',
  //     component: carDetails,
  //   },
  {
    path: '/book',
    component: bookPage,
  },
];

export const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
});
