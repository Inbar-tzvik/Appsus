import homePage from './pages/home-page.cmp.js';
import notePage from './apps/note/pages/note-page.cmp.js';
import noteEdit from './apps/note/cmps/note-edit.cmp.js';
import emailPage from './apps/email/pages/email-page.cmp.js';
import emailDetails from './apps/email/pages/email-details.cmp.js';
import emailCompose from './apps/email/pages/email-compose.cmp.js';
import bookPage from './apps/book/pages/book-page.cmp.js';
import bookDetails from './apps/book/pages/book-details.cmp.js';

const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/email',
    component: emailPage,
    children: [
      {
        path: ':emailId',
        component: emailDetails,
      },
    ],
  },

  {
    path: '/email/compose',
    component: emailCompose,
  },
  {
    path: '/note',
    component: notePage,
    children: [
      {
        path: ':noteId',
        component: noteEdit,
      },
    ],
  },
  {
    path: '/book',
    component: bookPage,
  },
  {
    path: '/book/:bookId',
    component: bookDetails
  }
];

export const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
});
