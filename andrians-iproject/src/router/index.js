import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import StandingsPage from '../views/StandingsPage.vue';
import TopScorePage from '../views/TopScorePage.vue';
import MyTeamPage from '../views/MyTeamPage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import DetailTeam from '../views/DetailTeam.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/standings-pl',
      name: 'standings',
      component: StandingsPage,
    },
    {
      path: '/top-score-pl',
      name: 'topScore',
      component: TopScorePage,
    },
    {
      path: '/myteam',
      name: 'myTeam',
      component: MyTeamPage,
      beforeEnter() {
        if (!localStorage.access_token) {
          router.push({ name: 'login' });
        }
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      beforeEnter() {
        if (localStorage.access_token) {
          router.push({ name: 'home' });
        }
      },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
      beforeEnter() {
        if (localStorage.access_token) {
          router.push({ name: 'home' });
        }
      },
    },
    {
      path: '/detail-team/:id',
      name: 'detailTeam',
      component: DetailTeam,
    },
  ],
});

export default router;
